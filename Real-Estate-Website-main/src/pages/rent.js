import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HeaderContainer,
  ListingItemContainer,
  AdvancedSearchContainer,
  FeaturedListingContainer1,

  FooterContainer,
} from "../containers";
import { Section } from "../components";
import { getPropertyList } from "../redux/actions/propertiesAction";
const Rent  = () => {
//   const dispatch = useDispatch();

//   const listProperties = useSelector((state) => state.propertyList);

//   const { properties } = listProperties;

//   useEffect(() => {
//     dispatch(getPropertyList());
//   }, [dispatch]);
  return (
    <>
      <HeaderContainer bg={false} />
      <FeaturedListingContainer1 />
      <FooterContainer />

    </>
  );
};

export default Rent;
