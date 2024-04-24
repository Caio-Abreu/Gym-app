// AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Import your home page component
import WeeklyCalendar from './WeeklyCalendar'; // Import your weekly calendar page component
import Header from './Header';
import Footer from './Footer';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/weekly-calendar" element={<WeeklyCalendar />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;
