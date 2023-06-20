import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  display: flex;
`

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
