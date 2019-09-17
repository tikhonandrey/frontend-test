import * as React from "react";

import { LocationGridItem, LocationItemProps } from "./LocationGridItem";

export interface LocationData {
  total: number;
  business: Array<LocationItemProps>;
}

export interface LocationGridProps {
  className?: string;
  data: LocationData;
}

export const LocationGrid: React.FunctionComponent<LocationGridProps> = ({
  children,
  className,
  data
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
