import styled from 'styled-components';

interface ButtonProps {
  backgroundColor?: boolean;
}


export const ProductListContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SearchContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  box-sizing: border-box;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SpinnerDiv = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
`

export const ProductItem = styled.li`
  list-style: none;
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProductTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.5em;
`;

export const ProductDescription = styled.p`
  margin: 0 0 10px 0;
  color: #555;
`;

export const ProductPrice = styled.p`
  margin: 0 0 20px 0;
  font-weight: bold;
  color: #333;
`;

export const Button = styled.button<ButtonProps>`
  margin-right: 10px;
  padding: 10px 15px;
  font-size: 1em;
  color: #fff;
  background-color: ${props => (props.backgroundColor ? '#ed2202' : '#007bff')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => (props.backgroundColor ? '#d31d00' : '#0056b3')};
  }

  &:nth-child(2) {
    background-color: #28a745;
    
    &:hover {
      background-color: #218838;
    }
  }
`;
