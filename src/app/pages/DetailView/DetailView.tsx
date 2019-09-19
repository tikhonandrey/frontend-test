import * as React from "react";
import * as _ from "lodash";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import StarRating from "../../components/StarRating";
import Minimap from "../../components/Minimap";
import OpenStatus from "../../components/OpenStatus";
import ReviewItem from "../../components/ReviewItem";

import Loader from "../../components/Loader";
import Error from "../Error";

export const GET_RESTAURANT_DETAIL = gql`
  query getRestaurant($id: String) {
    business(id: $id) {
      id
      name
      rating
      is_closed
      price
      categories {
        title
      }
      coordinates {
        latitude
        longitude
      }
      photos
      reviews {
        text
        time_created
        rating
        user {
          name
          image_url
        }
      }
      location {
        address1
        address2
        address3
        city
        state
        postal_code
      }
    }
  }
`;

export interface DetailViewProps {
  id: string;
}

export const DetailView: React.FunctionComponent<DetailViewProps> = ({
  id
}) => {
  console.log(id);
  const { loading, error, data } = useQuery(GET_RESTAURANT_DETAIL, {
    variables: {
      id
    }
  });

  if (loading) return <Loader />;
  if (error) return <Error />;
  const {
    name,
    categories,
    photos,
    coordinates,
    rating,
    is_closed,
    price,
    reviews,
    location: { address1, address2, address3, city, state, postal_code }
  } = data.business;
  const firstCategory: { title: string } = _.first(categories);
  const firstPhoto: string = _.first(photos);
  const address = `
    ${address1}${address2 ? ", " + address2 : ""}${
    address3 ? ", " + address3 : ""
  }, 
    ${city}, ${state}, ${postal_code}
  `;

  return (
    <div className="module module__detail-view detail-view">
      <hgroup>
        <h1 className="detail-view__title">{name}</h1>
        <StarRating rating={rating} size="large" />
      </hgroup>
      <div className="detail-view__metadata grid">
        <div className="col-6">
          <span className="detail-view__category">{firstCategory.title}</span>
          <span>{" • "}</span>
          <span className="detail-view__price">{price}</span>
        </div>
        <div className="detail-view__openstatus col-6">
          <OpenStatus size="normal" open={!is_closed} />
        </div>
      </div>
      <div className="detail-view__imagery grid">
        <div className="detail-view__map col-6">
          <Minimap data={coordinates} popup={name} label={address} />
        </div>
        <div className="detail-view__photos col-6">
          {photos.map(photo => (
            <div
              className="detail-view__photo-wrapper"
              style={{ width: `${photos.length * 100}%` }}
            >
              <img src={photo} alt={`Photo of ${name}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="detail-view__reviews">
        <h4 className="detail-view__reviews-header">
          {reviews.length} Reviews
        </h4>
        {reviews.map(review => (
          <ReviewItem data={review} className="detail-view__review-item" />
        ))}
      </div>
    </div>
  );
};
