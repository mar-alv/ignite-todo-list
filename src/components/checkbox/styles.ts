import styled from "styled-components"

export const StyledCheckbox = styled.div`
  gap: 1.2rem;
  display: grid;
  grid-template-columns: auto 1fr;
  align-self: start;
  position: relative;
`

export const CheckboxIcon = styled.span`
  top: 50%;
  left: 50%;
  transform: translate(-135%, -50%);
  position: absolute;

  pointer-events: none;
`

export const StyledCheckboxCircle = styled.input`
  width: 1.4rem;
  height: 1.4rem;
  align-self: start;

  border-radius: 50%;
  border: .2rem solid ${(props) => props.theme['blue']};

  outline: none;
  cursor: pointer;

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
