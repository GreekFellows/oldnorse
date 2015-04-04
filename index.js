$(document).ready(
	function () {
		$("#lbasicsi").load("lessons/basicsi.html");
		$("#lbasicsii").load("lessons/basicsii.html");
	}
);

$(function () {
  $('[data-toggle="popover"]').popover();
});

$("#tabhome a").click(
	function (event) {
		event.preventDefault();
		$(this).tab("show");
	}
);

$("#tabprof a").click(
	function (event) {
		event.preventDefault();
		$(this).tab("show");
	}
);

$("#tabmsgs a").click(
	function (event) {
		event.preventDefault();
		$(this).tab("show");
	}
);

$(".llist").click(
	function (event) {
		$(".llist").removeClass("active");
		$(this).addClass("active");
	}
);