import * as React from "react";
import { times } from "lodash";

import Icon from "../Icon";

export type RatingRange = 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

export interface StarRatingProps {
  className?: string;
  size?: "small" | "large";
  rating: RatingRange;
}

export const TYPE_MAP = {
  whole: "star",
  half: "star_half",
  empty: "star_border"
};

const getStars = (count: number, type: "whole" | "half" | "empty") => {
  const result = [];
  times(count, (n: number) => {
    result.push(
      <Icon className="star-rating__star" key={`${type}-${n}`}>
        {TYPE_MAP[type]}
      </Icon>
    );
  });

  return result;
};

export const StarRating: React.FunctionComponent<StarRatingProps> = ({
  children,
  className,
  size = "small",
  rating
}) => {
  const whole = Math.floor(rating);
  const half = rating > whole ? 1 : 0;
  const empty = 5 - Math.ceil(rating);
  return (
    <div className={`star-rating star-rating--${size}`}>
      {getStars(whole, "whole")}
      {getStars(half, "half")}
      {getStars(empty, "empty")}
    </div>
  );
};
