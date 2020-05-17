import React from 'react';
import {Route} from 'react-router-dom';
import {ThemeProvider} from "styled-components";
import container from './components/Containers/container.js'
import HomePage from './components/pages/HomePage'
import BattleDetailsPage from  './components/pages/BattleDetailsPage';
import darkTheme from "./components/themes/darkTheme";

import TopNavigation from './components/Navigation/TopNavigation'

const App =() => {

    return (
        <div>

            <container>
                <div>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/battleDetail" exact component={BattleDetailsPage}/>
                </div>
            </container>
        </div>
    )
}

export default App;
