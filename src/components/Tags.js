import React from 'react';
import './Tags.css';
import '../styles/fundamentals.css';
import { useState } from 'react';


function Tags(props) {


return (
        
            <text className={`${props.size} ${props.textStyle} textColorG1`} >{props.tag}</text>
        
)
}

export default Tags;