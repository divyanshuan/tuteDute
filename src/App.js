import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routespath from "./common/RoutesPath/routespath";
import Header from "./components/header/header";
import ReferandEarn from "./components/referandearn";
import Friendreffed from "./friendRefered/friendreffed";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Header />}>
    //       <Route index element={<ReferandEarn />} />

    //       <Route path="*" element={<Friendreffed />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="main__body">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Routespath paths={["UI/UX >", "Refer & Earn >"]} />
                  <ReferandEarn />
                </>
              }
            ></Route>
            <Route
              path="friendrefered"
              element={
                <>
                  <Routespath
                    paths={[
                      ["UI/UX >", "Refer & Earn >", "Friends Referred >"],
                    ]}
                  />
                  <Friendreffed />
                </>
              }
            />
          </Routes>
          <p className="termsand">Terms & Conditions</p>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
