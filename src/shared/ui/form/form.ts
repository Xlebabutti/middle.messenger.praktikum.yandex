import Block from '../../utils/block';
import { InputElement } from '../input/input-element';

class Form extends Block {
    constructor(props: unknown) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const children = props.inputs.reduce((acc, inputProps) => {
            acc[inputProps.name] = new InputElement(inputProps);
            return acc;
        }, {});
        super({ ...props, children });
    }

    protected render(): string {
        return `
        <div>
            <form action='#' class='form__{{formType}}'>
                <div class='form__header'>
                    <h1 class='form__header-title'>{{formHeaderTitle}}</h1>
                </div>

                <div class='form__body'>
                    <div class='form__body-buttons'>
                        {{#each buttons}}
                            {{> Button }}
                        {{/each}}
                    </div>
                </div>

                <div class='form__footer'>
                    <span class='form__footer-title'>{{formFooterTitle}}</span><a
                        href=''
                        class='form__footer-link'
                    >{{formFooterLink}}</a>
                </div>
            </form>
            </div>
        `;
    }
}

export { Form };
