function bt1() {
    let x = prompt('Nhap so vao')
    let elm = document.getElementById('demo1')
    elm.innerHTML = (x*2)
};
function bt2() {
    let numberMin = prompt('Nhap so vao thu nhat');
    let b = prompt('Nhap so vao thu hai');
    let c = prompt('Nhap so vao thu ba');
    let d = prompt('Nhap so vao thu tu');
    let elm2 = document.getElementById('demo2');
    if(numberMin>b){
        numberMin=b
    }
    if(numberMin>c){
        numberMin=c
    }
    if(numberMin>d){
        numberMin=d
    }
    elm2.innerHTML = (numberMin)
      
}
function bt3() {
    let n = prompt('Nhap so nguyen duong n');
    let elm3 = document.getElementById('demo3')
    elm3.innerHTML = (n % 2)
}
function bt4(){
    let m = prompt('Nhap')
    let elm4 = document.getElementById('demo4')
    let elm4_2 = document.getElementById('demo4_2')
    elm4.innerHTML = (parseInt(m/10))
    elm4_2.innerHTML = ((m * 10)- (parseInt(m/10) * 100)) / 10
}
function bt5() {
    let z = prompt('Nhap so');
    let elm5 = document.getElementById('demo5')
    if( z < 2 ){
        elm5.innerHTML = z + " "+' khong phai la so nguyen to';
    }
    if( z == 2 ){
        elm5.innerHTML = z + "" + ' la so nguyen to';
    }
    if( z>2 && z % 2 === 0){
        elm5.innerHTML = z + "" + ' khong phai la so nguyen to'
    }
    if( z == 3 ){
        elm5.innerHTML = z + "" + ' la so nguyen to';
    }
    else{
        for (let i = 3; i < z-1; i+=2)
        {
            if (z % i == 0){
                elm5.innerHTML = z + "" + ' khong phai la so nguyen to'; break  
            }
            else{
                elm5.innerHTML = z + "" + ' la so nguyen to'
            }
        }
    }
}
function bt6(){
    let elm6 = document.getElementById('demo6')
    let m = prompt ("nhap so dau tien") 
    let n = prompt ("nhap so thu hai")
    for ( i=1; i <= m && i <= n ; i++){
        if ( m % i == 0 && n % i == 0) {
        elm6.innerHTML = i + ' la UCLN '
        }
    }
}
function bt7(){
    let elm7 = document.getElementById('demo7');
    let text = prompt ("Nhap chu");
    let textChange = text.toUpperCase();
    elm7.innerHTML= textChange
}

function bt8(){
    let st1 = prompt("Nhap vo")
    let arrSt = st1.split("")
    console.log(arrSt);
}
function bt10(){
    let N = prompt('Nhap N vo')
    let a = prompt('Nhap a vo')
    let b = prompt('Nhap b vo')

    let elm10 = document.getElementById('demo10')
    if ( a < b/2) elm10.innerHTML = a*N
    else if ( N % 2 === 0){ elm10.innerHTML =  N*b/2 }  
    else ( c = Math.round(N*b/2+a))
       ( elm10.innerHTML = c)
    
}