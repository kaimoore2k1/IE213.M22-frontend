import React from 'react';
import './sass/App.scss';
import 'antd/dist/antd.min.css';
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import Pet from './pages/Pet';
import Shop from './pages/Shop';
import Service from './pages/Service';
import Blog from './pages/Blog';
import Intro from './pages/Intro';



function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/thucung' element={<Pet />} />
                <Route path='/thucung/chocanh' element={<Pet />} />
                <Route path='/thucung/meocanh' element={<Pet />} />
                <Route path='/thucung/thukieng' element={<Pet />} />
                <Route path='/thucung/hamster' element={<Pet />} />
                <Route path='/thucung/thucungkhac' element={<Pet />} />
                <Route path='/thucanthucung' element={<Shop />} />
                <Route path='/thucanthucung/ta_cho' element={<Shop />} />
                <Route path='/thucanthucung/ta_meo' element={<Shop />} />
                <Route path='/thucanthucung/ta_khac' element={<Shop />} />
                <Route path='/vatdungthucung' element={<Shop />} />
                <Route path='/phukienthucung' element={<Shop />} />
                <Route path='/dochoithucung' element={<Shop />} />
                <Route path='/dichvu' element={<Service />} />
                <Route path='/dichvu/cattia' element={<Service />} />
                <Route path='/dichvu/tronggiu' element={<Service />} />
                <Route path='/dichvu/massage' element={<Service />} />
                <Route path='/dichvu/benhvienthuy' element={<Service />} />
                <Route path='/dichvu/sanphamthuy' element={<Service />} />
                <Route path='/dichvu/chiase' element={<Service />} />
                <Route path='/dichvu/dathen' element={<Service />} />
                <Route path='/tapchi' element={<Blog />} />
                <Route path='/gioithieu' element={<Intro />} />

            </Routes>
        </div>
    );
}

export default App;
