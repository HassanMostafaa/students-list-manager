import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  margin-top: 34px;
  padding: 16px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 100%;
  cursor: pointer;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: rgba(63, 63, 63, 0.699);
  text-align: left;
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid rgba(51, 51, 51, 0.4);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  outline: none;
  margin-left: 8px;

  &:checked {
    background: #007bff;
    border-color: #007bff;
  }
`;
