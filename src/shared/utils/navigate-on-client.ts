/* eslint-disable @typescript-eslint/no-explicit-any */
export function navigateOnClient(
    pages: { [x: string]: [any, any] },
    page: string | number,
) {
    const app = document.getElementById('app');
    if (!app) {
        console.error('App element not found');
        return;
    }
    const [source, context] = pages[page];
    if (source instanceof Object) {
        const page = new source(context);
        app.innerHTML = '';
        app.append(page.getContent());
        return;
    }
}
