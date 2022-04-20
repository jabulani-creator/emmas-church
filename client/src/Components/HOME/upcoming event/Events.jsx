import Carousel from "react-elastic-carousel";
import Card from "./Card";
import events from "./eventData";
import { useState } from "react";
import { CarouselContainer, CardContainer, Slider} from "./eventElement";

export const Events = () => {
  /* eslint-disable no-unused-vars */
    const [Events, setEvents] = useState(events);
    /* eslint-disable no-unused-vars */
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 500, itemsToShow: 1},
      { width: 768, itemsToShow:  2},
      { width: 1200, itemsToShow: 3 }
    ];
  return (
    <CarouselContainer>
    <Slider>
        <h1 className="title">Upcoming Events</h1>
        <CardContainer>
        <Carousel breakPoints={breakPoints}>
        {Events.map((event) => {
        return <Card key={event.id} {...event} />;
      })}
    </Carousel>
    </CardContainer>
    </Slider>
  </CarouselContainer>
  )
}

