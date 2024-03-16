import styled from 'styled-components'

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  align-self: flex-end;

  padding: 1rem;
  height: 3.375rem;
  border-radius: .5rem;

  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['gray-500']};

  &::placeholder {
    color: ${(props) => props.theme['gray-300']};
  }
`
