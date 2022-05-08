import React from 'react'
import styled from 'styled-components'
import {AiFillStar} from 'react-icons/ai'

export default function ContentDetail() {
  return (
    <Container>
        <Wrapper>
            <Title>I will design top notch social media content</Title>
            <Tile>
                <Ava />
                <Name>fernandobengua</Name>
                <Level>Level 2 Seller</Level>
                <Rating>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <Count>4.9(74)</Count>
                </Rating>
            </Tile>
            <Gallery>
                <Img />
                <Bt>
                    <Img />
                    <Img />
                    <Img />
                    <Img />
                    <Img />
                    <Img />
                    <Img />
                </Bt>
            </Gallery>
            <Sub>About This Gig</Sub>
            <Info>First impressions last. Brands need to go much further than their visual identity. How your brand looks and feels is essential for creating a good first impression, especially on social media. Your social profile is a very important part of your brand, and with the right design, you can attract the right type of customers, look professional, and beat your competition! My design skills can really help to set your business above everyone else.</Info>
            <Sub>About The Seller</Sub>
            <Seller>
                <Ava>
                    <Img />
                    <Level>
                        <p>Level Two</p>
                    </Level>
                </Ava>
                <Detail>
                    <Name>fernandobengua</Name>
                    <Level>Branding and Social Media Expert</Level>
                    <Rating>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <Count>4.9(74)</Count>
                    </Rating>
                    <Button>Contact me</Button>
                </Detail>
            </Seller>
            <Frame>
                <Top>
                    <Where>From</Where>
                    <Where>Spain</Where>
                </Top>
                <Bottom>Hello, my name is Fernando. I am an Art and Creative Director from Brazil with a background in Design and the Arts. With more than 15 years of experience, I have worked in advertising, visual identity, branding, campaign direction and social media content with some prominent international fashion and lifestyle brands from around world. Globetrotter and curious by nature, I'm currently living in the Spanish capital, Madrid</Bottom>
            </Frame>
        </Wrapper>
    </Container>
  )
}



const Container = styled.div`
padding-top: 60px;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
min-height: calc(100vh - 80px);
`;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 95%;
`;
const Title = styled.div`

`;
const Tile = styled.div`

`;
const Gallery = styled.div`

`;
const Bt = styled.div`

`;
const Seller = styled.div`

`;
const Info = styled.div`

`;
const Ava = styled.div`

`;
const Img = styled.div`

`;
const Sub = styled.div`

`;
const Detail = styled.div`

`;
const Name = styled.div`

`;
const Level = styled.div`

`;
const Rating = styled.div`

`;
const Count = styled.div`

`;
const Button = styled.div`

`;
const Frame = styled.div`

`;
const Top = styled.div`

`;
const Where = styled.div`

`;
const Bottom = styled.div`

`;
