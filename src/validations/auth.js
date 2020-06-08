import {
    minLength,
    maxLength,
} from './field-validation';

export const usernameMaxLength = maxLength(200);
export const usernameMinLength = minLength(2);

export const passwordMaxLength = maxLength(500);
export const passwordMinLength = minLength(8);

export const passwordsMustMatch = (value, allValues) =>
    value !== allValues.password ?
        'Passwords do not match' :
        undefined;