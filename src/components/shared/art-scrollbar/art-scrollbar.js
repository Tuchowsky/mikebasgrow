import React, {useState, createRef, useEffect} from 'react';
import './art-scrollbar.scss';

export const ArtScrollbar = (props) => {
    const [thumbPostion, setThumbPosition] = useState(0);
    const [cursorPostion, setCursorPosition] = useState(0);
    const artRef = createRef();

    const moveHandler = (e) => {
        setCursorPosition(e.clientX);
        console.log(e.clientX);
    }

    useEffect(() => {
        artRef.current.addEventListener('mousemove', moveHandler);
    });

    const handleDragSart = (e) => {
        setThumbPosition(cursorPostion);
    }
    
    const handleDrag = (e) => {
        setThumbPosition(cursorPostion);

    }

    const handleDragEnd = (e) => {
        setThumbPosition(e.clientX);

    }

    return (
        <div ref={artRef} className={'art-scrollbar'}>
            <div draggable='true' 
            onDragStart={handleDragSart} 
            onDragEnd={handleDragEnd}
            onDrag={handleDrag}
            style={
                {
                    width: props.width / 4,
                    left: thumbPostion
                }
            } 
            className={'art-scrollbar_thumb'}></div>
        </div>
    )
}