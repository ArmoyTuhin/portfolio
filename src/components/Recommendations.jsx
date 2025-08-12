import React from 'react';

const recommendations = [
	{
		name: 'Dr. Jane Smith',
		title: 'Professor, University of Example',
		text: 'Tuhin is a dedicated and innovative engineer. His work on machine learning projects was outstanding.',
	},
	{
		name: 'John Doe',
		title: 'Team Lead, Tech Company',
		text: 'Tuhin consistently delivered high-quality code and was a great team player.',
	},
	// Add more as needed
];

const Recommendations = () => (
	<section id="recommendations" className="section-padding bg-background mb-12">
		<h2 className="text-3xl font-bold mb-8 text-center">Recommendations</h2>
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
			{recommendations.map((rec, idx) => (
				<div key={idx} className="bg-muted rounded-xl shadow-lg border p-6 flex flex-col justify-between">
					<div className="italic text-lg mb-4 text-muted-foreground">"{rec.text}"</div>
					<div>
						<div className="font-semibold">{rec.name}</div>
						<div className="text-sm text-muted-foreground">{rec.title}</div>
					</div>
				</div>
			))}
		</div>
	</section>
);

export default Recommendations;