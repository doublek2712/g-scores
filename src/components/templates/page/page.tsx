import React, { FC } from "react"
import '@styles/main.scss'
interface PageProps {
  title?: string,
  children?: React.ReactNode
}

const Page: FC<PageProps> = ({ title = 'Untitled page', children, ...rest }) => {
  return (
    <main className="page" {...rest}>
      <h1>{title}</h1>
      {children}
    </main>
  )
}

export default Page