import React from 'react'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import MainContent from './components/mainContent'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
