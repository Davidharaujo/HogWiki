import { Link } from "react-router-dom";
import React from 'react'
import * as S from './Style/Styles'

export default function Header({ rota, rota2, rota3, rota4 }) {
  return (
    <S.Cabecalho>
        <S.Titulo>HogWiki</S.Titulo>
      <S.Navigation>
        <S.Lista>
          <li>
            <S.SLink to="/">{rota}</S.SLink>
          </li>
          <li>
            <S.SLink to="/char">{rota2}</S.SLink>
          </li>
          <li>
            <S.SLink to="/spell">{rota3}</S.SLink>
          </li>
          <li>
            <S.SLink to='/wand'>{rota4}</S.SLink>
          </li>
        </S.Lista>
      </S.Navigation>
    </S.Cabecalho>
  )
}