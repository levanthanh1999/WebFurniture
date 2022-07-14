//cuộn navbar

const nav = document.querySelector('.nav')

document.onscroll = function() {
    const scrollTop = window.scrollY
}

// collageImage
//khi click chuột dô ảnh đầu rõ qua ảnh 2 tất cả đều mờ
const collageImages = [...document.querySelectorAll('.collage-img')]
  collageImages.map((item, i) => {
      item.addEventListener('mouseover', () => {
          collageImages.map((image, index) => {
              if(index != i ){
                  image.style.filter = `blur(10px)`
                  item.style.zIndex = 2 //set index
              }
          })
      })
    //   khi rời chuột ảnh trở về ban đầu
      item.addEventListener('mouseleave', () => {
          collageImages.map((image, index) => {
              image.style = null
          })
      })
  })


