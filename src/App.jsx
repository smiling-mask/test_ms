import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanyAnalysis from "./pages/CompanyAnalysis";
import Home from './pages/Home';
import styled from 'styled-components'

const Appcontainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

function App(){
    return<Appcontainer>
        {/*Header */}
        <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Home />}/>
            <Route path="/company-analysis" element={<CompanyAnalysis />}/>
        </Routes>
        </BrowserRouter>
        {/*footer*/}
    </Appcontainer>
}
export default App;