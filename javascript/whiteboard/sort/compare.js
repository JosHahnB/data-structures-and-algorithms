
function sortByYear(movies) {
  return movies.slice().sort((a, b) => b.year - a.year)
}

function sortByTitle(movies) {
  function removeArticles(title) {
    return title.replace(/^(a |an |the )/i, '').trim();
  }

  return movies.slice().sort((a, b) => {
    const titleA = removeArticles(a.title);
    const titleB = removeArticles(b.title);
    return titleA.localeCompare(titleB)
  })
}

module.exports = { sortByYear, sortByTitle };
