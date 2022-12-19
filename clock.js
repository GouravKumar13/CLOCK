function showtime() {
    let TIME = new Date();
    let h = TIME.getHours();
    let m = TIME.getMinutes();
    let s = TIME.getSeconds();
    let session = 'AM';

    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = 'PM'
    }
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    //this is same as the code written upar just the syntex has changed
    // h = (h<10)? "0"+h : h;
    // m = (m<10)? "0"+m : m;
    // s = (s<10)? "0"+s : s;
    let time = h + ":" + m + ":" + s + " " + session;
    my_clock.innerHTML = time;
    my_clock.textContent = time;


    setTimeout(showtime, 1000)
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    };
    return i;
}
showtime();

function showDate() {
    let DATE = new Date();
    let d = DATE.getUTCDate();
    let mon = DATE.getUTCMonth();
    let y = DATE.getUTCFullYear();

    d = checkTime(d);
    // mon =checkTime(mon);

    let day = d + ":" + mon + ":" + y;
    my_date.innerHTML = day;
    setTimeout(showDate, 1000)

}
showDate();



