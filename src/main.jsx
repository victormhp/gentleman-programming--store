import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FiltersProvider } from './context/filters';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </BrowserRouter>
);
