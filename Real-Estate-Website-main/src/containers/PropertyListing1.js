import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getPropertyList } from "../redux/actions/propertiesAction";
import {
  AdminListingHeader,
  PropertyData2,
  PropertyHead2,
} from "../partials/admin_listing_partial";
import axios from "axios";

import { Table, AdminListing } from "../components";

  class PropertyListingProp1 extends React.Component{
    state ={
      products : []
    }

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
    <AdminListing>
      <AdminListing.Content>
        <Table>
          <PropertyHead2 />
          <Table.Body>
            {this.state.products.map((product) => (
              <PropertyData2 property={product}/>
            ))}

          </Table.Body>
        </Table>
      </AdminListing.Content>
    </AdminListing>
  );
};
  };

export default PropertyListingProp1;
