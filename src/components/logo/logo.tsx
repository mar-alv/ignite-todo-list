import { FC } from 'react'
import './logo.module.scss'
import logo from '../../assets/logo.svg'

export const Logo: FC = () => {
  return <img src={logo} alt="Logo do ToDo List" />
}
