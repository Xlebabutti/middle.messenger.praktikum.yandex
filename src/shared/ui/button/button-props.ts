export interface ButtonProps {
    type: 'primary' | 'link' | 'submit';
    text: string;
    onClick: () => void;
}
