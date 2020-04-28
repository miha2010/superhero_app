import React from 'react';

import { Card, CardContent, CardMedia, Typography, LinearProgress } from '@material-ui/core';

import LazyLoad from 'react-lazy-load';
import styles from './Superhero.module.css';

const Superhero = (props) => {
  const powerstatsArray = Object.entries(props.superhero.powerstats);

  return (
    <LazyLoad height={1030} offsetVertical={300}>
      <Card className={styles.card}>
        <CardMedia
          className={styles.cardMedia}
          image={props.superhero.image}
          title={props.superhero.name}
        />
        <CardContent className={styles.cardContent} >
          <Typography gutterBottom variant="h4">
            {props.superhero.name}
          </Typography>
          <div className={styles.textContainer}>
            <Typography variant="subtitle1"><strong>Gender: </strong>{props.superhero.gender}</Typography>
            <Typography variant="subtitle1"><strong>Race: </strong>{props.superhero.race}</Typography>
            <Typography variant="subtitle1"><strong>Full Name: </strong>{props.superhero.fullName}</Typography>
            <Typography variant="subtitle1"><strong>Publisher: </strong>{props.superhero.publisher}</Typography>
          </div>
          {powerstatsArray.map(([key, value], i) => (
            <div key={i}>
              <p>{`${key[0].toUpperCase()}${key.slice(1)}`}</p>
              <LinearProgress variant="determinate" value={value} />
            </div>
          ))}
        </CardContent>
      </Card>
    </LazyLoad>
  );
}

export default Superhero;