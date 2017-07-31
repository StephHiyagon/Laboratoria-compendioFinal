'use strict';
function createOptions(array){
	var selected = $("<select></select>");
	selected.attr("id","select")
	var option = $("<option></option>");
	option.text("Selecciona una especie");
	option.attr("hidden","");
	selected.append(option);
	array.forEach((elem)=>{
		var optionFamily = $("<option></option>");
		var people = elem.people[0];
		optionFamily.val(people.slice(people.length-3))
		optionFamily.text(elem.name);
		selected.append(optionFamily);
	})
	return selected;
}