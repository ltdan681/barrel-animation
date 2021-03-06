const lid = document.querySelector('.top');
const arm = document.querySelector('#right-arm');
const forearm = document.querySelector("#lower-right-arm");
const trash = document.querySelector("#trash");
const barrel = document.querySelector(".barrel")
const eye = document.querySelector("#left")
const hand = document.querySelector("#right-hand");
const thumb = document.querySelector("#thumb");

function swing() {
  barrel.style.left = "0vw"
  setTimeout(() => {
    barrel.style.transform = "rotate(0deg)"
  }, 100)
  // setTimeout(tip => {
    // barrel.style.transform = "rotate(0deg)"
  // }, 500)
  if (!lid.classList.contains('open')) {
    setTimeout(open => {
      grabTrash();
      setTimeout(open => {
        lid.classList.add('open')
      }, 800)
    }, 800)
    setTimeout(move => {
      arm.style.transform = "rotate(-150deg)"
      forearm.style.transform = "rotate(-90deg)"
    }, 1700)

    setTimeout(fall => {
      trash.style.right = "-10vw";
      setTimeout(disapear => {
        trash.style.display = "none"
      }, 1000)
    }, 2000)

    setTimeout(back => {
      lid.classList.remove('open')
      arm.style.transform = "rotate(-65deg)";
      forearm.style.transform = "rotate(-80deg)";
      hand.style.display = "none";
      thumb.style.display = "block";
      // trash.style.right = "2vw";
      setTimeout(wink => {
        eye.style.height = "0"
      }, 700)
      setTimeout(wink => {
        eye.style.height = "1.5vw"
      }, 1300)
      setTimeout(move => {
        barrel.style.left = "100vw"
        barrel.style.transform = "rotate(-20deg)"
        setTimeout(disapear => {
          barrel.style.display = "none"
        }, 1000)
      }, 2000)
    }, 3000)
  }
}

function grabTrash() {
  forearm.appendChild(trash)
  trash.style.top = "2vw"
  trash.style.right = "2vw"
}
