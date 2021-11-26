import React from 'react'
import { Link } from 'gatsby'
import { styled } from '@linaria/react'

const PostFeedItemStyled = styled.article`
    .title {
        margin: 0;
        line-height: 1.2;
        font-size: 32px;
    }

    .date {
        margin-top: 8px;
        font-style: italic;
        opacity: 0.5;
    }

    .description {
        margin: 12px 0;
        font-size: 18px;
    }

    & + & {
        margin-top: 24px;
    }
`

const PostFeedItem = ({ slug, title, date, description }) => {
    return (
        <PostFeedItemStyled>
            <h1 className="title">{title}</h1>
            <div className="date">{date}</div>
            <div className="description">{description}</div>
            <Link to={`/${slug}`}>
                <span role="img" aria-label="">
                    ☕️
                </span>{' '}
                Читать
            </Link>
        </PostFeedItemStyled>
    )
}

export default PostFeedItem
