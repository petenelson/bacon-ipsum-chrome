window.addEventListener('DOMContentLoaded', function() {

	var btn = document.getElementById('btn').addEventListener('click', function() { 

		var filler = document.getElementById('filler');
		filler.innerHTML = "Loading meat...";

		var xhr = new XMLHttpRequest();
		xhr.open("POST", "https://baconipsum.com/api/", true);
		xhr.onreadystatechange = function() {
			
			if (xhr.readyState == 4) {
				
				var resp = JSON.parse(xhr.responseText);

				if (resp) {
					filler.innerHTML = "";

					for (var i = 0; i < resp.length; i++)
						filler.innerHTML += '<p>' + resp[i] + '</p>';

					if (document.getElementById('copy-to-clipboard').checked) {
						
						var selection = window.getSelection();
						var range = document.createRange();
						range.selectNodeContents(filler);
						selection.removeAllRanges();
						selection.addRange(range);

						document.execCommand('copy', true);

						selection.removeAllRanges();
					}

				}

			}
		}

		xhr.send(new FormData(document.getElementById('meatyForm')));
	});


});

