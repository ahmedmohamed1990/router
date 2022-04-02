import Footer from "./components/pages/Footerpage";
import Header from "./components/pages/Header";
import {Routes, Route, Navigate} from 'react-router-dom';

//  Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Errors from "./components/pages/Errors";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <>
    <Header />
    <main className="mt-5">
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>} />
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/profile/:id' element={<Profile />}/>
      <Route path='*' element={<Errors />}/>
    </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
