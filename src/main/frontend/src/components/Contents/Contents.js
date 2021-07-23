import React from 'react';
import { Button } from '../ButtonElement';
import { ContentsContainer, ContentsWrapper, ContentsRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img, Title } from './ContentsElements';

export const Contents = ({ lightBg, id, imgStart, topLine, lightText, title, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
    return (
        <>
            <ContentsContainer lightBg={lightBg} id={id}>
                <ContentsWrapper>
                    <ContentsRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Title>{title}</Title>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </ContentsRow>
                </ContentsWrapper>
            </ContentsContainer>
        </>
    );
}

export default Contents;