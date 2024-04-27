type Create = {
	variant: 'create';
};

type Edit = {
	variant: 'edit';
	id: number;
};

export type ApiCommon = {
	email: string;
	name: string;
	states: string[];
	gender: string;
	languagesSpoken: string[];
	skills: string[];
	registrationDateAndTime: string;
	formerEmploymentPeriod: [string, string];
	salaryRange: [number, number];
	isTeacher: boolean;
	students: {
		name: string;
	}[];
};

export type ApiCreateEdit = ApiCommon & (Create | Edit);
export type ApiGet = Edit & ApiCommon;
