import React from 'react';

import { Grid, CircularProgress } from '@material-ui/core';

import styles from './Superheroes.module.css';
import Superhero from './Superhero/Superhero';

const Superheroes = (props) => {
  if (!props.superheroes.length && props.searchTerm) {
    return (
      <div className={styles.textContainer}>
        <h1 className={styles.error}>No heroes found!</h1>
      </div >
    )
  }

  if (!props.superheroes.length) {
    return (
      <div className={styles.textContainer}>
        <CircularProgress size={90} thickness={5} className={styles.progress} />;
      </div>
    )
  }

  return (
    <Grid container spacing={3} className={styles.container}>
      {props.superheroes.map((superhero, i) => (
        <Grid key={i} item xs={12} sm={6} md={4} lg={2}>
          <Superhero superhero={superhero} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Superheroes;