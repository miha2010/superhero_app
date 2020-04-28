import React, { useState, useEffect } from 'react';

import { Typography } from '@material-ui/core';

import { Superheroes, Search } from './components';

import styles from './App.module.css';
import fetchHeroes from './api';

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setSuperheroes(await fetchHeroes());
    }

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Typography variant="h2" gutterBottom className={styles.heading}>SUPERHEROES</Typography>
      <Search setSuperheroes={setSuperheroes} />
      <Superheroes superheroes={superheroes} />
    </div>
  )
}

// class App extends React.Component {
//   state = {
//     superheroes: [],
//   }

//   async componentDidMount() {
//     const fetchedSuperheroes = await fetchHeroes();

//     this.setState({ superheroes: fetchedSuperheroes });
//   }

//   render() {
//     const { superheroes, searchTerm } = this.state;

//     return (
//       <div className={styles.container}>
//         <Typography variant="h2" gutterBottom className={styles.heading}>SUPERHEROES</Typography>
//         <Search />
//         <Superheroes superheroes={superheroes} searchTerm={searchTerm} />
//       </div>
//     );
//   }
// }

export default App;