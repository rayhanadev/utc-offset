const id = document.getElementById('timezone');
const offset = (new Date()).getTimezoneOffset() / -60;

if(offset >= 0) id.innerHTML = 'UTC+' + Math.abs(offset);
else id.innerHTML = 'UTC-' + Math.abs(offset);
