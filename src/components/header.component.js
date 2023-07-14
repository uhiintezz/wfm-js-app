import Component from './../core/component';

export class HeaderComponent extends Component {
    constructor(id, {workflow}) {
        super(id)
        this.workflow = workflow
    }

    init() {
        this.workflow = workflow
        console.log('head_init', workflow)
        if (localStorage.getItem('visited')) {
            this.hide()
        } else {
            this.workflow.classList.add('hide')
        }
        const btn = this.$el.querySelector('.js-header-start')
        btn.addEventListener('click',  buttonHandler.bind(this))
    }
}

function buttonHandler() {
    localStorage.setItem('visited', JSON.stringify(true))
    this.hide()
    this.workflow.show()
}