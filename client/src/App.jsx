import "./App.css";
import Calendar from "./components/Calendar";
import MainPage from "./components/MainPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/calendar' element={<Calendar />} />
    </Routes>

  );
}


export default App;
