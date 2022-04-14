import Carousel from "react-elastic-carousel";
import {ReviewCard} from './ReviewCard';
import ReviewData from './ReviewData';
import { useState } from "react";
import { CarouselContainer, CardContainer, Slider} from "./reviewElement";


export const Reviews = () => {
    const [reviews, setReviews] = useState(ReviewData);
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 500, itemsToShow: 1},
      { width: 768, itemsToShow:  2},
      { width: 1200, itemsToShow: 3 }
    ];
  return (
    <CarouselContainer>
    <Slider>
        <h1 className="title primary">What we love about emmasdale sda church</h1>
        <CardContainer>
        <Carousel breakPoints={breakPoints}>
        {reviews.map((review) => {
        return <ReviewCard key={review.id} {...review} />;
      })}
    </Carousel>
    </CardContainer>
    </Slider>
  </CarouselContainer>
  )
}
