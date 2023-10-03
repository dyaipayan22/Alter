import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './components/layout/UserLayout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<UserLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
