import React from 'react'
import { Store } from './Context';
import { useState, useEffect, useContext } from 'react';
import './SideButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faDiamond } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


function SideButtons() {
  const { Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4 } = useContext(Store)

  return (
    <div className='buttonsContainer'>
      <div className='buttonContainer'>
        <button
          className={Button1 ? "buttonON" : "buttonOFF"}
          onClick={() => setButton1(!Button1)}
        >
          <button
            className='slider'
            onClick={() => setButton1(!Button1)}
            style={Button1 ? { transform: `translateX(-5px)`, transition: `0.5s` } : { transform: `translateX(20px)`, transition: `0.5s` }}
          ></button>
        </button>
        <FontAwesomeIcon icon={faCircle} size="xs" color="green" style={{ height: "25px", marginLeft: "20px" }} />
        <div className='description'> 0 doses missed during follow-up visits (n=142)</div>
      </div>
      <div className='buttonContainer'>
        <button
          className={Button2 ? "buttonON" : "buttonOFF"}
          onClick={() => setButton2(!Button2)}
        >
          <button
            className='slider'
            onClick={() => setButton2(!Button2)}
            style={Button2 ? { transform: `translateX(-5px)`, transition: `0.5s` } : { transform: `translateX(20px)`, transition: `0.5s` }}
          ></button>
        </button>
        <FontAwesomeIcon icon={faPlay} style={{ transform: 'rotate(30deg)', height: "25px", marginLeft: "20px" }} color="red" />
        <div className='description'>&#x2264; {` 1/3 doses missed during follow-up visits (n=112)`}</div>
      </div>
      <div className='buttonContainer'>
        <button
          className={Button3 ? "buttonON" : "buttonOFF"}
          onClick={() => setButton3(!Button3)}
        >
          <button
            className='slider'
            onClick={() => setButton3(!Button3)}
            style={Button3 ? { transform: `translateX(-5px)`, transition: `0.5s` } : { transform: `translateX(20px)`, transition: `0.5s` }}
          ></button>
        </button>
        <FontAwesomeIcon icon={faSquare} size="xs" color="blue" style={{ height: "25px", marginLeft: "20px" }} />
        <div className='description'>1/3 - 2/3 doses missed during the follow-up visits (n=31)</div>
      </div>
      <div className='buttonContainer'>
        <button
          className={Button4 ? "buttonON" : "buttonOFF"}
          onClick={() => setButton4(!Button4)}
        >
          <button
            className='slider'
            onClick={() => setButton4(!Button4)}
            style={Button4 ? { transform: `translateX(-5px)`, transition: `0.5s` } : { transform: `translateX(20px)`, transition: `0.5s` }}
          ></button>
        </button>
        <FontAwesomeIcon icon={faDiamond} size="xs" color="orange" style={{ height: "25px", marginLeft: "20px" }} />
        <div className='description'> &#x2265; {` 2/3 doses missed during follow-up visits (n=21)`}</div>
      </div>
    </div>
  )
}

export default SideButtons