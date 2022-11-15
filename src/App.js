import "./App.css";
import Routespath from "./common/RoutesPath/routespath";
import Header from "./components/header/header";
import ReferandEarn from "./components/referandearn";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main__body">
        <Routespath paths={["UI/UX", "Refer & Earn"]} />
        <ReferandEarn />
        <p className="termsand">Terms & Conditions</p>
      </div>
    </div>
  );
}

export default App;
