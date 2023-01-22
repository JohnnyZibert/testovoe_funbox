import React, {useState} from 'react';
import {GlobalStyles} from "./components/GlobalStyles";
import background from '../src/assets/img/Group 1.png'
import styled from "styled-components";
import CardItem from "./components/CardItem";
import {cards} from "./data";
import {useSelector} from "react-redux";
import {RootState} from "./store/Store";

function App() {
    const [currenIdCard, setCurrentIdCard] = useState<string>()

    const { isClicked} = useSelector((state: RootState) => state.isClickedCard)
    const selectedCard = cards.map((card) => {
        if (card.id === currenIdCard && isClicked) {
            card.selected = true
        } else if (card.id === currenIdCard && card.selected) {
            card.selected = false
        }
        return card
    })


    return (
        <ContentWrapper>
            <GlobalStyles/>
            <ImageContainer>
                <Image src={background} alt="background"/>
            </ImageContainer>
            <CardContainer>
                <div>
                    <Title>Ты сегодня покормил кота?</Title>
                    <Cards>{selectedCard.map((card) => <CardItem
                        key={`${card?.portion}${card?.weight}`}
                        cards={cards}
                        currenIdCard={currenIdCard || ''}
                        id={card.id}
                        selected={card.selected}
                        selectMenu={card.selectMenu}
                        taste={card.taste}
                        productAvailability={card.productAvailability}
                        portion={card.portion}
                        presents={card.presents}
                        setCurrentIdCard={setCurrentIdCard}
                        weight={card.weight} />
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
const ImageContainer = styled.div`
  background: green;`
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
    top:60px;
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

