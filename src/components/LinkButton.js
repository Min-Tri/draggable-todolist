import React from 'react'

const Link = ({ active, children, onClick }) => {
    let className = 'btn'

    if (active) {
        className += ' selected'
    } else {
        className += ' btn-outline-dark'
    }

    return(
        <li>

        <button
            className={className}
            onClick={onClick}
            disabled={active}
            style={{marginLeft: '4px'}}
        >
            {children}
        </button>
        </li>
    )
}


export default Link