import React, {useContext} from 'react'
import styled from 'styled-components'
import CounterControlls from '../CounterControlls/CounterControlls';
// import { CountState } from '../CounterState/CounterState';
import { useSelector } from 'react-redux'

export default function Counter() {
    // const {num} = useContext(CountState)

    const view = useSelector((state) => state.stateReducer.count)

  return (
    <>
        <Container>
            <Wrapper>
                <h2>{view}</h2>
            </Wrapper>
            <CounterControlls/>
        </Container>
    </>
  )
}


const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 400px;
    padding-top: 60px;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 3px #3069AF;
    width: min-content;
    height: min-content;
    margin-bottom: 30px;
    border-radius: 10px;

    h2{
        font-size: 2rem;
    }
`;