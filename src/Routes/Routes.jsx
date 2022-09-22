import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../Components/Header'
import Spell from '../API/FeiticoAPI'
import Char from '../API/PersonagemAPI'
import Wand from '../API/VarinhaAPI'
import Home from '../Components/Home'

export default function Rotas() {
  return (
    <div>
        <BrowserRouter>
      <Header rota="Home" rota2="Characters" rota3="Spells" rota4='Wands'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/char" element={<Char />}/>
        <Route path="/spell" element={<Spell />}/>
        <Route path='/wand' element={<Wand />}/>
      </Routes>
        </BrowserRouter>
    </div>
  )
}
