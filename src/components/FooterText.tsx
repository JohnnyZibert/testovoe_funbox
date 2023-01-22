import React, {FC} from 'react';
import styled from "styled-components";

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
                                             activeCards
                                         }) => {

    return (
        <div>
            {activeCards && productAvailability && <FooterText>{selectMenu}</FooterText>}
            {!activeCards && productAvailability && <FooterText>
                Чего сидишь? Порадуй котэ, <a href={'#'} onClick={() => handlerSelectCards(id)}>купи</a>.
            </FooterText>}
            {!productAvailability && <DisableCard>Печалька, с {taste} закончился.</DisableCard>}
        </div>
    );
};

export default FooterTextComponent;

const FooterText = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #FFFFFF;
  text-align: center;
  @media (max-width: 1240px) {
    margin-bottom: 10px;
  }

  a {
    color: #1698D9;
    text-decoration: underline;
    text-decoration-style: dotted;;
  }
`

const DisableCard = styled.div`
  color: #FFFF66;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  @media (max-width: 1240px) {
    margin-bottom: 10px;
  }
`