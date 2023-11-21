import React from 'react'
import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars} from '@fortawesome/free-solid-svg-icons'

const Headeridx = () => {
    return (
        <React.Fragment>
            <header className={style.header}>
                <img src="https://assets.startbootstrap.com/img/meta/products/og/og-image-stylish-portfolio.png" />
                <div className={style.icon}>
                <FontAwesomeIcon style={{fontSize:'30px'}} icon={faBars} />
                </div>
                <div className={style.button}> 
                <button type="button" className="btn btn-primary btn-loading" data-coreui-timeout="2000"><a target='_blank' href='https://startbootstrap.com/previews/stylish-portfolio'>Find Out More</a>
                </button>
                </div>

            </header>
        </React.Fragment>
    )
}

export default Headeridx