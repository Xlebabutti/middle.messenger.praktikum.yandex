import Block from '../../shared/utils/block';

class HomePage extends Block {
    protected render(): string {
        return `
            <nav class="nav">
                <div class="container">
                    <ul class="nav__list">

                        <li class="nav__item">
                            <a page="Login" class="nav__item-link">Логин главная</a>
                        </li>
                        <li class="nav__item">
                            <a page="LoginError" class="nav__item-link">Логин неверный логин
                                без пароля</a>
                        </li>
                        <li class="nav__item">
                            <a page="LoginErrorPassword" class="nav__item-link">Логин
                                неверный логин с паролем</a>
                        </li>
                        <li class="nav__item">
                            <a page="LoginEmpty" class="nav__item-link">Логин пустая форма</a>
                        </li>
                        <li class="nav__item">
                            <a
                                page="LoginErrorRegistration"
                                class="nav__item-link"
                            >Зарегестрироваться</a>
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
                        <li class="nav__item">
                            <a page="ProfileChangesData" class="nav__item-link">Изменить
                                данные</a>
                        </li>
                        <li class="nav__item">
                            <a page="ProfileChangesPassword" class="nav__item-link">Изменить
                                пароль</a>
                        </li>
                        <li class="nav__item">
                            <a
                                page="ProfileModalFileToLoad"
                                class="nav__item-link"
                            >Загрузить новый аватар</a>
                        </li>
                        <li class="nav__item">
                            <a page="ProfileModalFileLoaded" class="nav__item-link">Файл
                                загружен</a>
                        </li>
                        <li class="nav__item">
                            <a
                                page="ProfileModalFileErrorLoad"
                                class="nav__item-link"
                            >Загуризте файл (ошибка)</a>
                        </li>
                        <li class="nav__item">
                            <a page="ProfileModalFileError" class="nav__item-link">Ошибка,
                                попробуйте ещё раз</a>
                        </li>

                        <p>---------------------------------------</p>

                        <li class="nav__item">
                            <a page="MessengerToChoose" class="nav__item-link">Выбрать чат</a>
                        </li>
                        <li class="nav__item">
                            <a page="Messenger" class="nav__item-link">Чат</a>
                        </li>

                        <p>---------------------------------------</p>

                        <li class="nav__item">
                            <a page="OtherModules" class="nav__item-link">Остальные
                                модульные окна</a>
                        </li>
                    </ul>
                </div>
            </nav>

        `;
    }
}

export { HomePage };
