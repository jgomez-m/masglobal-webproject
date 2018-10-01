const tableHead = "<tr><td>ID</td><td>Name</td><td>Contract Type</td><td>Role Id</td>"+
                    "<td>Role Name</td><td>Role Description</td><td>Hourly Salary</td><td>Monthly Salary</td>"+
                     "<td>Annual Salary</td></tr>";

function buttonHandle() {
    if(document.getElementById("inputId").value === "") {
        getAllEmployees();
    }
    else {
        getEmployeeById();
    }
}

function getAllEmployees(){
    $.ajax({
        url: "http://localhost:8080/employees/"
    }).done(function(data) {
        var i=0;
        var size = data.length;
        var content = "";


        for(;i<size; i++ ){
            content += "<tr><td>" + data[i].id +"</td>" +
                        "<td>" + data[i].name +"</td>" +
                        "<td>" + data[i].contractTypeName +"</td>" +
                        "<td>" + data[i].roleId +"</td>" +
                        "<td>" + data[i].roleName +"</td>" +
                        "<td></td>" +
                        "<td>" + data[i].hourlySalary +"</td>" +
                        "<td>" + data[i].monthlySalary +"</td>" +
                        "<td>" + data[i].annualSalary +"</td>" +
                        "</tr>";
        }
        document.getElementById("tableContent").innerHTML = tableHead + content;
    });
}

function getEmployeeById(){
    var id = document.getElementById("inputId").value;
    $.ajax({
            url: "http://localhost:8080/employees/" + id,
            type: "GET",
            dataType: "json"
        }).done(function(data) {
            console.log(data.id, data.name)
            var content = "<tr>" +
                          "<td>" + data.id +"</td>" +
                          "<td>" + data.name +"</td>" +
                          "<td>" + data.contractTypeName +"</td>" +
                          "<td>" + data.roleId +"</td>" +
                          "<td>" + data.roleName +"</td>" +
                          "<td></td>" +
                          "<td>" + data.hourlySalary +"</td>" +
                          "<td>" + data.monthlySalary +"</td>" +
                          "<td>" + data.annualSalary +"</td>" +
                          "</tr>"
            document.getElementById("tableContent").innerHTML = tableHead + content;
        }).fail(function() {
            document.getElementById("tableContent").innerHTML = "";
        });
}