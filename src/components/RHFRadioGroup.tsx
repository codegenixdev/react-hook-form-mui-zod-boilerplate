import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from '@mui/material';

import { Option } from '../types/option';

type Props<T extends FieldValues> = {
	name: Path<T>;
	options?: Option[];
	label: string;
};

export function RHFRadioGroup<T extends FieldValues>({
	name,
	options,
	label,
}: Props<T>) {
	const { control } = useFormContext<T>();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<FormControl {...field} error={!!error}>
					<FormLabel>{label}</FormLabel>
					<RadioGroup>
						{options?.map((option) => (
							<FormControlLabel
								value={option.id}
								control={<Radio checked={field.value === option.id} />}
								label={option.label}
								key={option.id}
							/>
						))}
					</RadioGroup>
				</FormControl>
			)}
		></Controller>
	);
}
