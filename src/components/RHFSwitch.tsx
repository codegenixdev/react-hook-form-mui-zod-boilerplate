import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import { FormControlLabel, Switch } from '@mui/material';

interface Props<T extends FieldValues> {
	name: Path<T>;
	label: string;
}

export function RHFSwitch<T extends FieldValues>({ name, label }: Props<T>) {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<FormControlLabel
					control={<Switch {...field} checked={field.value} />}
					label={label}
				/>
			)}
		/>
	);
}
