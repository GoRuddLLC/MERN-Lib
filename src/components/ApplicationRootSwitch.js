import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const GRRoot = ({ rid, object, children }) => {
    console.log("GRRoot rendered"); // Add this line to debug

    useEffect(() => {
        console.info("SUCCESSFULLY LOADED GRBASE WITH RID OF: ", rid);
    }, [rid]);

    return (
        <Router>
            {children}
        </Router>
    );
};

export default GRRoot;
