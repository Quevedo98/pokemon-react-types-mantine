import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { MantineProvider } from "@mantine/core"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "light" }}
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <App />
      </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>
)
