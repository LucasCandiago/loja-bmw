import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import CarList from "./components/carList";
import CarListItems from "./mocks/Mocks";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <CarList Cars={CarListItems} />
    </div>
  );
}

export default App;
