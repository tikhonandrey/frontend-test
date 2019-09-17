import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

/**
 * WORKING NOTE: Fragments
 * I believe the best pattern here is to use fragments to DRY up the
 * business listing for the detail page.
 *
 * However I am running out of dev time and may not
 * be able to come back to refactor this before deadline.
 *
 */
// export const RESTAURANT_DATA = gql`
//   fragment RestaurantItem on Business {
//     id
//     name
//     rating
//     is_closed
//     price
//     categories {
//       title
//       parent_categories {
//         title
//       }
//     }
//     coordinates {
//       latitude
//       longitude
//     }
//     photos
//   }
// `;

export const GET_RESTAURANT_LIST = gql`
  query getRestaurantList(
    $location: String
    $limit: Number
    $categories: String
  ) {
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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return <div>Boom: {location}</div>;
};
