import React, {useState, useEffect} from 'react'
import { getPlantById } from '../../server/db/plants'

import { getThePlantById } from '../apis/plants'

function SinglePlant(props)  {

    const [thePlant, setThePlant] = useState([])

    const plantId = props.match.params.id

    const findMeThePlant = () => {
        if(plantId){
            getPlantById(plantId)
            .then(singPlant => {
                setThePlant(singPlant)
            })
        }
    }

    useEffect(() => {
        findMeThePlant()
    }, [props.match.params.id])

    return(
        <>
            {thePlant && (
                <>  
                    <h1>Here is one of many cool plants</h1>
                </>
            )}
        </>
    )
}