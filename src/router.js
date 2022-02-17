import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Layout from "./components/Layout";
import Wave from './components/Projects/Wave';

function router() {
    return (
        <Layout>
            <Routes>
                <Route path="/wavelabs" element={<Wave />} />
                <Route exact path="/" element={<Homepage />} />
            </Routes>
        </Layout>
    );
}

export default router;
