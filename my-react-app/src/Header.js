// Header.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const goToHomePage = () => {
        // Navigate to the home page
        navigate('/');
    };

    const goToWeeklyCalendar = () => {
        // Navigate to the weekly calendar page
        navigate('/weekly-calendar');
    };

    return (
        <header>
            <h1>Weekly Calendar</h1>
            <button onClick={goToHomePage}>Home</button>
            <button onClick={goToWeeklyCalendar}>Workout</button>
        </header>
    );
};

export default Header;
