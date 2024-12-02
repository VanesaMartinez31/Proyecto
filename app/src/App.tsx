import './App.css';
import {Login} from './components/Login';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { RegisterParticipant } from './components/RegisterParticipant';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <RegisterParticipant/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
