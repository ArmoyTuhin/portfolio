import React from 'react';

const certificates = [
	{
		name: 'AWS Certified Solutions Architect',
		issuer: 'Amazon Web Services',
		year: '2024',
		image: '/certificates/aws.png',
		link: '#',
		description: 'Validated expertise in designing and deploying scalable systems on AWS.',
	},
	{
		name: 'Deep Learning Specialization',
		issuer: 'Coursera (Andrew Ng)',
		year: '2023',
		image: '/certificates/deep-learning.png',
		link: '#',
		description: 'Comprehensive understanding of neural networks and deep learning techniques.',
	},
	// Add more as needed
];

const Certificates = () => (
	<section id="certificates" className="section-padding bg-background mb-12">
		<h2 className="text-3xl font-bold mb-8 text-center">Certificates</h2>
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
							{cert.description}
						</div>
						{cert.link && (
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