import styled, { css } from "styled-components";

interface buttonProps {
  variant: "default" | "primary" | "success" | "warning";
}

interface inputProps {
  variant: "success" | "default";
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100vw;
  height: 20vh;
`;

const buttonStyle = {
  default: css`
    background-color: blue;
    &:hover {
      background-color: darkblue;
    }
  `,
  primary: css`
    background-color: #ff0066;
    &:hover {
      background-color: #ff0000;
    }
  `,
  success: css`
    background-color: lightgreen;
    &:hover {
      background-color: green;
    }
  `,
  warning: css`
    background-color: orange;
    &:hover {
      background-color: darkorange;
    }
  `,
};

const inputStyle = {
  default: css`
    border: 2px solid #ccc;
    &:focus {
      border-color: blue;
      outline: none;
    }
    &::placeholder {
      color: #aaa;
    }
  `,

  success: css`
    border: 2px solid #4de810;
    &:focus {
      border-color: #30870e;
      outline: none;
    }
    &::placeholder {
      color: #fff;
    }
  `,
};

export const Button = styled.button<buttonProps>`
  color: white;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  max-height: 50px;
  width: 12%;
  border-radius: 10px;
  transition: all 200ms linear;
  ${({ variant }) => buttonStyle[variant || "default"]}
`;

export const Input = styled.input<inputProps>`
  padding: 10px;

  border-radius: 5px;
  width: 30%;
  transition: border-color 200ms linear;

  ${({ variant }) => inputStyle[variant || "default"]}
`;
