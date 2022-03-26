import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AllNotes from './components/AllNotes';
import AddNoteForm from './components/AddNoteForm';

class App extends React.Component {
    constructor(props) {
        super(props)
    }

   render() {
       return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path='/listNotes'>
                            <AllNotes />
                        </Route>
                        <Route exact path='/createNote'>
                            <AddNoteForm />
                        </Route>
                    </Switch>
                </div>
            </Router>
       )
   }
}


render(
<Provider store = {store}>
<App />
</Provider>,
 document.querySelector('#app')
 );
