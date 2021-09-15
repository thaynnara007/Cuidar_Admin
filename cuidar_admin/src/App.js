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
import History from './pages/history';
import MyInfo from './pages/myInfo';
import PatientDetails from './pages/patientDetails';
import EditCategory from './pages/categories/editCategory';
import Activities from './pages/activities';
import EditActivity from './pages/activities/editActivity';

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
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/users">
                <Users />
              </Route>
              <Route exact path="/patients">
                <Patients />
              </Route>
              <Route exact path="/patient/:id">
                <PatientDetails />
              </Route>
              <Route exact path="/categories">
                <Categories />
              </Route>
              <Route exact path="/category/:id/activities">
                <Activities />
              </Route>
              <Route exact path="/category/:id">
                <EditCategory />
              </Route>
              <Route exact path="/activity/:id">
                <EditActivity />
              </Route>
              <Route exact path="/history">
                <History />
              </Route>
              <Route exact path="/profile">
                <MyInfo />
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
