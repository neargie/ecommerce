import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Switch get more control -> hanya menjalankan Route yang pertama apapun path yang ditulis di browser
        exact untuk menampilkan sesuai url yang ditulis di browser
        component untuk menampilkan halam yang akan ditampilkan
      */}
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
      <HomePage/>
    </div>
  );
}

export default App;
