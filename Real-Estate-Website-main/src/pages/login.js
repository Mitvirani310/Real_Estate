import React, { Fragment } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Login, Form } from "../components";
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Loginn = () => {
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
          history.push('/home');
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
      {/* <HeaderContainer bg="false" /> */}
      <Login>
        <Login.Container>
          <Login.Content>
            <Login.Header>
              <Login.Title>Login</Login.Title>
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
                  <Form.SubmitInput type="submit" value="Login" onClick={submit} />
                </Form.FormGroup>
              </Form>
            </Login.InnerContent>
            <Login.Footer>
              <Login.Text>
                <Login.Anchor to="/forgot-password">
                  Forgot Password ?
                </Login.Anchor>
              </Login.Text>
              <Login.Text>
                Don't have an Account ?{" "}
                <Login.Anchor to="/signup">Sign Up</Login.Anchor>
              </Login.Text>
            </Login.Footer>
          </Login.Content>
        </Login.Container>
      </Login>
      <FooterContainer />
    </Fragment>
  );
};

export default Loginn;
