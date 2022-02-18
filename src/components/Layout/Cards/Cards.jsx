import React, {useState, useEffect} from 'react'
import { ImageOne } from '../../UI/ImageOne/ImageOne'
import { Title } from '../../UI/Title/Title'
import { Button } from '../../UI/Button/Button'
import url from '../../../assets/img/ImagenRon.jpg'


export const Cards = () => {

  const useCount = () => {

    const [counter, setCounter] = useState(0);

    const offButton = () => setCounter(counter+1);
    
    return{
      counter,
      offButton
    }

  }
  const {counter, offButton} = useCount()

  useEffect(() => {

    const btn = document.getElementById('filtro');
    const cardOne = document.getElementById('cardOne');
    const cardTwo = document.getElementById('cardTwo');

    if (counter%2==0){
      btn.classList.add('inactivo');
      cardOne.classList.add('inactivo');
      cardTwo.classList.add('inactivo');
      btn.textContent='Off'
    } else{
      btn.classList.remove('inactivo');
      cardOne.classList.remove('inactivo');
      cardTwo.classList.remove('inactivo');
      btn.textContent='On'
    }
  },[counter]);

  return (
    <div className='cards'>
      <section id='cardOne' className='card'>
        <Title nombre='Card 1'/>
        <ImageOne image={url}/>
      </section>
      <section id='cardTwo'  className='card'>
        <Title nombre='Card 2'/>
        <ImageOne image={url}/>
      </section>
      <Button nombre='OFF' clase='btn' event={offButton} id='filtro' />
    </div>
  )
}
