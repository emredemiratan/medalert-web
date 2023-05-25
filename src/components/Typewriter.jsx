import React, { useState, useEffect } from "react";

import "./typewriter.css";

function Typewriter(props) {
    const [text, setText] = useState("");
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        setText(props.text);
        const timer = setInterval(() => {
            setDisplayText(text.substring(0, textIndex));
            setTextIndex(textIndex + 1);
        }, 30);

        return () => {
            clearInterval(timer);
        };
    }, [textIndex]);

    return <span className="typewriter">{displayText}</span>;
}

export default Typewriter;
