import Block from '../../utils/block';

class Sidebar extends Block {
    constructor(props: unknown) {
        super(props);
    }

    render(): string {
        return `
            <div class="sidebar">
                <div class="sidebar__body">
                    <div class="sidebar__body-circle">
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
