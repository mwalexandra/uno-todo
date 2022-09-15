import {
  BrowserRouter as Router, // Роутер, который использует функционал браузера
  Routes, // рендерит первый <Route>, совпавший с URL
  Route, //укажет маршруты path="..." element={<.../>}
} from 'react-router-dom';

import StartPage from './components/StartPage';
import UnoTodo from './UnoTodo';

window.env = { ENV_HOST: '/build-unotodo/', }
const host = window.env.ENV_HOST;

function AppRouter() {

  return (
    <Router>
      <Routes>
        <Route path={`${host}app`} element={<UnoTodo />} />
        <Route path={`${host}`} element={<StartPage />} />
        <Route path="*" element={<h1>404<br/>Нет такой страницы</h1>} />
      </Routes>
    </Router>
  )
}

export default AppRouter;
