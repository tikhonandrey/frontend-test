import * as React from "react";
import moment from "moment";

import StarRating, { RatingRange } from "../StarRating";

export interface User {
  name: string;
  image_url: string;
}

export interface ReviewItemData {
  id: string;
  rating: number;
  time_created: string;
  user: User;
  text: string;
}

export interface ReviewItemProps {
  className?: string;
  data: ReviewItemData;
}

export const DATE_FORMAT = "M/D/YYYY";

export const ReviewItem: React.FunctionComponent<ReviewItemProps> = ({
  data
}) => {
  const { rating, text, user, time_created } = data;

  console.log(data);
  return (
    <div className="review-item grid">
      <div className="review-item__user col-3">
        <div className="review-item-user__image">
          <img src={user.image_url} alt={user.name} />
        </div>
        <div className="review-item-user__info">
          <div className="review-item-user__name">{user.name}</div>
          <div className="review-item-user__date">
            {moment(time_created).format(DATE_FORMAT)}
          </div>
        </div>
      </div>
      <div className="review-item__content col-9">
        <div className="review-item-content__rating">
          <StarRating rating={rating} />
        </div>
        <div className="review-item-content__text">{text}</div>
      </div>
    </div>
  );
};
