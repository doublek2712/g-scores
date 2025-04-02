import { createFileRoute } from '@tanstack/react-router'
import '../styles/main.scss'
import Dashboard from '../pages/dashboard'

export const Route = createFileRoute('/')({
  component: Dashboard,
})
