import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <div>
      <Switch>
      <Route path="/" exact>
          <Redirect to ='/quotes' />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId" exact>
          <QuoteDetail/>
        </Route>
        <Route path="/new-quotes" exact>
          <NewQuote/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
