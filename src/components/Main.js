import React, { useState, useEffect } from 'react'
import './Main.css'
import punkhead from '../assets/owner/punkhead.png'
import instagram from '../assets/owner/instagram.png'
import twitter from '../assets/owner/twitter.png'
import more from '../assets/owner/more.png'
import Punklist from './Punklist'


const Main = ({selectedPunk, punkListData}) => {
   const [activePunk, setActivePunk] = useState(punkListData[0]);

   useEffect(() => {
       setActivePunk(punkListData[selectedPunk])
   }, [punkListData, selectedPunk])

    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkContainer'>
                    <div className='punkHighlight'>
                        <img className='selectedPunk' src={activePunk.image_original_url} alt=''/>
                    </div>
                </div>
                <div className='punkDetails' style={{color: '#fff'}} >
                   <div className='title'>{activePunk.name}</div>
                   <span className='itemNumber'>.#{activePunk.token_id}</span>
                
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src={activePunk.owner.profile_img_url} alt='' />
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameandHandle'>
                            <div>{activePunk.owner.address}</div>
                            <div className='ownerHandle'>@lennykombo</div>
                        </div>
                        <div className='ownerLink'>
                            <img src= {instagram} alt=''/>
                        </div>
                        <div className='ownerLink'>
                            <img src= {twitter} alt=''/>
                        </div>
                        <div className='ownerLink'>
                            <img src= {more} alt=''/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
