let a;
let time;
let date;
setInterval(() => {
    a = new Date();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    date = a.toLocaleDateString();
    document.getElementById("time").innerHTML = time + "<br>at the Date of " + date;
    console.log(time)
}, 1000);