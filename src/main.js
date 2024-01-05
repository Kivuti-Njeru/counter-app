let count = 0

let value = document.querySelector('.main__count')
const btns = document.querySelectorAll('.btn')
 value.style.color = '#888'
 value.textContent = count

btns.forEach(
    function(btn){
        btn.addEventListener('click', (e) => {
            const styles = e.currentTarget.classList
            if(styles.contains('decrease')){
                count--
            }else if (styles.contains('increase')){
                count++
            }else{
                count = 0
            }
            if(count > 0 ){
                value.style.color = '#32cd32'
            }
            if(count < 0 ){
                value.style.color = '#ff6347'
            }
            if(count == 0 ){
                value.style.color = '#888'
            }
            value.textContent = count
        })
    }
)