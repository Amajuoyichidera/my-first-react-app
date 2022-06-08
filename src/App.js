
import { useState, useEffect } from 'react';
import './App.css';

    const App = () => {
      const [counter, setCounter] = useState(0);

      useEffect(() => {
        alert("you changed the counter to" +      counter)
      },[counter]);

      return (
        <div className="App">
          <button onClick={() => setCounter((prevCount) => prevCount -1 )  }>-</button>
          <h1>{counter}</h1>
          <button onClick={() => setCounter((prevCount) => prevCount +1 )  }>+</button>
        </div>
      );
    }

  /* // const Person = (Probs) => {
    return (
      <section>
      <h1>Name: {Probs.name} </h1>
      <h2>Last Name: {Probs.lastName}</h2>
      <h2>Age: {Probs.age}</h2>
      </section>
    )
  }

  const App = () => {
    return (
     <div className="App">
      <Person name='chidera' lastName='davido' age='18' />
      <Person name='chikaodili' lastName='sophia' age='20' />
     </div>
  );
  } */



export default App;
