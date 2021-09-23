import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Enter from './pages/enterPage';
import NotFound from './pages/notFound';
import Home from './pages/homepage';
import Users from './pages/users';
import Patients from './pages/patients';
import Categories from './pages/categories';
import MyInfo from './pages/myInfo';
import PatientDetails from './pages/patientDetails';
import EditCategory from './pages/categories/editCategory';
import Activities from './pages/activities';
import EditActivity from './pages/activities/editActivity';
import ActivitySteps from './pages/steps';
import EditStep from './pages/steps/editStep';
import PrivateRoute from './components/privateRouter';

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
                <Enter />
              </Route>
              <PrivateRoute exact path="/home" component={(props) => <Home {...props} />} />
              <PrivateRoute exact path="/users" component={(props) => <Users {...props} />} />
              <PrivateRoute exact path="/patients" component={(props) => <Patients {...props} />} />
              <PrivateRoute
                exact
                path="/patient/:id"
                component={(props) => <PatientDetails {...props} />}
              />
              <PrivateRoute
                exact
                path="/categories"
                component={(props) => <Categories {...props} />}
              />
              <PrivateRoute
                exact
                path="/category/:id/activities"
                component={(props) => <Activities {...props} />}
              />
              <PrivateRoute
                exact
                path="/category/:id"
                component={(props) => <EditCategory {...props} />}
              />
              <PrivateRoute
                exact
                path="/activity/:id/steps"
                component={(props) => <ActivitySteps {...props} />}
              />
              <PrivateRoute
                exact
                path="/activity/:id"
                component={(props) => <EditActivity {...props} />}
              />
              <PrivateRoute exact path="/step/:id" component={(props) => <EditStep {...props} />} />
              <PrivateRoute exact path="/profile" component={(props) => <MyInfo {...props} />} />
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
