import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import NavBar from "./layout/NavBar";
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Home from "./pages/Home";
import CreateUser from "./pages/users/CreateUser";
import UpdateUser from "./pages/users/UpdateUser";
import ListUsers from "./pages/users/ListUsers";


function App() {
  return (
      <Router>
          <div className="App">
              <NavBar title="Home Page" />

              <Routes>
                  <Route exact path='/' element={<Home/>}></Route>
                  <Route exact path='/users/create' element={<CreateUser />}></Route>
                  <Route exact path='/users/update' element={<UpdateUser />}></Route>
                  <Route exact path='/users' element={<ListUsers />}></Route>
              </Routes>

          </div>
      </Router>
  );
}

export default App;
