import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Layout from "./components/Layout";
import PageNotFound from './components/PageNotFound';
import ProjectList from './components/ProjectList';
import Belocal from './components/Projects/Belocal';
import Crrent from './components/Projects/CrRent';
import DomDesign from './components/Projects/DomDesign';
import Fastrope from './components/Projects/Fastrope';
import MarcoAbreu from './components/Projects/MarcoAbreu';
import Plaza from './components/Projects/Plaza';
import Upa from './components/Projects/Upa';
import Wave from './components/Projects/Wave';
import Denis from './components/Projects/Denis';
import Arquivonet from './components/Projects/Arquivonet';

function router() {
    return (
        <Layout>
            <Routes>
                <Route exact path="/projects/plazaii" element={<Plaza />} />
                <Route exact path="/projects/fastrope" element={<Fastrope />} />
                <Route exact path="/projects/belocal" element={<Belocal />} />
                <Route exact path="/projects/upa" element={<Upa />} />
                <Route exact path="/projects/crrent" element={<Crrent />} />
                <Route exact path="/projects/marcoabreu" element={<MarcoAbreu />} />
                <Route exact path="/projects/wavelabs" element={<Wave />} />
                <Route exact path="/projects/denis" element={<Denis />} />

                <Route exact path="/projects/arquivonet" element={<Arquivonet />} />

                <Route exact path="/projects/domdesign" element={<DomDesign />} />
                <Route exact path="/projects" element={<ProjectList />} />
                <Route exact path="/" element={<Homepage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Layout>
    );
}

export default router;
