import React,{useState} from 'react';
import  '../styles/Loginpage.scss'
import '../styles/Homepage.scss';
import { useAuth0 } from '@auth0/auth0-react'
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
const Loginpage = () => {
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [menu , setMenu] = useState(false);
    const handleMenu = () => { 
        setMenu(!menu); 
    }
    if (isLoading) {
        return <div>Loading ...</div>;
    }



  return (
    isAuthenticated && (
    <>
    <div className='login-main'>
        <div className='login-main-one'>
            <div className='logo-name'>
                <span className='logo-name-one'>Pen</span>track
            </div>
            <div className='login-user-info'>
                <img className='info-pic' src={user.picture} alt={user.name} />
                <h3 className='info-name'>{user.name}</h3>
            </div>
            <div className='mob-nav' onClick={handleMenu}>
                <MenuIcon/>
            </div>
        </div>
        <div className='login-main-two'>
            two
        </div>
        
    </div>
    {menu && (
        <div className='mob-menu'>   
            <img className='info-pic' src={user.picture} alt={user.name} />
            <h3 className='info-name'>{user.name}</h3>
            <button className='log-out-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out <LogoutIcon/>
            </button>    
        </div>
    )}   
    </>
    )
  )
}

export default Loginpage
