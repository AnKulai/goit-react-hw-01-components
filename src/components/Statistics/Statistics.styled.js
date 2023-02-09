import styled from 'styled-components';

let randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const Container = styled.section`
  padding: 10px;
  text-align: center;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.h2`
  font-size: 28px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
  text-align: center;
  font-size: 28px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  padding: 10px;
  gap: 5px;
  &:nth-of-type(1) {
    background-color: ${randomColor};
  }
  &:nth-of-type(2) {
    background-color: ${randomColor};
  }
  &:nth-of-type(3) {
    background-color: ${randomColor};
  }
  &:nth-of-type(4) {
    background-color: ${randomColor};
  }
`;

export const ItemTitle = styled.span`
    font-size: 33px;
    font-weight: bolder;
`
export const ItemText = styled.span`
    font-size: 28px;
`