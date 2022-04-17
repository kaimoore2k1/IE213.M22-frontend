import React from 'react'
import {initial_products} from "./Data";
import "../../sass/DetailProduct/Information.scss"
export default function Information() {
  return (
      
      <div>
          <p id='information_title'>{initial_products.name}</p>
          <br />
          {initial_products.information}
      </div>
      
    
  )
}
