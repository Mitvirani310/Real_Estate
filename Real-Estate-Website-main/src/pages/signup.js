import React, { Fragment } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Signup, Form } from "../components";
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from "react-router-dom";


const Signupp = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
const [mobileno, setMobileno] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [recovery, setRecovery] = useState('');

const history = useHistory();

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!password || !email) return;
  axios.post('http://localhost:8080/customer/', {
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
      console.log(res);  
      history.push('/');   
  }).catch((err) => {
      alert(err);
  });
    
}
  return (
    <Fragment>
      {/* <HeaderContainer bg="false" /> */}
      <Signup>
        <Signup.Container>
          <Signup.Content>
            <Signup.Header>
              <Signup.Title>Signup</Signup.Title>
            </Signup.Header>
            <Signup.InnerContent>
              <Form>
                <Form.FormGroup>
                  <Form.Label>Id</Form.Label>
                  <Form.Input type='number' id='id' value={id} onChange={(e) => setId(e.target.value)} />
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
                  <Form.SubmitInput type="submit" value="Signup" onClick={handleSubmit}/>
                </Form.FormGroup>
              </Form>
            </Signup.InnerContent>
            <Signup.Footer>
              <Signup.Text>
                Already Have Account ?{" "}
                <Signup.Anchor to="/">Login</Signup.Anchor>
              </Signup.Text>
            </Signup.Footer>
          </Signup.Content>
        </Signup.Container>
      </Signup>
      <FooterContainer />
    </Fragment>
  );
};

export default Signupp;
