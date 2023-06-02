import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getPropertyList } from "../redux/actions/propertiesAction";
import {
  AdminListingHeader,
  PropertyData4,
  PropertyHead4,
} from "../partials/admin_listing_partial";
import axios from "axios";

import { Table, AdminListing } from "../components";

function PropertyListingProp4 (){
    const[products,setProducts]= useState([]);
    const email1 = useParams();
    useEffect(() =>{
      // setIsLoading(true);
      axios.get("http://localhost:8080/rentproperty/")
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
          <PropertyHead4 />
          <Table.Body>
              <PropertyData4 property={products}/>

          </Table.Body>
        </Table>
      </AdminListing.Content>
    </AdminListing>
  );
};
  

export default PropertyListingProp4;
