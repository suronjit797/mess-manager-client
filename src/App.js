import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import setAuthToken from './utilities/setAuthToken';
import './App.css';

import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import AddMember from './Pages/AddMember'
import AddMoney from './Pages/AddMoney'
import AddMeal from './Pages/AddMeal'
import AddSingleMeal from './Pages/AddSingleMeal'
import AddMealCost from './Pages/AddMealCost'
import AddOtherCost from './Pages/AddOtherCost'
import ActiveMonthDetails from './Pages/ActiveMonthDetails'
import AllMember from './Pages/AllMembers';
import RemoveMember from './Pages/RemoveMember';
import ChangeManager from './Pages/ChangeManager';
import StartNewMonth from './Pages/StartNewMonth';
import SwitchActiveMonth from './Pages/SwitchActiveMonth';
import DeleteOldMonth from './Pages/DeleteOldMonth';
import DeleteMess from './Pages/DeleteMess';
import Profile from './Pages/Profile';
import Notifications from './Pages/Notifications';
import CreateMess from './Pages/CreateMess';

const token = localStorage.getItem('token')
if (token) {
  setAuthToken(token)
}

function App() {

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add-member' element={<AddMember />} />
        <Route path='/add-money' element={<AddMoney />} />
        <Route path='/add-meal' element={<AddMeal />} />
        <Route path='/add-single-meal' element={<AddSingleMeal />} />
        <Route path='/add-meal-cost' element={<AddMealCost />} />
        <Route path='/add-other-cost' element={<AddOtherCost />} />
        <Route path='/active-month-details' element={<ActiveMonthDetails />} />
        <Route path='/all-members' element={<AllMember />} />
        <Route path='/remove-member' element={<RemoveMember />} />
        <Route path='/change-manager' element={<ChangeManager />} />
        <Route path='/start-new-month' element={<StartNewMonth />} />
        <Route path='/switch-active-month' element={<SwitchActiveMonth />} />
        <Route path='/delete-month' element={<DeleteOldMonth />} />
        <Route path='/delete-mess' element={<DeleteMess />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/create-mess' exact element={<CreateMess />} />
        <Route path='/' exact element={<Home />} />

        <Route path='*' element={''} />
      </Routes>
    </div>
  );
}

export default App;
