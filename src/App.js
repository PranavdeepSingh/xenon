import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Styles
import './App.css';

// Pages
import Account from './pages/Account/Account';
import Register from './pages/Account/Register';
import Home from './pages/Home/Home';
import Form from './pages/ContactUS/form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />}/> 
          <Route path='login' element={<Account />} />
          <Route path='register' element={<Register />} />
          <Route path='contact' element={<Form />} />


        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
