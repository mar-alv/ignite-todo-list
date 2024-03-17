import styled from 'styled-components'

export const StyledTasksCounter = styled.section`
  display: flex;
  margin: 5.625rem 0 0.75rem;
  justify-content: space-between;
`

export const CreatedTasks = styled.h3`
  font-size: .875rem;
  font-weight: bold;
  color: ${(props) => props.theme['blue']};
`

export const TasksDone = styled.h3`
  font-size: .875rem;
  font-weight: bold;
  color: ${(props) => props.theme['purple']};
`

export const Counter = styled.span`
  font-size: .75rem;
  margin-left: .5rem;
  border-radius: 3rem;
  padding: .125rem .5rem;

  color: ${(props) => props.theme['gray-200']};
  background-color: ${(props) => props.theme['gray-400']};
`
