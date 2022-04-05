import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { getHeroesByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [ { searchText }, handleInputChange ] = useForm({
        searchText: q
    });

    const heroesFiltered = useMemo(() => getHeroesByName(q), [ q ])

    const handleSubmit = e => {
        e.preventDefault();
        navigate(`?q=${ searchText }`);
    }

    return (
        <>
            <h1>Search</h1>

            <div className="row">

                <div className="col-5">
                    <h4>
                        Buscar
                    </h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            placeholder="Search a heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            className="btn btn-outline-primary mt-3 d-block"
                            type="submit"
                        >
                            Buscar
                        </button>

                    </form>

                </div>

                <div className="col-7">
                    <h4>Resultados:</h4>
                    <hr/>

                    {
                        ( q === '' )
                            ? <div className="alert alert-info">Buscar un heroe</div>
                            : ( heroesFiltered.length === 0 )
                                && <div className="alert alert-danger">No hay resultados: {q}</div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard
                                key={ hero.id }
                                {...hero}
                            />
                        ))
                    }

                </div>

            </div>

        </>
    )
}
