export const required = value => (value ? undefined : 'Required');

export const maxLength = max => value =>
    value && value.length > max ? `Must less than ${max} characters` : undefined;

export const minLength = min => value =>
    value && value.length < min ? `Must more than ${min} characters` : undefined;

export const length = exactLength => value =>
    value && value.length !== exactLength ? `Must enter exactly ${exactLength} characters` : undefined;

export const number = value =>
    value && isNaN(Number(value)) ? 'Must enter numbers' : undefined;

export const minValue = min => value =>
    value && value < min ? `Must greater than ${min}` : undefined;

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email'
        : undefined;
        