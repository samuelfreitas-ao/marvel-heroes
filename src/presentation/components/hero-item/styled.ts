import { styled } from 'styled-components'

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
  width: 100%;
`
export const ItemTitle = styled.div`
  background-color: rgba(90, 126, 118, 0.8);
  color: #fff;
  font-size: 24px;
  position: absolute;
  bottom: 0;
  width: 100%;
`