import { Block, Props } from '../../utils/block';

export interface messageProps {
    id: string;
    name: string;
    message: string;
    time?: string; // Assuming time and count are optional
    count?: string | number;
    click?: (message: MessageData) => void;
}

interface MessageData {
    id: string;
    name: string;
    message: string;
}

class Message extends Block {
    constructor(props: Props) {
        super({
            ...props,
            active: props.activeId === props.id,
            events: {
                click: () => {
                    const { id, name, message } = props;
                    const mess: MessageData = {
                        id: id as string,
                        name: name as string,
                        message: message as string,
                    };
                    (props.click as (message: MessageData) => void)?.(mess);
                },
            },
        });
    }

    render(): string {
        return `
            <li class="messenger__left-item {{ status }}">
                <img
                    src="{{avatar}}"
                    alt="аватар пользователя"
                    class="messenger__left-item-img"
                />
                <div class="messenger__left-item-info">
                    <div class="messenger__left-item-info-left">
                        <div class="messenger__left-item-title">{{ name }}</div>
                        <div
                            class="messenger__left-item-text messenger__left-item-text--message"
                        >{{ message }}</div>
                    </div>
                    <div class="messenger__left-item-info-right">
                        <div
                            class="messenger__left-item-info-right-time"
                        >{{ time }}</div>
                        <div
                            class="messenger__left-item-info-right-count"
                        >{{ count }}</div>
                    </div>
                </div>
            </li>
        `;
    }
}

export { Message };
