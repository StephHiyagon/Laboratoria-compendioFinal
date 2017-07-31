'use strict';

const Header = () => {
  const header = $('<header></header>');
  const h1 = $('<h1>Popcorn time</h1>');

  header.append(h1);

  return header;
};
