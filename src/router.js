import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Layout from "./components/Layout";
import PageNotFound from './components/PageNotFound';
import Wave from './components/Projects/Wave';

function router() {
    return (
        <Layout>
            <Routes>
                <Route exact path="/wavelabs" element={<Wave />} />
                <Route exact path="/" element={<Homepage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Layout>
    );
}

export default router;
