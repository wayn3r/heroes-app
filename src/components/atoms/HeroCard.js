import { Link } from 'react-router-dom'
import { asset } from '../../helpers/get-asset'
const HeroCard = ({
    className,
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <div className={'card' + (className ? ' ' + className : '')}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img
                        src={asset(`heroes/${id}.jpg`)}
                        alt={superhero}
                        className="card-img"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="card-title">{superhero}</div>
                        <p className="card-text">{alter_ego}</p>
                        {alter_ego !== characters && (
                            <p className="card-text">{characters}</p>
                        )}
                        <p className="card-text">{first_appearance}</p>
                        <Link to={`../hero/${id}`}>Más detalles...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard
