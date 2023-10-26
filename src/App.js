import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import MyComponent from './Component/MyComponent/myComponent';
import LoginComponent from './Component/LoginComponent/LoginComponent';
import DemoClassComponent from './Component/DemoClassComponent';
import MyInputBox from './Component/MyInputBox';
import MyCheckbox from './Component/MyCheckbox';
import Navbar from './Component/Navbar';
import About from './Pages/About';
import { getUserInfo } from '../src/Service/index';
import { Dropdown, Card } from 'semantic-ui-react';
import { fatcheUserInfo, increment, decrement } from './Store/userStore';
import { checkLogin } from "./util/util";


function App() {
  const dispatch = useDispatch();

  const { userInfo, userCounter } = useSelector((state) => state.user)
  const [seletedSity, selectCity] = useState('Gandhinagar');
  const cityOptions = [
    {
      key: 'Pune',
      text: 'Pune',
      value: 'Pune',
    },
    {
      key: 'Ahemdabad',
      text: 'Ahmedabad',
      value: 'Ahmedabad',
    },
    {
      key: 'Gandhinagar',
      text: 'Gandhinagar',
      value: 'Gandhinagar',
    },
  ]

  useEffect(() => {
    //getUserInfoData(seletedSity);
    console.log('THIS IS USEEFFECT');
    dispatch(fatcheUserInfo(seletedSity));
  }, [seletedSity])

  // const getUserInfoData = (city) => {
  //   getUserInfo(city).then((res) => {
  //     if (res && res.data && res.error === false) {
  //       console.log("data", res.data);
  //       setUserData(res.data);
  //     } else {
  //       alert('error');
  //     }
  //   });

  // }
  const getData = (data) => {
    console.log("data", data);
  }
  return (
    <>
      {checkLogin() ? (
        <>
          <Card>
            <Card.Content>
              <div>
                <Dropdown
                  placeholder='Select City'
                  fluid
                  selection
                  options={cityOptions}
                  onChange={(e, { name, value }) => { selectCity(value) }}
                />
              </div>
              <div>
                <table>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Address</th>
                  </tr>
                  {userInfo.map((user) => (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.city}</td>
                      <td>{user.address}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </Card.Content>
          </Card>
          <MyComponent getData={getData} />
        </>
      ) : (
        <LoginComponent />
      )}

    </>
  );
}
export default App;
