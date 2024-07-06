import Block from '../../../shared/utils/block';

class ErrorPage404 extends Block {
    protected render() {
        return `
        <div class="container">
            <h1>404</h1>
            <p>Страница не найдена</p>
        </div>
    `;
    }
}

export { ErrorPage404 };
