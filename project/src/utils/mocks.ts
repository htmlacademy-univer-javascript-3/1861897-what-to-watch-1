import FilmType from '../types/film-type';
import ReviewType from '../types/review-type';
import UserType from '../types/user-type';
import AuthorizationData from '../types/authorization-data-type';

export const getMockFilms = (): FilmType[] => ([
  {
    name: 'Snatch',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Snatch.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/snatch.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Snatch.jpg',
    backgroundColor: '#FDFDFC',
    description: 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.',
    rating: 0.2,
    scoresCount: 716577,
    director: 'Guy Ritchie',
    starring: [
      'Jason Statham',
      'Brad Pitt',
      'Benicio Del Toro'
    ],
    runTime: 104,
    genre: 'Comedy',
    released: 2000,
    id: 1,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    name: 'Gangs of new york',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Gangs_of_New_York_Poster.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/gangs_of_new_york.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/gangs_of_new_york.jpg',
    backgroundColor: '#A6B7AC',
    description: 'In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father\'s killer.',
    rating: 8.8,
    scoresCount: 370881,
    director: 'Martin Scorsese',
    starring: [
      'Leonardo DiCaprio',
      'Cameron Diaz',
      'Daniel Day-Lewis'
    ],
    runTime: 167,
    genre: 'Crime',
    released: 2002,
    id: 2,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  }]);

export const getMockExtendedFilms = (): FilmType[] => ([
  {
    name: 'Snatch',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Snatch.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/snatch.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Snatch.jpg',
    backgroundColor: '#FDFDFC',
    description: 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.',
    rating: 0.2,
    scoresCount: 716577,
    director: 'Guy Ritchie',
    starring: [
      'Jason Statham',
      'Brad Pitt',
      'Benicio Del Toro'
    ],
    runTime: 104,
    genre: 'Comedy1',
    released: 2000,
    id: 1,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    name: 'Gangs of new york',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Gangs_of_New_York_Poster.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/gangs_of_new_york.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/gangs_of_new_york.jpg',
    backgroundColor: '#A6B7AC',
    description: 'In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father\'s killer.',
    rating: 8.8,
    scoresCount: 370881,
    director: 'Martin Scorsese',
    starring: [
      'Leonardo DiCaprio',
      'Cameron Diaz',
      'Daniel Day-Lewis'
    ],
    runTime: 167,
    genre: 'Crime2',
    released: 2002,
    id: 2,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    name: 'War of the Worlds',
    posterImage: 'https://10.react.pages.academy/static/film/poster/War_of_the_Worlds.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/war-of-the-worlds.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/War_of_the_Worlds.jpg',
    backgroundColor: '#9B7E61',
    description: 'As Earth is invaded by alien tripod fighting machines, one family fights for survival.',
    rating: 9.3,
    scoresCount: 386834,
    director: 'Steven Spielberg',
    starring: [
      'Tom Cruise',
      'Dakota Fanning',
      'Tim Robbins'
    ],
    runTime: 116,
    genre: 'Adventure3',
    released: 2005,
    id: 3,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4'
  },
  {
    name: 'Johnny English',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Johnny_English.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/johnny-english.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Johnny_English.jpg',
    backgroundColor: '#F0DBA2',
    description: 'After a sudden attack on the MI5, Johnny English, Britain\'s most confident yet unintelligent spy, becomes Britain\'s only spy.',
    rating: 10,
    scoresCount: 136843,
    director: 'Peter Howitt',
    starring: [
      'Rowan Atkinson',
      'John Malkovich',
      'Natalie Imbruglia'
    ],
    runTime: 88,
    genre: 'Comedy4',
    released: 2003,
    id: 4,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4'
  },
  {
    name: 'Dardjeeling Limited',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Dardjeeling_Limited.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/dardjeeling_limited.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Dardjeeling_Limited.jpg',
    backgroundColor: '#AD9F8B',
    description: 'A year after their father\'s funeral, three brothers travel across India by train in an attempt to bond with each other.',
    rating: 3.6,
    scoresCount: 165106,
    director: 'Wes Anderson',
    starring: [
      'Owen Wilson',
      'Adrien Brody',
      'Jason Schwartzman'
    ],
    runTime: 91,
    genre: 'Adventure5',
    released: 2007,
    id: 5,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    name: 'What We Do in the Shadows',
    posterImage: 'https://10.react.pages.academy/static/film/poster/What-We-Do-in-the-Shadows.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/what-we-do-in-the-shadows.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/What-We-Do-in-the-Shadows.jpg',
    backgroundColor: '#A39E81',
    description: 'A look into the daily (or rather, nightly) lives of three vampires who\'ve lived together for over 100 years, in Staten Island.',
    rating: 7.2,
    scoresCount: 6173,
    director: 'Jemaine Clement',
    starring: [
      'Kayvan Novak',
      'Matt Berry',
      'Natasia Demetriou'
    ],
    runTime: 30,
    genre: 'Comedy6',
    released: 2019,
    id: 6,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4'
  },
  {
    name: 'Moonrise Kingdom',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Moonrise_Kingdom.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/moonrise-kingdom.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Moonrise_Kingdom.jpg',
    backgroundColor: '#D8E3E5',
    description: 'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.',
    rating: 7.9,
    scoresCount: 291183,
    director: 'Wes Anderson',
    starring: [
      'Jared Gilman',
      'Kara Hayward',
      'Bruce Willis'
    ],
    runTime: 94,
    genre: 'Adventure7',
    released: 2012,
    id: 7,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    name: 'Aviator',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Aviator.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/aviator.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Aviator.jpg',
    backgroundColor: '#D6CDAF',
    description: 'A biopic depicting the early years of legendary Director and aviator Howard Hughes\' career from the late 1920s to the mid 1940s.',
    rating: 9.8,
    scoresCount: 307174,
    director: 'Martin Scorsese',
    starring: [
      'Leonardo DiCaprio',
      'Cate Blanchett',
      'Kate Beckinsale'
    ],
    runTime: 170,
    genre: 'Drama8',
    released: 2014,
    id: 8,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    name: 'Beach',
    posterImage: 'https://10.react.pages.academy/static/film/poster/beach.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/beach.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/beach.jpg',
    backgroundColor: '#EBC996',
    description: 'Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.',
    rating: 3.3,
    scoresCount: 207824,
    director: 'Danny Boyle',
    starring: [
      'Leonardo DiCaprio',
      'Daniel York',
      'Patcharawan Patarakijjanon'
    ],
    runTime: 119,
    genre: 'Adventure9',
    released: 2000,
    id: 10,
    isFavorite: true,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4'
  },
  {
    name: 'Orlando',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Orlando.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/orlando.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Orlando.jpg',
    backgroundColor: '#D8D3BD',
    description: 'Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.',
    rating: 2.6,
    scoresCount: 12292,
    director: 'Sally Potter',
    starring: [
      'Tilda Swinton',
      'Billy Zane',
      'Quentin Crisp'
    ],
    runTime: 94,
    genre: 'Drama10',
    released: 1992,
    id: 9,
    isFavorite: true,
    videoLink: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    name: 'Shutter Island',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Shutter_Island.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/shutter-island.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Shutter_Island.jpg',
    backgroundColor: '#977461',
    description: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.',
    rating: 4.1,
    scoresCount: 1002557,
    director: 'Martin Scorsese',
    starring: [
      'Leonardo DiCaprio',
      'Emily Mortimer',
      'Mark Ruffalo'
    ],
    runTime: 138,
    genre: 'Thriller11',
    released: 2010,
    id: 11,
    isFavorite: true,
    videoLink: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  }
]);

export const getMockRelatedFilms = (): FilmType[] => ([
  {
    name: 'Snatch',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Snatch.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/snatch.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Snatch.jpg',
    backgroundColor: '#FDFDFC',
    description: 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.',
    rating: 0.2,
    scoresCount: 716577,
    director: 'Guy Ritchie',
    starring: [
      'Jason Statham',
      'Brad Pitt',
      'Benicio Del Toro'
    ],
    runTime: 104,
    genre: 'Comedy',
    released: 2000,
    id: 1,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    name: 'Gangs of new york',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Gangs_of_New_York_Poster.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/gangs_of_new_york.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/gangs_of_new_york.jpg',
    backgroundColor: '#A6B7AC',
    description: 'In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father\'s killer.',
    rating: 8.8,
    scoresCount: 370881,
    director: 'Martin Scorsese',
    starring: [
      'Leonardo DiCaprio',
      'Cameron Diaz',
      'Daniel Day-Lewis'
    ],
    runTime: 167,
    genre: 'Comedy',
    released: 2002,
    id: 2,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    name: 'Gangs of new york',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Gangs_of_New_York_Poster.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/gangs_of_new_york.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/gangs_of_new_york.jpg',
    backgroundColor: '#A6B7AC',
    description: 'In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father\'s killer.',
    rating: 8.8,
    scoresCount: 370881,
    director: 'Martin Scorsese',
    starring: [
      'Leonardo DiCaprio',
      'Cameron Diaz',
      'Daniel Day-Lewis'
    ],
    runTime: 167,
    genre: 'Comedy',
    released: 2002,
    id: 3,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    name: 'Gangs of new york',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Gangs_of_New_York_Poster.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/gangs_of_new_york.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/gangs_of_new_york.jpg',
    backgroundColor: '#A6B7AC',
    description: 'In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father\'s killer.',
    rating: 8.8,
    scoresCount: 370881,
    director: 'Martin Scorsese',
    starring: [
      'Leonardo DiCaprio',
      'Cameron Diaz',
      'Daniel Day-Lewis'
    ],
    runTime: 167,
    genre: 'Comedy',
    released: 2002,
    id: 4,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    name: 'Gangs of new york',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Gangs_of_New_York_Poster.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/gangs_of_new_york.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/gangs_of_new_york.jpg',
    backgroundColor: '#A6B7AC',
    description: 'In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father\'s killer.',
    rating: 8.8,
    scoresCount: 370881,
    director: 'Martin Scorsese',
    starring: [
      'Leonardo DiCaprio',
      'Cameron Diaz',
      'Daniel Day-Lewis'
    ],
    runTime: 167,
    genre: 'Comedy',
    released: 2002,
    id: 5,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    name: 'Gangs of new york',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Gangs_of_New_York_Poster.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/gangs_of_new_york.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/gangs_of_new_york.jpg',
    backgroundColor: '#A6B7AC',
    description: 'In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father\'s killer.',
    rating: 8.8,
    scoresCount: 370881,
    director: 'Martin Scorsese',
    starring: [
      'Leonardo DiCaprio',
      'Cameron Diaz',
      'Daniel Day-Lewis'
    ],
    runTime: 167,
    genre: 'Comedy',
    released: 2002,
    id: 6,
    isFavorite: false,
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4'
  }]);

export const getMockFilm = (): FilmType => (getMockFilms()[0]);

export const getMockReviews = (): ReviewType[] => ([
  {
    id: 1,
    user: {
      id: 17,
      name: 'Emely'
    },
    rating: 9.9,
    comment: 'I personally found this movie to be boring. Definitely one of the most boring movies I\'ve ever seen.',
    date: '2022-06-03T12:25:36.946Z'
  },
  {
    id: 2,
    user: {
      id: 16,
      name: 'Mollie'
    },
    rating: 1.1,
    comment: 'I personally found this movie to be boring.',
    date: '2022-06-23T12:25:36.946Z'
  }]);

export const getMockReview = (): ReviewType => (getMockReviews()[0]);

export const getMockUser = (): UserType => ({
  avatarUrl: 'test/test.ts',
  email: 'test@test.ru',
  id: 1, name: 'Name',
  token: '12Kjh7893lkmH',
});

export const getAuthData = (): AuthorizationData => ({
  email: 'test@test.ru',
  password: '123Test',
});
