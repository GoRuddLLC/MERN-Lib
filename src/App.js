import logo from './logo.svg';
import './App.css';
import './components/ApplicationRootSwitch'
import GRRoot from './components/ApplicationRootSwitch';
import ApplicationRouter from './components/ApplicationRouter';
import IndexPage from './templates';
import GRScreen from './components/ApplicationPage';
import { Route } from 'react-router-dom';
import OrderPage from './templates/order';
function App() {
  return (
    <GRRoot rid="123">
      <ApplicationRouter>
        <Route path="/" element={<IndexPage/>}></Route>
        <Route path="/order" element={<OrderPage/>}></Route>

      </ApplicationRouter>
    </GRRoot>
  );
}

export default App;
