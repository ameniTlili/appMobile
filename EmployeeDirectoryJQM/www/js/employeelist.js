var serviceURL = "http://localhost/EmployeeDirectoryJQM/services/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#employeeList li').remove();
		console.log("bonjour");
		employees = data.items;
		//$('#employeeH1').append('<h1>Bonjour MdevTunisia</h1>');
		$.each(employees, function(index, employee) {
			//$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
			$('#employeeList').append('<li><a href="">' +
					'<img src="pics/' + employee.picture + '"/>' +
					'<h4>' + employee.firstName + ' ' + employee.lastName + '</h4>' +
					'<p>' + employee.title + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}