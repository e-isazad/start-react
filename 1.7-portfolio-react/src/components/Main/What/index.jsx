import React from 'react'
import style from './index.module.scss'

const What = () => {
    return (
        <React.Fragment>
            <div className='container text-center my-5'>
                <div className={style.txt}>
                <h3>Stylish Portfolio is the perfect theme for your next project!</h3>
                <p>This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at <a href='https://startbootstrap.com/previews/stylish-portfolio'>Unsplash</a> !</p>
              <div className={style.button} >
              <button  type="button" class="btn btn-dark my-5"><a href='#'>What We Offer</a></button>
              </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default What