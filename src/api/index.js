import axios from 'axios';

const URL = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json';

const fetchHeroes = async (searchTerm = '', gender = '') => {
  try {
    const { data } = await axios.get(URL);

    const superheroes = data.sort(() => Math.random() - 0.5);

    const strippedSuperheroes = superheroes.map((superhero) => {
      const { name, powerstats, appearance: { gender, race }, biography: { fullName, firstAppearance, publisher }, work: { occupation }, images: { lg: image } } = superhero;

      const strippedSuperhero = { name, powerstats, gender, race, fullName, firstAppearance, publisher, occupation, image };

      return strippedSuperhero;
    });

    const searchedSuperheroes = strippedSuperheroes.filter((superHero) => {
      return superHero.name.toLowerCase().startsWith(searchTerm.toLowerCase());
    });

    const filteredSuperheroes = searchedSuperheroes.filter((superHero) => {
      return superHero.gender.includes(gender);
    });

    return filteredSuperheroes;
  } catch (error) {
    console.log(error);
  }
}

export default fetchHeroes;