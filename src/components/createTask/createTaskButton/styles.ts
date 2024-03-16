import styled from "styled-components"

export const StyledCreateTaskButton = styled.button`
  height: 3.25rem;
  padding: 1rem;
  gap: .5rem;
  display: flex;
  align-items: center;

  border: none;
  border-radius: .8rem;
  font-size: .875rem;
  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['blue-dark']};

  &:hover {
    background-color: ${(props) => props.theme['blue']};
  }

  &:focus {
    border-color: ${(props) => props.theme['blue']};
  }
`
