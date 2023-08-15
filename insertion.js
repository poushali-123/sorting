
async function insertion() {
    let bars = document.querySelectorAll(".bar");//selecting all bar

    bars[0].style.backgroundColor = " green"; //asigning green color to 0th bar 
    for (var i = 1; i < bars.length; i += 1) {
        var j = i - 1;
        var key = parseInt(bars[i].childNodes[0].innerHTML);//integer value of ith bar into  key
        var height = bars[i].style.height; // height of ith bar into height
        
       
        bars[i].style.backgroundColor = "red";

        // To pause the execution of code for  milliseconds
        await new Promise((resolve) =>
           setTimeout(() => {
              resolve();
            }, delay)
        );

        while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {

            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.height = bars[j].style.height;
            bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;

            j = j - 1;

            await new Promise((resolve) =>
              setTimeout(() => {
                  resolve();
                }, delay)
            );

            for(var k=i;k>=0;k--){
                bars[k].style.backgroundColor = " green"; //green color
            }
        }
        bars[j + 1].style.height = height;
        bars[j + 1].childNodes[0].innerHTML = key;

        await new Promise((resolve) =>
           setTimeout(() => {
              resolve();
            }, delay)
        );
        bars[i].style.backgroundColor = "green";//green color 
    }
    document.getElementById("show").innerHTML="1) The worst case time complexity of Insertion sort is O(N^2).  2) The average case time complexity of Insertion sort is O(N^2).  3) The time complexity of the best case is O(N)."
}

const insertionbtn=document.querySelector(".insertion");
insertionbtn.addEventListener('click', async function(){
    sliderdisable()
    disablebutton();
    await insertion();
    enablebutton();
    sliderenable();
});



