import React from 'react';
import Notification from 'react-notify-toast';
import PageLoader from './components/pageLoader/pageLoader';
import Signup  from './containers/Auth/Signup/signup';

const App = () => (
  <React.Fragment>
  <PageLoader />
  <Notification />
  <Signup/>
</React.Fragment>
)

export default App;