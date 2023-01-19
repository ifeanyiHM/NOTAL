import { useState } from 'react';
import Journal from './Journal';
import './Styles/App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Create from './Create';
import Navbar from './Navbar';
import Note from './Note';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Journal />} />
      <Route path='create' element={<Create />} />
      <Route path='note/:key' element={<Note />} />
    </Route>
  )
)

function App() {

  const [open, setOpen] = useState(true);
  const handleClick = () => {
      setOpen(!open);
      if (open === true) {
          document.body.classList.add('bodyy');
      } else {
          document.body.classList.remove('bodyy');
      }
  }


  return (
    <>
      <Navbar handleClick={handleClick} open={open} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
