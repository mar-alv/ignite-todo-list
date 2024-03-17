import styled from 'styled-components'

export const StyledTask = styled.article`
  padding: 1.6rem;
  gap: 1.2rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  border-radius: .8rem;
  border: .1rem solid ${(props) => props.theme['gray-400']};
  font-size: 1.4rem;
  background-color: ${(props) => props.theme['gray-500']};
`
