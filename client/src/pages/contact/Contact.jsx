import React from 'react'
import { Header, Navigation, Footer, Team } from '../../Components/CONTACT'
import { Form, Normal } from '../../Components/GLOBAL'

export const Contact = () => {
  return (
    <>
    <Navigation />
    <Header title="contact" />
    <Normal title="How can we help you?" paragraph="Need a Prayer? Interested in becoming a member? Considering Baptism? We are here to serve! Let us know how we can help?"/>
    <Form />
    <Team />
    <Footer />
    </>
  )
}