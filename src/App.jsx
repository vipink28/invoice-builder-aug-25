import { Toaster } from "react-hot-toast"
import AppRouter from "./routes/AppRouter"

const App = () => {
  return (
    <>
      <Toaster />
      <AppRouter />
    </>
  )
}

export default App