import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import styled, { css } from 'styled-components';


const ContactForm = () => {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_6knj714', 'template_3hv26d9', e.target, 'user_ZF42JYjnBZIZCIUFAsctq')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    
    return (
<StyledFormWrapper>
              <StyledForm className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Nombre</label>
        <StyledInput type="text" name="user_name" />

        <label>Email</label>
        <StyledInput type="email" name="user_email" />
 
        <label>Mensaje</label>
        <StyledTextArea name="message" />


        <StyledButton type="submit">Enviar</StyledButton>
  
      </StyledForm>

      </StyledFormWrapper>
    );
  };

  const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;
  const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
  
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: whitesmoke;
  border-radius: 55px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border: 3px solid #3FBDF1;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 25px;
  border: 1px solid #90e0ef;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  
  width: 100%;
  min-height: 100px;
  resize: none;
  border-radius: 15px;
  border: 1px solid #90e0ef;
  ${sharedStyles}

`;
const StyledButton = styled.button`
      font-weight: bold;
    font-size: 1.1.rem;
    border-radius: 25px;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #3FBDF1;
    background: transparent;
    color: black;
    transition: all 0.2s ease;
    font-family: 'Montserrat', sans-serif;

    &:hover{
        background-color: #16b8f3;
        color: white;
        }
        `





export default ContactForm;