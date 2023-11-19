import * as React from 'react';
import Grid from '@mui/material/Grid';
import style from './index.module.scss'
import Button from '@mui/material/Button';

export default function CenterIndex() {
  const [spacing] = React.useState(3);
  function handleFirst(e) {
    alert('salam')
    
  }
  function handleLast(e) {
    alert('salam')
    
  }
  return (
    <React.Fragment>
      <div className={style.box}>
      <div className={style.box2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {[0, 1, 2].map((value) => (
              <Grid  key={value} item>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX6zRkmS6z10q3NKKaWZlDS6KUuiD6HMF3jBmEM-uE2w&s' />
                <div>
                  <h4>Heading</h4>
                  <p>
                    This is a media card. You can use this section to describe the content. </p>
                    <Button onClick={(e)=>handleFirst(e)} variant="outlined">VIEW</Button>
                    <Button onClick={(e)=>handleLast(e)}  variant="outlined">EDIT</Button>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
    <div className={style.box2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={spacing}>
                {[0, 1, 2].map((value) => (
                  <Grid  key={value} item>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX6zRkmS6z10q3NKKaWZlDS6KUuiD6HMF3jBmEM-uE2w&s' />
                    <div>
                      <h4>Heading</h4>
                      <p>
                        This is a media card. You can use this section to describe the content. </p>
                        <Button onClick={(e)=>handleFirst(e)} variant="outlined">VIEW</Button>
                        <Button onClick={(e)=>handleLast(e)}  variant="outlined">EDIT</Button>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className={style.box2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={spacing}>
                {[0, 1, 2].map((value) => (
                  <Grid  key={value} item>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX6zRkmS6z10q3NKKaWZlDS6KUuiD6HMF3jBmEM-uE2w&s' />
                    <div>
                      <h4>Heading</h4>
                      <p>
                        This is a media card. You can use this section to describe the content. </p>
                        <Button onClick={(e)=>handleFirst(e)} variant="outlined">VIEW</Button>
                        <Button onClick={(e)=>handleLast(e)}  variant="outlined">EDIT</Button>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}