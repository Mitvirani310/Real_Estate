import React, { Fragment } from "react";
import { HeaderContainer1, FooterContainer } from "../containers";
import { Signup, Form } from "../components";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Customer2 = () => {

    const [products,setProducts] = useState([]);
    const [product,setProduct] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [mobileno, setMobileno] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [recovery, setRecovery] = useState('');
    const productId  = useParams();
    console.log(productId);
  useEffect(() => {
    axios.get("http://localhost:8080/customer/")
    .then((res)=>
    {
      const products = res.data;
      setProducts({products});
      const product = products.find((product) => product.id === parseInt(productId.id));
      setProduct(product);
      setId(productId.id);
      setName(product.name);
      setMobileno(product.mobileno);
      setEmail(product.email);
      setPassword(product.password);
      setRecovery(product.recovery);
      console.log(id);
      console.log(name);
      console.log(mobileno);
      console.log(password);
    });
  },[id]);


  const update = async (e) => {
    e.preventDefault();
    if (!password || !email) return;
    axios.put('http://localhost:8080/customer/'+id, {
        id:id,
        name:name,
        mobileno:mobileno,
        email: email,
        password: password,
        recovery:recovery,
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
  
  return (
    <>
      <HeaderContainer1 bg={false} />
      <Fragment>
      {/* <HeaderContainer bg="false" /> */}
      <Signup>
        <Signup.Container>
          <Signup.Content>
            <Signup.Header>
              <Signup.Title>Work With Customer</Signup.Title>
            </Signup.Header>
            <Signup.InnerContent>
              <Form>
                <Form.FormGroup>
                  <Form.Label>Id</Form.Label>
                  <Form.Input type='number' id='id' value={id} onChange={(e) => setId(e.target.value)} readonly="readonly"/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Name</Form.Label>
                  <Form.Input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} />
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
                  <Form.Label>Password</Form.Label>
                  <Form.Input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>recovery</Form.Label>
                  <Form.Input type="text" id='recovery' value={recovery} onChange={(e) => setRecovery(e.target.value)} />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Update" onClick={update}/>
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

export default Customer2;
