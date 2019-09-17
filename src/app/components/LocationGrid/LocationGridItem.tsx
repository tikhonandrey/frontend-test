import * as React from "react";

import Button from "../Button";
import StarRating, { RatingRange } from "../StarRating";
import OpenStatus from "../OpenStatus";

export interface LocationGridItemProps {
  children: string;
  className?: string;
  id: string;
  name: string;
  rating: RatingRange;
  isClosed: boolean;
  price: string;
  /**
   * Only use one category from the data result.
   */
  category: string;
  /**
   * Show one image only for the listing
   */
  image: string;
  onSelect: (id: string) => void;
}

export const LocationGridItem: React.FunctionComponent<
  LocationGridItemProps
> = ({
  id,
  className,
  image,
  rating,
  name,
  isClosed,
  price,
  category,
  onSelect
}) => (
  <div className="location-grid-item">
    <div className={`location-grid-item__image ${className || ""}`}>
      <img src={image} alt={name} />
    </div>
    <div className="location-grid-item__title">{name}</div>
    <div className="location-grid-item__rating">
      <StarRating rating={rating} />
    </div>
    <div className="location-grid-item__metadata grid">
      <div>
        <span className="location-grid-item__category">{category}</span>
        <span>{" • "}</span>
        <span className="location-grid-item__price">{price}</span>
      </div>
      <div>
        <OpenStatus open={!isClosed} />
      </div>
    </div>
    <Button
      className="location-grid-item__action"
      block
      onClick={() => onSelect(id)}
    >
      Learn More
    </Button>
  </div>
);
