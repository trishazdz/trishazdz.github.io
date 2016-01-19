$(document).ready(function() {
	registerEventListeners();
});

function registerEventListeners() {
	document.getElementById("submit-image").addEventListener("click", submitImage);

	document.getElementById("delete-image").addEventListener("click", deleteImage);
}

function readImageInput(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function(e) {
			$('#inputImage')
				.attr('src', e.target.result)
				.css('display', 'inline-block');
		};

		reader.readAsDataURL(input.files[0]);

		moveImageInput('header');
		enableSubmit(); enableDelete();
	}
}

function enableSubmit() {
	$("#submit-image").prop('disabled', false);
}
function disableSubmit() {
	$("#submit-image").prop('disabled', true);
}

function enableDelete() {
	$("#delete-image").prop('disabled', false);
}
function disableDelete() {
	$("#delete-image").prop('disabled', true);
}

function moveImageInput(location) {
	var imageInput = $('div.jfilestyle');

	if (location == 'header') {
		imageInput.appendTo("#image-selected-input").addClass('header');
	}

	if (location == 'body' || !location) {
		imageInput.appendTo("#image-unselected-input").removeClass('header');
	}
}

function submitImage() {
	var image = document.getElementById('inputImage');
	console.log(image.src);
}	

function deleteImage(image) {
	$('#inputImage').attr('src', '').css('display', 'none');	

	moveImageInput('body');
	disableDelete(); disableSubmit();
}
