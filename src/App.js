import "./App.css";
import NavBarItems from "./components/navbar";
import ItemList from "./components/itemListContainer";

function App() {
  return (
    <div className="App">
      <div>
        <NavBarItems></NavBarItems>
      </div>
      <header className="App-header">
        <ItemList greeting="Bienvenidos a mi Proyecto"></ItemList>
      </header>
    </div>
  );
}

export default App;
