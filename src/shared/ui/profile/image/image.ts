import Block from '../../../utils/block';

class ProfileImage extends Block {
    constructor(props: unknown) {
        super(props);
    }

    render(): string {
        return `
        <div class="profile__heder">
            <div class="profile__header-img">
                <img src="{{profileImgSrc}}" alt="аватар профиля" />
                <span class="profile__header-img-overlay">Поменять аватар</span>
            </div>
            <h2 class="profile__header-title">{{profileTitle}}</h2>
        </div>
           
        `;
    }
}

export { ProfileImage };
