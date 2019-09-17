import * as React from "react";
import {
  RouteComponentProps,
  withRouter,
  Route,
  Switch
} from "react-router-dom";

import ListView from "./ListView";
import DetailView from "./DetailView";

export type TParams = { id: string };

class Pages extends React.Component<RouteComponentProps<{}>> {
  constructor(props: RouteComponentProps) {
    super(props);
  }
  render() {
    return (
      <div className="app--container">
        <Route
          path="/:id"
          default={true}
          exact={true}
          render={({ match }: RouteComponentProps<TParams>) => {
            return <DetailView id={match.params.id} />;
          }}
        />
        <Route
          path="/"
          {...this.props}
          exact={true}
          render={() => {
            return <ListView />;
          }}
        />
      </div>
    );
  }
}

export default withRouter(Pages);
