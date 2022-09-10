import { MiniMenu } from "../../Components/ABOUT";
import { Header, Footer } from "../../Components/GLOBAL";
import { Navigation } from "../../Components/Navigation";

export const About = () => {
  return (
    <>
      <Navigation />
      <Header title="who are we" />
      <MiniMenu />
      <Footer />
    </>
  );
};
