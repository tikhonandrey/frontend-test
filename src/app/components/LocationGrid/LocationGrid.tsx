import * as React from "react";

import { LocationGridItem, LocationItemProps } from "./LocationGridItem";
import { FilterValues } from "../FilterBar/index";

export interface LocationGridProps {
  className?: string;
  list: Array<LocationItemProps>;
  values: FilterValues;
}

export const LocationGrid: React.FunctionComponent<LocationGridProps> = ({
  children,
  className,
  list,
  values
}) => {
  return (
    <div className="location-grid">
      {list.map((entry: LocationItemProps, idx: number) => (
        <LocationGridItem key={idx} data={entry} />
      ))}
    </div>
  );
};
