import * as React from 'react'

import Layout from 'components/Layout'

const NotFoundPage = ({ location }) => {
    return (
        <Layout location={location}>
            <h1>404: страница не найдена</h1>
            <p>Упс, кажется я что-то сломал, простите</p>
        </Layout>
    )
}

export default NotFoundPage
