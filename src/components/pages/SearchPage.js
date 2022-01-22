import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, useQueryParams } from '../../hooks'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import HeroCard from '../atoms/HeroCard'

const SearchPage = () => {
    const navigate = useNavigate()
    const { q = '' } = useQueryParams()
    const [values, handleSearchChange] = useForm({
        search: q,
    })
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const handleSearchSubmit = e => {
        e.preventDefault()
        const { search } = values
        const searchQuery = search ? `?q=${search}` : ''
        navigate(searchQuery)
    }

    return (
        <div>
            <h1>Search Page</h1>
            <hr />

            <div className="row ">
                <div className="col-5">
                    <h4>
                        Search Form
                        <hr />
                        <form
                            onSubmit={handleSearchSubmit}
                            className="search-form"
                        >
                            <input
                                type="text"
                                placeholder="Find your hero..."
                                className="form-control col-8"
                                onChange={handleSearchChange}
                                autoComplete="off"
                                name="search"
                                value={values.search}
                            />
                            <button
                                type="submit"
                                className="btn btn-outline-primary"
                            >
                                Search
                            </button>
                        </form>
                    </h4>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {heroesFiltered.length > 0 ? (
                        heroesFiltered.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    ) : (
                        <div className="alert alert-info text-center">
                            No results...
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchPage
