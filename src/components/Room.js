import React from 'react'

export default function Room({room}) {
    const {name,slug,images,price} = room
    console.log(price)
    return (
        <article className='room'>
            <div className='img-container'>
                <img src={images[0]} alt='' />
            </div>
        </article>
    )
}
