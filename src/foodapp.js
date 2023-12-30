import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import FooterComponent from "./components/footer";
import BodyComponent from "./components/body.js"
import Profile from "./components/profile.js";
//default import --for only one 
import HeaderComponent from "./components/header";
import RestoMenu from "./components/RestoMenu.js";
import About from "./components/About.js";
import Error from "./components/error.js";
//iimporting createBrowserRouter  
import { createBrowserRouter,RouterProvider } from "react-router-dom";
//Outline to fill the place of children 
import {Outlet} from "react-router-dom";
//Link to - for the page to not reload giving user a good experience 
import { Link } from "react-router-dom";
import ProfileClass from "./components/Profile_class.js";
// import Instamart from "./components/Instamart.js";
//params - used to read id
import useOnline from "./components/useOnline.js";
import Shimmer from "./shimmer.js";

const Instamart = lazy(()=> import("./components/Instamart.js"))

const Compo = () => {
  const isOnline = useOnline();
  return (!isOnline)?(<h1>offline</h1>):(
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("body"));

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Compo />,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<BodyComponent />
      },
      {
        path:"/about",
        element:<About />,
        children:[
          {
            path:"profile",
            element:[<Profile name="ajay" />,<ProfileClass name="ajauy" />]
          }
        ] 
      },
      {
        path:'/restaurants/:id',
        element:<RestoMenu/>
      },
      {
        path:'/instamart',
        element:
        (<Suspense fallback={<Shimmer />}>
          <Instamart />
        </Suspense>)
      }
    ]
  }
])

root.render(<RouterProvider router={appRouter} />);

// root.render(Compo())
