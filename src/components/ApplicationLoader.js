import React from 'react'
import '../styles/ApplicationLoader.scss'

export default function ApplicationLoader(props){
    return(
        <div className='application-loader'>
            <div className='backdrop'></div>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}