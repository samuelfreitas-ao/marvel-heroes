import { styled } from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
  list-style: none;
  padding: 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
export const Item = styled.li`
  position: relative;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }
`
export const ItemImage = styled.img<{ unavailable?: string }>`
  opacity: ${(props) => (props?.unavailable ? 0.6 : 0.8)};
`
export const ItemTitle = styled.div`
  background-color: rgba(90, 126, 118, 0.8);
  color: #fff;
  font-size: 24px;
  position: absolute;
  bottom: 0;
  width: 100%;
`
