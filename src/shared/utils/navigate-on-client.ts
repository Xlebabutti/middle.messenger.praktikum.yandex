export function navigateOnClient(pages, page) {
    const app = document.getElementById('app');
    const [source, context] = pages[page];
    if (source instanceof Object) {
        const page = new source(context);
        app.innerHTML = '';
        app.append(page.getContent());
        return;
    }
}
