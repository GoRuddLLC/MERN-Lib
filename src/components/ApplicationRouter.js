import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const ApplicationRouter = ({ children }) => {

    return (
        <Routes>
            {children}
        </Routes>
    );
};

export default ApplicationRouter;
