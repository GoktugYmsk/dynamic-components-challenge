import React, { useState } from 'react'
import './index.css'

function Popup({ languages }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredLanguages = languages.filter((country) =>
    country.languages.some((lang) =>
      lang.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
      <div className='popupBar'>
        <ul className='countryList'>
          <hr className='popupHr' />
          <input
            className='popupInput'
            placeholder='Dillerde ara'
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {filteredLanguages.map((country) => (
            <li className='country' key={country.alpha2Code}>
              {country.languages.map((lang) => lang.name).join(', ')}
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Popup
