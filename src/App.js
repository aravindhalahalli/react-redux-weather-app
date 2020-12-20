import React from "react";
import SearchBar from "../src/components/Search";
import BackButton from "../src/components/BackButton";
import ThemeChanger from "../src/components/ThemeChanger";
import LogoHeader from "../src/components/LogoHeader";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import { geolocateUser } from "./store/actions";

class App extends React.Component {
  componentDidMount() {
    geolocateUser();
  }
  render() {
    return (
      <div className="App">
        <h1>React Redux Weather Forecast App</h1>
        <ThemeChanger />
        <LogoHeader />
        <SearchBar />
        <Body />
        <Footer />
        <BackButton />
      </div>
    );
  }
} // App

export default App;
