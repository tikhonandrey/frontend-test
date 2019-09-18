import * as React from "react";

import { LocationGridItem, LocationItemProps } from "./LocationGridItem";
import { FilterValues } from "../FilterBar/index";

export interface LocationData {
  total: number;
  business: Array<LocationItemProps>;
}

export interface LocationGridProps {
  className?: string;
  data: LocationData;
  values: FilterValues;
}

export const LocationGrid: React.FunctionComponent<LocationGridProps> = ({
  children,
  className,
  data,
  values
}) => {
  const { business } = data;
  return (
    <div className="location-grid">
      {business.map((entry: LocationItemProps, idx: number) => (
        <LocationGridItem key={idx} data={entry} />
      ))}
    </div>
  );
};
