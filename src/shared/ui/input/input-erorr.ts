import Block from '../../utils/block';

class InputError extends Block {
    render(): string {
        return `
            <span class="error">{{errorText}}</span>
        `;
    }
}

export { InputError };
