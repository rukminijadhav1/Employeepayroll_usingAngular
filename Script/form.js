const addUser = () => {

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
        type: 'POST',
        url: "http://localhost:3000/Employees",
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
   
    
     window.location.href="/Pages/EmployeeTable.html";
}

