// // var header1 = document.querySelector('.header_1')
// // var header2 = document.querySelector('.header_2')


// // const backToTop = document.querySelector('.header')

// // window.onscroll = function() {
// //     scrollFunction()
// // }

// // const close = document.querySelector('.video-btn-close')

// // close.addEventListener('click', () => {
// //     // document.querySelector('.video').style.display = 'none'
// //     document.querySelector('.video').style.animation = `slide 0.5s linear forwards`
// // })


// // function scrollFunction() {
// //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
// //         header1.style.transform = 'translateY(-52px)'
// //         header2.style.transform = 'translateY(-52px)'

// //         document.querySelector('.header_2 .row').style.padding = '1rem'
// //         document.querySelector('.sidebar_right').style.marginTop = '90px'


// //     } else {
// //         header1.style.transform = 'translateY(0px)'
// //         header2.style.transform = 'translateY(0px)'

// //         document.querySelector('.header_2 .row').style.padding = `1.2rem 1.0rem`
// //         document.querySelector('.sidebar_right').style.marginTop = '60px'


// //     }

// //     if (document.body.scrollTop > 1480 || document.documentElement.scrollTop > 1480) {
// //         document.querySelector('.video').style.position = 'relative'
// //         document.querySelector('.video').style.display = 'flex'
// //         document.querySelector('.video').style.background = 'none'
// //         document.querySelector('.video-btn').style.display = 'none'

// //         document.querySelector('.video').style.animation = `none`

// //     } else {
// //         document.querySelector('.video').style.background = `repeating-linear-gradient(#fff, #111 18%, #111 100%)`
// //         document.querySelector('.video').style.position = 'fixed'
// //         document.querySelector('.video-btn').style.display = 'flex'

// //     }

// // }



// // function topFunction() {
// //     document.body.scrollTop = 0;
// //     document.documentElement.scrollTop = 0;
// //     document.documentElement.style.scrollBehavior = 'smooth'
// // }


// // var dropdown = document.querySelector('.dropdown')

// // dropdown.addEventListener('click', function(e) {

// //     document.querySelector('.dropdown-menu').classList.toggle('show')


// // })


// // console.log(document.body);


// var $ = document.querySelector.bind(document)
// var $$ = document.querySelectorAll.bind(document)

// var header1 = document.querySelector('.header_1')
// var header2 = document.querySelector('.header_2')


// const backToTop = document.querySelector('.header')

// window.onscroll = function () {
//     scrollFunction()
// }

// const close = document.querySelector('.video-btn-close')

// close.addEventListener('click', () => {
//     // document.querySelector('.video').style.display = 'none'
//     document.querySelector('.video').style.animation = `slide 0.5s linear forwards`
// })


// function scrollFunction() {
//     var video = document.querySelector('.video')
//     var videoBtn = document.querySelector('.video-btn')
//     var videoPlay = document.querySelector('.video-play')


//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         header1.style.transform = 'translateY(-52px)'
//         header2.style.transform = 'translateY(-52px)'

//         document.querySelector('.header_2 .row').style.padding = '1rem'
//         document.querySelector('.sidebar_right').style.marginTop = '90px'



//     } else {
//         header1.style.transform = 'translateY(0px)'
//         header2.style.transform = 'translateY(0px)'

//         document.querySelector('.header_2 .row').style.padding = `1.2rem 1.0rem`
//         document.querySelector('.sidebar_right').style.marginTop = '60px'


//     }
//     // const scrollTop = 

//     // if (document.body.scrollTop > 3184 || document.documentElement.scrollTop > 3184) {
//     const scrollTop = window.scrollY || document.documentElement.scrollTop
//     const hight = document.body.clientHeight - 1500

//     if (scrollTop > hight) {
//         // video.style.display = 'flex'

//         video.style.position = 'relative'

//         document.querySelector('.supportVideo').style.height = 0 + 'px'
//         video.style.display = 'flex'
//         video.style.background = 'none'
//         videoBtn.style.display = 'none'
//         video.style.animation = 'none'
//         videoPlay.style.height = 450 + 'px'
//         videoPlay.style.width = 800 + 'px'
//         video.style.left = 0 + 'px'

//         // console.log([video]);

//     } else {
//         // video.style.display = 'flex'
//         document.querySelector('.supportVideo').style.height = 480 + 'px'

//         document.querySelector('.video').style.background = `repeating-linear-gradient(#fff, #111 18%, #111 100%)`
//         document.querySelector('.video').style.position = 'fixed'
//         document.querySelector('.video-btn').style.display = 'flex'
//         videoPlay.style.height = ''
//         videoPlay.style.width = ''
//         video.style.left = 10 + 'px'

//     }

// }



// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//     document.documentElement.style.scrollBehavior = 'smooth'
// }


// var dropdown = document.querySelector('.dropdown')

// dropdown.addEventListener('click', function (e) {

//     document.querySelector('.dropdown-menu').classList.toggle('show')


// })


// var show = document.querySelector('#col3-menu')
// var hide = document.querySelector('.col3-delete')

// show.addEventListener('click', function (e) {
//     show.classList.add('show')
//     $('.header_2 .col2').classList.add('show')
// })

// hide.addEventListener('click', function (e) {
//     $('.header_2 .col2').classList.remove('show')
//     show.classList.remove('show')
// })

// if ($('.col2.show')) {
//     console.log(2);
// }



// // console.log(document.body);

// Phần 2

// var $ = document.querySelector.bind(document)
// var $$ = document.querySelectorAll.bind(document)

// var header1 = document.querySelector('.header_1')
// var header2 = document.querySelector('.header_2')


// const backToTop = document.querySelector('.header')

// window.onscroll = function () {
//     scrollFunction()
// }

// const close = document.querySelector('.video-btn-close')

// close.addEventListener('click', () => {
//     // document.querySelector('.video').style.display = 'none'
//     document.querySelector('.video').style.animation = `slide 0.5s linear forwards`
// })


// function scrollFunction() {
//     var video = document.querySelector('.video')
//     var videoBtn = document.querySelector('.video-btn')
//     var videoPlay = document.querySelector('.video-play')


//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         header1.style.transform = 'translateY(-52px)'
//         header2.style.transform = 'translateY(-52px)'
//         document.querySelector('.header_2 .row').style.padding = '1rem'
//         document.querySelector('.sidebar_right').style.marginTop = '90px'



//     } else {
//         header1.style.transform = 'translateY(0px)'
//         header2.style.transform = 'translateY(0px)'

//         document.querySelector('.header_2 .row').style.padding = `1.2rem 1.0rem`
//         document.querySelector('.sidebar_right').style.marginTop = '60px'


//     }
//     // const scrollTop = 

//     // if (document.body.scrollTop > 3184 || document.documentElement.scrollTop > 3184) {
//     const scrollTop = window.scrollY || document.documentElement.scrollTop
//     const hight = document.body.clientHeight - 1500



//     // scroll back to top (#movetop)
//     if (scrollTop > 100) {
//         console.log('true');
//         document.querySelector('#movetop').style.opacity = '1';
//     } else {
//         document.querySelector('#movetop').style.opacity = '0';

//     }

//     if (scrollTop > hight) {
//         // video.style.display = 'flex'



//         video.style.position = 'relative'

//         document.querySelector('.supportVideo').style.height = 0 + 'px'
//         video.style.display = 'flex'
//         video.style.background = 'none'
//         videoBtn.style.display = 'none'
//         video.style.animation = 'none'
//         videoPlay.style.height = 450 + 'px'
//         videoPlay.style.width = 800 + 'px'
//         video.style.left = 0 + 'px'

//         // console.log([video]);

//     } else {
//         // video.style.display = 'flex'
//         document.querySelector('.supportVideo').style.height = 480 + 'px'

//         document.querySelector('.video').style.background = `repeating-linear-gradient(#fff, #111 18%, #111 100%)`
//         document.querySelector('.video').style.position = 'fixed'
//         document.querySelector('.video-btn').style.display = 'flex'
//         videoPlay.style.height = ''
//         videoPlay.style.width = ''
//         video.style.left = 10 + 'px'

//     }

// }




// function topFunction() {

//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//     document.documentElement.style.scrollBehavior = 'smooth'
// }


// var dropdown = document.querySelector('.dropdown')


// dropdown.addEventListener('click', function (e) {
//     document.querySelector('.dropdown-menu').classList.toggle('show')

// })



// var show = document.querySelector('#col3-menu')
// var hide = document.querySelector('.col3-delete')

// show.addEventListener('click', function (e) {
//     show.classList.add('show')
//     document.querySelector('.header_2 .col2').classList.add('show')
// })

// hide.addEventListener('click', function (e) {
//     document.querySelector('.header_2 .col2').classList.remove('show')
//     show.classList.remove('show')
// })

// if (document.querySelector('.col2.show')) {
//     console.log(2);
// }



// // console.log(document.body);

// Phần 2

// var $ = document.querySelector.bind(document)
// var $$ = document.querySelectorAll.bind(document)

var header1 = document.querySelector('.header_1')
var header2 = document.querySelector('.header_2')


const backToTop = document.querySelector('.header')

window.onscroll = function () {
    scrollFunction()
}

const close = document.querySelector('.video-btn-close')
var stopvideo = document.querySelector('.stopvideo')

// sử lý sự kiện click vào đóng video.
close.addEventListener('click', () => {
    // document.querySelector('.video').style.display = 'none'
    document.querySelector('.video').style.animation = `slide 0.5s linear forwards`
    document.querySelectorAll('iframe').forEach(v => { v.src = v.src });
    document.querySelectorAll('video').forEach(v => { v.pause() });

})

close.onclick(function () {
    stopvideo.each(function () {
        stopvideo.stopVideo();
    });
});

function scrollFunction() {
    var video = document.querySelector('.video')
    var videoBtn = document.querySelector('.video-btn')
    var videoPlay = document.querySelector('.video-play')


    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header1.style.transform = 'translateY(-52px)'
        header2.style.transform = 'translateY(-52px)'
        document.querySelector('.header_2 .row').style.padding = '1rem'
        document.querySelector('.sidebar_right').style.marginTop = '90px'



    } else {
        header1.style.transform = 'translateY(0px)'
        header2.style.transform = 'translateY(0px)'

        document.querySelector('.header_2 .row').style.padding = `1.2rem 1.0rem`
        document.querySelector('.sidebar_right').style.marginTop = '60px'


    }
    // const scrollTop = 

    // if (document.body.scrollTop > 3184 || document.documentElement.scrollTop > 3184) {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const hight = document.body.clientHeight - 1500



    // scroll back to top (#movetop)
    if (scrollTop > 100) {
        document.querySelector('#movetop').style.opacity = '1';
    } else {
        document.querySelector('#movetop').style.opacity = '0';

    }

    if (scrollTop > hight) {
        // video.style.display = 'flex'



        video.style.position = 'relative'

        document.querySelector('.supportVideo').style.height = 0 + 'px'
        video.style.display = 'flex'
        video.style.background = 'none'
        videoBtn.style.display = 'none'
        video.style.animation = 'none'
        videoPlay.style.height = 450 + 'px'
        videoPlay.style.width = 800 + 'px'
        video.style.left = 0 + 'px'

        // console.log([video]);

    } else {
        // video.style.display = 'flex'
        document.querySelector('.supportVideo').style.height = 480 + 'px'

        document.querySelector('.video').style.background = `repeating-linear-gradient(#fff, #111 18%, #111 100%)`
        document.querySelector('.video').style.position = 'fixed'
        document.querySelector('.video-btn').style.display = 'flex'
        videoPlay.style.height = ''
        videoPlay.style.width = ''
        video.style.left = 10 + 'px'

    }

}




function topFunction() {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.documentElement.style.scrollBehavior = 'smooth'
}


var dropdown = document.querySelector('.dropdown')


dropdown.addEventListener('click', function (e) {
    document.querySelector('.dropdown-menu').classList.toggle('show')

})



var show = document.querySelector('#col3-menu')
var hide = document.querySelector('.col3-delete')

show.addEventListener('click', function (e) {
    show.classList.add('show')
    document.querySelector('.header_2 .col2').classList.add('show')
})

hide.addEventListener('click', function (e) {
    document.querySelector('.header_2 .col2').classList.remove('show')
    show.classList.remove('show')
})



// console.log(document.body);