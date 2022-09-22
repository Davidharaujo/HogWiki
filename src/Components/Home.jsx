import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './Style/Styles'

export default function Home() {
  return (
    <S.Chamada>
        <h1><S.SLink to='/char'>I solemnly swear that I am up to no good!</S.SLink></h1>
    </S.Chamada>
  )
}

