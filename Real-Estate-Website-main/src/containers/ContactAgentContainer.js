import React from "react";
import { Property, Form } from "../components";
import axios from 'axios';
import { useState } from 'react';
import displayRazorpay from "../pages/utils/paymentgateway";
const ContactAgentContainer = ({ property }) => {

  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');


  const submit = async (e) => {
    e.preventDefault();
    if (!property.email || !description) return;
    axios.post('http://localhost:8080/customer/Email', {
      from:from,
      to: property.email,
      subject: subject,
      description : description
    },{
    headers:{
      "Access-Control-Allow-Origin":"*"

    }

    }).then((res) => {
        alert(res.data);
    }).catch((err) => {
      alert(err);
    });
      
  }
  return (
    <Property.Contact>
      <Property.ContactHeader>
        <Property.ContactItem>
        </Property.ContactItem>
      </Property.ContactHeader>
      <Property.ContactContent>
        <Property.ContactContainer>
          <Form>
            <Form.FormGroup>
              <Form.Input type="text" placeholder="Name" id='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Input type="email" placeholder="Email" id='email' value={from} onChange={(e) => setFrom(e.target.value)}/>
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.TextArea
                placeholder="I would love to know more about this property"
                name=""
                id="description"
                cols="24"
                rows="8"
                value={description} onChange={(e) => setDescription(e.target.value)}></Form.TextArea>
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.SubmitInput type="submit" value="Send Message" onClick={submit}/>
            </Form.FormGroup>
            {/* <Form.FormGroup>
              <Form.SubmitInput type="submit" value="Payment" onClick={displayRazorpay}/>
            </Form.FormGroup> */}
          </Form>
        </Property.ContactContainer>
      </Property.ContactContent>
    </Property.Contact>
  );
};

export default ContactAgentContainer;
