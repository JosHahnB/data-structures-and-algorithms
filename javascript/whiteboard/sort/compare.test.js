const { sortByYear, sortByTitle } = require('./compare.js');

describe('Sorting Functions', () => {
  const Movies = [
    {
      title: "Beetlejuice",
      year: 1988,
      genres: ["Comedy", "Fantasy"],
    },
    {
      title: "The Cotton Club",
      year: 1984,
      genres: ["Crime", "Drama", "Music"],
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      genres: ["Crime", "Drama"],
    },
    {
      title: "Crocodile Dundee",
      year: 1986,
      genres: ["Adventure", "Comedy"],
    },
    {
      title: "Valkyrie",
      year: 2008,
      genres: ["Drama", "History", "Thriller"],
    },
    {
      title: "Ratatouille",
      year: 2007,
      genres: ["Animation", "Comedy", "Family"],
    },
    {
      title: "City of God",
      year: 2002,
      genres: ["Crime", "Drama"],
    },
    {
      title: "Memento",
      year: 2000,
      genres: ["Mystery", "Thriller"],
    },
    {
      title: "The Intouchables",
      year: 2011,
      genres: ["Biography", "Comedy", "Drama"],
    },
    {
      title: "Stardust",
      year: 2007,
      genres: ["Adventure", "Family", "Fantasy"],
    },
  ];


  it('should sort movies by year in descending order', () => {
    const sortedByYear = sortByYear([...Movies]);
    expect(sortedByYear[0].year).toBeGreaterThanOrEqual(sortedByYear[sortedByYear.length - 1].year);
  });

  it('should sort movies by title ignoring articles', () => {
    const sortedByTitle = sortByTitle([...Movies]);
    expect(sortedByTitle[0].title).toBe('Beetlejuice');
    expect(sortedByTitle[sortedByTitle.length - 1].title).toBe('The Intouchables');
  });
});
