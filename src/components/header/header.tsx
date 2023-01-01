import { FC } from "react"
import './header.module.scss'
import { Logo, Input } from "@components"

export const Header: FC = () => {
  return (
    <header>
      <Logo />
      <Input />
    </header>
  )
}
