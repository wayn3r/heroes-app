import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { asset } from '../../helpers/get-asset'
import { getHeroById } from '../../selectors/getHeroById'

const HeroPage = () => {
    const { id } = useParams()
    const hero = useMemo(() => getHeroById(id), [id])
    const navigate = useNavigate()

    if (!hero) return <Navigate to="/" replace />
    const { superhero, publisher, alter_ego, first_appearance, characters } =
        hero
    const handleReturn = () => navigate(-1)
    return (
        <div className="hero-page row mt-5">
            <div className="col-4">
                <img
                    className="hero-page__img animate__animated animate__fadeInLeft"
                    src={asset(`heroes/${id}.jpg`)}
                    alt={superhero}
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>Firts appearance: </b> {first_appearance}
                    </li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={handleReturn}
                >
                    &larr; Return
                </button>
            </div>
        </div>
    )
}

export default HeroPage
