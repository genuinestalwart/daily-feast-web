export const toAllowedNumber = (value: number | undefined, gt: number) => {
	return value !== undefined && value > gt ? String(value) : undefined
}

export const toAllowedString = <T extends string>(
	value: string | undefined,
	allowedValues: readonly T[],
) => {
	return allowedValues.includes(value as T) ? (value as T) : undefined
}

export const toBoolean = (value?: string) => {
	return value === 'true' ? true : value === 'false' ? false : undefined
}

export const toNumber = (value?: string) => {
	const num = Number(value)
	return value?.trim() !== '' && !Number.isNaN(num) ? num : undefined
}
