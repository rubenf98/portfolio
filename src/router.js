import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Layout from "./components/Layout";
import PageNotFound from './components/PageNotFound';
import Crrent from './components/Projects/CrRent';
import DomDesign from './components/Projects/DomDesign';
import MarcoAbreu from './components/Projects/MarcoAbreu';
import Wave from './components/Projects/Wave';

function router() {
    return (
        <Layout>
            <Routes>
                <Route exact path="/crrent" element={<Crrent />} />
                <Route exact path="/marcoabreu" element={<MarcoAbreu />} />
                <Route exact path="/wavelabs" element={<Wave />} />
                <Route exact path="/domdesign" element={<DomDesign />} />
                <Route exact path="/" element={<Homepage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Layout>
    );
}

export default router;
