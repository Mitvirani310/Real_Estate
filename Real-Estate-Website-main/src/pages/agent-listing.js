import React from "react";
import { Section } from "../components";
import {
  HeaderContainer1,
  DashboardContainer,
  AdminAgentListing,
  FooterContainer,
} from "../containers";

const AgentListing = () => {
  return (
    <>
      <HeaderContainer1 bg={false} />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>            
           <AdminAgentListing /> 
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default AgentListing;
