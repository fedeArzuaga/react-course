import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroeById } from '../../helpers/getHeroeById';

export const HeroScreen = () => {

    const { heroId } = useParams();
    const navigate = useNavigate();
    
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = useMemo( () => getHeroeById( heroId ), [heroId] );

    const handleReturn = () => {    
        navigate(-1);
    }

    if ( !id ) {
        return <Navigate to="/" />
    }

    const imgPath = `/assets/${id}.jpg`;

    return (
        <div className="row">

            <div className="col-4">
                <img src={ imgPath } alt={ superhero } className="img-thumbnail animate__animated animate__fadeInLeft"/>
            </div>

            <div className="col-8 animate__animated animate__fadeIn"> 
                <h3 className="mb-3">{ superhero }</h3>
                <ul className="list-group mt-4">
                    <li className="list-group-item">Alter ego: { alter_ego }</li>
                    <li className="list-group-item">Publisher: { publisher }</li>
                    <li className="list-group-item">First Appearance: { first_appearance }</li>
                </ul>

                <h5 className="mt-4 mb-4">Characters <small className="text-muted">{ characters }</small></h5>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Regresar
                </button>

            </div>

        </div>
    )
}
