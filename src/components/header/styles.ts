import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  height: 12.5rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['gray-700']};
`
