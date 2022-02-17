import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Layout from "./components/Layout";
import ProjectPage from './components/ProjectPage';

function router() {
    return (
        <Layout>
            <Routes>
                <Route path="/:project" element={<ProjectPage />} />
                <Route exact path="/" element={<Homepage />} />
            </Routes>
        </Layout>
    );
}

export default router;
