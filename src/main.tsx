import ReactDOM from "react-dom/client"
import "./style/tailwind.css"
import { QueryClient, QueryClientProvider } from "react-query"
import { RouterProvider } from "react-router-dom"
import { route } from "./router/route.tsx"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={route} />
  </QueryClientProvider>
)
