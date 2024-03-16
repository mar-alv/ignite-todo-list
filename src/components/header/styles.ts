import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme['gray-700']};
`
