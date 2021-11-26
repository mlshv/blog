import React from 'react'
import { Link } from 'gatsby'
import { styled } from '@linaria/react'

import { globals } from 'theme'
import HelmetProvider from './HelmetProvider'
import Footer from './Footer'

export const StyledLayout = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    header,
    main,
    footer {
        margin: 0 auto;
        max-width: 640px;
        padding: 0 16px;
    }

    header {
        width: 100%;
        padding-top: 24px;

        h1 {
            margin: 0;
            line-height: 1.2;
            font-weight: 800;
        }
    }

    main {
        padding-bottom: 48px;
    }

    footer {
        width: 100%;
        margin-top: auto;
        padding: 24px 16px;
    }
`

const СontentWrap = styled.div`
    flex-grow: 1;
`

const Layout = ({ location, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath

    return (
        <HelmetProvider>
            <StyledLayout className={globals}>
                <СontentWrap>
                    <header>
                        <h1>
                            {isRootPath ? (
                                <>Малышев про</>
                            ) : (
                                <Link title="На главную страницу" to={rootPath}>
                                    Малышев про
                                </Link>
                            )}
                        </h1>
                    </header>
                    <main>{children}</main>
                </СontentWrap>

                <Footer />
            </StyledLayout>
        </HelmetProvider>
    )
}

export default Layout
