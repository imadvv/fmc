function main() {
  const game = {
    rock: 1,
    paper: 2,
    scissors: 3,
  }

  // console.table(game)

  const rockBtn = document.querySelector('#rock')
  const paperBtn = document.querySelector("#paper")
  const scissorsBtn = document.querySelector('#scissors')


  console.log(game)
  console.log(rockBtn)
  console.log(paperBtn)
  console.log(scissorsBtn)

  rockBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
    paperBtn.animate([{ transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" }], {

      duration: 2000,
      iterations: 1,

    })

    scissorsBtn.animate([{ transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" }], {

      duration: 2000,
      iterations: 1,

    })

    setTimeout(() => {
      paperBtn.remove()

      scissorsBtn.remove()

    }, 2000)
  })


  paperBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
    rockBtn.animate([{ transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" }], {

      duration: 2000,
      iterations: 1,

    })

    scissorsBtn.animate([{ transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" }], {

      duration: 2000,
      iterations: 1,

    })

    setTimeout(() => {
      rockBtn.remove()

      scissorsBtn.remove()

    }, 2000)
  })


  scissorsBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
    rockBtn.animate([{ transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" }], {

      duration: 2000,
      iterations: 1,

    })

    paperBtn.animate([{ transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" }], {

      duration: 2000,
      iterations: 1,

    })

    setTimeout(() => {
      rockBtn.remove()

      paperBtn.remove()

    }, 2000)
  })
}

main()
