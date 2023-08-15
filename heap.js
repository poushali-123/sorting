async function max_heapify(n,i){
    let bars = document.querySelectorAll(".bar");
    let largest=i;
    
    let l=2*i+1;
    let r=2*i+2;

    while(l<n && Number(bars[l].childNodes[0].innerHTML) > Number(bars[largest].childNodes[0].innerHTML)){
        largest=l;
        bars[largest].style.backgroundColor="red";
        bars[i].style.backgroundColor="blue";
    }
    while(r<n && Number(bars[r].childNodes[0].innerHTML)> Number(bars[largest].childNodes[0].innerHTML)){
        largest=r;
        bars[largest].style.backgroundColor="red";
        bars[i].style.backgroundColor="blue";
    }
    if(largest!=i){
        let temp1 =bars[i].style.height;
        bars[i].style.height=bars[largest].style.height;
        bars[largest].style.height=temp1;

        let temp2 =bars[i].childNodes[0].innerHTML;
        bars[i].childNodes[0].innerHTML=bars[largest].childNodes[0].innerHTML;
        bars[largest].childNodes[0].innerHTML=temp2;

        await new Promise((resolve) =>
           setTimeout(() => {
              resolve();
            }, delay)
        );
        bars[i].style.backgroundColor="red";
        bars[largest].style.backgroundColor="blue";
        await max_heapify(n,largest);
    }

}
async function heapy(n){

    let bars = document.querySelectorAll(".bar");
    if(n%2!=0)
    m= (Math.floor(n/2))+1;
    else
    m=n/2;

    for(let i=m-1;i>=0;i--){
        bars[i].style.backgroundColor="red";
        await max_heapify(n,i);
        
    }
    for(let i=n-1;i>0;i--){
        bars[0].style.backgroundColor="green";
        bars[i].style.backgroundColor="purple";
        let temp1 =bars[i].style.height;
        bars[i].style.height=bars[0].style.height;
        bars[0].style.height=temp1;

        let temp2 =bars[i].childNodes[0].innerHTML;
        bars[i].childNodes[0].innerHTML=bars[0].childNodes[0].innerHTML;
        bars[0].childNodes[0].innerHTML=temp2;

        await new Promise((resolve) =>
           setTimeout(() => {
              resolve();
            }, delay)
        );
        await max_heapify(i,0);
        bars[0].style.backgroundColor="purple";
    }
    document.getElementById("show").innerHTML="Heap Sort algorithm:  O(nlog n) time complexities for all the cases ( best case, average case, and worst case)."

}

const heapbtn=document.querySelector(".heap");
heapbtn.addEventListener('click', async function(){
    sliderdisable()
    disablebutton();
    let bars = document.querySelectorAll(".bar");
    let n=bars.length;
    await heapy(n);
    enablebutton();
    sliderenable();
});
