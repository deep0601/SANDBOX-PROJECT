const today = new Date();
var current_month = today.getMonth();
var current_year = today.getFullYear();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var tasks = [];
var calendar_title = document.getElementById("current-month-year");
var tbody = document.getElementById("calendar-body");

displayCalendar(current_month, current_year);

// display the calendar given month, year
function displayCalendar(month, year) {
	calendar_title.innerHTML = months[month] + " " + year;
	var first_day = new Date(year, month, 1);
	var weekday_start = first_day.getDay();
	tbody.innerHTML = "";
	date = 1;
	for (var row = 0; row < 6; row++) {
		var tr = document.createElement('tr');
		for (var cell = 0; cell < 7; cell++) {
			var td = document.createElement('td');
			if (row === 0 && cell < weekday_start) {
				td.appendChild(document.createTextNode(""));
			} else if (date > getDaysInMonth(month, year)) {
				break;
			} else {
				var full_date = new Date(year, month, date);
				if (date == today.getDate() && year == today.getFullYear() && month == today.getMonth()) {
					td.className += "today ";
				}
				if (Math.round(Math.abs(today.getTime() - full_date.getTime()) / (1000 * 60 * 60 * 24)) < 90) {
					td.className += "clickable";
				}
				td.appendChild(document.createTextNode(date));
				date++;
			}
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
}

// gets days in a month
function getDaysInMonth(month, year) {
	return 32 - new Date(year, month, 32).getDate();
}

// displays the previous month
function prevMonth() {
	current_year = (current_month === 0) ? current_year - 1 : current_year;
	current_month = (current_month === 0) ? 11 : current_month - 1;
	displayCalendar(current_month, current_year);
}

// displays the next month
function nextMonth() {
	current_year = (current_month === 11) ? current_year + 1 : current_year;
	current_month = (current_month + 1) % 12;
	displayCalendar(current_month, current_year);
}

// add the listener to the calendar
document.addEventListener('click', function (event) {
	var span = document.getElementsByClassName("close")[0];
	var modal = document.getElementById('alert-modal');
	var modal_paragraph = document.getElementById('modal-text');
	if (!event.target.matches('td.clickable')) return;
	event.preventDefault();
	modal_paragraph.textContent = "Please enter a task";
	var input = document.createElement("input");
	input.setAttribute("id", "inputtedTask");
	var button = document.createElement("button");
	button.innerHTML = "Submit";
	day_clicked = Number(event.target.innerHTML);
	button.setAttribute("onclick", "addTask(inputtedTask.value, day_clicked)")
	modal_paragraph.append(input);
	modal_paragraph.appendChild(button);
	modal.style.display = "block";
	span.onclick = function () {
		modal.style.display = "none";
	};
}, false);


// add task to the task list
function addTask(task, day) {
	tasks.push(task + " " + (current_month + 1) + "/" + day_clicked + "/" + current_year + "!");
}

// view all of the tasks
function viewTask() {
	var objDiv = document.getElementById("taskList")

	// clear the existing task list
	objDiv.innerHTML = "";

	// add the new added task in
	for (i = 0; i < tasks.length; i++) {
		var newTask = document.createElement("p");
		var taskContent = document.createTextNode(tasks[i]);
		newTask.append(taskContent);
		objDiv.append(newTask);
	}
}

// control the interactions of the like/dislike button ( red if dislike, blue if)
function myFunction(x) {
	x.classList.toggle("fa-thumbs-down");
	if (document.getElementById("likeDislike").style.color == "red") {
		document.getElementById("likeDislike").style.color = "blue";

	}
	else {
		document.getElementById("likeDislike").style.color = "red";
	}
	cnt++;
}

function redirect (num) {
    switch (true) {
        case (num == 1):
            document.location.href = "/ ";
            break;
        case (num == 2):
            document.location.href = "main";
            break;
		default: document.location.href = "main";
            break;
    }
}