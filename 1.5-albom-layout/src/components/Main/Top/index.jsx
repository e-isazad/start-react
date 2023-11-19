import React from 'react'
import Button from '@mui/material/Button';
import style from './index.module.scss'
const TopIndex = () => {
    return (
        <React.Fragment>
            <div className={style['top-box']}>
                <h1>Album layout</h1>
                <p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                <Button variant="contained">Manin Call to Action</Button>
                <Button variant="outlined">Secundary Action</Button>
            </div>
        </React.Fragment>
    )
}

export default TopIndex