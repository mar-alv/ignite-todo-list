import styled from 'styled-components'

export const StyledTask = styled.article`
  margin-block: 0.75rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: .8rem;
  border: .1rem solid ${(props) => props.theme['gray-400']};
  background-color: ${(props) => props.theme['gray-500']};
`
