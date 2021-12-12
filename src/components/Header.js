import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitch from '../assets/header/theme-switch.png'

const Header = () => {
    return (
      <div className='header'>
          <div className='logoCotainer'>
              <img src={punkLogo} className='punkLogo' alt=''/>
          </div>

          <div className='searchBar'>
              <div className='searchIconContainer'>
                  <img src={searchIcon}/>
              </div>
              <input className='searchInput' placeholder='Collection,  Item or user...' />
          </div>

          <div className='headerItems'>
              <p>Drops</p>
              <p>Marketplace</p>
              <p>Create</p>
          </div>
          <div className='headerActions'>
              <div className='themeSwitchContainer'>
                  <img src={themeSwitch} />
              </div>
          </div>
          <div className='lOginButton'>GET IN</div>
      </div>
    )
}

export default Header
