const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
/*querySelector(".mario") para selecionar como esta no CSS*/

const jump = () => {
  mario.classList.add('jump')

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500)
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
  /*+window.getComputedStyle(mario)"+" na frente converte a string pra numero */

  if (pipePosition < 140 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`

    mario.src = './assets/images/gameover.png'
    mario.style.width = '100px'
    mario.style.marginLeft = '50px'

    clearInterval(loop)
    //clearInterval(loop) para zerar e limpar o loop, para não ficar infinito//
  }
}, 10)

document.addEventListener('keydown', jump)
