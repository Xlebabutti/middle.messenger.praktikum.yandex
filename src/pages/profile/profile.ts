import { ProfileImage } from '../../shared/ui';
import { FormProfile } from '../../shared/ui/forms/form-profile';
import Block from '../../shared/utils/block';

class ProfilePage extends Block {
    init(): void {
        const ProfileImg = new ProfileImage({
            profileImgSrc: '/not-avatar.svg',
            profileTitle: 'Иван',
            profileActionsName: 'Изменить данные',
        });

        const ProfileForm = new FormProfile({});

        this.children = {
            ...this.children,
            ProfileImg,
            ProfileForm,
        };
    }

    render(): string {
        return `
            <div class='profile'>
                {{{ Sidebar }}}
                {{{ ProfileImg }}}
                <div class='profile__body'>
                    {{{ ProfileForm }}}
                </div>
            </div>

        `;
    }
}

export { ProfilePage };
