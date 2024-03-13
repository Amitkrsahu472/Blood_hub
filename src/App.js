import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;