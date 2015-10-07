
var getType = function (input) {
	if (typeof(input) === "function")
		return "function";
	else if (input instanceof Array)
		return "array";
	else if (input === null) 
		return "null";
	else if (typeof(input) === "object")
		return "object";
	else if (typeof(input) === "undefined")
		return "undefined";
	else if (isNaN(input)) 
		return "NaN";
	else
		return typeof(input);
};

var Counter = function() {
	var count = 0;
	return {
		getCount: function() {return count;},
		increase: function() {count+=1;},
		decrease: function() {count-=1;}
	};
};

var curringSum = function (input1) {
	return function(input2) {
		return function(input3) {
			return input1 + input2 + input3;
		};
	};
};
