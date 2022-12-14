import './App.css';

import { Routes, Route } from 'react-router-dom';

import useLocalStorage from './hooks/useLocalStorage';
import { AuthContext } from './contexts/AuthContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Create from './components/Create/Create';
// import MyBooks from './components/MyBooks/MyBooks';
import Logout from './components/Logout/Logout';

function App() {
    const [user, setUser] = useLocalStorage('user',{
        email: '',
        _id: '',
        accessToken: ''
    });

    const login = (authData) => {
        setUser(authData);
    };

    const onLogout = () => {
        setUser({
            email: '',
            _id: '',
            accessToken: ''
        })
    };

    return (
        <AuthContext.Provider value={{user, login}}>
            <div id="container">
                <Header email={user.email}/>
                <main id="site-content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route path="/details/:id" element={<Details />} />
                        <Route path="/edit/:id" element={<Edit />} />
                        <Route path="/add-pet" element={<Create />} />
                        <Route
                            path="/logout"
                            element={<Logout onLogout={onLogout} />}
                        />
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
