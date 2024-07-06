import { Selector } from '../../shared/ui/selector';
import Block, { Props } from '../../shared/utils/block';

class Modules extends Block {
    constructor(props: Props) {
        super({
            ...props,
            Selector1: new Selector({}),
        });
    }

    render(): string {
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
