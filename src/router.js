import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />} />
        </Routes>
    );
}

export default router;
