async function partition(low,high){
    let bars=document.querySelectorAll(".bar");
    let pivot=Number(bars[high].childNodes[0].innerHTML);
    let i=low-1;
    //bars[i].style.backgroundColor="red";

    bars[high].style.backgroundColor="red";
    for(var j=low;j<=high-1;j++){
        await new Promise((resolve) =>
            setTimeout(() => {
               resolve();
            },  delay)
        );
        bars[j].style.backgroundColor="skyblue";

        

        if(Number(bars[j].childNodes[0].innerHTML) < pivot){
            await new Promise((resolve) =>
               setTimeout(() => {
                 resolve();
                },  delay)
            );
            i++;
           
            let temp1 =bars[i].style.height;
            bars[i].style.height=bars[j].style.height;
            bars[j].style.height=temp1;

            let temp2 =bars[i].childNodes[0].innerText;
            bars[i].childNodes[0].innerHTML=bars[j].childNodes[0].innerHTML;
            bars[j].childNodes[0].innerHTML=temp2;
            bars[i].style.backgroundColor="orange";
            if(i!=j)
            bars[j].style.backgroundColor="pink";
            else
            bars[j].style.backgroundColor="pink";
           
        }
        

    }
    i++;
    let temp1 =bars[i].style.height;
    bars[i].style.height=bars[high].style.height;
    bars[high].style.height=temp1;

    let temp2 =bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerHTML=bars[high].childNodes[0].innerHTML;
    bars[high].childNodes[0].innerHTML=temp2;

    bars[high].style.backgroundColor="pink";
    bars[i].style.backgroundColor="green";
    

    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        },  delay)
    );
    
    for(let k=low;k<=high;k++)
    bars[k].style.backgroundColor="purple";
    return i;
}
async function quicksort(low,high){
    
    if(low<high){
       let part =await partition(low,high);
    
       await quicksort(low,(part - 1));
       await quicksort((part + 1),high);
    }
    

}
/*function quick(){
    let bars=document.querySelectorAll(".bar");
    let n=bars.length - 1;
    quicksort(0,n);
    document.getElementById("show").innerHTML="1) The best-case time complexity of quicksort is O(n*logn).  2)The average case time complexity of quicksort is O(n*logn). 3) The worst-case time complexity of quicksort is O(n^2)."
}*/

const quickbtn=document.querySelector(".quick");
quickbtn.addEventListener('click', async function(){
    sliderdisable()
    disablebutton();
    let bars=document.querySelectorAll(".bar");
    let n=bars.length - 1;
    await quicksort(0,n);
    document.getElementById("show").innerHTML="1) The best-case time complexity of quicksort is O(n*logn).  2)The average case time complexity of quicksort is O(n*logn). 3) The worst-case time complexity of quicksort is O(n^2)."
    enablebutton();
    sliderenable();
});