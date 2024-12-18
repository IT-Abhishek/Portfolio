import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactForm from './components/Contact';

const App: React.FC = () => {

    return (<>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route index element={<About />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/experience' element={<Experience />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<ContactForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
    );

};

export default App;
