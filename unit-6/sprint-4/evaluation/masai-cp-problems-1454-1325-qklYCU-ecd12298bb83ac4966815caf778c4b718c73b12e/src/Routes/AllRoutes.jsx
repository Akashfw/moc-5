import React from 'react'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from '../Pages/Home'
import BookDetailsPage from '../Pages/BookDetailsPage'
import SectionPage from '../Pages/SectionPage'
import InvalidPage from '../Pages/InvalidPage'
export default function AllRoutes() {
    return (
        <div>
         {/* <BrowserRouter>
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/:id' element={<BookDetailsPage/>} />
             <Route path='/:Section' element={<SectionPage/>}/>
             <Route path='/*' element={<InvalidPage/>}/>
         </Routes>
         </BrowserRouter> */}
        </div>
    )
}
