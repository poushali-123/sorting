async function bubblesort(){
    let bars = document.querySelectorAll(".bar");
        
    for(let i=0;i<n;i++){
        
        for(let j=0;j<n-1-i;j++){

            bars[j].style.backgroundColor="red";
            bars[j+1].style.backgroundColor="red";

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
            if(parseInt(bars[j].childNodes[0].innerHTML) > parseInt(bars[j+1].childNodes[0].innerHTML)){
                
                    
                let temp1 =bars[j].style.height;
                bars[j].style.height=bars[j+1].style.height;
                bars[j+1].style.height=temp1;

                let temp2 =bars[j].childNodes[0].innerHTML;
                bars[j].childNodes[0].innerHTML=bars[j+1].childNodes[0].innerHTML;
                bars[j+1].childNodes[0].innerHTML=temp2;
        
            }
            bars[j].style.backgroundColor="blue";
            bars[j+1].style.backgroundColor="blue";
        }
        bars[n-1-i].style.backgroundColor="green";
       
            
    }

    document.getElementById("show").innerHTML="Bubble sort algorithm: 1) Best case complexity is O(N). 2)Worst case/Average case time complexity is O(N^2) ."

}

const bubblebtn=document.querySelector(".bubble");
bubblebtn.addEventListener('click', async function(){
    sliderdisable()
    disablebutton();
    await bubblesort();
    enablebutton();
    sliderenable();
});


