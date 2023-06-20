import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 32px;
  margin-top: -80px;
  margin-left: 24px;
  margin-right: 24px;
`

export const Title = styled.div`
  background-color: #363838;
  color: #ffffff;
  padding: 8px;
  text-align: center;
  font-size: 32px;
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
