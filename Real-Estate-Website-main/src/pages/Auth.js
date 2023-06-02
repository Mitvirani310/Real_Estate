import React, { Fragment } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Login, Form } from "../components";
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Auth = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    if (!password || !email) return;
    axios.post('http://localhost:8080/customer/Login', {
      email: email,
      password: password,
    },{
    headers:{
      "Access-Control-Allow-Origin":"*"

    }

    }).then((res) => {
      
      if(res.data.message === "login success")
      {
        // setUser({email: email,password:password });
        if(email==="admin@gmail.com")
        {
          history.push('/adminhome');
        }
        else{
          history.push('/mylisting3/'+email);
        }
      }
      else{
        alert(res.data.message);
      }
      
    }).catch((err) => {
        console.log(err);
    });
      
  }
  const submit1 = async (e) => {
    e.preventDefault();
    if (!password || !email) return;
    axios.post('http://localhost:8080/customer/Login', {
      email: email,
      password: password,
    },{
    headers:{
      "Access-Control-Allow-Origin":"*"

    }

    }).then((res) => {
      
      if(res.data.message === "login success")
      {
        // setUser({email: email,password:password });
        if(email==="admin@gmail.com")
        {
          history.push('/adminhome');
        }
        else{
          history.push('/mylisting4/'+email);
        }
      }
      else{
        alert(res.data.message);
      }
      
    }).catch((err) => {
        console.log(err);
    });
      
  }

  return (
    <Fragment>
       <HeaderContainer bg="false" /> 
      <Login>
        <Login.Container>
          <Login.Content>
            <Login.Header>
              <Login.Title>Authentication</Login.Title>
            </Login.Header>
            <Login.InnerContent>
              <Form>
                <Form.FormGroup>
                  <Form.Label>Email</Form.Label>
                  <Form.Input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Password</Form.Label>
                  <Form.Input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="View My Sold Property" onClick={submit} />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="View My Rent Property" onClick={submit1} />
                </Form.FormGroup>
              </Form>
            </Login.InnerContent>
          </Login.Content>
        </Login.Container>
      </Login>
      <FooterContainer />
    </Fragment>
  );
};

export default Auth;
