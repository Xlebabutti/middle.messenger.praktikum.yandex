import { Block, Props } from '../../utils/block';

class Sidebar extends Block {
    constructor(props: Props) {
        super({ ...props });
        this.props.events = {
            click: this.props.onClick || (() => {}),
        };
    }

    render(): string {
        return `
            <div class="sidebar">
                <div class="sidebar__body">
                    <div class="sidebar__body-circle" onClick=back>
                        <div class="sidebar__body-arrow">
                            <img src="{{sidebarImg}}" alt="{{sidebarImg}}" />
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

export { Sidebar };
