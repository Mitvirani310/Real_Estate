import React from "react";
import { Section } from "../components";
import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import {
  HeaderContainer,
  DashboardContainer,
  AdminAgentListing,
  PropertyListingProp4,
  FooterContainer,
} from "../containers";

const PropertyListing4 = () => {
    const [email,setEmail] = useState('');
    const productEmail  = useParams();

    useEffect(() => {
        setEmail(productEmail.email);
      },[]);

  return (
    <>
      <HeaderContainer bg={false} />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>            
           <PropertyListingProp4 email={email} /> 
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default PropertyListing4;
