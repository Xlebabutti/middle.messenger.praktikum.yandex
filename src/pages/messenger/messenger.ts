import { Message, MessageActive } from '../../shared/ui';
import { MessageList } from '../../shared/ui/message/message-list';
import Block from '../../shared/utils/block';

interface ChatMessage {
    id: string;
    name: string;
    time: string;
    message: string;
    count: string;
}

interface MessengerProps {
    listChat: ChatMessage[];
}

class Messenger extends Block {
    constructor(props: MessengerProps) {
        super({
            ...props,
            listChat: [
                {
                    id: '1',
                    name: 'Ваня',
                    message: 'Приветы',
                    time: '09:00',
                    count: '1',
                },
                {
                    id: '2',
                    name: 'Жора',
                    message: 'Как дела там???',
                    time: '14:30',
                    count: '3',
                },
                {
                    id: '3',
                    name: 'Анна',
                    message: 'Привет! Чем занимаешься?',
                    time: '12:35',
                    count: '6',
                },
            ],
        });
    }

    init(): void {
        const onMessageClickBind = this.onMessageClick.bind(this);

        const ListMessage = new MessageList({
            messages:
                this.mapMessageToComponent(
                    this.props.listChat,
                    null,
                    onMessageClickBind,
                ) || [],
        });

        const ActiveMessage = new MessageActive({});

        this.children = {
            ListMessage,
            ActiveMessage,
        };
    }

    onMessageClick(message: string): void {
        console.log('Clicked message with id:', message.id);
        this.setProps({ chooseChat: true });
    }

    mapMessageToComponent(
        messageCard: ChatMessage,
        activeId: string | null,
        hundler,
    ) {
        return messageCard?.map(
            ({
                id,
                name,
                message,
                time,
                count,
            }: {
                id: string;
                name: string;
                message: string;
                time: string;
                count: string | number;
            }): Message =>
                new Message({
                    id,
                    name,
                    message,
                    time,
                    count,
                    activeId,
                    click: hundler,
                }),
        );
    }

    render(): string {
        return `
            <div class="messenger">
                <div class="messenger__left">
                    <div class="messenger__left-header">
                        <div class="messenger__left-profile">
                            <a href="#" class="messenger__left-profile-link">Профиль</a>
                        </div>
                        <div class="messenger__left-search">
                            <div class="messenger__left-search-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#999999"
                                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                                    ></path>
                                </svg>
                            </div>
                            <img src="/search.svg" alt="поиск сообщений" />
                            <input
                                class="messenger__left-search-input"
                                type="text"
                                id="search"
                                name="search"
                                placeholder="Поиск"
                            />
                        </div>
                    </div>
                    <div class="messenger__left-body">

                        <ul class="messenger__left-list">
                            {{{ ListMessage }}}
                        </ul>

                    </div>
                </div>

                {{#if chooseChat}}
                    {{{ ActiveMessage }}}
                {{else}}
                    <div class="messenger__right-choose">
                        <p>Выберите чат, чтобы отправить сообщение</p>
                    </div>
                {{/if}}
            </div>
        `;
    }
}

export { Messenger };
