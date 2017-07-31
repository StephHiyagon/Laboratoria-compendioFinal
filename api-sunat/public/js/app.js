$(_=>{


  var envia= document.getElementById('envia');

  function consulta(e){
    console.log("entre");
    e.preventDefault();
    var input = document.getElementsByTagName('input');
    $.post('https://tecactus.com/api/sunat/query/ruc ',{ruc:input[0].value},(response)=>{
    			console.log(response);
    			console.log(response.message);


    			return response;

    		},'json');
  }


  envia.addEventListener('click', consulta);


});
