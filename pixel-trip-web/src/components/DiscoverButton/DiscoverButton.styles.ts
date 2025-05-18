import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #8C593A;
  border: none;
  padding: 1rem 2rem;
  font-size: 0.75rem;
  color: #FEFBE5;
  text-transform: uppercase;
  margin: 2rem auto;
  display: block;
  border: 4px solid #ffffff;
  box-shadow: 4px 4px 0 #1b2b40;
  transition: all 0.2s ease;

  &:hover {
    background-color: #549357;
    transform: scale(1.05);
  }
`;