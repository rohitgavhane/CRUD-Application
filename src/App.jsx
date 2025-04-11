import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AllStudent from './AllStudent';
import Addstudent from './Addstudent';
import About from './About';


const App = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allstudent" element={<AllStudent />} />
        <Route path='/addstudent' element={<Addstudent></Addstudent>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
     
      </div>
    </>
  );
};

export default App;
