import React from 'react'

const Link = ({id, url, title, desc}) =>{

    return(
        <div className='link'>
            <a href={url} id={id}>{title}
            </a>
            <span className='tooltip'>{desc}</span>
        </div>
    )
};

export default Link