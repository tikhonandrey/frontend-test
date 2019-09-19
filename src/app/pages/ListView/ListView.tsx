import * as React from "react";
import * as _ from "lodash";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import LocationGrid from "../../components/LocationGrid";
import FilterBar, {
  FilterValues,
  FILTER_DEFAULT
} from "../../components/FilterBar";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import Error from "../Error";

import { useChangeUpdate } from "./filters.hooks";
import { isObject } from "util";

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

export interface ListViewState {
  filters: FilterValues;
}

export const deriveCategories = (entries: Array<{ categories: Array<{}> }>) => {
  const categories: Array<any> = _.map(
    entries,
    (business: { categories: Array<{}> }) => {
      const titles = _.map(business.categories, "title");
      return titles[0];
    }
  );

  const flat = _.flatten(categories);
  return _.uniq(flat.sort());
};

export const deriveOptions = (key: string, entries: Array<{}>) => {
  const attrs: Array<string> = _.map(entries, key);
  return _.uniq(attrs.sort());
};

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

  const { filters, onChange, onBulkChange } = useChangeUpdate(FILTER_DEFAULT);

  React.useEffect(() => {
    onBulkChange({
      ...filters,
      prices: data ? deriveOptions("price", data.search.business) : [],
      categories: data ? deriveCategories(data.search.business) : []
    });
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="module module__list-view">
      <hgroup>
        <h1>Restaurants</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
          <br />
          tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      </hgroup>
      <div className="list-view__filter-bar">
        <FilterBar
          categories={deriveCategories(data.search.business)}
          prices={deriveOptions("price", data.search.business)}
          onUpdate={(
            name: string,
            result: { name: string; value: boolean }
          ) => {
            onChange(name, result);
          }}
          values={filters}
        />
        <Button
          secondary
          className="list-view__filter-clear"
          disabled={_.isEmpty(filters.categories) && _.isEmpty(filters.prices)}
          onClick={() => onBulkChange()}
        >
          Clear All
        </Button>
      </div>
      <LocationGrid list={data.search.business} filters={filters} />
    </div>
  );
};
