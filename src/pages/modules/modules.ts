import { Selector } from '../../shared/ui/selector';
import Block from '../../shared/utils/block';

class Modules extends Block {
    constructor(props) {
        super({
            ...props,
            Selector1: new Selector({}),
        });
    }

    protected render(): string {
        return `
            <div class='modules'>
                <div class='card'>
                   {{{ Selector1 }}}
                </div>
            </div>
        `;
    }
}

export { Modules };
