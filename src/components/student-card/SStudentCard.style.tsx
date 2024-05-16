import styled from "styled-components";

interface MarksProps {
  highlighted: boolean;
}

export const Card = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  padding: 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 15px rgba(31, 38, 135, 0.089);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  max-width: 100%;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(31, 38, 135, 0.089);
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  color: rgba(36, 36, 36, 0.9);
  text-align: left;
`;

export const Marks = styled.div<MarksProps>`
  font-size: 24px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 10px;
  color: ${(props) =>
    props.highlighted ? "#4caf50" : "rgba(82, 82, 82, 0.9)"};
  background-color: ${(props) =>
    props.highlighted ? "#4caf4f32" : "rgba(82, 82, 82, 0.171)"};
  padding: 10px;
  border: 1px solid
    ${(props) => (props.highlighted ? "#4caf50" : "transparent")};
  border-radius: 8px;
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid rgba(87, 87, 87, 0.4);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  outline: none;
  margin-left: 8px;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:checked {
    background: #4caf50;
    border-color: #4caf50;
  }

  &:hover {
    background: #4caf50;
    border-color: #4caf50;
  }
`;
