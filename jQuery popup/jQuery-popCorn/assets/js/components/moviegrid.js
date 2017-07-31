const movieItem=(movie)=>{
  const item=$('<div class="movie"></div>');
  // const image=$('<img src="${movie.thumb}"alt="${movie.title}"/>');
  const p=$('<p>'+movie.title+'</p>');

  // item.append(image);
  item.append(p);

  return item;
}
const MovieGrid=()=>{
  const movieContainer=$('<div class="movieContainer"></div>');
  state.movies.forEach((movie)=>{
  movieContainer.append(movieItem(movie));
  });
  return movieContainer;
}
