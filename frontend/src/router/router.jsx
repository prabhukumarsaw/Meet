import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import HackerDetail from "../pages/Hacker/HackerDetail";
import About from "../pages/About/About";
import Hacker from "../pages/Hacker/Hacker";
import Signup from "../components/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import UpdateProfile from "../pages/dashboard/update-profile"
import DashBoardLayout from "../layout/DashBoardLayout";
import Dashboard from '../pages/dashboard/admin/dashboard'
import Users from '../pages/dashboard/admin/users'
import HackerList from '../pages/dashboard/admin/hackerList'
import CreteHacker  from '../pages/dashboard/admin/createHacker'
import EditHacker  from '../pages/dashboard/admin/editHacker'
import DeleteHacker  from '../pages/dashboard/admin/deleteHacker'
import Login from "../components/Login"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home id="hacker"/>
        },
        {
          path: "/hacker",
          element:<Hacker/> 
        },
        {
          path: "/hackerdetail/:id",
          element: <PrivateRouter><HackerDetail/></PrivateRouter>
        },
        {
          path: "/contact",
          element: <About/>
        },
        {
          path: "/update-profile",
          element: <UpdateProfile/>
        },
        
      ]
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "dashboard",
      element: <DashBoardLayout/>,
      children: [
        {
          path: "",
          element: <Dashboard/>
        },
        {
          path: "users",
          element: <Users/>
        },
        {
          path: "hackerlist",
          element: <HackerList/>
        },
        
        {
          path: "createHacker",
          element: <CreteHacker/>
        },
        
        {
          path: "editHacker",
          element: <EditHacker/>
        },
        
        {
          path: "deleteHacker",
          element: <DeleteHacker/>
        },
      ]
    }
  ]);

  export default router;