import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	
		if (isSignedIn) {
			return (
			<nav style={{display: 'flex', justifyContent: 'flex-end' }}>
		    <p onClick={() => onRouteChange('signout')} className='f4 dib white bg-black mr3 mr4-ns pv2 ph2 pointer navbar-button'>Sign Out</p>
		    </nav>
		           );
		} else {
			return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
		    <p onClick={() => onRouteChange('signin')} className="f4 dib white bg-black mr1 mr4-ns pv2 ph2 pointer navbar-button">Sign In</p>
		    <p onClick={() => onRouteChange('register')} className="f4 dib white bg-black mr1 mr4-ns pv2 ph2 pointer navbar-button">Register</p>
		    </nav>
		           );
		}



	
}


export default Navigation;