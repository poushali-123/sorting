
async function selectionsort(){
    disablebutton();
    let bars = document.querySelectorAll(".bar");
    
    for(let i=0;i<n;i++){
        bars[i].style.backgroundColor="red";

       
        for(let j=i+1;j<n;j++){
            bars[j].style.backgroundColor="red";
            
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
            );
            if(parseInt(bars[i].childNodes[0].innerHTML) > parseInt(bars[j].childNodes[0].innerHTML)){
                
                    
                let temp1 =bars[i].style.height;
                bars[i].style.height=bars[j].style.height;
                bars[j].style.height=temp1;
    
                let temp2 =bars[i].childNodes[0].innerHTML;
                bars[i].childNodes[0].innerHTML=bars[j].childNodes[0].innerHTML;
                bars[j].childNodes[0].innerHTML=temp2;
            
            }
            bars[j].style.backgroundColor="blue";

            
        }
        bars[i].style.backgroundColor="green";
    }
    document.getElementById("show").innerHTML="selection sort algorithm: The time complexity is O(n^2) in all three cases."
    enablebutton();  
}

const selectionbtn=document.querySelector(".selection");
selectionbtn.addEventListener('click', async function(){
    sliderdisable()
    disablebutton();
    await selectionsort();
    enablebutton();
    sliderenable();
});

   