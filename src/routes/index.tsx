import { createFileRoute } from '@tanstack/react-router'
import '../styles/main.scss'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3 className=''></h3>
    </div>
  )
}