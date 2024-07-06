import { Block } from '../../shared/utils/block';

class HomePage extends Block {
    render(): string {
        return `
            <nav class="nav">
                <div class="container">
                    <ul class="nav__list">

                        <li class="nav__item">
                            <a page="Login" class="nav__item-link">Логин главная</a>
                        </li>
                      
                        <p>---------------------------------------</p>

                        <li class="nav__item">
                            <a page="Error404" class="nav__item-link">404</a>
                        </li>
                        <li class="nav__item">
                            <a page="Error505" class="nav__item-link">505</a>
                        </li>

                        <p>---------------------------------------</p>

                        <li class="nav__item">
                            <a page="Profile" class="nav__item-link">Профиль</a>
                        </li>

                        <p>---------------------------------------</p>

                        <li class="nav__item">
                            <a page="Messenger" class="nav__item-link">Чат</a>
                        </li>

                        <p>---------------------------------------</p>
                    </ul>
                </div>
            </nav>

        `;
    }
}

export { HomePage };
