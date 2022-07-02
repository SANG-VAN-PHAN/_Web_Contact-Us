// const col3 = document.querySelector('.col3-moon');
// const header_1 = document.querySelector('.header_1')
// const header_2 = document.querySelector('.header_2')
// const get = document.querySelector('.get')
// const we = document.querySelector('.we')
// const body = document.querySelector('.body')
// const subscribe = document.querySelector('.subscribe')
// const dark_to_light = document.querySelector('.dark_to_light')

// col3.onclick = function () {
//     col3.classList.toggle('active');
//     header_1.classList.toggle('dark');
//     header_2.classList.toggle('header_2_change')
//     get.classList.toggle('get_change')
//     we.classList.toggle('we_change')
//     body.classList.toggle('body_change')
//     subscribe.classList.toggle('subscribe_change')
//     dark_to_light.classList.toggle('dark_to_light_change')






// }







const col3 = document.querySelector('.col3-moon');
const header_1 = document.querySelector('.header_1')
const header_2 = document.querySelector('.header_2')

const body = document.querySelector('.body')
const studious = document.querySelector('.studious')
const started = document.querySelector('.started')
const flexible = document.querySelector('.flexible')
const data = document.querySelector('.data')
const student = document.querySelector('.student')
const world = document.querySelector('.world')
const not = document.querySelector('.not')
const subscribe = document.querySelector('.subscribe')
const dark_to_light = document.querySelector('.dark_to_light')


const moon = document.querySelector('.col3-moon')
const sum = document.querySelector('.col3-sum')

moon.addEventListener('click', function () {
    moon.classList.add('hide')
    sum.classList.remove('hide')

    header_1.classList.add('dark');
    header_2.classList.add('header_2_change')
    body.classList.add('body_change')
    studious.classList.add('studious_change')
    started.classList.add('started_change')
    flexible.classList.add('flexible_change')
    data.classList.add('data_change')
    student.classList.add('student_change')
    world.classList.add('world_change')
    not.classList.add('not_change')
    subscribe.classList.add('subscribe_change')
    dark_to_light.classList.add('dark_to_light_change')


})
sum.addEventListener('click', function () {
    sum.classList.add('hide')
    moon.classList.remove('hide')

    header_1.classList.remove('dark');
    header_2.classList.remove('header_2_change')
    body.classList.remove('body_change')
    studious.classList.remove('studious_change')
    started.classList.remove('started_change')
    flexible.classList.remove('flexible_change')
    data.classList.remove('data_change')
    student.classList.remove('student_change')
    world.classList.remove('world_change')
    not.classList.remove('not_change')
    subscribe.classList.remove('subscribe_change')
    dark_to_light.classList.remove('dark_to_light_change')


})



// col3.onclick = function () {
//     // col3.classList.add('active');
//     header_1.classList.add('dark');
//     header_2.classList.add('header_2_change')

//     body.classList.add('body_change')
//     studious.classList.add('studious_change')
//     started.classList.add('started_change')
//     flexible.classList.add('flexible_change')
//     data.classList.add('data_change')
//     student.classList.add('student_change')
//     world.classList.add('world_change')
//     not.classList.add('not_change')
//     subscribe.classList.add('subscribe_change')
//     dark_to_light.classList.add('dark_to_light_change')


// }