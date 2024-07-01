import Block from '../../../shared/utils/block';

class ErrorPage505 extends Block {
    protected render() {
        return `
        <div class="container">
            <h1>505</h1>
            <p>Кто-то уже фиксит...</p>
        </div>
    `;
    }
}

export { ErrorPage505 };
