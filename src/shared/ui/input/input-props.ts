import { InputElement } from './input-element';

export interface InputProps {
    onBlur?: () => void;
    type: string;
    name: string;
    placeholder: string;
    label: string;
    value?: string;
    inputText?: string;
    errorText?: string;
    events?: InputElement;
}