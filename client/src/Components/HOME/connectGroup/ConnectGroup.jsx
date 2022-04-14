import Carousel from "react-elastic-carousel";
import Card from "./Card";
import connectData from "./connectData";
import { useState } from "react";
import { CarouselContainer, CardContainer, Slider, CarouselHeader } from "./connectGroupElement";

export const ConnectGroup = () => {
    const [groups, setGroups] = useState(connectData);
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 500, itemsToShow: 1},
      { width: 768, itemsToShow:  2},
      { width: 1200, itemsToShow: 3 }
    ];
  return (
    <CarouselContainer>
    <Slider>
        <h1 className="title">Find your Connect Group</h1>
        <CarouselHeader>
        <p className="subtitle">Join a small group where you can feel at home</p>
        </CarouselHeader>
        <CardContainer>
        <Carousel breakPoints={breakPoints}>
        {groups.map((group) => {
        return <Card key={group.id} {...group} />;
      })}
    </Carousel>
    </CardContainer>
    </Slider>
  </CarouselContainer>
  )
}

