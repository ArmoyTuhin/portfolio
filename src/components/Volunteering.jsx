import React from 'react';

const volunteeringList = [
	{
		org: 'IEEE Student Branch',
		role: 'Event Volunteer',
		year: '2023',
		desc: 'Assisted in organizing tech seminars and coding competitions.',
	},
	{
		org: 'Local NGO',
		role: 'Teaching Volunteer',
		year: '2022',
		desc: 'Taught basic computer skills to underprivileged children.',
	},
	// Add more as needed
];

const Volunteering = () => (
	<section id="volunteering" className="section-padding bg-background mb-12">
		<h2 className="text-3xl font-bold mb-8 text-center">Volunteering</h2>
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
			{volunteeringList.map((item, idx) => (
				<div
					key={idx}
					className="bg-muted rounded-xl shadow-lg border p-6"
				>
					<div className="font-semibold mb-1">
						{item.role} @ {item.org}
					</div>
					<div className="text-xs text-muted-foreground mb-2">
						{item.year}
					</div>
					<div className="text-muted-foreground">{item.desc}</div>
				</div>
			))}
		</div>
	</section>
);

export default Volunteering;