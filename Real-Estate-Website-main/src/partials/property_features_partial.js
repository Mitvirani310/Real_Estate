import React, { useState } from "react";
import { Property } from "../components";
export const PropertGallery = ({product}) => {
  return (
    <Property.Gallery>
      <Property.ImageContainer>
        <Property.Image source={product.image1} />
      </Property.ImageContainer>
      <Property.ImageContainer>
        <Property.Image source={product.image2} />
      </Property.ImageContainer>
      <Property.ImageContainer>
        <Property.Image source={product.image3} />
      </Property.ImageContainer>
      <Property.ImageContainer>
        <Property.Image source={product.image1} />
      </Property.ImageContainer>
    </Property.Gallery>
  );
};

export const PropertyFeatures = ({ product }) => {
  const [featuresShown, setContentShown] = useState(false);

  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };
  console.log(product);

  return (
    <Property.Info>
      <Property.InfoHeader onClick={contentHandler}>
        <Property.InfoTitle>Details Of Owner</Property.InfoTitle>
        <Property.Icon
          name={featuresShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent contentShown={featuresShown}>
        <Property.InfoItem>
          <Property.Text>
            <Property.Span>Owner Name : </Property.Span>
            {product.customername}
          </Property.Text>
        </Property.InfoItem>
      </Property.InfoContent>
    </Property.Info>
  );
};

export const PropertyAmenities = ({ product }) => {
  const [amenitiesShown, setContentShown] = useState(false);

  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };

  return (
    <Property.Info>
      <Property.InfoHeader onClick={contentHandler}>
        <Property.InfoTitle>Email</Property.InfoTitle>
        <Property.Icon
          name={amenitiesShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent contentShown={amenitiesShown}>
        {
          <Property.InfoItem key={product.email}>
            <Property.Text>{product.email}</Property.Text>
          </Property.InfoItem>
        }
      </Property.InfoContent>
    </Property.Info>
  );
};

export const PropertyAddress = ({ product }) => {
  const [addressShown, setContentShown] = useState(false);

  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };
  return (
    <Property.Info>
      <Property.InfoHeader onClick={contentHandler}>
        <Property.InfoTitle>Address</Property.InfoTitle>
        <Property.Icon
          name={addressShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent contentShown={addressShown}>
        <Property.InfoItem>
          <Property.Text>
            <Property.Span>Address : </Property.Span>
            {product.address}
          </Property.Text>
        </Property.InfoItem>
      </Property.InfoContent>
    </Property.Info>
  );
};
export const PropertyDescription = ({ product }) => {
  const [descriptionShown, setContentShown] = useState(false);

  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };
  return (
    <Property.Info>
      <Property.InfoHeader onClick={contentHandler}>
        <Property.InfoTitle>Mobile no</Property.InfoTitle>
        <Property.Icon
          name={descriptionShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent block="true" contentShown={descriptionShown}>
        <Property.Text>{product.mobileno}</Property.Text>
      </Property.InfoContent>
    </Property.Info>
  );
};
