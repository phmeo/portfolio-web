import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import ThreeDBackground from './components/ThreeDBackground';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(ThreeDBackground, {}), _jsx(Box, { position: "relative", zIndex: 1, minH: "100vh", bg: "background.dark", children: _jsxs(Router, { children: [_jsx(Navbar, {}), _jsx(Box, { as: "main", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/skills", element: _jsx(Skills, {}) }), _jsx(Route, { path: "/projects", element: _jsx(Projects, {}) }), _jsx(Route, { path: "/hobbies", element: _jsx(Hobbies, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) })] }) }), _jsx(Footer, {})] }) })] }));
}
export default App;
