import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export const GET_RESTAURANT_LIST = gql`
  query getRestaurantList(
    $location: String
    $limit: Number
    $categories: String
  ) {
    search(location: $location, limit: $limit, categories: $categories) {
      total
      business {
        name
        rating
        is_closed
        price
        categories {
          title
          parent_categories {
            title
          }
        }
        coordinates {
          latitude
          longitude
        }
        photos
      }
    }
  }
`;

export interface ListViewProps {
  location: string;
  limit: number;
  /**
   * Must be a comma-separated string of categories.
   */
  categories: string;
}

export const ListView: React.FunctionComponent<ListViewProps> = ({
  location,
  limit,
  categories
}) => {
  const { loading, error, data } = useQuery(GET_RESTAURANT_LIST, {
    variables: {
      location,
      limit,
      categories
    }
  });
  console.log(error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return <div>Boom: {location}</div>;
};
