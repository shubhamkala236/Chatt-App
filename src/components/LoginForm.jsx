import { useState } from "react";
import axios from "axios";

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': 'b68e36d4-9bd1-43cd-9dbb-5e55ec44c643', 'User-Name': username, 'User-Secret': 'password' };

        //username || password => chatengine -> give messages
        //works out -> logged in
        try {
             axios.get('https://api.chatengine.io/chats', { header: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
             setError('');

        } catch (error) {
            setError('Oops , incorrect credentials.')

        }
        
        
        
    }
    // error -> try with new credentials/username ...


    return (
        <div className="wrapper" >
            <div className="form">

            <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                <div align="center">
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>

            </form>

            </div>
        </div>
    )
}

export default LoginForm;
