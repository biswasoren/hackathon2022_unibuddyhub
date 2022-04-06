import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { StudentHome } from './components/StudentHome/StudentHome';
import { PosterHome } from './components/PosterHome/PosterHome';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentHome/>} />
      <Route path="/poster" element={<PosterHome/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
