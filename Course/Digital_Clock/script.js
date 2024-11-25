setInterval(() =>{
    let h = document.getElementById('ho');
    let m = document.getElementById('mi');
    let s = document.getElementById('se');
    let ms = document.getElementById('ms');

    let D = new Date();
    let H = D.getHours();
    let M = D.getMinutes();
    let S = D.getSeconds();
    let MS = D.getMilliseconds();

    h.textContent = ze(H);
    m.textContent = ze(M);
    s.textContent = ze(S);
    ms.textContent = zee(MS);

    if(H > 12){
        H = H -12;
        document.getElementById('ampm').innerText = 'PM';
    }

    function ze(num){
        return num<10?`0${num}` : num;
    }
    function zee(num){
        return num<100? `0${num}` : num;
    }
   
},1 );