import styled from "styled-components";

export const SButton = styled.button`
  padding: 20px 0;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(63, 63, 63, 0.699);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: rgba(190, 190, 190, 0.096);
    transform: translateY(-1px);
  }

  &:active {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(1px);
  }
`;
