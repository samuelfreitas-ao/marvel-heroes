import { styled } from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
  list-style: none;
  padding: 0;
`
export const Item = styled.li`
  background-color: red;
`
