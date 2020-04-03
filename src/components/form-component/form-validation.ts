/* eslint-disable indent */
import { Validators, ValidationSchema } from '@lemoncode/fonk'
import { createFinalFormValidation } from '@lemoncode/fonk-final-form'

const validationSchema: ValidationSchema = {
	field: {
		firstName: [
			{
				validator: Validators.required,
				message: 'Required'
			}
		],
		lastName: [
			{
				validator: Validators.required,
				message: 'Required'
			}
		]
	}
};

export const formValidation = createFinalFormValidation(validationSchema);
