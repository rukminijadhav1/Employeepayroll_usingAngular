$(document).ready(function () {
    getDataFromTable()
})

function getDataFromTable() {
    const employeeId = localStorage.getItem('employeeId');

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/employees/" + employeeId,
        contentType: "application/json",

        success: function (data) {
            console.log(data);
            $('#fname').val(data.Name);
            $('input[type="radio"][value="' +data.ProfileImage +'"]').prop('checked',true);  
            $('input[name="gender"][value="' +data.Gender+'"]').prop('checked',true);  
            
            $('input[type="checkbox"]').each(function(){
                var department1=$(this).val();
                $(this).prop('checked',data.Department.includes(department1));

            })
            $('#salary').val(data.Salary);

            var StartDate1=data.StartDate.split(" ");
            console.log(StartDate1);

            $('#day').val(StartDate1[0]);
             $('#month').val(StartDate1[1]);
             $('#year').val(StartDate1[2]);

             $('#notes').val(data.Note);

         },
         error:function(){
            alert("errror");
         }

    });
}
function updateEmployeeData(){
    const name = $("#fname").val()
    console.log(name);


    const profileImage = $('input[type="radio"]:checked').val();
    console.log(profileImage);

    const gender = $('input[name="gender"]:checked').val();
    console.log(gender);

    var department = [];
    $('input[type="checkbox"]:checked').each(function () {
        department.push($(this).val());
    });
    console.log(department);

    const salary = $("#salary").val()
    console.log(salary);

    const day = $("#day").val()
    const month = $("#month").val()
    const year = $("#year").val()
    console.log(day + '-' + month + '-' + year);

    const note = $("#notes").val();
    console.log(note);

    let reqData = {
        "Name": name,
        "ProfileImage": profileImage,
        "Gender": gender,
        "Department": department,
        "Salary": salary,
        "StartDate": day + ' ' + month + ' ' + year,
        "Note": note
    }
    console.log(reqData);

    $.ajax({
        type: 'PUT',
        url: "http://localhost:3000/Employees/" + localStorage.getItem('employeeId'),
        contentType: 'application/json',
        data: JSON.stringify(reqData),

        success: function (data) {
            alert("Data Added");
            console.log(data);
        },
        error: function (error) {
            console.log(error);
        }

    });
    window.location.href = "../Pages/EmployeeTable.html";

   
}
const cancel=()=>{

window.location.href = "../Pages/EmployeeTable.html";
}


