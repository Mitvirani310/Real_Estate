import React from "react";
import { Section } from "../components";
import {
  HeaderContainer1,
  DashboardContainer,
  AdminAgentListing,
  PropertyListingProp,
  FooterContainer,
} from "../containers";

const PropertyListing = () => {
  return (
    <>
      <HeaderContainer1 bg={false} />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>            
           <PropertyListingProp /> 
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default PropertyListing;
