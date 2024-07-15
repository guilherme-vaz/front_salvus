import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5em;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  box-sizing: border-box;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;