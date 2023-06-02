import React, { Fragment } from "react";
import { HeaderContainer1, FooterContainer } from "../containers";
import { Signup, Form } from "../components";
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const Property1 = () => {

  const [id, setId] = useState('');
  const [customername, setCustomername] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');


const addsold = async (e) => {
  e.preventDefault();
  if (!id || !customername) return;
  axios.post('http://localhost:8080/soldproperty/', {
      id:id,
      customername:customername,
      mobileno:mobileno,
      email: email,
      address:address,
      image1: image1,
      image2:image2,
      image3:image3,
  },{
  headers:{
    "Access-Control-Allow-Origin":"*"

  }

  }).then((res) => {
      alert("Successfully Complete The Task!");  
  }).catch((err) => {
      alert(err);
  });
    
}

const addrent = async (e) => {
  e.preventDefault();
  if (!id || !customername) return;
  axios.post('http://localhost:8080/rentproperty/', {
      id:id,
      customername:customername,
      mobileno:mobileno,
      email: email,
      address:address,
      image1: image1,
      image2:image2,
      image3:image3,
  },{
  headers:{
    "Access-Control-Allow-Origin":"*"

  }

  }).then((res) => {
      alert("SuccessFully Complete The Task!")  
  }).catch((err) => {
      alert(err);
  });
    
}

  return (
    <>
      <HeaderContainer1 bg={false} />
      <Fragment>
      {/* <HeaderContainer bg="false" /> */}
      <Signup>
        <Signup.Container>
          <Signup.Content>
            <Signup.Header>
              <Signup.Title>Work With Properties</Signup.Title>
            </Signup.Header>
            <Signup.InnerContent>
              <Form>
                <Form.FormGroup>
                  <Form.Label>Id</Form.Label>
                  <Form.Input type='number' id='id' value={id} onChange={(e) => setId(e.target.value)} />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Customer Name</Form.Label>
                  <Form.Input type="text" id='name' value={customername} onChange={(e) => setCustomername(e.target.value)} />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Mobileno</Form.Label>
                  <Form.Input type="text" id='mobileno' value={mobileno} onChange={(e) => setMobileno(e.target.value)} />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Email</Form.Label>
                  <Form.Input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Address</Form.Label>
                  <Form.Input type="text" id='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>image1</Form.Label>
                  <Form.Input type="text" id='image1' value={image1} onChange={(e) => setImage1(e.target.value)} />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>image2</Form.Label>
                  <Form.Input type="text" id='image2' value={image2} onChange={(e) => setImage2(e.target.value)} />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>image3</Form.Label>
                  <Form.Input type="text" id='image3' value={image3} onChange={(e) => setImage3(e.target.value)} />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Add For Sold" onClick={addsold}/>
                </Form.FormGroup>
                <Form.FormGroup>
                <Form.SubmitInput type="submit" value="Add For Rent" onClick={addrent}/>
                </Form.FormGroup>
              </Form>
            </Signup.InnerContent>
          </Signup.Content>
        </Signup.Container>
      </Signup>
      <FooterContainer />
    </Fragment>
    </>
  );
};

export default Property1;
