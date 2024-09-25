

import SignupInfo from './pages/SignupInfo';
import LoginInfo from './pages/LoginInfo';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';


function App() {
  return (
    //we use the router in the component s
    <Router>
      <>
    
        {/* the switch componenet ensues thst only one route shows up at a given time  */}
        <Routes>
        <Route path = "/" element ={<HomePage/>}/>
          <Route path = "/LoginInfo" element ={<LoginInfo/>}/>
          <Route path = "/SignupInfo" element ={<SignupInfo/>}/>
          <Route path = "/ChatPage" element ={<ChatPage/>}/>
          </Routes>
      </>
    </Router>
  
  );
}

export default App;
