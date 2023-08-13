import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const Loginpage = () => {
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }
  return (
    isAuthenticated && (
    <div>
        <h2>
            Welcome {user.name}
        </h2>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
        </button>
    </div>
    )
  )
}

export default Loginpage
