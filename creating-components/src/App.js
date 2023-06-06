import React from 'react';
import './App.css';

// import avatar from './avatar.png';
// import Header from './components/Header';
// import Main from './components/Main';
// import Sidebar from './components/Sidebar';
// import Btn from './components/Btn';
// import ModeToggler from './components/ModeToggler';
// import Child from './components/Child';

// import React, {useState} from 'react';
// import Lemon from './components/Lemon';
// import MealsProvider from './providers/MealsProvider';
// import Counter from './components/Counter';
// import MealsList from './components/MealsList';

// import {useReducer} from 'react';

import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import {Routes, Route} from 'react-router-dom';


// function Logo(props) {
//   const userPic = <img src={avatar} />;
//   return userPic;
// }

// const reducer = (state, action) => {
//   if (action.type === 'ride') return {money: state.money + 10};
//   if (action.type === 'fuel') return {money: state.money - 50};
//   return new Error();
// }

function App() {
  // return (
  //   <div>
  //     <Header name="Anna" color="purple" />
  //     <Main greet="Howdy"/>
  //     <Sidebar greet="Hi"/>
  //     <Logo />
  //     <Btn />
  //     <ModeToggler />
  //   </div>
  // )

  // const date = new Date()
  // return (
  //   <div>
  //     <Child message={date.toLocaleDateString()} />
  //   </div>
  // )

  // const [word, setWord] = React.useState('Eat')
  // function handleClick() {
  //   setWord('Drink')
  // }
  // return (
  //   <div className="App">
  //     <Lemon message={word + " at Little Lemon"} />
  //     <button onClick={handleClick}>Click me</button>
  //   </div>
  // )

  // return (
  //   <div>
  //     <MealsProvider>
  //       <MealsList />
  //       <Counter />
  //     </MealsProvider>
  //   </div>
  // )

  // const initialState = {money: 100};
  // const [state, dispatch] = useReducer(reducer, initialState);

  // return (
  //   <div className='App'>
  //     <h1>Wallet: {state.money}</h1>
  //     <div>
  //       <button onClick={() => dispatch({type: 'ride'})}>
  //         A new customer!
  //       </button>
  //       <button onClick={() => dispatch({type: 'fuel'})}>
  //         Refill the tank!
  //       </button>
  //     </div>
  //   </div>
  // )

  return (
    <div className="App">
      <nav className="nav">
        <a href="#" className="nav-item">HomePage</a>
        <a href="#" className="nav-item">About Me</a>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      
    </div>
  );
}

export default App;
