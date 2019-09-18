import * as React from "react";
import * as _ from "lodash";

import Button from "../Button";
import StarRating from "../StarRating";
import OpenStatus from "../OpenStatus";

export interface CategoryProps {
  title: string;
}
export interface LocationItemProps {
  id: string;
  name: string;
  rating: number;
  is_closed: boolean;
  price: string;
  categories: Array<CategoryProps>;
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
  data: { id, photos, rating, name, is_closed, price, categories }
}) => {
  const firstCategory: { title: string } = _.first(categories);
  const firstPhoto: string = _.first(photos);

  return (
    <div className="location-grid-item">
      <div className={`location-grid-item__image ${className || ""}`}>
        <img src={firstPhoto} alt={name} />
      </div>
      <div className="location-grid-item__title">{name}</div>
      <div className="location-grid-item__rating">
        <StarRating rating={rating} size="small" />
      </div>
      <div className="location-grid-item__metadata grid">
        <div className="col-6">
          <span className="location-grid-item__category">
            {firstCategory.title}
          </span>
          <span>{" • "}</span>
          <span className="location-grid-item__price">{price}</span>
        </div>
        <div className="location-grid-item__openstatus col-6">
          <OpenStatus size="small" open={!is_closed} />
        </div>
      </div>
      <Button className="location-grid-item__action" block href={`#/${id}`}>
        Learn More
      </Button>
    </div>
  );
};
