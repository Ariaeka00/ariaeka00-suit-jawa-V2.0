
function getComputer() {
    const comp = Math.random()
    
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH'
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG'
    if (player == 'semut') return (comp == 'gajah') ? 'MENANG' : 'KALAH'
} 


function putar() {
    const imgComputer = document.querySelector('.computer')
    const gambar = ['gajah', 'orang', 'semut']
    let i = 0;
    const waktuMulai = new Date().getTime()
    setInterval(() => {
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', `assets/images/${gambar[i++]}.png`)
        if(i == gambar.length) i = 0;
    }, 100);
}

const pilihan = document.querySelectorAll('ul img')
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanComputer = getComputer()
        const pilihanPlayer = pil.className
        const hasil = getHasil(pilihanComputer, pilihanPlayer)
        
        putar();


        setTimeout(() => {
            const computer = document.querySelector('.computer')
            computer.setAttribute('src', `assets/images/${pilihanComputer}.png`)
    
            const info = document.querySelector('.info')
            info.innerHTML = hasil
        }, 1000);
    })
})