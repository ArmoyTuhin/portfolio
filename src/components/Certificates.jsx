import React from 'react';

const certificates = [
	{
		name: 'Best Emerging Engineer Award',
		issuer: 'Golden Harvest Infotech',
		year: '2024',
		location: 'Dhaka, Bangladesh',
		image: '/certificates/best-engineer.png',
		link: '#',
		description: 'Recognized for outstanding performance and innovative contributions to engineering projects.',
	},
	{
		name: 'Bangladesh-Japan Engineers Training Program',
		issuer: 'Miyazaki University',
		year: '2022',
		location: 'Miyazaki, Japan',
		image: '/certificates/bjet.png',
		link: '#',
		description: 'Competitively selected for an international training program focused on advanced engineering practices and cross-cultural technical exchange.',
	},
	{
		name: 'Best IoT Project Recognition',
		issuer: 'University Course Project',
		year: '2019',
		location: 'Sylhet, Bangladesh',
		image: '/certificates/iot-project.png',
		link: '#',
		description: 'Awarded for developing an innovative Smart Home automation system.',
	},
	{
		name: 'First Prize - Intra-Batch Programming Contest',
		issuer: 'Shahjalal University',
		year: '2018',
		location: 'Sylhet, Bangladesh',
		image: '/certificates/programming-contest.png',
		link: '#',
		description: 'Secured first place in competitive programming contest among batch peers.',
	},
	{
		name: 'First Prize - Essay Writing Competition',
		issuer: 'University Campus',
		year: '2017',
		location: 'Sylhet, Bangladesh',
		image: '/certificates/essay-writing.png',
		link: '#',
		description: 'Secured first place in university-wide essay writing competition.',
	},
	{
		name: 'District Commissioner Scholarship Award',
		issuer: 'Academic Excellence',
		year: '2016',
		location: 'Chittagong, Bangladesh',
		image: '/certificates/dc-scholarship.png',
		link: '#',
		description: 'Awarded scholarship for achieving GPA 5.0/5.0 in Higher Secondary Certificate examination.',
	}
];

const Certificates = () => (
	<section id="certificates" className="section-padding bg-background mb-12">
		<h2 className="text-3xl font-bold mb-8 text-center">Achievements & Honors</h2>
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
			{certificates.map((cert, idx) => (
				<div
					key={idx}
					className="relative group bg-muted rounded-xl shadow-lg border overflow-hidden transition-transform hover:scale-105"
				>
					<img
						src={cert.image}
						alt={cert.name}
						className="w-full h-40 object-contain bg-white"
					/>
					{/* Overlay on hover */}
					<div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center p-4">
						<div className="text-lg font-semibold text-white mb-1">
							{cert.name}
						</div>
						<div className="text-sm text-gray-200 mb-2">
							{cert.issuer} &middot; {cert.year}
						</div>
						<div className="text-xs text-gray-300 mb-2">
							{cert.location}
						</div>
						<div className="text-xs text-gray-300 mb-2">
							{cert.description}
						</div>
						{cert.link && cert.link !== '#' && (
							<a
								href={cert.link}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-300 underline text-xs"
							>
								View Certificate
							</a>
						)}
					</div>
				</div>
			))}
		</div>
	</section>
);

export default Certificates;