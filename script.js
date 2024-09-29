
let body = document.querySelector('body');
le
function onTouchstart () {
    fingerprint.classList.add('active');
    timer = setTimeout(onSuccess,2000)
}

function onTouchEnd() {
    fingerprint.classList.remove('active')
    clearTimeout(timer)
}

body.addEventListener('mousedown', onTouchstart)
body.addEventListener('touchstart', onTouchstart)
body.addEventListener('mouseup', onTouchEnd)
body.addEventListener('touchend', onTouchEnd)
