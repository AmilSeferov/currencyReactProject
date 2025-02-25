import React from 'react'
import '../curencyTableElement/currencyTableElement.css'
function CurrencyTableElement({data}) {
  const[key,value]=data
  return (
    <div className='cteMain'>
        <div className='ctemName'>{key}</div>
        <div className='ctemValue'>{value}</div>
    </div>
  )
}

export default CurrencyTableElement