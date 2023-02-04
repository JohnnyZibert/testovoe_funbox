import React, { useState } from 'react'
import styled from 'styled-components'

import background from './assets/img/Pattern@2x.png'
import CardItem from './components/CardItem'
import { GlobalStyles } from './components/GlobalStyles'
import { cards } from './data'

function App() {
  const [currenIdCard, setCurrentIdCard] = useState<string>()

  return (
    <ContentWrapper
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <GlobalStyles />
      <CardContainer>
        <div>
          <Title>Ты сегодня покормил кота?</Title>
          <Cards>
            {cards.map((card) => (
              <CardItem
                key={`${card.id}`}
                {...card}
                cards={cards}
                currenIdCard={currenIdCard || ''}
                setCurrentIdCard={setCurrentIdCard}
              />
            ))}
          </Cards>
        </div>
      </CardContainer>
    </ContentWrapper>
  )
}

export default App

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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
  color: #ffffff;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 15;
  @media (max-width: 400px) {
    padding: 0 15px;
  }
`
