import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getProperty,
  getFeaturedList,
} from "../redux/actions/propertiesAction";
import { Section, Property } from "../components";
import {
  HeaderContainer,
  ContactAgentContainer,
  PropertyRelatedContainer,
  FooterContainer,
} from "../containers";

import {
  PropertGallery,
  PropertyAddress,
  PropertyAmenities,
  PropertyFeatures,
  PropertyDescription,
} from "../partials/property_features_partial";

const Listing1 = () => {
  // const dispatch = useDispatch();

  // const singleProperty = useSelector((state) => state.property);

  // const featuredList = useSelector((state) => state.featuredProperty);

  // const { featured: featuredProperties } = featuredList;

  // const { property } = singleProperty;

  // // To display featured properties except one with the id
  // const filteredFeatured = featuredProperties.filter(
  //   (property) => property.id !== +id
  // ); const [products,setProduct] = useState([]);
  const [products,setProducts] = useState([]);
  const [product,setProduct] = useState([]);
  const [image1,setImage] = useState("");
  const [email,setEmail] = useState("");
  const [customername,setCustomer] = useState("");
  const [address,setAddress] = useState("");

  const productId  = useParams();
  useEffect(() => {
    axios.get("http://localhost:8080/rentproperty/")
    .then((res)=>
    {
      const products = res.data;
      setProducts({products});
      console.log(res.data);
      console.log(products);
      console.log(typeof(products));
  console.log(productId);
  const product = products.find((product) => product.id === parseInt(productId.id));
  setProduct(product);
  console.log(product);
  // const { image1, email } = product;
  setImage(product.image1);
  setEmail(product.email);
  setCustomer(product.customername);
  setAddress(product.address)
  console.log(image1);
  console.log(email);
    });
  },[]);

  // useEffect(() => {
  //   dispatch(getProperty(id));
  //   dispatch(getFeaturedList());
  // }, [dispatch, id]);

  return (
    <>
      <HeaderContainer bg="false" />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <Property.Header>
            <Property.HeaderLeft>
              <Property.Title>{customername}</Property.Title>
              <Property.Location>
                <Property.Icon name="fas fa-map-marker-alt"></Property.Icon>
                <Property.Text>{address}</Property.Text>
              </Property.Location>
            </Property.HeaderLeft>
            <Property.HeaderRight>
              <Property.Title>
                {email}
                
              </Property.Title>
            </Property.HeaderRight>
          </Property.Header>
          <Property.Content>
               <Property.Left>
              <PropertGallery product={product} />
              <PropertyFeatures product={product} />
              <PropertyAmenities product={product} />
              <PropertyAddress product={product} />
              <PropertyDescription product={product} />
            </Property.Left> 
             <Property.Right>
              <ContactAgentContainer property={product} />
               {/* <PropertyRelatedContainer
                property={products}
                featured={products}
              />   */}
            </Property.Right>  
          </Property.Content>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default Listing1;
