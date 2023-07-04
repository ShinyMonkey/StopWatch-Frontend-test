var isStart=false;
var s=0;
var milsec=0;
var m=0;
const startButton=document.querySelector('.btn-container .start');
const stopButton=document.querySelector('.stop');
const resetButton=document.querySelector('.reset');
var min=document.querySelector('.min');
var sec=document.querySelector('.sec')
var msec=document.querySelector('.milisec');


stopButton.addEventListener('click',()=>{
    isStart=false;
});

startButton.addEventListener('click',()=>{
    isStart=true;
    timer();
    });

resetButton.addEventListener('click', ()=>{
    isStart=false;
    min.innerHTML="00";
    sec.innerHTML='00';
    msec.innerHTML='00';
    m=0;
    s=0;
    milsec=0;
})

function timer(){
    if(isStart==true){
        milsec++;
        if(milsec<10){
            msec.innerHTML='0'+milsec;
        }else if(milsec>=10 && milsec<=100){
            msec.innerHTML=milsec;
        }else if(milsec>100){
            milsec=0;
            s++;
            if(s<10){
                        sec.innerHTML='0'+s;
                    }else if(s>=10 && s<=60){
                        sec.innerHTML=s;
                    }else if(s>60){
                        s=0;
                        m++;
                        if(m<10){
                                min.innerHTML='0'+m;
                            }else if(m>=10){
                                min.innerHeight=m;

                        }
                    }
        }
        setTimeout('timer()',10)
    }
}
