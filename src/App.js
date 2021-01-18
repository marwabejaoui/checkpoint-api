import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import UserListe from './component/UserListe';
import { store } from './redux/store'


function App(){
  return (
    <Provider store={store}>
    <div className="App">
      <div className='header'>
        <h1>List of users :</h1>
      </div>
      <UserListe />
    </div>	
  </Provider>	
  )
}


export default App;