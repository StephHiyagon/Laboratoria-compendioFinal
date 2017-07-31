const Modal=(update)=>{

  console.log("portada Modal");


  var titulo;
  var publico;
  var site;
  var faviconI;
  var principal;
  var describe;

  console.log(state.site);
  console.log(state.titulo);
  console.log(state.data);
  if(state.titulo==undefined){
    titulo=state.data.note;
    publico="Sin información";
    faviconI="http://www.imagen.com.mx/assets/img/imagen_share.png";
    principal=" ";
    describe= " ... "
  }

  if(state.titulo!=undefined){

    titulo=state.titulo.name;
    if(state.titulo.published_at!=null){
      publico=state.titulo.published_at;
    }else{
      publico="sin información";
    };
    faviconI=state.data.metadata.link.favicon;
    principal=state.data.metadata.link.title;
    describe=state.titulo.description;
  }

  if(state.site==undefined){
    site=" ";
  }

  if(state.site!=undefined){
    site= 'Artículo de ' + state.site.site_name;
  }

  console.log(faviconI);
  console.log(principal);
  console.log(describe);
  const section= $('<section class="modal"></section>');
  const item=$('<div class="item"></div>');
  const close=$('<span id="close">X</span>');
  const item__stack=$('<div class="item__stack"></div>');
  const titlePrincipal=$('<div class="item__stack--titlePrincipal">'+principal+'</div>');
  const image=$('<img src="'+state.image+'" class="item__stack--image" alt="imagen" />');
  const item__info=$('<div class="item__info"></div>');
  const pin__count=$('<div class="item__info--pin-count"></div>');
  const i=$('<i class="fa fa-thumb-tack" aria-hidden="true">');
  const titles=$('<div class="item__info--titles">'+titulo+'</div>');
  const h3=$('<h3 class="item-title"></h3>');
  const subt=$('<div class="item-subtl"></div>');
  const proced=$('<div class="item__info--proced"></div>');
  const sites=$('<div class="proced--site"> '+site+'</div>');
  const favicon=$('<img src="'+faviconI+'" alt="favicon" width="15%">');
  const desc=$('<p class="item__info--descrip">'+describe+'</p>');
  const comentP=$('<div class="comentarios"></div>');
  const coment=$('<a href="#">Comentarios</a>');
  const comentAdd=$('<div class="none"><input type="text" placeholder="Añadir un comentario..."/></div>');
  const publicado=$('<div class="item__info--publicar">Publicado</div>');
  const fecha=$('<div class="publicar--fecha">'+publico+'</div>');
  const user=$('<div class="item__info--user"></div>');
  // const avatar=$('<img class="item-avatar" src="https://s-media-cache-ak0.pinimg.com/avatars/arabelyuska_1476548892_60.jpg"/>');
  const avatar=$('<div class="item-avatar"></div>');
  const data=$('<div class="item-data"></div>');
  const name=$('<div class="item-data__dataname">'+state.creator+' lo guardó en '+state.nameBoard+' </div>');
  const tagline=$('<div class="item-data__tagline">'+state.nota+'</div>');

  section.append(item);
  item.append(close);
  item.append(item__stack);
  item__stack.append(titlePrincipal);
  item__stack.append(image);
  item.append(item__info);
  item__info.append(pin__count);
  pin__count.append(i);
  item__info.append(titles);
  titles.append(h3);
  titles.append(subt);
  item__info.append(proced);
  proced.append(favicon);
  proced.append(sites);
  item__info.append(desc);
  item__info.append(comentP);
  comentP.append(coment);
  comentP.append(comentAdd);
  item__info.append(publicado);
  publicado.append(fecha);
  item__info.append(user);
  user.append(avatar);
  user.append(data);
  data.append(name);
  data.append(tagline);

  close.on('click',function(e){
    console.log(e.target);
    state.modal=null;
    update();
  });

  coment.on('click',function(e){
    console.log(e.target);
    console.log(e.target.nextSibling);
    if((e.target.nextSibling).style.display=="block"){
      (e.target.nextSibling).style.display="none"
    }else{
      (e.target.nextSibling).style.display="block";
    }

  })

  return section;





    setTimeout(function(){
      console.log(state.pin2);
      console.log(state.page2);
    }, 1000);


}
