import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contacts from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts}/>
      </Switch>
      <Footer/> */}
    </div>
  );
}

export default App;
