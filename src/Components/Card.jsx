import React from 'react'

export const Card = ({ item , index}) => {
  return (
          <div className="item">
            <div className="image">
              <img key={index} src={item.urls.small} alt={item.alt_description}/>
              <a className='btn-save'>Guardar</a>
            </div>
            <p>{item.description}</p>
            <div className='user'>
              <img src={item.user.profile_image.small} alt=''/>
              <span>{item.user.name}</span>
            </div>
          </div>
  )
}
