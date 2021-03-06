import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage'
import BattleDetailsPage from  './components/pages/BattleDetailsPage';
import darkTheme from "./components/themes/darkTheme";


import TopNavigation from './components/Navigation/TopNavigation'

const App =() => {

    return (
        <div>

            <container>
                <div>
                    <Route path="/got-react" exact component={HomePage}/>
                    <Route path="/battleDetail" exact component={BattleDetailsPage}/>
                </div>
            </container>
        </div>
    )
}

export default App;
