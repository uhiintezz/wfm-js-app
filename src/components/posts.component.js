import Component from './../core/component';
import { apiService } from '../services/api.sevice'
import { TransformService } from '../services/transform.service'
import { renderPost } from '../templates/post.template'


export class PostsComponent extends Component {
    constructor(id, {loader}) { 
        super(id) 
        this.loader = loader
    }

    init() {
        console.log('init', loader)
        this.$el.addEventListener('click', buttonHandler.bind(this))
    }

    async onShow() {
        this.loader.show()
        const fbData = await apiService.fetchPosts()
        const posts = TransformService.fbObjectToArray(fbData)
        const html = posts.map(post => renderPost(post, {withButton: true})).join(' ')
        this.loader.hide()
        this.$el.insertAdjacentHTML('afterbegin', html)
    }

    onHide() {
        this.$el.innerHTML = ''
    }
}

function buttonHandler(event) {
    const $el = event.target
    const id = $el.dataset.id
    const title = $el.dataset.title

    if (id) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []

        if (favorites.includes(id)) {
            //удалить елемент
            $el.textContent = 'Сохранить'
            $el.classList.remove('button-danger')
            $el.classList.add('button-primary')
            favorites = favorites.filter(fId => fId !== id)

        } else {
            //добавить элемент
            $el.textContent = 'Удалить'
            $el.classList.remove('button-primary')
            $el.classList.add('button-danger')
            favorites.push(id)
        }

        localStorage.setItem('favorites', JSON.stringify(favorites))
        console.log(favorites)

        
    }
}
