import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  padding-top: 4px;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
}
`

export const Item = styled.li`
  padding: 0 8px;  
  
`
