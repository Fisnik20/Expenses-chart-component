const chart_lines=document.querySelectorAll('.chart-line');
let chart_lines_arr = [];
let totalSpent = 0; 

while (chart_lines_arr.length != 7) {
    
    let randomHeight = Math.floor(Math.random()*132);
    chart_lines_arr.push(randomHeight);
    
                
}


chart_lines.forEach(chart_line =>{
    chart_line.addEventListener('click', chartLineBg)
})
function chartLineBg() {
    for (let i = 0; i < chart_lines.length; i++) {
        chart_lines[i].classList.remove('cyan')
        
    }
     this.classList.toggle('cyan');
}
function totalAmountSpent() {
    for (let i = 0; i < chart_lines_arr.length; i++) {
        totalSpent = totalSpent + chart_lines_arr[i]        
    }
    
}
function applyHeightToElement() {
    for (let index = 0; index< chart_lines.length; index++) {
        chart_lines[index].style.height = `${chart_lines_arr[index]}px`
        chart_lines[index].setAttribute('data-height',`${chart_lines_arr[index]}$`)
        
    }
    let total = document.querySelector('.total-price').innerText = totalSpent + '$';
    
}
                
                
    
totalAmountSpent()
applyHeightToElement()