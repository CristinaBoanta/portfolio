import * as React from 'react';
import { animated, useSpring } from '@react-spring/web';

const style = {
    body: {
        height: '200vh',
        background: '#f0f0f0',
        overflowY: 'scroll',
    },
    parchment: {
        position: 'relative',
        width: '300px',
        height: '300px',
        margin: '50px auto',
        // backgroundImage: 'url("https://placekitten.com/300/300")',
        background: '#2d00cb',
        border: '2px solid #333',
    },
    topPart: {
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        height: '0%',
        backgroundImage: 'url("https://placekitten.com/300/150")',
        backgroundSize: 'cover',
        overflow: 'hidden',
        transformOrigin: 'bottom',
    },
    bottomPart: {
        position: 'absolute',
        bottom: '50%',
        left: 0,
        right: 0,
        height: '0%',
        backgroundImage: 'url("https://placekitten.com/300/150")',
        backgroundSize: 'cover',
        overflow: 'hidden',
        transformOrigin: 'top',
    },
};

const Intro = () => {
    const topProps = useSpring({
        from: { height: '0%', top: '50%' },
        to: { height: '50%', top: '0%' },
    });
    const bottomProps = useSpring({
        from: { height: '0%', bottom: '50%' },
        to: { height: '50%', bottom: '0%' },
    });

    return (
        <div style={style.body}>
            <div style={style.parchment}>
                <animated.div style={{ ...style.topPart, ...topProps }} />
                <animated.div style={{ ...style.bottomPart, ...bottomProps }} />
            </div>
        </div>
    );
}

export default Intro;