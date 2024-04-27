import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import { Slider, Typography } from '@mui/material';

interface Props<T extends FieldValues> {
	name: Path<T>;
	label: string;
}

export function RHFSlider<T extends FieldValues>({ name, label }: Props<T>) {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<>
					<Typography>{label}</Typography>
					<Slider valueLabelDisplay="auto" {...field} />
				</>
			)}
		/>
	);
}
