import { History, Reviews, Values } from "../../Components/ABOUT";
import { Footer, Normal, PageHero } from "../../Components/GLOBAL";
import { Navigation } from "../../Components/Navigation";
export const OurHistory = () => {
  return (
    <>
      <Navigation />
      <PageHero title="ABOUT/HISTORY" />
      <History />
      <Normal
        title="our mission"
        paragraph="  To Lift up Jesus Christ and Proclaim the Everlasting Gospel to All the World Baptizing them in the name of the Father the Son and the Holy Spirit"
      />
      <Values />
      <Reviews />
      <Footer />
    </>
  );
};
