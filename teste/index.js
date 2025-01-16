function stopLinking(event) {
    console.log('removendo efeito');
    event.preventDefault();
}

function logClick(event) {
    const log = document.getElementById('log');
    
    if (event.target.tagName === 'A') {
        if (event.defaultPrevented) {
            console.log('elemento removido')
            log.innerText = 'Bloqueado no baguio hein pai slc!\n' + log.innerText;
        } else {
            log.innerText = 'Esse sim pode!...\n' + log.innerText;
        }
    }
}

const a = document.querySelector('#link2');
a.addEventListener('click', stopLinking);
document.addEventListener('click', logClick);

