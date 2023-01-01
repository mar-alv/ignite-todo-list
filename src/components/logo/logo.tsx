import { FC } from 'react'
import styles from './logo.module.scss'
import logo from '../../assets/logo.svg'

export const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Logo do ToDo List" />
    </div>
  )
}
