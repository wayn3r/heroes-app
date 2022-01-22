import { heroes } from '../data/heroes'
/**
 *
 * @param {String} name
 * @returns {Hero[]}
 */
export const getHeroesByName = name => {
    if (!name || typeof name !== 'string') return []
    name = name.toLowerCase()
    return heroes.filter(
        hero =>
            hero.superhero.toLowerCase().includes(name) ||
            hero.characters.toLowerCase().includes(name)
    )
}
