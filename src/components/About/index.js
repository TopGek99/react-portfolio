import './style.css';
import Image from '../assets/img/about.png';
import Resume from '../assets/pdfs/Resume.pdf';

function About() {
	return (
		<section id='about' className='about'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 order-1 order-lg-2' data-aos='fade-left'>
						<img src={Image} className='img-fluid' alt='' />
					</div>
					<div
						className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content'
						data-aos='fade-right'
					>
						<h3>About Me</h3>
						<p className='font-italic'>
							Full stack developer/software engineer with a background in
							hospitality, having transitioned to this industry for more of a
							challenge and make use of excellent problem-solving skills.
							Graduated from the University of Adelaide Full Stack Web
							Development coding bootcamp, gaining proficiency in DOM
							manipulation with JavaScript and jQuery, working with server-side
							APIs with AJAX, backend technologies such as Node.js and Express,
							databases such as MySQL and MongoDB and finally working with
							ReactJS to create modern web applications. These skills were
							applied across multiple projects and homework assignments
							throughout the duration of the course. Currently studying a
							bachelor’s degree in Computer Science at the University of
							Adelaide, while also having spent 4 years developing strength in
							teamwork in hospitality.
						</p>
						<a className='btn-get-started' href={Resume} download>
							{' '}
							<i className='bx bxs-download'></i> Resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
