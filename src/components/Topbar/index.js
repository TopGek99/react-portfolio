import './style.css';

function TopBar() {
	return (
		<div id='topbar' className='d-none d-lg-flex align-items-center fixed-top '>
			<div className='container d-flex'>
				<div className='contact-info mr-auto'>
					<i className='icofont-envelope'></i>{' '}
					<a href='mailto:arowe890@gmail.com'>arowe890@gmail.com</a>
					<i className='icofont-phone'></i> +61 0422455542
				</div>
				<div className='social-links'>
					<a href='https://github.com/TopGek99/' className='skype'>
						<i className='icofont-github'></i>
					</a>
					<a
						href='https://www.linkedin.com/in/alex-rowe99/'
						className='linkedin'
					>
						<i className='icofont-linkedin'></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default TopBar;
