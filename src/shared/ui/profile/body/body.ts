import Block from '../../../utils/block';

class ProfileBody extends Block {
    constructor(props: unknown) {
        super(props);
    }

    render(): string {
        return `
            <div class="profile__body">
                <ul class="profile__body-info">
                    {{#each profileInfo}}
                        <li class="profile__body-info-list">
                            <span class="profile__body-info-name">{{name}}</span>
                            <span class="profile__body-info-content">{{content}}</span>
                        </li>
                    {{/each}}
                </ul>
            </div>
        `;
    }
}

export { ProfileBody };
