import React, {useState} from 'react';
import {GlobalStyles} from "./components/GlobalStyles";
import background from './components/Pattern.png'
import styled from "styled-components";
import CardItem from "./components/CardItem";
import {v4 as uuidv4} from 'uuid';
import {cards} from "./data";

function App() {
    const [currenIdCard, setCurrentIdCard] = useState<string>()
    const handleOnClickCard = (id: string) => {
        setCurrentIdCard(id)
    }

    const currentCard = cards.map((item) => {
        if (item.id === currenIdCard) {
            return {...item, selected: true}
        } else {
            return {...item, selected: false}
        }
    })

    return (
        <ContentWrapper>
            <GlobalStyles/>
            <Image src={background} alt="background"/>
            <CardContainer>
                <div>
                    <Title>Ты сегодня покормил кота?</Title>
                    <Cards>{currentCard.map((card, index) => <CardItem key={`${card.portion}${card.weight}`}
                                                                       cards={cards}
                                                                       id={card.id}
                                                                       index={index}
                                                                       selected={card.selected}
                                                                       selectMenu={card.selectMenu}
                                                                       taste={card.taste}
                                                                       portion={card.portion}
                                                                       presents={card.presents}
                                                                       handleOnClickCard={handleOnClickCard}
                                                                       weight={card.weight}/>)}</Cards>
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
`
const Cards = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 80px;

`

const Title = styled.div`
  z-index: 2;
  font-size: 36px;
  line-height: 44px;
  color: #FFFFFF;
  margin-bottom: 24px;
  text-align: center;
`

