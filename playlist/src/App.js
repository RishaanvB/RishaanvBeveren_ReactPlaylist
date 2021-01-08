import React from "react"
import Logo from "./Components/Logo"
import { Link, Route, Switch } from "react-router-dom"

import SongOverview from "./Containers/SongOverview"
import About from "./Components/About"


function App() {
    return (
        <div className="app-container">
            <nav className="navigation">
                <Logo />
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>

            <Switch>

                <Route exact path="/"> <SongOverview /> </Route>
                <Route path="/about"> <About /> </Route>
            </Switch>
        </div>
    );
};

export default App