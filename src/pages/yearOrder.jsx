import "./../App.css";
import Header from "./../components/header";
import Banner from "./../components/banner";
import OrderedList from "../functions/yearOrder";
import CarList from "../components/carList";

export default function YearOrder() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <CarList Cars={OrderedList} />
    </div>
  );
}
