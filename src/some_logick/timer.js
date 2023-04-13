export default function timer(element){
    let m1 = 0,m2 = 0,s1 = 0 , s2 = 0
    element.textContent = `${m2}${m1}.${s2}${s1}`
    setInterval(()=>{
        if(m1 === 9 && s2 === 5 && s1 === 9){
            m2++;
            m1 = s2 = s1 = 0;
        }else{
            if(s2 === 5 && s1 === 9){
                m1++;
                s2 = s1 = 0;
            }else{
                if(s1 === 9){
                    s2++;
                    s1 = 0;
                }else{
                    s1++
                }
            }
        }
    element.textContent = `${m2}${m1}.${s2}${s1}`
    },1000)
}