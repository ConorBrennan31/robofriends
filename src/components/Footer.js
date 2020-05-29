import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
			<nav>
				<ul>
					<li><a href="">About</a></li>
	        		<li><a href="">Products</a></li>
	        		<li className="push"><a href="">Contact</a></li>
				</ul>
			</nav>
	);
}

export default Footer;