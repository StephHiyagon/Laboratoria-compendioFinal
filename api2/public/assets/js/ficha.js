'use strict';

const Ficha=(update)=>{
  console.log(state.people);
  const fich=state.people.results[0];
  console.log(fich);
  console.log(fich.name.first);
  let imagen=fich.picture.large;
  console.log(imagen);
  const div1=$('<div class="ficha"></div>');
  const h1=$('<h1 class="text-capitalize">'+fich.name.first+' '+fich.name.last+'</h1>');
  const p1=$('<p> Gender: '+fich.gender+'</p>');
  const p2=$('<p> City: '+fich.location.city+'</p>');
  const p3=$('<p> Street: '+fich.location.street+'</p>');
  const p4=$('<p> Email: '+fich.email+'</p>');
  const p5=$('<p> Celular: '+fich.cell+'</p>');
  // const img=$('<img src='+imagen+'/>')

  div1.append(h1);
  div1.append(p1);
  div1.append(p2);
  div1.append(p3);
  div1.append(p4);
  div1.append(p5);
  // div1.append(img);

  return div1;
}
