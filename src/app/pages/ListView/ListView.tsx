import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import LocationGrid from "../../components/LocationGrid";
import Loader from "../../components/Loader";
import Error from "../Error";

export const GET_RESTAURANT_LIST = gql`
  query getRestaurantList($location: String, $limit: Int, $categories: String) {
    search(location: $location, limit: $limit, categories: $categories) {
      total
      business {
        id
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
  location?: string;
  limit?: number;
  /**
   * Must be a comma-separated string of categories.
   */
  categories?: string;
}

export const ListView: React.FunctionComponent<ListViewProps> = ({
  location = "las vegas",
  limit = 20,
  categories = "Restaurants"
}) => {
  const { loading, error, data } = useQuery(GET_RESTAURANT_LIST, {
    variables: {
      location,
      limit,
      categories
    }
  });

  // console.log(loading, error, data);

  if (loading) return <Loader />;
  if (error) return <Error />;
  return (
    <div className="module module__list-view">
      <LocationGrid data={data.search} />
    </div>
  );
};
