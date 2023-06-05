type Image = {
	href: string;
	alt: string;
};

export type Speaker = {
	id: string;
	name: string;
	profession: string;
	year: 2022 | 2023;
	description: string;
	image: Image;
};

export type Team = {
	id: string;
	name: string;
	role: string;
	image: Image;
};
