import React, {FC, MouseEventHandler, useState} from 'react';
import styled from "styled-components";
import {declension} from "../utils/declension";
import cat from '../assets/img/PhotoCat.png'
import {logDOM} from "@testing-library/react";

interface ICard {
    taste: string,
    portion: number
    presents: number
    weight: string
    selected: boolean
    id: string
    selectMenu: string
}

interface IProps extends ICard {
    cards: ICard[]
    index: number
    handleOnClickCard:(id: string) => void


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
                              }) => {
    const declensionMouse = declension(presents, ['мышь', 'мыши', 'мышей'])



    const statusCard = () => {
        if (selected && portion >= 1) {
            return <FooterText>{selectMenu}</FooterText>
        } else if (!selected && portion >= 1) {
            return <FooterText>Чего сидишь? Порадуй котэ, <a href="#">купи</a>.</FooterText>
        } else if (portion <= 1) {
            return <DisableCard>Печалька, с {taste} закончился.</DisableCard>
        }
    }
    return (
        <Wrapper onClick={() => handleOnClickCard(id)}>
            <CardContainer selected={selected} id={id}>
                <Card>
                    {/*<Kvadrat></Kvadrat>*/}
                    <InfoContainer>
                        {selected ? <SupraTitleHover>Котэ не одобряет?</SupraTitleHover>
                            : <SupraTitle>Сказочное заморское яство</SupraTitle>}
                        <h1>Нямушка</h1>
                        <Taste>c {taste}</Taste>
                        <Presents>{portion} порций <br/> {presents > 1 && presents} {declensionMouse} в
                            подарок</Presents>
                        {presents === 5 && <Presents>заказчик доволен</Presents>}
                    </InfoContainer>
                    <CardFooter>
                        <div>
                            <ImageCat src={cat} alt="cat"/>
                        </div>
                        <Weight selected={selected} className={'weight'}>
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
// clip-path: polygon(100% 0, 0% 100%, 0 0);
// const Kvadrat = styled.div`
//   transform:rotate(45deg);
//   width: 124px;
//   height: 124px;
//   position: absolute;
//   top:-65px;
//   left: -80px;
//   background: black;
//   border: 4px solid #1698D9;
// `
const CardContainer = styled.div<{ selected: boolean , id: string}>`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 4px solid;
  border-radius: 10px;
  margin-bottom: 14px;
  cursor: pointer;
  border-color: ${({selected,id}) =>  selected ? '#D91667' : '#1698D9'};

  &:hover {
    border-color: ${({selected}) =>  selected ? '#E52E7A' : '#2EA8E6'};

    .weight {
      background: ${({selected}) =>selected ? '#E52E7A' : '#2EA8E6'};
    }
  }
}
`

const Card = styled.div`
  background: #FFFFFF;
  width: 320px;
  height: 509px;
  background: linear-gradient(135deg, transparent 25px, #FFFFFF 0) top left;
  //div:after {
  //  content: '';
  //  position: absolute;
  //  left: 0;
  //  top: 0;
  //  border-top: 30px solid black;
  //  border-right: 30px solid #FFFFFF;
  //}
`
const SupraTitle = styled.div`
  color: #666666;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`
const SupraTitleHover = styled.div`
  color: #E52E7A
`

const InfoContainer = styled.div`
  text-align: left;
  margin: 21px 0 0 51px;
`
const Taste = styled.h2`
  margin-bottom: 15px;
`
const Presents = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #666666;
`

const ImageCat = styled.img`
  position: absolute;
  left: -30px;
  bottom: -88px
`

export const Weight = styled.div<{ selected: boolean }>`
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({selected}) => selected ? '#D91667' : '#1698D9'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #FFFFFF;

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
