import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RouterMain from './routes/RouterMain';

function App() {
  return (
    <BrowserRouter>
      <RouterMain/>    
    </BrowserRouter>
  );
}

export default App;
