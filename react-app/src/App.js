import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import React, {useState} from 'react';

const initialList = [{name: "Presbo", email: "presbo@columbia.edu"},{name: "John Jay Mouse", email: "mouse@columbia.edu"},{name: "Water Bottle Man", email: "flipper@columbia.edu"}]

function App() {
  const [itemList] = useState(initialList);

  return (
    <div class="App">
      <div class="logo">
        <img src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png" alt="spectator publishing company logo" width="200" height="45"></img>
      </div>
      <div class="Header">Spectator's Sources</div>
      <Form></Form>
      <List itemList={itemList}></List>
    </div>
  );
}

export default App;