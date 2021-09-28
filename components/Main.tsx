import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main className="w-2/3 mx-auto min-h-screen py-14">
      {children}
    </main>
  )
}

export default Main
