import React from 'react';
//Content
import GlobalContent from './globalContent';
import CountryContent from './countryContent';
//Router
import { Switch, Route} from 'react-router-dom';

function MainContent() {
    return (
        <Switch>
            <Route exact path="/">
                <GlobalContent />
            </Route>
            <Route path="/country">
                <CountryContent />
            </Route>
        </Switch>
    )
};

export default MainContent;