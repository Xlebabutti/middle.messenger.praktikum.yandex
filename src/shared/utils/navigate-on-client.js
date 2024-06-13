// import Handlebars from 'handlebars';

export function navigateOnClient(pages, page) {
    const app = document.getElementById('app');
    console.log(pages);
    const [source, context] = pages[page];
    if (source instanceof Object) {
        const page = new source(context);
        app.innerHTML = '';
        app.append(page.getContent());
        return;
    }
}
