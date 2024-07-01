import Block from '../../../utils/block';

class ProfileInfoItem extends Block {
    constructor(props: unknown) {
        super(props);
    }

    render(): string {
        return `
            <li class='profile__body-info-list'>
                <span class='profile__body-info-name'>{{label}}</span>
                <input
                    class='profile__body-info-content'
                    name='{{name}}'
                    value='{{value}}'
                    type="{{type}}"
                    {{readonly}}
                />
            </li>
        `;
    }
}

export { ProfileInfoItem };
