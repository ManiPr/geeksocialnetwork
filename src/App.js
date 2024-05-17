import logo from './logo.svg';
import './App.css';
import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  const router = useRoutes(routes);

  return (
    <div className="App">
      {router}
    </div>
  );
}

export default App;
// شروع پر قدرت کار بریم جلو ببینیم چی میشه 