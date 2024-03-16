import { Check } from 'phosphor-react'
import { CheckboxIcon, StyledCheckbox } from './styles'
import { completeTask } from '@store/taskSlice'
import { ITask } from '@interfaces'
import { useAppDispatch } from '@store/hook'
import { useRef, KeyboardEvent, MutableRefObject } from 'react'

interface Props {
  task: ITask
}

export function Checkbox({ task }: Props) {
  const dispatch = useAppDispatch();
  const { id, isDone, content } = task
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>

  function handleOnChange() {
    dispatch(completeTask(id))
  }

  function handleEnterPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== 'Enter') return

    inputRef.current.checked = !inputRef.current.checked

    dispatch(completeTask(id))
  }

  return (
    <span>
      {isDone && (
        <CheckboxIcon>
          <Check size={12} />
        </CheckboxIcon>
      )}
      <StyledCheckbox
        id={`checkbox${id}`}
        onChange={handleOnChange}
        onKeyDown={handleEnterPress}
        ref={inputRef}
        type='checkbox'
      />
      <label htmlFor={`checkbox${id}`}>
        {content}
      </label>
    </span>
  )
}
