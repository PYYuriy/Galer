$(document).ready(function() {

	$('#slayder a').click(function(eventObject) {
		$('#mainImg img').hide().attr('src', $(this).attr('href'));
			$('#mainImg img').load(function() {
			$(this).fadeIn(3000);
			});
		eventObject.preventDefault();
});
});