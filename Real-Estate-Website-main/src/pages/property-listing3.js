import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Section } from "../components";
import {
  HeaderContainer,
  DashboardContainer,
  AdminAgentListing,
  PropertyListingProp3,
  FooterContainer,
} from "../containers";

const PropertyListing3 = () => {

  return (
    <>
      <HeaderContainer bg={false} />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>            
            <PropertyListingProp3/>  
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default PropertyListing3;
