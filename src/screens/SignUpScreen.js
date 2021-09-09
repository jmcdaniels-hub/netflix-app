import React from 'react'
import "./SignUpScreen.css"

function SignUpScreen() {

    const register = (e) =>{
        e.preventDefault()
    }

    const signIn = (e) => {
        e.preventDefault()
    }
    return (
        <div className="sign_up_screen">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="Email"/>
                <input placeholder="Password" type="password"/>
                <button onClick={signIn}type="submit">Sign In</button>

                <h4>
                    <span className="sign_up_screen_gray">New to Netflix?</span> 
                    <span onCLick={register} className="sign_up_screen_link">Sign up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen
