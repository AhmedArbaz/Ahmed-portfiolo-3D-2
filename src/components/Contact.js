import React from 'react'
import styled from 'styled-components'
import Map from './Map'

// import of emailjs
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  height: 100vh;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 400;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 20px;
  background-color: rgb(226, 225, 225);
  border-radius: 10px;
  color: #285858;
  font-weight: 700;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 10px;
  background-color: rgb(226, 225, 225);
  font-weight: 700;
  font-size: 15px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #285858;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
`;

const Right = styled.div`
  flex: 1;
`;

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    emailjs
      .sendForm(
        'service_5r7tbzp',
        'template_j7eel9j',
        formRef.current,
        '7Yr8Z1FAZF30yBsTb' // Corrected to directly use the public key string
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true);
          formRef.current.reset(); // Clear the form inputs
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccess(false);
        }
      );
    }
  return (
    <Section>
      <Container>
        <Left>
          <Title>Let's keep in touch</Title>
          <Form ref={formRef} onSubmit ={handleSubmit}>
            <Input placeholder='Name' name='name'/>
            <Input placeholder='Email' name='email' />
            <TextArea placeholder='Write Message' name='message' rows={10} />
            {/* NOTE: ya name  */}
            <Button type='submit'>Send</Button>
            {success && "Thanks for your feedback!"}
          </Form>
        </Left>
        <Right>
          {/* NOTE: react-simple-map say ya ak sandbox say copy kia aur Map.js file may dala aur ais ki geography feature.jsaon may dali hay */}
          <Map/>
        </Right>
      </Container>
    </Section>
  )
}


// NOTE: Ham nay emailjs ka use kia hay 1.sign up kia, 2.template bani, 3.Account key,template key, service key dalni thi to documentation pay gay, 4. search kia react aur code a gaya docs pay jany kay liay emailjs say hi button tha docs ka chaly gay vaha say hi

// NOTE: npm i @emailjs/browser download ki 
export default Contact
