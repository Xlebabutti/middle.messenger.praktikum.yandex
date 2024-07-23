import { Block, Props } from '../../utils/block';
import Router from '../../utils/router';

export class RouterLink extends Block {
    constructor(props: Props) {
        super({
            ...props,
            events: {
                click: () => {
                    if (typeof this.props.to === 'string') {
                        Router.go(this.props.to);
                    }
                },
            },
        });
    }

    render(): string {
        return '<a class="{{ class }}">{{ label }}</a>';
    }
}
