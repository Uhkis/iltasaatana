var prependToChars = ["\"", "?", "!"];
var satanStr = " saatana";
$(".juttuotsikko > a > span:last-of-type").each(function(index) {
	currSpan = $(this).html();
	prepended = false;
	
	// Remove leading/trailing whitespace
	currSpan = currSpan.trim();
	
	// Get last word for word case test
	lastWord = currSpan.split(/\s+/).pop();
	
	// Detect case
	tmpSatanStr = (lastWord == lastWord.toUpperCase()) ? satanStr.toUpperCase() : satanStr;
	
	// Detect chars and prepend
	$(prependToChars).each(function(index, value) {
		lastCharIndex = currSpan.length-1;
		if(currSpan.charAt(lastCharIndex) == value) {
			currSpan = currSpan.substring(0, lastCharIndex) + tmpSatanStr + value;
			prepended = true;
		} 
	});
	
	// Append
	if(!prepended) currSpan += tmpSatanStr;
	
	// Modify
	$(this).html(currSpan);

});
