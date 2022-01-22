import { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroresByPublisher'
import HeroCard from '../atoms/HeroCard'

const HeroesList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    return (
        <div className="heroes-list animate__animated animate__fadeIn">
            {heroes.map(hero => (
                <HeroCard
                    key={hero.id}
                    {...hero}
                    className="heroes-list__item"
                />
            ))}
        </div>
    )
}

export default HeroesList
