import React, { useState } from 'react';

import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';

import styles from './Search.module.css';

import fetchHeroes from '../../api';

const Search = ({ setSuperheroes }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [gender, setGender] = useState('');

  const handleClick = async () => {
    setSuperheroes(await fetchHeroes(searchTerm, gender));
  }

  return (
    <div className={styles.searchContainer}>
      <TextField
        value={searchTerm}
        className={styles.textField}
        onChange={(event) => setSearchTerm(event.target.value)}
        label="Supehero"
        variant="filled"
      />
      <div className={styles.selectContainer}>
        <FormControl variant="filled" className={styles.select}>
          <InputLabel>Gender</InputLabel>
          <Select value={gender} onChange={(event) => setGender(event.target.value)}>
            <MenuItem value='Male'>Male</MenuItem>
            <MenuItem value='Female'>Female</MenuItem>
            <MenuItem value=''>All</MenuItem>
            <MenuItem value='-'>Genderless</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button className={styles.button} variant="contained" color="primary" onClick={handleClick}>Submit</Button>
    </div>
  )
}

export default Search;