var time_in_sec = 3665;
var hours = Math.floor(time_in_sec /60 /60);
var minutes = Math.floor(time_in_sec /60) - (hours *60);
var seconds = time_in_sec % 60;
var da = (hours + "h" + " :" + minutes + "m" + " :" + seconds + "s");
console.log(da);