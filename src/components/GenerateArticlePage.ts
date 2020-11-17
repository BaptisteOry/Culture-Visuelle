import h from '../framework/h'
import { ArticleDescription } from '../articles/ArticleDescription'

const Header = (description: ArticleDescription) => {
    const rand = Math.floor(Math.random()*2)
    return h(
        'div',
        {
            class: 'article-name'
        },
        description.title
    )
    + h(
        'div',
        {
            class: 'article-authors'
        },    
            description.authors.length == 1
            ? description.authors
            : `${description.authors[rand]} & ${description.authors[(rand+1)%2]}`
    )
}

export default (description: ArticleDescription) => {
    document.getElementById('header').innerHTML = Header(description)
}