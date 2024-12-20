import React, { useState, useEffect } from 'react'

const MoveElementMouse = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
  return (
    <div style={{ height: '600px', width: '100%', position: 'relative' }}>

        <div
            style={{
                position: 'absolute',
                top: position.y - 20,
                left: position.x - 100,
                width: 100,
                height: 100,
                backgroundColor: 'hwb(186 40% 4%)',
                borderRadius: '50%',
                border:'10px solid hwb(208 35% 7%)'
            }}
        />
    </div>
);
}

export default MoveElementMouse
