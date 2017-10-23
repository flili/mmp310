function mydate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yy = "";
    var birthday = document.getElementById('birthday').value;
    var date1 = new Date(birthday);
    var date2 = dd + '/' + mm + '/' + yy;
    var ty= "2017";
    return = (ty-yy);
        years = document.getElementById("years");
    
    years.innerHTML = age;
    document.getElementById("result").style.display = "block";

}