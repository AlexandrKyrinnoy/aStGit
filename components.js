
var ClassHelperForSpeak = {
	/*PROPERTIES*/
	version : '0.1.5',
	name : 'test Name',
	
	/*METHODS*/
	sayHello : function(targetDivId) {
		/*1 - ƒобавить позже - ≈сли по указанному id не найден жлемент на странице - возвращать "-1", если все удачно - "0" */
		/*2 - переделать через DOM добавление и удаление, чтобы создавались новые span с текстом и добавл€лись в current <div>*/
		var obj_targetDivId = 	document.getElementById(targetDivId);
		obj_targetDivId.innerHTML = "Hello, friend!";
	},
	sayGoodBye : function(targetDivId) {
		var obj_targetDivId = 	document.getElementById(targetDivId);
		obj_targetDivId.innerHTML = "Goodbye.";
	},
	cleaning : function(targetDivId) {
		var obj_targetDivId = document.getElementById(targetDivId);
		obj_targetDivId.innerHTML = "";
	}
	
	
	
}