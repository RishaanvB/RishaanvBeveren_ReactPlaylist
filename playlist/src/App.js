import React from "react"
import { Link, Route, Switch } from "react-router-dom"

import SongOverview from "./Containers/SongOverview"
import About from "./Components/About"


function App() {
    return (
        <div className="app-container">
            <nav className="navigation">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>

            <Switch>

                <Route exact path="/"> <SongOverview /> </Route>
                <Route path="/about"> <About /> </Route>
            </Switch>
        </div>
    );
};

export default App