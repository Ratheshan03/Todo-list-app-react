import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState(['abc', 'def']);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  const addTodo = (event) => {
    // This will fire off when we click on the button
    event.preventDefault(); // This will stop the REFRESH

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); // Clear up the input after clicking add todo button 
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
    
      <form>
          <FormControl>
            <InputLabel> Write a Todo! </InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)}/>
          </FormControl>

        <Button disabled={!input} type="submit" onClick = {addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
        {/* <button type="submit" onClick = {addTodo}>Add Todo</button> */}
      </form>
     
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
          //<li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
