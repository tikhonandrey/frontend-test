import * as React from "react";

import Button from "../Button";
import StarRating, { RatingRange } from "../StarRating";
import OpenStatus from "../OpenStatus";

export interface LocationItemProps {
  id: string;
  name: string;
  rating: RatingRange;
  isClosed: boolean;
  price: string;
  categories: [{ title: string }];
  photos: Array<string>;
}

export interface LocationGridItemProps {
  className?: string;
  data: LocationItemProps;
}

export const LocationGridItem: React.FunctionComponent<
  LocationGridItemProps
> = ({
  className,
  data: { id, photos, rating, name, isClosed, price, categories }
}) => (
  <div className="location-grid-item">
    <div className={`location-grid-item__image ${className || ""}`}>
      <img src={photos[0]} alt={name} />
    </div>
    <div className="location-grid-item__title">{name}</div>
    <div className="location-grid-item__rating">
      <StarRating rating={rating} size="small" />
    </div>
    <div className="location-grid-item__metadata grid">
      <div className="col-6">
        <span className="location-grid-item__category">
          {categories[0].title}
        </span>
        <span>{" • "}</span>
        <span className="location-grid-item__price">{price}</span>
      </div>
      <div className="location-grid-item__openstatus col-6">
        <OpenStatus size="small" open={!isClosed} />
      </div>
    </div>
    <Button className="location-grid-item__action" block href={`#/${id}`}>
      Learn More
    </Button>
  </div>
);
