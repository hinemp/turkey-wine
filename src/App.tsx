import "./App.css";
import { Login } from "./components/Login";
import { PersistentDrawerLeft } from "./components/Nav";

function App() {
  const login = Login({});
  console.log(typeof login);
  const nav = PersistentDrawerLeft(login);

  return <div className="App">{nav}</div>;
}

export default App;
