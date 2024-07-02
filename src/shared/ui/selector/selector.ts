import Block from '../../utils/block';

class Selector extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }

    protected render(): string {
        return `
            <div class="selector">
                <button class="selector-item">
                    <img src="{{src}}" alt="{{alt}}" class="selector-icon" />
                    {{name}}
                </button>
            </div>
        `;
    }
}

export { Selector };
