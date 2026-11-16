import { Provider } from "react-redux"
import Body from "./components/Body"
import Header from "./components/Header"
import store from "./utils/store"
import { createBrowserRouter, RouterProvider } from "react-router"
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage"
import Demo from "./components/Demo"

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body />,
    children:[
      {
        path:"/",
        element:<MainContainer />
      },
      {
        path:"watch",
        element:<WatchPage />
      },
      {
        path:"demo",
        element:<Demo />
      }
    ]
  }
])

const App = () => {
  return (
    <Provider store={store}>
      <div className="bg-black">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}

export default App