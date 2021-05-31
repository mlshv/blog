import React from 'react'
import { css } from '@linaria/core'
import { styled } from '@linaria/react'
import { StaticImage } from 'gatsby-plugin-image'

const BioStyled = styled.div`
    margin-top: 24px;
`

const P = styled.p`
    margin: 0;
`

const ul = css`
    margin: 0;
    padding: 0;
    list-style: none;

    li {
        margin: 0;
        padding: 0;
    }
`

const Bio = () => {
    return (
        <BioStyled>
            <StaticImage
                formats={['AUTO', 'WEBP', 'AVIF']}
                src="../images/profile-pic2.png"
                width={100}
                height={100}
                quality={95}
                alt="Моё лицо"
            />
            <p>
                Какой-то ещё один{' '}
                <a target="_blank" href="https://фронтендер.рф/">
                    фронтендер
                </a>
            </p>
        </BioStyled>
    )
}

export default Bio
