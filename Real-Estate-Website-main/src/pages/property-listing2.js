import React from "react";
import { Section } from "../components";
import {
  HeaderContainer1,
  DashboardContainer,
  AdminAgentListing,
  PropertyListingProp1,
  FooterContainer,
} from "../containers";

const PropertyListing2 = () => {
  return (
    <>
      <HeaderContainer1 bg={false} />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>            
           <PropertyListingProp1 /> 
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default PropertyListing2;
