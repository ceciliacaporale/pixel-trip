import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #00ffcc;
  border: none;
  padding: 1rem 2rem;
  font-size: 0.75rem;
  color: #0f1e2e;
  text-transform: uppercase;
  margin: 2rem auto;
  display: block;
  border: 4px solid #ffffff;
  box-shadow: 4px 4px 0 #1b2b40;
  transition: all 0.2s ease;

  &:hover {
    background-color: #00ccaa;
    transform: scale(1.05);
  }
`;