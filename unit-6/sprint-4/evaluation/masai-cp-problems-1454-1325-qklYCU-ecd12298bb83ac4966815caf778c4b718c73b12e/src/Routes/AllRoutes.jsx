import React from 'react'
import {Routes,Route,Link} from "react-router-dom"
import Home from '../Pages/Home'
import BookDetailsPage from '../Pages/BookDetailsPage'
import SectionPage from '../Pages/SectionPage'
import InvalidPage from '../Pages/InvalidPage'
export default function AllRoutes() {
    return (
        <div>
         
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/:id' element={<BookDetailsPage  id={1}/>} />
             <Route path='/section/:section' element={<SectionPage  />}/>
             <Route path='/*' element={<InvalidPage/>}/>
         </Routes>
        
        </div>
    )
}
