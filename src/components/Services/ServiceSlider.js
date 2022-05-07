import React from 'react'
import styled from 'styled-components'

export default function ServiceSlider() {
  return (
    <Wall>
        <Container>
          <Title>Popular Professional Service</Title>
            <Wrapper>
              <img src="/assets/s1.jpg" alt="" />
              <Span>Build your brand</Span>
              <Span2>Social Media</Span2>
            </Wrapper>
        </Container>
    </Wall>
  )
}

const Span2 = styled.div`

`;
const Span = styled.div`

`;
const Title = styled.div`

`;
const Container = styled.div`

`;
const Wrapper = styled.div`

`;
const Wall = styled.div`
padding-top: 60px;
`;