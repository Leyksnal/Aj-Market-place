import React, { useContext } from 'react'
import styled from 'styled-components'
// import { CountState } from '../CounterState/CounterState'
import {MdAdd} from 'react-icons/md'
import {HiMinusSm} from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { addCount, minusCount } from '../CounterState/Statemanagement'

export default function CounterControlls() {
    // const {addCount, subCount } = useContext(CountState)

    const dispatch = useDispatch()


  return (
    <>
    <Holder>
        <Rounder>
            <MdAdd onClick={() =>{
                dispatch(addCount())
            }} size={'2rem'}/>
        </Rounder>
        <Rounder onClick={() =>{
                dispatch(minusCount())
            }}>
            <HiMinusSm  size={'2rem'}/>
        </Rounder>
    </Holder>
    </>
  )
}

const Holder = styled.div`
    width: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #0E1116;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    height: 150px;
    border-radius: 20px;

    button{
        width: 50px;
        height: 30px;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
`;


const Rounder = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: solid 3px #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 500ms;

    :hover{
        cursor: pointer;
        background-color: #0D54C5;
        transform: scale(1.1);
    }
`;