import './App.css';
import {Login} from './components/Login';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { RegisterParticipant } from './components/RegisterParticipant';
import { CreateTeam } from './components/CreateTeam';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <RegisterParticipant/>,
  },
  {
    path: "/createTeam",
    element: <CreateTeam/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
