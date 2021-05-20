import './style.css';

function Footer() {
	return (
		<footer id='footer'>
			<div className='footer-top'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 col-md-6'>
							<div className='footer-info'>
								<h3>Alex Rowe</h3>
								<p>
									<strong>Phone:</strong> +61 0422455542
									<br />
									<strong>Email:</strong> arowe890@gmail.com
									<br />
								</p>
								<div className='social-links mt-3'>
									<a href='https://github.com/TopGek99/' className='skype'>
										<i className='bx bxl-github'></i>
									</a>
									<a
										href='https://www.linkedin.com/in/alex-rowe99/'
										className='linkedin'
									>
										<i className='bx bxl-linkedin'></i>
									</a>
								</div>
							</div>
						</div>

						<div className='col-lg-2 col-md-6 footer-links'>
							<h4>Useful Links</h4>
							<ul>
								<li>
									<i className='bx bx-chevron-right'></i>{' '}
									<a href='#hero'>Home</a>
								</li>
								<li>
									<i className='bx bx-chevron-right'></i>{' '}
									<a href='#about'>About Me</a>
								</li>
								<li>
									<i className='bx bx-chevron-right'></i>{' '}
									<a href='#portfolio'>Portfolio</a>
								</li>
								<li>
									<i className='bx bx-chevron-right'></i>{' '}
									<a href='#contact'>Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
