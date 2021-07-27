import React from 'react'
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

//project id from chatengine website after login
const App = () => {
    
    if(!localStorage.getItem('username')) return <LoginForm/>


    return (
        <ChatEngine
           height="100vh"
           projectID="b68e36d4-9bd1-43cd-9dbb-5e55ec44c643"
           userName={localStorage.getItem('username')}
           userSecret={localStorage.getItem('password')}
           renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
           />
       )
   }

   export default App;
        
