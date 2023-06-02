import React, { Fragment } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Forgot, Form } from "../components";
import { useState } from 'react';
import axios from 'axios';

const Forgott = () => {
  const [recovery, setRecovery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recovery) return;
    axios.post('http://localhost:8080/customer/changepassword', {
        recovery:recovery,
    },{
    headers:{
      "Access-Control-Allow-Origin":"*"

    }

    }).then((res) => {
      alert("Your Password "+ res.data.user.password + " Your Email " + res.data.user.email);
      
    }).catch((err) => {
        console.log(err);
    });
      
  }
  return (
    <Fragment>
      {/* <HeaderContainer bg="false" /> */}
      <Forgot>
        <Forgot.Container>
          <Forgot.Content>
            <Forgot.Header>
              <Forgot.Title>Reset Your Password</Forgot.Title>
            </Forgot.Header>
            <Forgot.InnerContent>
              <Form>
                <Form.FormGroup>
                  <Form.Label>Recovery</Form.Label>
                  <Form.Input ype='password' id='recovery' value={recovery} onChange={(e) => setRecovery(e.target.value)}/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Send" onClick={handleSubmit}/>
                </Form.FormGroup>
              </Form>
            </Forgot.InnerContent>
          </Forgot.Content>
        </Forgot.Container>
      </Forgot>
      <FooterContainer />
    </Fragment>
  );
};

export default Forgott;
