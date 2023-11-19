import React from 'react'
import Button from '@mui/material/Button';
import style from "./index.module.scss"
const FirstTask = () => {
    return (
        <React.Fragment>
            <Button variant="contained">
                <a  target='_blank' className={style.a} href='https://start-react-thmf.vercel.app/'>First Task</a>
            </Button>

        </React.Fragment>
    )
}

export default FirstTask