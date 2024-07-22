/* eslint-disable @typescript-eslint/no-explicit-any */
import { APIError } from './type';

export function checkError(response: any): response is APIError {
    return response?.reason;
}
