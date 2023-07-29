import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notfound from './components/Notfound';
import Add from './components/users/Add';
import EditU from './components/users/EditU';
import Users from './components/users/Users';





function App() {
  return (
    <>
      <div className="background">
        <Router>
          <Navbar title="Add User" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/add" element={<Add />} />
            <Route path="/users/edit/:id" element={<EditU />} />
            <Route path="/users/:id" element={<Users />} />
            <Route element={<Notfound />} />
          </Routes>

          {/* <Home />
        <About />
        <Contact />
        <Table /> */}
        </Router>
      </div>
    </>
  );
}

export default App;
