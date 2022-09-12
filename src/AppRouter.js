import {
  BrowserRouter as Router, // Роутер, который использует функционал браузера
  Routes, // рендерит первый <Route>, совпавший с URL
  Route, //укажет маршруты path="..." element={<.../>}
} from 'react-router-dom';

import StartPage from './components/StartPage';
import UnoTodo from './UnoTodo';

// window.env = { ENV_HOST: '/mwalexandra/uno-todo/', }
// export const host = window.env.ENV_HOST;

function AppRouter() {

  return (
    <Router>
      <Routes>
        <Route path='/app' element={<UnoTodo />} />
        <Route path='/' element={<StartPage />} />
        <Route path="*" element={<h1>404<br/>Нет такой страницы</h1>} />
      </Routes>
    </Router>
  )
}


export default AppRouter;
