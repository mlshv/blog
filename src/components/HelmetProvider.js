import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

const HelmetProvider = ({ title, description, children }) => {
    return (
        <StaticQuery
            query={graphql`
                query SITE_TITLE_QUERY {
                    site {
                        siteMetadata {
                            title
                            description
                        }
                    }
                }
            `}
            render={(data) => (
                <>
                    <Helmet
                        title={
                            title
                                ? `${title} | ${data.site.siteMetadata.title}`
                                : data.site.siteMetadata.title
                        }
                        meta={[
                            {
                                name: 'description',
                                content: description || data.site.siteMetadata.description,
                            },
                        ]}
                    >
                        <html lang="ru" />
                    </Helmet>

                    {children}
                </>
            )}
        />
    )
}

export default HelmetProvider
