// import avatar from './avatar.png';
// import Header from './components/Header';
// import Main from './components/Main';
// import Sidebar from './components/Sidebar';
// import Btn from './components/Btn';
// import ModeToggler from './components/ModeToggler';
// import Child from './components/Child';

import React, {useState} from 'react';
// import Lemon from './components/Lemon';
import MealsProvider from './providers/MealsProvider';
import Counter from './components/Counter';
import MealsList from './components/MealsList';

import './App.css';

// function Logo(props) {
//   const userPic = <img src={avatar} />;
//   return userPic;
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

  return (
    <div>
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  )

}

export default App;
