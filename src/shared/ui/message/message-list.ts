/* eslint-disable @typescript-eslint/no-unused-vars */
import Block from '../../utils/block';

class MessageList extends Block {
    constructor(props) {
        super({
            ...props,
            events: {
                click: props.onClick,
            },
        });
    }

    render(): string {
        console.log(this.props.messages);
        return `
            <div>
                {{{messages}}}
            </div>
        `;
    }
}

export { MessageList };
