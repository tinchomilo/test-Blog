import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from '../components/Home'


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={ <Home /> } />                    
                </Routes>
            </div>
            
        </Router>
    )
}
