import React from 'react'
import { Header, Navigation, Footer, Ministry } from '../../Components/MINISTRIES'
import { Normal } from '../../Components/GLOBAL'
export const Ministries = () => {
  return (
    <>
    <Navigation />
    <Header title="ministries" />
    <Normal title="What are ministries" paragraph="The headquarters of the Adventist World Church houses a number of departments and services that cater to the global needs of the denomination. The overall goal of all these entities is to make good on the Adventist promise to help everyone understand the Bible and find freedom, healing and hope in Jesus."/>
    <Ministry />
    <Footer />
    </>
  )
}