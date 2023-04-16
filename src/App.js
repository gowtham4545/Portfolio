import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layouts';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Project from './Components/Projects';
import Skills from './Components/Skills';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/projects' element={<Project />} />
                    <Route path='/skills' element={<Skills />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
