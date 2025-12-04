
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage  from './Landingpages/home/Homepage'
import Aboutpage from './Landingpages/about/Aboutpage'
import Productpage from './Landingpages/products/Productpage'
import Navbar from './Landingpages/home/Navbar'
import Footer from './Landingpages/home/Footer'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/products' element={<Productpage/>}/>
    </Routes>
    <Footer/>
 </BrowserRouter>
)
