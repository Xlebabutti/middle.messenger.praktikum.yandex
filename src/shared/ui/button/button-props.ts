export interface ButtonProps {
    type: 'primary' | 'link';
    text: string;
    onClick: () => void;
}
