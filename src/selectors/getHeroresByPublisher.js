import { heroes } from '../data/heroes'

const validPublishers = ['DC Comics', 'Marvel Comics']
export const getHeroesByPublisher = publisher => {
    if (!validPublishers.includes(publisher))
        throw new Error(`Publisher ${publisher} no es válido`)

    return heroes.filter(hero => hero.publisher === publisher)
}
