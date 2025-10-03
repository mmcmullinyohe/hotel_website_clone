import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({room, index}) => {
  return (
    <Link to={'/rooms/' + room.id} onClick={() => scrollTo(0, 0)} key={room._id}>
        <img src={room.images[0]} alt="" />
        <p>Best Seller</p>
        <div>
            <div>
                <p>{room.hotel.name}</p>
                <div className='flex items-center gap-1'>
                    <img src={assets.starIconFilled} alt="star-icon" /> 4.5
                </div>
            </div>
        </div>
    </Link> 
  )
}

export default HotelCard
