import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './components/login';
import Home from './pages/homepage';
import NotFound from './pages/notFound';

const queryClient = new QueryClient();

toast.configure();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <main>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/*">
                <NotFound />
              </Route>
            </Switch>
          </main>
        </Router>
      </QueryClientProvider>
      <ToastContainer />
    </>
  );
}

export default App;
