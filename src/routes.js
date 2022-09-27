import HomeView from './views/HomeView.vue'
import QuestionView from './views/QuestionView.vue'

export default[
    {path: "/", component: HomeView},
    {path: "/question/:id", component: QuestionView},
]