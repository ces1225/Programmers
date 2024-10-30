import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // let name = "리액트";
  // const style = {
  //   backgroundColor : 'black',
  //   color : "white",
  //   fontSize : "48px",
  //   fontWeight : "bold",
  //   padding : "20px"
  // };

  // return (
  //   <div style = {style}>
  //     <h1 style = {style}>hello, 
  //     {
  //       name === "리액트" ? (<h1>YES</h1>) : null
  //     }!!</h1>
  //     <p>반갑습니다.</p>
  //     <br />
  //     <input />
  //     {/* 주석문 작성 */}
  //   </div>
  // );
  const port = undefined;
  
  return (
    <div>
    {
      port || '포트를 설정하지 않았습니다.'
    }
    </div>
  )
}

// function App(){
//   return React.createElement("div", null, "hello, react",
//     React.createElement('p',null,'반갑습니다.')
//    )
// }
export default App;
