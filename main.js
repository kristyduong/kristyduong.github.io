document.getElementById("menu").innerHTML = "<ul class='w3-navbar w3-large w3-padding-8 w3-white w3-container'>" +
	"<li class='w3-right'><a class='w3-text-carbon w3-hover-white' href='dancer.html'>Writer</a></li>" +
	"<li class='w3-right'><a class='w3-text-carbon w3-hover-white' href='hacker.html'>Dancer</a></li>" +
	"<li class='w3-right'><a class='w3-text-carbon w3-hover-white' href='connector.html'>Programmer</a></li>" +
	"<li class='w3-right'><a class='w3-text-carbon w3-hover-white' href='index.html'>Home</a></li>" +
	"</ul>";

var socialIcons = document.getElementById("social-icons");
if (socialIcons) {
	socialIcons.innerHTML = 
"<a href='https://www.linkedin.com/in/kristyduong5' id='linkedinLink' class='icon-3x icon-linkedin-sign link-no-underline' aria-label='LinkedIn'></a> " +
"<a href='https://github.com/kristyduong' id='githubLink' class='icon-3x icon-github-sign link-no-underline' aria-label='Github'></a> ";
}
