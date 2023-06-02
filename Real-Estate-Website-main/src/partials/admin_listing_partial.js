import React, { useState } from "react";
import axios from 'axios';
import { Listing } from "../components";
import { Table, AdminListing, Form } from "../components";

const PropertyHead = () => {

  return (
    <Table.Head>
      <Table.Row>
        <Table.Data>Id</Table.Data>
        <Table.Data>Name</Table.Data>
        <Table.Data>Mobile No.</Table.Data>
        <Table.Data>Email</Table.Data>
        <Table.Data>Password</Table.Data>
        <Table.Data>Recovery</Table.Data>
        <Table.Data>Delete</Table.Data>
        <Table.Data>Update</Table.Data>
      </Table.Row>
    </Table.Head>
  );
};
const PropertyData = ({ property }) => {
  const delete1 = async (id) => {
    // e.preventDefault();
    // if (!password || !email) return;
    axios.delete('http://localhost:8080/customer/'+id).then((res) => {
        alert("Successfully Complete The Task!");
    }).catch((err) => {
        alert(err);
    });
      
  }

  return (
    <Table.Row>
       <Table.Data>{property.id}</Table.Data>
      <Table.Data>{property.name}</Table.Data>
      <Table.Data>{property.mobileno}</Table.Data>
      <Table.Data>{property.email}</Table.Data>
      <Table.Data>{property.password}</Table.Data>
      <Table.Data>{property.recovery}</Table.Data>
      <Table.Data>                     <AdminListing.Button
          onClick={() => delete1(property.id)}
          bg="var(--bs-danger)">
          Delete
        </AdminListing.Button>
       </Table.Data> 
       <Table.Data>                     
       <Listing.Anchor to={`/customer2/${property.id}`}>
              Update
            </Listing.Anchor>
       </Table.Data> 
    </Table.Row>
  );
};
const PropertyHead1 = () => {

  return (
    <Table.Head>
      <Table.Row>
        <Table.Data>Id</Table.Data>
        <Table.Data>Customer Name</Table.Data>
        <Table.Data>Mobile No.</Table.Data>
        <Table.Data>Email</Table.Data>
        <Table.Data>Image 1</Table.Data>
        <Table.Data>Image 2</Table.Data>
        <Table.Data>Image 3</Table.Data>
        <Table.Data>Delete</Table.Data>
        <Table.Data>Update</Table.Data>
      </Table.Row>
    </Table.Head>
  );
};
const PropertyData1 = ({ property }) => {
  const delete1 = async (id) => {
    // e.preventDefault();
    // if (!password || !email) return;
    axios.delete('http://localhost:8080/soldproperty/'+id).then((res) => {
        alert("Successfully Complete The Task!");
    }).catch((err) => {
        alert(err);
    });
      
  }

  return (
    <Table.Row>
       <Table.Data>{property.id}</Table.Data>
      <Table.Data>{property.customername}</Table.Data>
      <Table.Data>{property.mobileno}</Table.Data>
      <Table.Data>{property.email}</Table.Data>
      <Table.Data>{property.image1}</Table.Data>
      <Table.Data>{property.image2}</Table.Data>
      <Table.Data>{property.image3}</Table.Data>
      <Table.Data>                     <AdminListing.Button
          onClick={() => delete1(property.id)}
          bg="var(--bs-danger)">
          Delete
        </AdminListing.Button>
       </Table.Data> 
       <Table.Data>                     
       <Listing.Anchor to={`/property2/${property.id}`}>
              Update
            </Listing.Anchor>
       </Table.Data> 
    </Table.Row>
  );
};

const PropertyHead2 = () => {

  return (
    <Table.Head>
      <Table.Row>
        <Table.Data>Id</Table.Data>
        <Table.Data>Customer Name</Table.Data>
        <Table.Data>Mobile No.</Table.Data>
        <Table.Data>Email</Table.Data>
        <Table.Data>Image 1</Table.Data>
        <Table.Data>Image 2</Table.Data>
        <Table.Data>Image 3</Table.Data>
        <Table.Data>Delete</Table.Data>
        <Table.Data>Update</Table.Data>
      </Table.Row>
    </Table.Head>
  );
};
const PropertyData2 = ({ property }) => {
  const delete1 = async (id) => {
    // e.preventDefault();
    // if (!password || !email) return;
    axios.delete('http://localhost:8080/rentproperty/'+id).then((res) => {
        alert("Successfully Complete The Task!");
    }).catch((err) => {
        alert(err);
    });
      
  }

  return (
    <Table.Row>
       <Table.Data>{property.id}</Table.Data>
      <Table.Data>{property.customername}</Table.Data>
      <Table.Data>{property.mobileno}</Table.Data>
      <Table.Data>{property.email}</Table.Data>
      <Table.Data>{property.image1}</Table.Data>
      <Table.Data>{property.image2}</Table.Data>
      <Table.Data>{property.image3}</Table.Data>
      <Table.Data>                     <AdminListing.Button
          onClick={() => delete1(property.id)}
          bg="var(--bs-danger)">
          Delete
        </AdminListing.Button>
       </Table.Data> 
       <Table.Data>                     
       <Listing.Anchor to={`/property3/${property.id}`}>
              Update
            </Listing.Anchor>
       </Table.Data> 
    </Table.Row>
  );
};

const PropertyHead3 = () => {

  return (
    <Table.Head>
      <Table.Row>
        <Table.Data>Id</Table.Data>
        <Table.Data>Customer Name</Table.Data>
        <Table.Data>Mobile No.</Table.Data>
        <Table.Data>Email</Table.Data>
        <Table.Data>Image 1</Table.Data>
        <Table.Data>Image 2</Table.Data>
        <Table.Data>Image 3</Table.Data>
        <Table.Data>Delete</Table.Data>
        <Table.Data>Update</Table.Data>
      </Table.Row>
    </Table.Head>
  );
};
const PropertyData3 = ({ property }) => {
  const delete1 = async (id) => {
    // e.preventDefault();
    // if (!password || !email) return;
    axios.delete('http://localhost:8080/rentproperty/'+id).then((res) => {
        alert("Successfully Complete The Task!");
    }).catch((err) => {
        alert(err);
    });
      
  }

  return (
    <Table.Row>
       <Table.Data>{property.id}</Table.Data>
      <Table.Data>{property.customername}</Table.Data>
      <Table.Data>{property.mobileno}</Table.Data>
      <Table.Data>{property.email}</Table.Data>
      <Table.Data>{property.image1}</Table.Data>
      <Table.Data>{property.image2}</Table.Data>
      <Table.Data>{property.image3}</Table.Data>
      <Table.Data>                     <AdminListing.Button
          onClick={() => delete1(property.id)}
          bg="var(--bs-danger)">
          Delete
        </AdminListing.Button>
       </Table.Data> 
       <Table.Data>                     
       <Listing.Anchor to={`/property4/${property.id}`}>
              Update
            </Listing.Anchor>
       </Table.Data> 
    </Table.Row>
  );
};

const PropertyHead4 = () => {

  return (
    <Table.Head>
      <Table.Row>
        <Table.Data>Id</Table.Data>
        <Table.Data>Customer Name</Table.Data>
        <Table.Data>Mobile No.</Table.Data>
        <Table.Data>Email</Table.Data>
        <Table.Data>Image 1</Table.Data>
        <Table.Data>Image 2</Table.Data>
        <Table.Data>Image 3</Table.Data>
        <Table.Data>Delete</Table.Data>
        <Table.Data>Update</Table.Data>
      </Table.Row>
    </Table.Head>
  );
};
const PropertyData4 = ({ property }) => {
  const delete1 = async (id) => {
    // e.preventDefault();
    // if (!password || !email) return;
    axios.delete('http://localhost:8080/rentproperty/'+id).then((res) => {
        alert("Successfully Complete The Task!");
    }).catch((err) => {
        alert(err);
    });
      
  }

  return (
    <Table.Row>
       <Table.Data>{property.id}</Table.Data>
      <Table.Data>{property.customername}</Table.Data>
      <Table.Data>{property.mobileno}</Table.Data>
      <Table.Data>{property.email}</Table.Data>
      <Table.Data>{property.image1}</Table.Data>
      <Table.Data>{property.image2}</Table.Data>
      <Table.Data>{property.image3}</Table.Data>
      <Table.Data>                     <AdminListing.Button
          onClick={() => delete1(property.id)}
          bg="var(--bs-danger)">
          Delete
        </AdminListing.Button>
       </Table.Data> 
       <Table.Data>                     
       <Listing.Anchor to={`/property5/${property.id}`}>
              Update
            </Listing.Anchor>
       </Table.Data> 
    </Table.Row>
  );
};


const AdminListingHeader = ({ selectId, handleDeleteAction }) => {
  return (
    <AdminListing.Header>
      <Form>
        <Form.Input type="text" placeholder="Search" />
      </Form>
      <AdminListing.Action>
        <AdminListing.Button
          onClick={() => handleDeleteAction(selectId)}
          bg="var(--bs-danger)">
          Delete
        </AdminListing.Button>
        <AdminListing.Button bg="var(--bs-blue)">
          <AdminListing.Anchor to={selectId && `/add-listing/${selectId}`}>
            Edit
          </AdminListing.Anchor>
        </AdminListing.Button>
        <AdminListing.Button bg="var(--bs-blue)">
          <AdminListing.Anchor to={selectId && `/property/${selectId}`}>
            View
          </AdminListing.Anchor>
        </AdminListing.Button>
      </AdminListing.Action>
    </AdminListing.Header>
  );
};

export { AdminListingHeader, PropertyHead, PropertyData,PropertyHead1, PropertyData1,PropertyHead2, PropertyData2,PropertyHead3, PropertyData3,PropertyHead4, PropertyData4 };
