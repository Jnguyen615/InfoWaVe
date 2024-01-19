import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import ErrorPage from '../ErrorPage/ErrorPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
  // return (
  //   <div className="App">
  //     <MainPage />
  //   </div>
  // );
}

export default App;
