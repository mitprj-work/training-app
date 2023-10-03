import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import MyComponent from './Component/MyComponent/myComponent';
import DemoClassComponent from './Component/DemoClassComponent';
import MyInputBox from './Component/MyInputBox';
import MyCheckbox from './Component/MyCheckbox';
import Navbar from './Component/Navbar';
import About from './Pages/About';

function App() {
  const [list, setList] = useState(10);
  const [fizzList, setFzzzList] = useState([]);
  const [name, setName] = useState('');
  const [isChecked, toggleIscheck] = useState(true);

  useEffect(() => {
    console.log("name")
  }, [name])
  return (
    <>

      {/* <label>Name is :{name}</label>
      {/* <DemoClassComponent /> */}
      {/* <MyComponent name="Mitesh" age={15} ></MyComponent>
      <MyComponent name="Tanmay" age={25} ></MyComponent> */}
      {/* <MyComponent name={name} age={20} showAge={isChecked} ></MyComponent>
      <MyInputBox setName={setName} name={name} />
      <MyCheckbox toggleIscheck={toggleIscheck} isChecked={isChecked} /> */}


      <About />
      <MyComponent />

    </>
  );
}
export default App;
