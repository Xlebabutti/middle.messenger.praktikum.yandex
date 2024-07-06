import { Block, Props } from '../../utils/block';

class MessageList extends Block {
    constructor(props: Props) {
        super({
            ...props,
            events: {
                click: props.onClick,
            },
        });
    }

    render(): string {
        return `
            <div>
                {{{messages}}}
            </div>
        `;
    }
}

export { MessageList };
