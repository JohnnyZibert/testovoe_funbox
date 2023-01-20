import React, {FC, useState} from 'react';
import styled from "styled-components";
import {declension} from "../utils/declension";
import cat from '../assets/img/PhotoCat.png'

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
    index: number
    handleOnClickCard: (id: string) => void


}

const CardItem: FC<IProps> = ({
                                  weight,
                                  id,
                                  presents,
                                  taste,
                                  portion,
                                  selectMenu,
                                  selected,
                                  handleOnClickCard,
                                  productAvailability
                              }) => {

    const [text, setText] = useState<string>()
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


    const statusCard = () => {
        if (selected && productAvailability) {
            return <FooterText>{selectMenu}</FooterText>
        } else if (!selected && productAvailability) {
            return <FooterText>Чего сидишь? Порадуй котэ, <a href="#">купи</a>.</FooterText>
        } else if (!productAvailability) {
            return <DisableCard>Печалька, с {taste} закончился.</DisableCard>
        }
    }
    const styled = {color: '#666666', fontWeight: '400', fontSize: '16px', lineHeight: '19px'}
    const styledHover = {
        color: '#E52E7A',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '19px',
    }
    return (
        <Wrapper onClick={() => handleOnClickCard(id)}>
            <CardContainer selected={selected} id={id} productAvailability={productAvailability}>
                <Card productAvailability={productAvailability} onMouseOver={boxMouseOverHandler}
                      onMouseOut={boxMouseOutHandler}>
                    <InfoContainer>
                        {selected && productAvailability ? <SupraTitleHover
                                style={text === 'Сказочное заморское яство' ? styled : styledHover}>{text}</SupraTitleHover>
                            : <SupraTitle productAvailability={productAvailability}>Сказочное заморское
                                яство</SupraTitle>}
                        <Title productAvailability={productAvailability}>Нямушка</Title>
                        <Taste productAvailability={productAvailability}>c {taste}</Taste>
                        <Presents
                            productAvailability={productAvailability}>{portion} порций <br/> {presents > 1 && presents} {declensionMouse} в
                            подарок</Presents>
                        {presents === 5 &&
                            <Presents productAvailability={productAvailability}>заказчик доволен</Presents>}
                    </InfoContainer>
                    <CardFooter>
                        <CatContainer productAvailability={productAvailability}>
                            <ImageCat productAvailability={productAvailability} src={cat} alt="cat"/>
                        </CatContainer>
                        <Weight selected={selected} className={'weight'} productAvailability={productAvailability}>
                            <div>{weight}</div>
                            <span>кг</span>
                        </Weight>
                    </CardFooter>
                </Card>
            </CardContainer>
            {statusCard()}
        </Wrapper>
    )
}


export default CardItem;

const Wrapper = styled.div`
`
const CardContainer = styled.div<{ selected: boolean, productAvailability: boolean }>`
  margin: 14px;
  position: relative;
  width: 328px;
  height: 488px;
  background-color: ${({selected, productAvailability}) => selected && productAvailability ? '#D91667' : '#1698D9'};
  background-color: ${({productAvailability}) => !productAvailability && '#B3B3B3'};
  border-radius: 14px;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 10%);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: ${({productAvailability}) => productAvailability ? 'pointer' : ''};
  transition: 0.5s;

  &:hover {
    background-color: ${({selected, productAvailability}) => selected && productAvailability ? '#E52E7A' : '#2EA8E6'};
    background-color: ${({productAvailability}) => !productAvailability && '#B3B3B3'};

    .weight {
      background: ${({selected, productAvailability}) => selected && productAvailability ? '#E52E7A' : '#2EA8E6'};
      background-color: ${({productAvailability}) => !productAvailability && '#B3B3B3'};
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
const CatContainer = styled.div<{ productAvailability: boolean }>`
  img {
    opacity: ${({productAvailability}) => !productAvailability && 0.5
    }

`
const ImageCat = styled.img<{ productAvailability: boolean }>`
  position: absolute;
  left: -30px;
  bottom: -88px;

`

export const Weight = styled.div<{ selected: boolean, productAvailability: boolean }>`
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({selected, productAvailability}) => selected && productAvailability ? '#D91667' : '#1698D9'};
  background: ${({productAvailability}) => !productAvailability && '#B3B3B3'};
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

const FooterText = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #FFFFFF;
  text-align: center;

  a {
    color: #1698D9;
    text-decoration: underline;
    text-decoration-style: dotted;;
  }
`
const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
`
const DisableCard = styled.div`
  color: #FFFF66;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
`
