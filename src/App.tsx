import React, {useState} from 'react';
import {GlobalStyles} from "./components/GlobalStyles";
import background from './assets/img/Group_1.png'
import styled from "styled-components";
import CardItem from "./components/CardItem";
import {cards} from "./data";

function App() {
    const [currenIdCard, setCurrentIdCard] = useState<string>()

    return (
        <ContentWrapper>
            <GlobalStyles/>
                <Image src={background} alt="background"/>
            <CardContainer>
                <div>
                    <Title>Ты сегодня покормил кота?</Title>
                    <Cards>{cards.map((card) => <CardItem
                            key={`${card.id}`}
                            {...card}
                            cards={cards}
                            currenIdCard={currenIdCard || ''}
                            setCurrentIdCard={setCurrentIdCard}
                        />
                    )}</Cards>
                </div>

            </CardContainer>
        </ContentWrapper>
    );
}

export default App;


const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;


`

const Image = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;

`
const CardContainer = styled.div`
  position: absolute;
  @media (max-width: 1240px) {
    top: 60px;
  }
`
const Cards = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 80px;
  flex-wrap: wrap;
  @media (max-width: 1240px) {
    justify-content: center;
  }

`

const Title = styled.div`
  z-index: 2;
  font-size: 36px;
  line-height: 44px;
  color: #FFFFFF;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 15;
  @media (max-width: 400px) {
    padding: 0 15px;
  }
`

