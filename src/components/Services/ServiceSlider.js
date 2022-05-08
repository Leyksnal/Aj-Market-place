import React from 'react'
import styled from 'styled-components'

export default function ServiceSlider() {
  return (
    <Wall>
      <Title>Popular Professional Service</Title>
        <Container>
            <Wrapper>
              <Span>Build your brand</Span>
              <Span2>Social Media</Span2>
            </Wrapper>
            <Wrapper>
              <Span>Build your brand</Span>
              <Span2>Social Media</Span2>
            </Wrapper>
            <Wrapper>
              <Span>Build your brand</Span>
              <Span2>Social Media</Span2>
            </Wrapper>
            <Wrapper>
              <Span>Build your brand</Span>
              <Span2>Social Media</Span2>
            </Wrapper>
            <Wrapper>
              <Span>Build your brand</Span>
              <Span2>Social Media</Span2>
            </Wrapper>
        </Container>
    </Wall>
  )
}

const Span2 = styled.div`
font-size: 1.7rem;
`;
const Span = styled.div`
`;
const Title = styled.div`
font-size: 2.4rem;
margin: 20px;
`;
const Container = styled.div`
margin-bottom: 20px;
display: flex;
justify-content: space-between;
width: 90%;
`;
const Wrapper = styled.div`
width: 180px;
height: 280px;
background-image: url(/assets/s4.jpg);
background-position: center;
background-size: cover;
background-repeat: no-repeat;
border-radius: 6px;
color: #fff;
padding: 20px;
font-weight: 600;
`;
const Wall = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;