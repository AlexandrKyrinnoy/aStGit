
var ClassHelperForSpeak = {
	/*PROPERTIES*/
	version : '0.1.5',
	name : 'test Name',
	
	/*METHODS*/
	sayHello : function(targetDivId) {
		/*1 - �������� ����� - ���� �� ���������� id �� ������ ������� �� �������� - ���������� "-1", ���� ��� ������ - "0" */
		/*2 - ���������� ����� DOM ���������� � ��������, ����� ����������� ����� span � ������� � ����������� � current <div>*/
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