'use strict';

const movieItem = (movie,update) => {
  const item = $('<a href="#" class="movie"></a>');
  const image = $(`<img class="movie-thumb" src="${movie.thumb}" alt="${movie.title}"/>`);
  //'<img src-"'+movie.thumb+'"....'
  const p = $('<p>'+movie.title+'</p>');

  item.append(image);
  item.append(p);

  item.on('click',(e) => {
    e.preventDefault();
    state.selectedMovie = movie;
    update();
  });

  return item;
}

const MovieGrid = (update) => {
  const movieContainer = $('<div class="movieContainer"></div>');
  state.movies.forEach((movie) => {
    movieContainer.append(movieItem(movie,update));
  });

  return movieContainer;
}
