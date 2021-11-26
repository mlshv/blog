import * as React from 'react'
import { graphql } from 'gatsby'

import Bio from 'components/Bio'
import Layout from 'components/Layout'
import PostFeedItem from 'components/PostFeedItem'

const IndexPage = ({ data, location }) => {
    return (
        <Layout location={location}>
            <Bio />
            {data.allMdx.nodes.map(({ slug, frontmatter, excerpt }) => (
                <PostFeedItem
                    key={slug}
                    slug={slug}
                    title={frontmatter.title}
                    date={frontmatter.date}
                    description={frontmatter.description ?? excerpt}
                />
            ))}
        </Layout>
    )
}

export const query = graphql`
    query SITE_INDEX_QUERY {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                id
                excerpt(truncate: true, pruneLength: 250)
                frontmatter {
                    title
                    description
                    date(formatString: "D MMMM YYYY", locale: "ru")
                }
                slug
            }
        }
    }
`

export default IndexPage
