import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import MyComponent from './Component/myComponent';

function App() {
  const [list, setList] = useState(10);
  const [fizzList, setFzzzList] = useState([]);
  useEffect(() => {
    let temparry = [];
    for (let i = 1; i <= list; i++) {
      if (i % 3 == 0) {
        temparry.push('Fizz');  // BUZZ i%5 =  FIZZBUZZ
      } else {
        temparry.push(i);
      }
    }
    setFzzzList(temparry);
  }, [list])
  return (
    <>
      <div>
        list value is {list}
        <div> if I % 3=== 0 print Fizz</div>
        <div> if I % 5=== 0 print Buzz</div>
        <div> if I % 3=== 0 && I % 5=== 0 print FIZZBuzz</div>
        <button onClick={() => { setList(list + 10) }}> Click Me!</button>
        {fizzList.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </>
  );
}
export default App;
