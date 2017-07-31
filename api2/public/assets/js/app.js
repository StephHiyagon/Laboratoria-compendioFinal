'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const update = function() {
    render(root);
  }
  wrapper.append(Ficha(update));

  root.append(wrapper);

}

const state = {
  people: null,

};



$(_=>{

  $.get('https://randomuser.me/api/', (data) => {

      if (!data) { return alert('no hay data');}

      state.people = data;

      const root = $('#root');
      render(root);
    });

});
