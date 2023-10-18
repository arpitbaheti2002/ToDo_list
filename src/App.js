import React from 'react';
import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <List />
      <p>* Double click to delete tasks</p>
    </div>
  );
}

export default App;
