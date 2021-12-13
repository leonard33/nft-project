import React from 'react'
import CardCollection from './CardCollection'
import './Punklist.css'

const Punklist = ({punkListData}) => {
    return (
        <div className='punkList'>
            {punkListData.map(punk => (
                <div>
                    <CardCollection
                        key={punk.token_id}
                        id={punk.token_id}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_original_url}
                    />
                </div>
            ))}
        </div>
    )
}

export default Punklist
