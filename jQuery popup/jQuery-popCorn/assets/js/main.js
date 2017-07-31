'use strict';

const render=(root)=>{
  root.empty();
  const wrapper=$('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(MovieGrid());

  root.append(wrapper);
};

const state={
  movies:[],
  selectedMovie:null
}

$( _ => {
  // alert('entre');
  const root=$('.root');
  render(root);
});
