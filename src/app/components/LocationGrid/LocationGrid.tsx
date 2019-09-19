import * as React from "react";
import * as _ from "lodash";

import { LocationGridItem, LocationItemProps } from "./LocationGridItem";
import { FilterValues } from "../FilterBar/index";

export interface LocationGridProps {
  className?: string;
  list: Array<LocationItemProps>;
  filters: FilterValues;
}

export const filterList = (
  list: Array<LocationItemProps>,
  filters: FilterValues
) => {
  console.log(filters);

  return _.filter(list, (item: LocationItemProps) => {
    const categoryTitles = _.map(item.categories, "title");
    const isPrice = _.indexOf(filters.prices, item.price) > -1;
    const openState = filters.open === !item.is_closed;

    let isCategory = false;

    _.each(categoryTitles, title => {
      if (_.indexOf(filters.categories, title) > -1) {
        isCategory = true;
      }
    });

    return isCategory && isPrice && openState;
  });
};

export const LocationGrid: React.FunctionComponent<LocationGridProps> = ({
  children,
  className,
  list,
  filters
}) => {
  const [filteredList, updateFilteredList] = React.useState(
    filterList(list, filters)
  );

  React.useEffect(() => {
    updateFilteredList(filterList(list, filters));
  }, [list, filters]);

  if (!filteredList.length) {
    return (
      <div className="location-grid location-grid--empty">
        <div className="col-12">
          <h3>0 of {list.length} Results Match Your Filter Criteria.</h3>
          <p>Try something else!</p>
        </div>
      </div>
    );
  }
  return (
    <div className="location-grid">
      {filteredList.map((entry: LocationItemProps, idx: number) => (
        <LocationGridItem key={idx} data={entry} />
      ))}
    </div>
  );
};
