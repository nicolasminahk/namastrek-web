// import logo from './logo.svg'
import namastrek from './namastrek.png'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import Calendar from './components/Calendar'

function App() {
    const { isAuthenticated } = useAuth0()
    return (
        <div className="App">
            <header className="App-header">
                <img src={namastrek} className="App-logo" alt="logo" />
                <div style={{ paddingTop: 50 }}>
                    {isAuthenticated ? (
                        <>
                            <Profile />
                            <LogoutButton />
                        </>
                    ) : (
                        <LoginButton />
                    )}
                    {/* <Calendar /> */}
                </div>
            </header>
        </div>
    )
}

export default App
