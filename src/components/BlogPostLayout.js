import React from 'react'
import { Link } from 'gatsby'
import { styled } from '@linaria/react'

import { globals } from 'theme'
import HelmetProvider from './HelmetProvider'
import { StyledLayout } from './Layout'

const HeaderLink = styled.a`
    color: #58a6ff !important;

    &:hover {
        box-shadow: 0 2px 0 currentColor;
    }
`

const StyledBlogPostLayout = styled(StyledLayout)`
    main {
        h1 {
            margin-top: 0;
            line-height: 1.2;
        }

        ol,
        ul {
            padding-inline-start: 32px;
            margin-left: -32px;
            line-height: 1.6;
            list-style: none;

            li {
                margin: 0;
                padding: 0;

                &::before {
                    content: '– ';
                }

                ol,
                ul {
                    margin-left: 0;
                }
            }
        }

        h2 {
            margin: 32px 0 18px;
        }

        h3 {
            margin: 24px 0 12px;
        }
    }

    .gatsby-highlight {
        font-size: 13px;
    }
`

const СontentWrap = styled.div`
    flex-grow: 1;
`

const BlogPostLayout = ({ pageContext, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`

    return (
        <HelmetProvider title={pageContext.frontmatter.title}>
            <StyledBlogPostLayout className={globals}>
                <СontentWrap>
                <header>
                    <h1>
                        <HeaderLink as={Link} title="На главную страницу" to={rootPath}>
                            Малышев про
                        </HeaderLink>
                    </h1>
                </header>
                <main>{children}</main>
                </СontentWrap>
                <footer>
                    <div>
                        Фидбэк, идеи, благодарочка:{' '}
                        <a target="_blank" href="https://t.me/mlshv">
                            t.me/mlshv
                        </a>
                    </div>
                </footer>
            </StyledBlogPostLayout>
        </HelmetProvider>
    )
}

export default BlogPostLayout
