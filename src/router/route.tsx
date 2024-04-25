import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home"
import Agents from "../pages/agents"
import Weapons from "../pages/weapons"

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/agents",
    element: <Agents />,
  },
  {
    path: "/weapons",
    element: <Weapons />,
  },
])
