$(document).ready(function () {
	$("#taskForm").on("submit", function (event) {
		event.preventDefault();
		const task = $("#taskInput").val().trim();
		if (task) {
			$("#taskList").append(
				"<li>" + task + '<button class="delete">X</button></li>'
			);
			$("#taskInput").val("");
		}
	});

	$("#taskList").on("click", "button.delete", function () {
		$(this).parent().remove();
	});

	$("#taskList").on("click", "li", function (event) {
		if (!$(event.target).is("button.delete")) {
			$(this).toggleClass("completed");
		}
	});
});
