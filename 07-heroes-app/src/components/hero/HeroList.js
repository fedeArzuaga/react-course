import React, { useMemo } from 'react'
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../../helpers/getHeroeByPublisher'

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ] ); 

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3 mt-3 animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard
                        key={ hero.id }
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
