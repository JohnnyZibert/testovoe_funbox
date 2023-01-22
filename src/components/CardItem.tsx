import React, {FC, useCallback, useState} from 'react';
import styled from "styled-components";
import {declension} from "../utils/declension";
import cat from '../assets/img/Photo (1).png'
import FooterTextComponent from "./FooterText";

interface ICard {
    taste: string,
    portion: number
    presents: number
    weight: string
    selected: boolean
    id: string
    selectMenu: string
    productAvailability: boolean
}

interface IProps extends ICard {
    cards: ICard[]
    setCurrentIdCard: (id: string) => void
    currenIdCard: string


}

const CardItem: FC<IProps> = ({
                                  weight,
                                  presents,
                                  id,
                                  taste,
                                  portion,
                                  selectMenu,
                                  selected,
                                  productAvailability,
                              }) => {

    const [selectedCards, setSelectedCards] = useState<string[]>([])
    const [text, setText] = useState<string>()

    const activeCards = selectedCards.includes(id)

    const declensionMouse = declension(presents, ['мышь', 'мыши', 'мышей'])

    const boxMouseOverHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        const box: HTMLDivElement = event.currentTarget;
        if (box) {
            setText('Котэ не одобряет?')
        }
    }
    const boxMouseOutHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        const box: HTMLDivElement = event.currentTarget;
        if (box) {
            setText('Сказочное заморское яство')
        }
    }

    const handlerSelectCards = useCallback((id: string) => {
        setSelectedCards(prev => prev.includes(id) ? prev.filter(el => el !== id) : [...prev, id])
    }, [])





    const styledSupraTitle = {color: '#666666', fontWeight: '400', fontSize: '16px', lineHeight: '19px'}
    const styledHover = {
        color: '#E52E7A',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '19px',
    }

    const activeBackground = () => {
        if (!activeCards && productAvailability) {
            return '#1698D9'
        } else if (activeCards && productAvailability) {
            return '#D91667'
        } else if (!productAvailability) {
            return '#B3B3B3'
        }
    }
    const activeHover = () => {
        if (!activeCards && productAvailability) {
            return '#2EA8E6'
        } else if (activeCards && productAvailability) {
            return '#E52E7A'
        } else if (!productAvailability) {
            return '#B3B3B3'
        }
    }
    return (
        <Wrapper>
            <CardContainer selected={selected} id={id} productAvailability={productAvailability}
                           activeBackground={activeBackground}
                           activeHover={activeHover}>
                <Card productAvailability={productAvailability}
                      onMouseOver={boxMouseOverHandler}
                      onMouseOut={boxMouseOutHandler}
                      onClick={() => handlerSelectCards(id)}

                >
                    <InfoContainer>
                        {activeCards && productAvailability ? <SupraTitleHover
                                style={text === 'Сказочное заморское яство' ? styledSupraTitle
                                    : styledHover}>{text}</SupraTitleHover>
                            : <SupraTitle productAvailability={productAvailability}>Сказочное заморское
                                яство</SupraTitle>}
                        <Title productAvailability={productAvailability}>Нямушка</Title>
                        <Taste productAvailability={productAvailability}>c {taste}</Taste>
                        <Presents
                            productAvailability={productAvailability}>{portion} порций <br/>
                            {presents > 1 && presents} {declensionMouse} в
                            подарок</Presents>
                        {presents === 5 &&
                            <Presents productAvailability={productAvailability}>заказчик доволен</Presents>}
                    </InfoContainer>
                    <ImageCat productAvailability={productAvailability} src={cat} alt="cat"/>
                    <Weight selected={selected} className={'weight'}
                            activeBackground={activeBackground}
                            productAvailability={productAvailability}>
                        <div>{weight}</div>
                        <span>кг</span>
                    </Weight>
                </Card>
            </CardContainer>
            <FooterTextComponent selected={selected}
                                 productAvailability={productAvailability}
                                 taste={taste}
                                 selectMenu={selectMenu}
                                 handlerSelectCards={handlerSelectCards}
                                 id={id}
                                 activeCards={activeCards}/>
        </Wrapper>
    )
}


export default CardItem;

const Wrapper = styled.div`
`
const CardContainer = styled.div<{
    selected: boolean, productAvailability: boolean,
    activeBackground: () => string | undefined
    activeHover: () => string | undefined
}>`
  margin-bottom: 14px;
  position: relative;
  width: 328px;
  height: 488px;
  border-radius: 14px;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 10%);
  background-color: ${({activeBackground}) => activeBackground()};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: ${({productAvailability}) => productAvailability ? 'pointer' : ''};
  transition: 0.5s;

  &:hover {
    background-color: ${({activeHover}) => activeHover()};


    .weight {
      background-color: ${({activeHover}) => activeHover()};;
    }
  }
}
`

const Card = styled.div<{ productAvailability: boolean }>`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 320px;
  height: 480px;
  border-radius: 11px;
  background-color: #f2f2f2;
  clip-path: polygon(14.7% 0, 100% 0, 100% 100%, 0 100%, 0 9.7%);
  overflow: hidden;
`
const SupraTitle = styled.div<{ productAvailability: boolean }>`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${({productAvailability}) => !productAvailability ? '#B3B3B3' : '#666666'}
`
const SupraTitleHover = styled.div`
  transition: 0.5s;
`
const Title = styled.h1<{ productAvailability: boolean }>`
  color: ${({productAvailability}) => !productAvailability && '#B3B3B3'};
`
const InfoContainer = styled.div`
  text-align: left;
  margin: 21px 0 0 51px;
`
const Taste = styled.h2<{ productAvailability: boolean }>`
  margin-bottom: 15px;
  color: ${({productAvailability}) => !productAvailability && '#B3B3B3'}
`
const Presents = styled.div<{ productAvailability: boolean }>`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${({productAvailability}) => !productAvailability ? '#B3B3B3' : '#666666'}
`
const ImageCat = styled.img<{ productAvailability: boolean }>`
  position: absolute;
  left: -30px;
  bottom: -88px;
  opacity: ${({productAvailability}) => !productAvailability && 0.5};
`

export const Weight = styled.div<{
    selected: boolean, productAvailability: boolean,
    activeBackground: () => string | undefined
}>`
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({activeBackground}) => activeBackground()};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #FFFFFF;
  transition: 0.5s;

  div {
    font-weight: 400;
    font-size: 42px;
    line-height: 22px;
    margin-bottom: 5px;
    margin-top: 10px;
  }

  span {
    font-weight: 400;
    font-size: 21px;
    line-height: 22px;
  }

`
