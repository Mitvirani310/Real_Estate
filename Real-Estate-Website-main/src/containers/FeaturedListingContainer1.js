import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "../components";
import { ListingItemContainer1 } from "./index";
import { getFeaturedList } from "../redux/actions/propertiesAction";
import axios from "axios";

class FeaturedListingContainer1 extends React.Component{
  state ={
    products : []
  }
  // const dispatch = useDispatch();

  // const featuredList = useSelector((state) => state.featuredProperty);

  // const { featured: featuredProperties } = featuredList;

  // useEffect(() => {
  //   dispatch(getFeaturedList());
  // }, [dispatch]);
  componentDidMount(){
    // setIsLoading(true);
    axios.get("http://localhost:8080/rentproperty/")
    .then((res)=>
    {
      const products = res.data;
      this.setState({products});
      console.log(res.data);
      console.log(this.state.products);
    });
  }

  render(){
    return (
    <Section bgColor="--bs-light">
      <Section.InnerContainer>
        <Section.Header>
          <Section.Title>Our Featured Listing For Rent</Section.Title>
        </Section.Header>
        <Section.Content>
          {this.state.products.map((product) => (
            <ListingItemContainer1 key={product.id} featured={product} />
          ))}
        </Section.Content>

      </Section.InnerContainer>
    </Section>
  );
};
};

export default FeaturedListingContainer1;
