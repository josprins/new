import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import LineIcon from 'react-lineicons';

function Header() {
	const [ information, setInformation ] = useState('');
	const [ navigationToggler, setNavigationToggler ] = useState(false);

	const handleNavigationToggler = () => {
		setNavigationToggler(!navigationToggler);
	};

	useEffect(() => {
		axios.get('/api/information').then((response) => {
			setInformation(response.data);
		});
	}, []);

	return (
		<nav className={navigationToggler ? 'mi-header is-visible' : 'mi-header'}>
			<button onClick={handleNavigationToggler} className="mi-header-toggler">
				{!navigationToggler ? <LineIcon name="menu" /> : <LineIcon name="close" />}
			</button>
			<div className="mi-header-inner">
				<div className="mi-header-image">
					<Link to="/">
						<img src={information.brandImage} alt="brandimage" />
					</Link>
				</div>
				<ul className="mi-header-menu">
					<li>
						<NavLink exact to="/">
							<span>Home</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/about">
							<span>Over mij</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/resume">
							<span>Curriculum</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/portfolios">
							<span>Portfolio</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact">
							<span>Contact</span>
						</NavLink>
					</li>
				</ul>
				<p className="mi-header-copyright">
					&copy; {new Date().getFullYear()}{' '}
					<b>
						<Link to="/"> Jos Prins</Link>
					</b>
				</p>
			</div>
		</nav>
	);
}

export default Header;