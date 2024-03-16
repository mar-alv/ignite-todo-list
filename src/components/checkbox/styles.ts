import styled from "styled-components"

export const StyledCheckbox = styled.input`
  width: 1rem;
  height: 1rem;
  margin-right: .5rem;

  border-radius: 50%;
  border: .2rem solid ${(props) => props.theme['blue']};

  outline: none;
  cursor: pointer;
  appearance: none;
  vertical-align: middle;
  -webkit-appearance: none;

  &:focus {
    border-color: ${(props) => props.theme['purple']};
  }

  &:checked {
    border: none;
    background-color: ${(props) => props.theme['purple']};

    & + label {
      text-decoration: line-through;
      color: ${(props) => props.theme['gray-300']};
    }
  }
`

export const CheckboxIcon = styled.span`
  padding: .12rem;

  position: absolute;
  pointer-events: none;
`
