import React, { useState , useEffect } from 'react';
import '../styles/Homepage.scss';
import logo from '../images/shiedLogo.png'
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

// import { Navigate,useNavigate } from 'react-router-dom';
const Homepage = () => {
    // const isAuthenticate = useNavigate();
    // useEffect( () => {
    //     if(isAuthenticate){
    //         Navigate('/Loginpage');
    //     }
    // },[isAuthenticate,Navigate])

    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate(); // Initialize useNavigate
    const [loaded , setLoaded] = useState(false)
    useEffect( () => {
        const time = setTimeout(() => {setLoaded(true)},500)

        return () => clearTimeout(time)
    },[]);
    
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/Loginpage'); // Redirect to Loginpage using useNavigate
        }
    }, [isAuthenticated, navigate])
    

    return (
        <div className='Homepage'>
            <div className="radar">
                <div className="radar__dot"></div>
                <div className="radar__dot"></div>
                <div className="radar__dot"></div>
            </div>
            <div className={`Homepage-one ${loaded ? 'Homepage-one-load':''}`}>
                Topics
            </div>
            <div className={`Homepage-two ${loaded ? 'Homepage-two-load':''}`}>
                Checklists
            </div>
            <div className='Homepage-three'>
                Topics affect design on a global scale, in the context of a website or app. These are great to be familiar with as you work across different areas of design, as they'll come up in discussion more than you think.
            </div>
            <button className='home-btn' onClick={() => loginWithRedirect()}>
                Login
            </button>
            <div className='logo'>
                <img className='logo-one' src={logo}/>
           </div>
           
        </div>
    );
}

export default Homepage;
