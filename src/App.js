
import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import punkhead from './assets/owner/punkhead.png'
import CardCollection from './components/CardCollection';
import axios from 'axios'
import Punklist from './components/Punklist';
import Main from './components/Main';


function App() {
   const [punkListData, setpunkListData] = useState([]);
   const [selectedPunk, setSelectedPunk] =useState(0);

   useEffect(() => {
      const getMyNfts = async () => {
        const openSeaData = await axios.get(
          'https://testnets-api.opensea.io/assets?asset_contract_address=0x100e2b232fe449559fAeb39aacC5857721AC2C22&order_direction=asc'
        )
        console.log(openSeaData.data.assets)
        setpunkListData(openSeaData.data.assets)
      }
      return getMyNfts();
   }, [])

  return (
  <div className='app'>
    <Header/>
    {
      punkListData.length > 0 && (
      <>
        <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
    <div className='punklist' style={{display:'flex'}}>
    <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk} /></div>
      </>
      )
    }
    
  </div> 
  );
}

export default App;
