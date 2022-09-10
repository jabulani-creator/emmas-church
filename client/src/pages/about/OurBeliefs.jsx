import { Navigation } from "../../Components/Navigation";
import { Beliefs, Identity } from "../../Components/ABOUT";
import { Footer, PageHero } from "../../Components/GLOBAL";

export const OurBeliefs = () => {
  return (
    <>
      <Navigation />
      <PageHero title="ABOUT/BELIEFS" />
      <Identity />
      <Beliefs />
      <Footer />
    </>
  );
};
