import React, { FC } from 'react'
import styled from 'styled-components'

interface IProps {
  selected: boolean
  productAvailability: boolean
  taste: string
  selectMenu: string
  handlerSelectCards: (id: string) => void
  id: string
  activeCards: boolean
}

const FooterTextComponent: FC<IProps> = ({
  productAvailability,
  taste,
  selectMenu,
  handlerSelectCards,
  id,
  activeCards,
}) => {
  return (
    <div>
      {activeCards && productAvailability && (
        <FooterText>{selectMenu}</FooterText>
      )}
      {!activeCards && productAvailability && (
        <FooterText>
          Чего сидишь? Порадуй котэ,{' '}
          <button onClick={() => handlerSelectCards(id)}>купи</button>.
        </FooterText>
      )}
      {!productAvailability && (
        <DisableCard>Печалька, с {taste} закончился.</DisableCard>
      )}
    </div>
  )
}

export default FooterTextComponent

const FooterText = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;
  text-align: center;
  button {
    background: transparent;
    border: none;
    color: #1698d9;
    text-decoration: underline;
    text-decoration-style: dotted;
    cursor: pointer;
  }
  @media (max-width: 1240px) {
    margin-bottom: 10px;
  }
`

const DisableCard = styled.div`
  color: #ffff66;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  @media (max-width: 1240px) {
    margin-bottom: 10px;
  }
`
