
var ClassHelperForSpeak = {
	/*PROPERTIES*/
	version : '0.1.5',
	name : 'test Name',
	
	/*METHODS*/
	sayHello : function(targetDivId) {
		this.say(targetDivId, "Hello, friend!");
	},
	sayGoodBye : function(targetDivId) {
		/*need removed this method*/
		this.say(targetDivId, "Goodbye.");
	},
	sayWithDOM : function(targetDivId, added_text) {
		var obj_targetDivId = document.getElementById(targetDivId);
		var obj_targetDivId_Child = document.createElement('span');
		obj_targetDivId_Child.innerHTML = added_text;
		obj_targetDivId.appendChild(obj_targetDivId_Child);
	},
	cleaning : function(targetDivId) {
		/*need removed this method*/
		var obj_targetDivId = document.getElementById(targetDivId);
		obj_targetDivId.innerHTML = "";
	},
	cleaninWithDOM : function(targetDivId) {
		var obj_targetDivId = document.getElementById(targetDivId);
		var obj_targetDivId_Child;
		if ( obj_targetDivId.childElementCount > 0) {
			for (i=obj_targetDivId.childElementCount; i>0; i--) {
				obj_targetDivId_Child = obj_targetDivId.children[i-1];
				obj_targetDivId.removeChild(obj_targetDivId_Child);
			}
		} else {
			return -1;
		}
	},
	say : function(targetDivId, added_text) {
		var obj_targetDivId = document.getElementById(targetDivId);
		if (obj_targetDivId != undefined) {
			obj_targetDivId.innerHTML = added_text;
			return 0;
		} else {
			return -1;
		}
		
	}
	
	
	
}