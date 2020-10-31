import React from 'react';

function Food(props) {
  return <h1>I Like {props.fav}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>hello !!!</h1>
      <Food fav="김치" />
      <Food fav="뼈해장국" />
      <Food fav="삼겹살" />
      <Food fav="라면" />

    </div>
  );
}

export default App;
