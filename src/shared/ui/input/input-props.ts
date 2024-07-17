import { InputElement } from './input-element';

export interface InputProps {
    onChange?: () => void;
    onBlur?: () => void;
    type?: string;
    name?: string;
    placeholder?: string;
    label?: string;
    value?: string;
    inputText?: string;
    errorText?: string;
    events?: InputElement;
    divInputClass?: string;
    class?: string;
}
