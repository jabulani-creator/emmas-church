import React from "react";
import { Footer, Team } from "../../Components/CONTACT";
import { Form, Normal, PageHero } from "../../Components/GLOBAL";
import { Navigation } from "../../Components/Navigation";
export const Contact = () => {
  return (
    <>
      <Navigation />
      <PageHero title="CONTACT" />
      <Normal
        title="How can we help you?"
        paragraph="Need a Prayer? Interested in becoming a member? Considering Baptism? We are here to serve! Let us know how we can help?"
      />
      <Form />
      <Team />
      <Footer />
    </>
  );
};
