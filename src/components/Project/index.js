function Project({ project }) {
	return (
		<div className={'col-lg-6 col-md-6 portfolio-item filter-' + project.type}>
			<img
				src={'./components/assets/img/portfolio/' + project.img + '.png'}
				className='img-fluid'
				alt={project.name}
			/>
			<div className='portfolio-info justify-content-between'>
				<div>
					<h4>{project.name}</h4>
					<p>{project.description}</p>
				</div>
				<div>
					<a
						href={'../assets/img/portfolio/' + project.img + '.png'}
						data-gall='portfolioGallery'
						className='venobox preview-link'
						title={project.name}
					>
						<i className='bx bx-plus'></i>
					</a>
					<a
						href={project.deployedAt}
						className='details-link'
						title='More Details'
					>
						<i className='bx bx-link'></i>
					</a>
					<a href={project.repo} className='github-link' title='More Details'>
						<i className='bx bxl-github'></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Project;
