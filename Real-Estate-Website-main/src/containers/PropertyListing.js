import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getPropertyList } from "../redux/actions/propertiesAction";
import {
  AdminListingHeader,
  PropertyData1,
  PropertyHead1,
} from "../partials/admin_listing_partial";
import axios from "axios";

import { Table, AdminListing } from "../components";

  class PropertyListingProp extends React.Component{
    state ={
      products : []
    }

    componentDidMount(){
      // setIsLoading(true);
      axios.get("http://localhost:8080/soldproperty/")
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
          <PropertyHead1 />
          <Table.Body>
            {this.state.products.map((product) => (
              <PropertyData1 property={product}/>
            ))}

          </Table.Body>
        </Table>
      </AdminListing.Content>
    </AdminListing>
  );
};
  };

export default PropertyListingProp;
