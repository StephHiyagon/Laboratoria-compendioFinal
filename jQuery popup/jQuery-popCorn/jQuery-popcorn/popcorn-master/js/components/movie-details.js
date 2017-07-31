'use strict';

const MovieDetails = (update) => {
  const container = $('<div class="movieDetail"></div>');
  const title = $('<h1>'+state.selectedMovie.title+'</h1>');
  const button = $('<button>Regresar</button>')
  container.append(title);
  container.append(button);

  button.on('click',(e) => {
    e.preventDefault();
    state.selectedMovie = null;
    update();
  })

  return container;
}
