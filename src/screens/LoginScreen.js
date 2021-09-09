import React, {useState} from 'react'
import "./LoginScreen.css"
import SignUpScreen from './SignUpScreen'

function LoginScreen() {

    const [signIn, setSignIn] = useState(false)

    return (
        <div className="login_screen">
            <div className ="login_screen_background">
                <img className ="login_screen_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="netflix logo"></img>
            </div>

            <button onClick={() => setSignIn(true)} className="login_screen_button">
                Sign In
            </button>

            <div className="login_screen_gradient"></div>

            <div className="login_screen_body">

                {signIn ? (
                    <SignUpScreen/>
                ) : (
                    <>
                        <h1>Unlimited films, TV programs and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your memebership.</h3>
                        <div className="login_screen_input">
                            <form>
                                <input type="email" placeholder="email address"/>
                                <button onClick={() => setSignIn(true)} className="login_screen_get_started">GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default LoginScreen
