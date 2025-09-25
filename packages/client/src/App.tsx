import { Route, Routes } from 'react-router';
import './App.css';
import Ui from './panels/control/ui';

function App() {
   return (
      <Routes>
         <Route path="/" element={<Ui />} />
      </Routes>
   );
}

export default App;
