import React, { useState } from "react";
import './box.css';

const Count = () => {
    const [count, setCount] = useState(0);
    const [buttonActive, setButtonActive] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleMouseDown = () => {
        setButtonActive(true);
    }

    const handleMouseUp = () => {
        setButtonActive(false);
    }

    const incrementCount = () => {
        setLoading(true);

        setTimeout(() => {
            setCount(count + 1);
            setLoading(false);
        }, 1000);
    }

    return (
        <div className="counter-container">
            <button
                className={`button ${buttonActive ? 'active' : ''}`}
                onClick={incrementCount}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                disabled={loading}
            >
                {loading ? <LoadingIndicator /> : count}
            </button>
        </div>
    );
};

const LoadingIndicator = () => (
    <div className="loading-indicator">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
    </div>
);

export default Count;
