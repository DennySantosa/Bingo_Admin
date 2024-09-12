import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Categories,
  CreateCategory,
  CreateOrder,
  CreateTodayGame,
  CreateReview,
  CreateUser,
  EditCategory,
  EditOrder,
  EditTodayGame,
  EditReview,
  EditUser,
  HelpDesk,
  HomeLayout,
  LandingV2,
  Login,
  Notifications,
  Orders,
  TodayGames,
  Profile,
  Register,
  Reviews,
  Users,
} from "./pages";
import Payment from "./pages/Payment";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <LandingV2 />,
      },
      {
        path: "/landing-v2",
        element: <LandingV2 />,
      },
      {
        path: "/TodayGames",
        element: <TodayGames />,
      },
      {
        path: "/TodayGames/create-TodayGame",
        element: <CreateTodayGame />,
      },
      {
        path: "/TodayGames/:id",
        element: <EditTodayGame />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/create-Category",
        element: <CreateCategory />,
      },
      {
        path: "/categories/:id",
        element: <EditCategory />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/orders/create-order",
        element: <CreateOrder />,
      },
      {
        path: "/orders/1",
        element: <EditOrder />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/reviews/:id",
        element: <EditReview />,
      },
      {
        path: "/reviews/create-review",
        element: <CreateReview />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <EditUser />,
      },
      {
        path: "/users/create-user",
        element: <CreateUser />,
      },
      {
        path: "/help-desk",
        element: <HelpDesk />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/payment",
        element: <Payment />
      }
    ],
    
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
