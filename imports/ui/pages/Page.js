import React, { Fragment } from 'react';
import {PageHeader} from '../components/PageHeader/PageHeader'
import {Main} from '../layouts/main'

export const Page = () => {
    return(
        <Fragment>
            <div className="page">
                <PageHeader />
                <Main />
            </div>
        </Fragment>
    )
}