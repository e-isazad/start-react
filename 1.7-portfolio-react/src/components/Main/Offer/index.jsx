import React from 'react'
import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreen ,faPencil,faThumbsUp,faFaceSmile} from '@fortawesome/free-solid-svg-icons'

const Offer = () => {
    return (
        <React.Fragment>
            <main className={style.main}>

                <div className='container text-center'>
                    <div className={style.headerBox}>
                        <p>SERVICES</p>
                        <h2>What We Offer</h2>
                    </div>
                </div>
                <section className={style.service} >
                    <div className='row'>


                        <div className='col-lg-3 col-md-6 col-sm-12' id={style.iconsBox}>
                            <span>
                            <FontAwesomeIcon icon={faMobileScreen} />
                            </span>
                            <p>Responsive</p>
                            <p>Looks great on any screen size!</p>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12' id={style.iconsBox}>
                            <span>
                            <FontAwesomeIcon  icon={faPencil} />
                            </span>
                            <p>Redesigned</p>
                            <p>Freshly redesigned for Bootstrap 5.</p>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12' id={style.iconsBox}>
                            <span>
                            <FontAwesomeIcon icon={faThumbsUp} />
                            </span>
                            <p>Favorited</p>
                            <p>Millions of users  Start Bootstrap!</p>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12' id={style.iconsBox}>
                            <span>
                            <FontAwesomeIcon icon={faFaceSmile} />
                            </span>
                            <p>Question</p>
                            <p>I mustache you a question...</p>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default Offer