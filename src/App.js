import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<h1>Signup</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
