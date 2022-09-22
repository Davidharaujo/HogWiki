import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as S from '../Components/Style/Styles'

export default function VarinhaAPI() {
    const [data,setData] = useState([])

    const API = 'https://hp-api.herokuapp.com/api/characters'

    useEffect(() => {
      axios.get(API).then((resposta)=>{
        setData(resposta.data)
        console.log(data)
      })
      .catch((error)=>{
        console.log('Desculpe, ocorreu um erro de requisição', error)
      })
    },[])

  return (
    <S.Container> 
      {data.map((item,index)=>(
        <S.Card key={index}>
          <h3>{item.name}</h3>
          <p>Wood: {item.wand.wood}</p>
          <p>Core: {item.wand.core}</p>
          <p>Length: {item.wand.length} polegadas</p>
        </S.Card>
        ))}
      
    </S.Container>
  )
}