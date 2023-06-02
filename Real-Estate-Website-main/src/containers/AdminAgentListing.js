import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getPropertyList } from "../redux/actions/propertiesAction";
import {
  AdminListingHeader,
  PropertyData,
  PropertyHead,
} from "../partials/admin_listing_partial";
import axios from "axios";

import { Table, AdminListing } from "../components";

  // const [selectId, setSelectId] = useState(null);

  // const dispatch = useDispatch();

  // const { properties } = useSelector((state) => state.propertyList);

  // useEffect(() => {
  //   dispatch(getPropertyList());
  // }, [dispatch]);


  // const handleDeleteAction = (id) => console.log(id);
  class AdminAgentListing extends React.Component{
    state ={
      products : []
    }

    componentDidMount(){
      // setIsLoading(true);
      axios.get("http://localhost:8080/customer/")
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
          <PropertyHead />
          <Table.Body>
            {this.state.products.map((product) => (
              <PropertyData property={product}/>
            ))}

          </Table.Body>
        </Table>
      </AdminListing.Content>
    </AdminListing>
  );
};
  };

export default AdminAgentListing;
