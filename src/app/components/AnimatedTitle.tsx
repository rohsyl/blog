'use client';
import {TypeAnimation} from "react-type-animation";


export default function AnimatedTitle() {
    return (
        <TypeAnimation
            sequence={[
                'Hi',
                1000, // Waits 1s
                'Hi, ',
                800, // Waits 2s
                'Hi, I\'m Sylvain',
                1000, // Waits 1s
                'Hi, I\'m Sylvain Roh',
                1000, // Waits 1s
            ]}
            wrapper="span"
            cursor={true}
            repeat={1}
        />
    )
}