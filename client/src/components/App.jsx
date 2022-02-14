import React from "react";
import Footer from "./Footer";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Transactions from "./Transactions";
import Services from "./Services";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
