import ColumnaDia from "./components/ColumnaDia";
import "./App.css";
import MiniaturaExamen from "./components/MiniaturaExamen";
import MiniaturaBloqueHorario from "./components/MiniaturaBloqueHorario";
import Calendar from "./components/Calendar";

function App() {
  return (
    
    <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/calendar' element={<Calendar />} />
    </Routes>

  );
}


export default App;
