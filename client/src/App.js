import { Switch, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddStudent} />
          <Route path="/edit/:id" component={EditStudent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
