import styled from 'styled-components';

const Button = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  display: inline-block;
  height: 36px;
  min-width: 88px;
  padding: 8px 16px;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 0;
  border-radius: 2px;
  background-image: linear-gradient(
    109.6deg,
    rgba(137, 191, 221, 1) 11.2%,
    rgba(150, 144, 204, 1) 100.2%
  );
  color: #fff;
  outline: 0;

  &:disabled {
    background: rgb(189, 189, 189);
    cursor: default;
  }

  &:hover {
    background-image: linear-gradient(
      109.6deg,
      rgba(137, 191, 221, 0.8) 11.2%,
      rgba(150, 144, 204, 0.8) 100.2%
    );
  }
`;

export default Button;
