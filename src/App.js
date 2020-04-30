import React from 'react';
import Header from './Components/Header/Header';
import Headline from './Components/Header/Headline/Headline';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header/>
        <section className="main">
          <Headline header="posts" desc= "Click the button to render the posts"/>
        </section>
    </div>
  );
}

export default App;
