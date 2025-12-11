import React from 'react';

const volunteeringList = [
	{
		org: 'SEC Computer Society',
		role: 'General Secretary',
		year: '11/2021 – 11/2022',
		desc: 'Organized the university\'s annual programming contest and coordinated departmental technical events.',
	},
	{
		org: 'Bohubrihi - Edtech Platform',
		role: 'Campus Director',
		year: '01/2021 – 01/2022',
		desc: 'Organized programming sessions and workshops on behalf of Bohubrihi to enhance student skills.',
	},
	{
		org: 'SECPA - University Photography Club',
		role: 'Vice President & Instructor',
		year: '01/2020 – 01/2022',
		desc: 'Served as Image Aesthetics Instructor and conducted workshops on visual composition and photography techniques. My work has won several national and international awards at photography exhibitions.',
	},
	{
		org: 'HULT Prize, SEC',
		role: 'Founding Campus Director',
		year: '2019 – 2020',
		desc: 'Organized online seminars and programs to promote social entrepreneurship on campus.',
	},
	{
		org: 'Java & Data Structures',
		role: 'Instructor',
		year: '2022 – Present',
		desc: 'Mentored over 10+ students, resulting in improved programming skill and successful project completions.',
	}
];

const Volunteering = () => (
	<section id="volunteering" className="section-padding bg-background mb-12">
		<h2 className="text-3xl font-bold mb-8 text-center">Extracurricular Activities & Teaching</h2>
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