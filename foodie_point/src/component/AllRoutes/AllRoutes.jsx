import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Restaurant } from '../pages/Restaurant'
import { Cart } from '../pages/Cart'
import { Contact } from '../pages/Contact'
import { About } from '../pages/About'
import { Menu } from '../pages/Menu'

export const AllRoutes = () => {
  return (
    <div>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/restaurant' element={<Restaurant/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/hotelMenue/:id' element={<Menu/>}/>

</Routes>

    </div>
  )
}
