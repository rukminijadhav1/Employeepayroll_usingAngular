$(document).ready(function(){
    $.ajax({
        type:'GET',
        url:'http://localhost:3000/Employees',

        success:function(data){
            var tblbody=$(".tblbody");
            tblbody.empty();

            $.each(data,function(index,value){
                var tblrow=$("<tr class='body'>");
                tblrow.append("<td class='profileimgcol'><img class='image' src='" +value.ProfileImage + "' alt='Pic1'>");
                tblrow.append("<td class='namecol'>" + value.Name + "</td>");
                tblrow.append("<td class='gendercol'>" + value.Gender +"</td>");

                
                var deptcol=$("<td class='deptcol'>");
                var deptdiv=$("<div class='dept'>");
                var dept=value.Department.map(i => "<span class='dept-name'>" + i + "</span>");
                deptdiv.append(dept);
                deptcol.append(deptdiv);

                tblrow.append(deptcol);

                tblrow.append("<td class='salarycol'>" +value.Salary + "</td>");
                tblrow.append("<td class='datecol'>" + value.StartDate + "</td>");
                tblrow.append("<td class='actionscol'><img src='../assets/delete-black-18dp.svg' alt='Delete' id='deletebtn' onclick='deleteEmployees("+value.id+")'><img src='../assets/icons8-edit-18.svg' alt='Edit' id='editbtn' onClick='updateData(" + value.id + ")'></td>");
                tblbody.append(tblrow);
            });
        },
        error:function(error){
            alert(error);
         }
    });

})


const addUser = () => {
    window.location.href="/Pages/employeeForm.html";
}

const deleteEmployees=(id)=>{
    $.ajax({
        url:'http://localhost:3000/Employees/' + id,
        type:'DELETE',
        contentType: 'application/json',

        success:function(){
           alert("deleted");
        },
        error: function (error) {
            console.log(error);
        }

    })
}
function updateData(id){
    localStorage.setItem('employeeId',id);
    window.location.href = "../Pages/updateForm.html";
}

