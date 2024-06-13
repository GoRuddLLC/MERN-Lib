import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, useNavigate } from "react-router-dom";

const GRScreen = ({ path, element: Element, slug }) => {
    useEffect(() => {
        // Add any initialization logic here
        console.log(`Initializing GRScreen for path: ${path}`);
    }, [path]);

    return (
        <Route path={path} element={<Element slug={slug} />} />
    );
};


export default GRScreen;
