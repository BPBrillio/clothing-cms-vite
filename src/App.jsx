import { Routes, Route, Outlet } from 'react-router-dom';
import Home from "./routes/home/home.component";

const Navigation = () => {
  return (<>
    <h1>Navbar</h1>
    <Outlet/>
    {/* Children route of the route containing Navigation will be rendered here */}
  </>)
}
function App() {
  return (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home/>}/>
      <Route path='shop' element={<h1>Shop</h1>}/> 
    </Route>
  </Routes>
  );
}

export default App;