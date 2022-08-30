const countDown = () => {
    const countDate = new Date ('November 01, 2022 00:00:00').getTime();
    const countKoseki = new Date ('October 05, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    const gapKoseki = countKoseki - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour *24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

    const kosekiDay = Math.floor(gapKoseki / day);
    document.querySelector('.koseki').innerText = kosekiDay;

    if (gap < 1000) {
        document.querySelector('.tittle').innerText = '<3';
    }
}

setInterval(countDown, 1000);
