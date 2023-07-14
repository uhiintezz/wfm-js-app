import './css/styles.css'
import { SectionComponent } from './components/section.component'
import { HeaderComponent } from './components/header.component'
import { NavigationComponent } from './components/navigation.component'
import { CreateComponent } from './components/create.component'
import { FavoriteComponent } from './components/favorite.component'
import { PostsComponent } from './components/posts.component'
import { LoaderComponent } from './components/loader.component'

const workflow = new SectionComponent('workflow')
const loader = new LoaderComponent('loader')
console.log('create', loader)

const posts = new PostsComponent('posts', {loader})
const header = new HeaderComponent('header', {workflow})

const navigation = new NavigationComponent('navigation')
const create = new CreateComponent('create')
const favorite = new FavoriteComponent('favorite', {loader})


navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite}
])
