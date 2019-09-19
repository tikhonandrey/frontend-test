import * as React from "react";
import * as _ from "lodash";

import { FilterValues, FILTER_DEFAULT } from "../../components/FilterBar";

export const useChangeUpdate = (initialValues: FilterValues) => {
  const [filters, setValue] = React.useState(initialValues);

  const onChange = (key: string, result: { name: string; value: boolean }) => {
    // don't process an invalid key
    if (_.indexOf(Object.keys(FILTER_DEFAULT), key) === -1) {
      return;
    }

    if (key === "open") {
      return setValue({
        ...filters,
        open: result.value
      });
    }

    const updatedList = [...filters[key]];
    const listIndex = _.indexOf(filters[key], result.name);

    if (result.value === true && listIndex === -1) {
      updatedList.push(result.name);
    } else if (result.value === false && listIndex > -1) {
      updatedList.splice(listIndex, 1);
    }

    console.log(name, result, updatedList);

    setValue({
      ...filters,
      [key]: updatedList
    });
  };

  const onBulkChange = (result?: FilterValues) => {
    setValue(result || FILTER_DEFAULT);
  };

  return {
    onChange,
    onBulkChange,
    filters
  };
};
