import './style.css';

function Header() {
	return (
		<header id='header' className='fixed-top '>
			<div className='container d-flex align-items-center'>
				<h1 className='logo mr-auto'>
					<a href='index.html'>Alex Rowe</a>
				</h1>

				<nav className='nav-menu d-none d-lg-block'>
					<ul>
						<li className='active'>
							<a href='#hero'>Home</a>
						</li>
						<li>
							<a href='#about'>About</a>
						</li>
						<li>
							<a href='#portfolio'>Portfolio</a>
						</li>
						<li>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
