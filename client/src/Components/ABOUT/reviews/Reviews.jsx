import Carousel from "react-elastic-carousel";
import {ReviewCard} from './ReviewCard';
import ReviewData from './ReviewData';
import { useState } from "react";
import Wrapper from "../../../assets/wrappers/Review";


export const Reviews = () => {
  /* eslint-disable no-unused-vars */
    const [reviews, setReviews] = useState(ReviewData);
    /* eslint-disable no-unused-vars */
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 500, itemsToShow: 1},
      { width: 768, itemsToShow:  2},
      { width: 1200, itemsToShow: 3 }
    ];
  return (
    <Wrapper>
    <section className="Slider">
        <h1 className="title primary">What we love about emmasdale sda church</h1>
        <div>
        <Carousel breakPoints={breakPoints}>
        {reviews.map((review) => {
        return <ReviewCard key={review.id} {...review} />;
      })}
    </Carousel>
    </div>
    </section>
  </Wrapper>
  )
}
