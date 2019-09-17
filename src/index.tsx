import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import * as ReactRouter from "react-router-dom";

require("./style/index.sass");
import { resolvers, typeDefs } from "./resolvers";

import Pages from "./app/pages";
import Login from "./app/pages/Login";

/**
 * MOCK DATA:
 * Because this app uses an experimental API with no CORS enabled,
 * for demonstration purposes only this serves mock data.
 */
import search from "../mockdata/search";

const cache: any = new InMemoryCache({ typeName: false });
const link: any = createHttpLink({
  uri: "http://localhost:3000/https://api.yelp.com/v3/graphql"
});

const authLink = setContext((_: any, { headers }: any) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  };
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(link)
  // resolvers,
  // typeDefs
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem("token")
  }
});

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const IsLoggedIn = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? (
    <ReactRouter.HashRouter basename="/">
      <Pages />
    </ReactRouter.HashRouter>
  ) : (
    <Login />
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <IsLoggedIn />
  </ApolloProvider>,
  document.getElementById("app")
);
