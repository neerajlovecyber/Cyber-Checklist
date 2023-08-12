import React, { useState , useEffect } from 'react';
import '../styles/Homepage.scss';
import logo from '../images/shiedLogo.png'
const Homepage = () => {
    const [loaded , setLoaded] = useState(false)
    useEffect( () => {
        const time = setTimeout(() => {setLoaded(true)},500)

        return () => clearTimeout(time)
    },[]);
    
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
            <button className='home-btn'>
                Login
            </button>
            <div className='logo'>
                <img className='logo-one' src={logo}/>
           </div>
        </div>
    );
}

export default Homepage;
