import { useEffect} from "react";
import { CarouselContainer, CardContainer, Slider} from "./eventElement";
import Loading from '../../Loading'
import { useAppContext } from "../../../context/appContext";
import Carousel from "react-elastic-carousel";
import EventCard from "./Event/EventCard";

export const Events = () => {

 
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 500, itemsToShow: 1},
      { width: 768, itemsToShow:  2},
      { width: 1200, itemsToShow: 3 }
    ];
     
    const {getEvents, events, isLoading, page, totalEvents} = useAppContext()
   useEffect(() => {
    getEvents()
   },[])

  return (
    <CarouselContainer>
    <Slider>
        <h1 className="title">Upcoming Events</h1>
        <CardContainer>
        <Carousel breakPoints={breakPoints}>
        {events.map((event) => {
        return <EventCard key={event._id} {...event} />;
      })}
    </Carousel>
    </CardContainer>
    </Slider>
  </CarouselContainer>
  )
}

