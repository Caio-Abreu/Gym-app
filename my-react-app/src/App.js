// index.js or App.js

import React from 'react';
import AppRouter from './AppRouter'; // Import your router configuration
import './App.css';

// App.js

const App = () => {
  // Your App component code here
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
