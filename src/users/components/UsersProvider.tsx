import { FormProvider, useForm } from 'react-hook-form';

import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';

import { defaultValues, Schema, schema } from '../types/schema';
import { Users } from './Users';

export function UsersProvider() {
	const methods = useForm<Schema>({
		mode: 'all',
		resolver: zodResolver(schema),
		defaultValues,
	});

	return (
		<FormProvider {...methods}>
			<Users />
			<DevTool control={methods.control} />
		</FormProvider>
	);
}
