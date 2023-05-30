import React, { ReactNode } from 'react';

const Section = ({ children }: { children: ReactNode }) => {
	return (
		<section id="section" className="bg-slate-50 flex justify-center items-center p-8 w-full">
			{children}
		</section>
	);
};

export default Section;
