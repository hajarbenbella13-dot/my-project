import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import UserFavoriteAnimals from './components/UserFavoriteAnimals'
import Exercise from './components/Exercise3'
import './App.css'

function App() {
  const myelement = <h1>I Love JSX!</h1>;
      const messageHello = "Hello World!";
      const sum = 5 + 5;
      const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
const list =['coffee','tea','milk'];

  return (
    <>
      
      
        <p>
        {messageHello}
        </p>
        {myelement}
        
<p>React is {sum} times better with JSX</p>

 <h3>My name is {user.firstName} {user.lastName}</h3>

 <h3>My favorite animals are:</h3>

      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      <Exercise list={list} />
 
    </>

    
  )
}

export default App