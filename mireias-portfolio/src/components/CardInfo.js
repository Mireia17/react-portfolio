import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({ opacity: 1, from: {opacity: 0}});//this is a variable within an object inside

    return (

        <animated.div className="m-card-info " style={style}>
            <p className='m-card-title'>{props.title}</p>
            <p className='m-card-subTitle'>{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a> {/* with the _blank target we will be able to keep that person in our website even if they click the link to visit another one*/}

        </animated.div>
    );

}

export default CardInfo;