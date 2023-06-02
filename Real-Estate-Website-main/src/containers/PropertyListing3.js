import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getPropertyList } from "../redux/actions/propertiesAction";
import {
  AdminListingHeader,
  PropertyData3,
  PropertyHead3,
} from "../partials/admin_listing_partial";
import axios from "axios";

import { Table, AdminListing } from "../components";
import { useParams } from "react-router-dom";

  function PropertyListingProp3 (){
    const[products,setProducts]= useState([]);
    const email1 = useParams();
    useEffect(() =>{
      // setIsLoading(true);
      axios.get("http://localhost:8080/soldproperty/")
      .then((res)=>
      {
        const products1 = res.data;
        const products = products1.find((product) => product.email === email1.email);
        setProducts(products);
        console.log(res.data);
      });
    },[]);

  return (
    <AdminListing>
      <AdminListing.Content>
        <Table>
          <PropertyHead3 />
          <Table.Body>
              <PropertyData3 property={products}/>
          </Table.Body>
        </Table>
      </AdminListing.Content>
    </AdminListing>
  );
};

export default PropertyListingProp3;
