import styled from 'styled-components'

export const StyledDeleteTaskButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border: none;
  color: ${(props) => props.theme['gray-300']};
  background-color: transparent;

  &:focus,
  &:hover {
    border-radius: .5rem;
    color: ${(props) => props.theme['danger']};
    background-color: ${(props) => props.theme['gray-400']};
  }
`
