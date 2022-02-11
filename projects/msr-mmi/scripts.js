function copyToClipboard() {
	// Get the text to copy
	var codeBlocks = document.getElementsByTagName('code');
    var codeBlock = codeBlocks[0];

    // replace HTML line breaks with text line breaks
	var textToCopy = codeBlock.innerHTML.replace(/<br>/g,"\n");
	
	// Create a dummy input field
	var tempInput = document.createElement("textarea");
  	tempInput.value = textToCopy;
  	document.body.appendChild(tempInput);

  	// Copy to the clipboard
  	tempInput.select();
  	document.execCommand("copy");

  	// Delete dummy text field
  	document.body.removeChild(tempInput);

  	// Make the 'copied' text visible
  	var copiedText = document.getElementById('copied-text');
      copiedText.style.display = "unset";
}