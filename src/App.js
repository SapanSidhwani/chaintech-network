import './App.css';
import About from './components/About';
import UserDetails from './components/UserDetails';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function RootLayout(props) {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <Outlet />
      </div>
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          path: '/',
          element: <UserDetails key={"home"} editable={false} />
        },
        {
          path: '/about',
          element: <About key={"about"}/>
        },
        {
          path: '/editdetails',
          element: <UserDetails key={'editdetails'} editable={true}/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login key={"login"} />
    },
    {
      path: "/registration",
      element: <Registration key={"registration"} />
    }
  ]);
  return <RouterProvider router={router} />
}

export default App;
