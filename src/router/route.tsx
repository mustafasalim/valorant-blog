import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home"
import Agents from "../pages/agents"

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/agents",
    element: <Agents />,
  },
])
