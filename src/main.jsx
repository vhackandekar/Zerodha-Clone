
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage  from './Landingpages/home/Homepage'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Routes>
        <Route path='/' element={<Homepage/>}/>

    </Routes>
 </BrowserRouter>
)
