import './style.css';

function Hero() {
	return (
		<section id='hero' className='d-flex align-items-center'>
			<div
				className='container position-relative'
				data-aos='fade-up'
				data-aos-delay='500'
			>
				<h1>Alex Rowe</h1>
				<h2>
					Full Stack Developer, Software Engineer and Computer Science Student
				</h2>
				<a href='#about' className='btn-get-started scrollto'>
					Learn More
				</a>
			</div>
		</section>
	);
}

export default Hero;
