"use strict";var render=function(a){a.empty();var t=$('<div class="wrapper"></div>'),e=function(){render(a)};null==state.modal&&t.append(Board(e)),"modal"==state.modal&&t.append(Modal(e)),a.append(t)},state={pin:null,page:null,pin2:null,page2:null,pines:null,modal:null,id:null,data:null,image:null,creator:null,nameBoard:null,titulo:null,nota:null,publicado:null,site:null};$(function(a){$.get("https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AZ2i9KfK4bcYVlQFmQ2ZjB8JS7DRFM4qVqQ9s7REItsdIWA_dQAAAAA&fields=id%2Clink%2Cnote%2Curl%2Ccreated_at%2Ccounts%2Ccolor%2Cboard%2Cattribution%2Cmedia%2Cmetadata%2Coriginal_link%2Ccreator%2Cimage",function(a){if(!a)return alert("no hay data");state.pin=a.data,state.page=a.page;var t=$("#root");render(t)})});var Board=function(a){var t=state.pin;console.log(t);var e=state.pin.length;console.log(e);var i=$('<section class="board js-board"></section>');return t.forEach(function(a){var t=$('<div class="item"></div>'),e=$('<div class="item__stack"></div>'),n=$('<img src="'+a.image.original.url+'" id="'+a.id+'" class="item__stack--image" alt="imagen"/>');i.append(t),t.append(e),e.append(n)}),i.on("click",function(t){console.log(t.target),"item__stack--image"==t.target.className&&(console.log(t.target),console.log("entraste al modal")),state.id=t.target.id,state.modal="modal",console.log(state.id);var e="https://api.pinterest.com/v1/pins/"+state.id+"/?access_token=Aa2YxXXEIidEuD9GjPBGjd2P-DgLFM591TrMQMBEItsdIWA_dQAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Cmetadata%2Coriginal_link%2Ccreated_at%2Ccreator%2Ccounts%2Cmedia%2Cattribution%2Cboard%2Ccolor";console.log(e),$.get(e,function(t){if(!t)return alert("no hay data");state.data=t.data,console.log(state.data),state.image=state.data.image.original.url,state.creator=state.data.creator.first_name,state.nameBoard=state.data.board.name,state.titulo=state.data.metadata.article,state.nota=state.data.note,state.site=state.data.metadata.link,console.log(state.site),a()})}),setTimeout(function(){$.get(state.page.next,function(a){if(!a)return alert("no hay data");state.pin2=a.data,state.page2=a.page,console.log(state.pin2),console.log(state.pin2.length)})},2e3),i},Modal=function(a){console.log("portada Modal");var t,e,i,n,s,l;console.log(state.site),console.log(state.titulo),console.log(state.data),void 0==state.titulo&&(t=state.data.note,e="Sin información",n="http://www.imagen.com.mx/assets/img/imagen_share.png",s=" ",l=" ... "),void 0!=state.titulo&&(t=state.titulo.name,e=null!=state.titulo.published_at?state.titulo.published_at:"sin información",n=state.data.metadata.link.favicon,s=state.data.metadata.link.title,l=state.titulo.description),void 0==state.site&&(i=" "),void 0!=state.site&&(i="Artículo de "+state.site.site_name),console.log(n),console.log(s),console.log(l);var o=$('<section class="modal"></section>'),d=$('<div class="item"></div>'),c=$('<span id="close">X</span>'),r=$('<div class="item__stack"></div>'),p=$('<div class="item__stack--titlePrincipal">'+s+"</div>"),m=$('<img src="'+state.image+'" class="item__stack--image" alt="imagen" />'),g=$('<div class="item__info"></div>'),u=$('<div class="item__info--pin-count"></div>'),v=$('<i class="fa fa-thumb-tack" aria-hidden="true">'),_=$('<div class="item__info--titles">'+t+"</div>"),f=$('<h3 class="item-title"></h3>'),C=$('<div class="item-subtl"></div>'),b=$('<div class="item__info--proced"></div>'),k=$('<div class="proced--site"> '+i+"</div>"),h=$('<img src="'+n+'" alt="favicon" width="15%">'),A=$('<p class="item__info--descrip">'+l+"</p>"),y=$('<div class="comentarios"></div>'),x=$('<a href="#">Comentarios</a>'),B=$('<div class="none"><input type="text" placeholder="Añadir un comentario..."/></div>'),M=$('<div class="item__info--publicar">Publicado</div>'),w=$('<div class="publicar--fecha">'+e+"</div>"),Q=$('<div class="item__info--user"></div>'),S=$('<div class="item-avatar"></div>'),E=$('<div class="item-data"></div>'),I=$('<div class="item-data__dataname">'+state.creator+" lo guardó en "+state.nameBoard+" </div>"),j=$('<div class="item-data__tagline">'+state.nota+"</div>");return o.append(d),d.append(c),d.append(r),r.append(p),r.append(m),d.append(g),g.append(u),u.append(v),g.append(_),_.append(f),_.append(C),g.append(b),b.append(h),b.append(k),g.append(A),g.append(y),y.append(x),y.append(B),g.append(M),M.append(w),g.append(Q),Q.append(S),Q.append(E),E.append(I),E.append(j),c.on("click",function(t){console.log(t.target),state.modal=null,a()}),x.on("click",function(a){console.log(a.target),console.log(a.target.nextSibling),"block"==a.target.nextSibling.style.display?a.target.nextSibling.style.display="none":a.target.nextSibling.style.display="block"}),o};