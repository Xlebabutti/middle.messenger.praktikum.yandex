import { InputElement } from './input-element';

export interface InputProps {
    onBlur?: () => void;
    type: string;
    name: string;
    placeholder: string;
    label: string;
    value?: string;
    inputText?: string;
    errorName?: string;
    events?: InputElement;
}
