import styled from 'styled-components';

const Container = styled.div`
  height: 200px;
  width: 200px;
  background-color: #fff;
  border: 2px dashed rgb(187, 186, 186);
  border-radius: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;

  ${props => (props.highlight ? 'background-color: rgb(188, 185, 236)' : null)}
`;

export default Container;
