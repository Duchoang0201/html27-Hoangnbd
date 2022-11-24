let CURRENT_HREF = window.location.href
let listA = $('a')
for (let index = 0; index < listA.length; index++) {
    const element = listA[index];
    if( element.href === CURRENT_HREF){
        $(element).addClass('active')
    }
}

