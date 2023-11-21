import React from 'react'
import style from './index.module.scss'

const Welcome = () => {
  return (
    <React.Fragment>
    <img className={style.imgWrapper} src="https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-4.jpg"/>
    <div id={style.txt}>
    <h2>
    Welcome to your next website!
    </h2>
    <button type="button" className="btn btn-primary btn-loading" data-coreui-timeout="2000"><a target='_blank' href='https://startbootstrap.com/previews/stylish-portfolio'>Download Now!</a>
    </button>
    
    </div>
    </React.Fragment>
  )
}

export default Welcome