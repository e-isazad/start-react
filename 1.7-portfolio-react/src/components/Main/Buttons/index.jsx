import React from 'react'
import style from './index.module.scss'
import { CButton } from '@coreui/react'

const Buttons = () => {
    return (
        <React.Fragment>
            <section id={style.theButton}>
                <article>
                    <h3>
                        The buttons below are impossible to resist...
                    </h3>
                    <CButton color="light">Click Me!</CButton>
                    <CButton color="dark">Look At Me!</CButton>
                </article>

            </section>
        </React.Fragment>
    )
}

export default Buttons