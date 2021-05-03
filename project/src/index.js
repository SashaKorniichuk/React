import React, { isValidElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from "./Components/Card"
import Navbar from "./Components/Navbar"


let user1={
  name:"Ivan",
  address:"Rinve St.Banderu 10/2",
  phone:"+380972457852",
  email:"ivan@gmail.com",
  image:"img_avatar.png"
}
let user2={
  name:"Oksana",
  address:"Rinve St.Banderu 17/24",
  phone:"+38097896584",
  email:"oksana@gmail.com",
  image:"https://potolcoviy.ru/wp-content/uploads/2021/03/woman.png"
}

const App = () => {
  return (
    <div className="container-fluid">
      <Navbar/>
      <div className="row">
       <Card user={user1} />
       <Card user={user2}/>
      </div>
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

