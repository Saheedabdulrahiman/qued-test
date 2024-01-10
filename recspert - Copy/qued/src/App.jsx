
import DashBoard from "./pages/DashBoard";
import LoginPage from "./pages/LoginPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  
  {
    path: "/",
    element: < LoginPage/> },
    
  {
    path: "/dash-board",
    element: < DashBoard/> },
    
 
]);

export default function App() {
  return (
    <>

    <RouterProvider  router={router}/>
      {/* <LoginPage/> */}
      {/* <DashBoard/> */}
    </>
  )
}

