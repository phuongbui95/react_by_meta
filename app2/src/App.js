import './App.css';
// import React from 'react';
// import testImage from './assets/images/example.png';
import ReactPlayer from "react-player";

function App() {
  // const time = new Date();
  // const day = time.toLocaleDateString("en-us", { weekday: "long"});
  // const morning = time.getHours() >= 6 && time.getHours() <= 12;
  // const lunch = time.getHours() > 12 && time.getHours() <= 15;
  // const dinner = time.getHours() > 15 && time.getHours() <= 24;
  // let dayMessage;

  // if (day.toLowerCase() === "monday") {
  //   dayMessage = `Happy ${day}`;
  // } else if (day.toLowerCase() === "tuesday") {
  //   dayMessage = `${day}, four days to go`;
  // } else if (day.toLowerCase() === "wednesday") {
  //   dayMessage = `${day}, half way there`;
  // } else if (day.toLowerCase() === "thursday") {
  //   dayMessage = `${day}, start planning the weekend`;
  // } else if (day.toLowerCase() === "friday") {
  //   dayMessage = `Woo-hoo, the weekend is coming!`;
  // } else {
  //   dayMessage = "Stay calm and keep having fun";
  // }

  // return (
  //   <div className='App'>
  //     <h1>
  //       {dayMessage}
  //     </h1>
  //     {morning ? <h2>Have you had breakfast yet?</h2> : ''}
  //     {lunch ? <h2>Have you had lunch yet?</h2> : ''}
  //     {dinner ? <h2>Have you had dinner yet?</h2> : ''}
  //   </div>
  // );

  // return (
  //   <div>
  //     <h1>
  //       Task: add three images with some styling
  //     </h1>
  //     <img
  //       height={200}
  //       src={testImage}
  //       alt="Just a testing image"
  //     />
  //   </div>
  // )

  const vidUrl = "https://www.youtube.com/watch?v=G_G5fDZp1oo";
  return (
    <div className="App">
      <h1>React Player example</h1>
      <ReactPlayer 
        url={vidUrl}
        playing={false}
        volume={0.5}
      />
    </div>
  );

}

export default App;
