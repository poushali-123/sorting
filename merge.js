async function merge(bars,low,mid,high)
{
    const n1=mid-low+1;
    const n2=high-mid;

    let left=new Array(n1);
    let right=new Array(n2);

    for(let i=0;i<n1;i++)
    {
        await new Promise((resolve) =>
           setTimeout(() => {
              resolve();
            },  delay)
        );
        bars[low + i].style.background="orange";
        left[i]=bars[low + i].style.height;

    }
    for(let i=0;i<n2;i++)
    {
        await new Promise((resolve) =>
           setTimeout(() => {
               resolve();
            },  delay)
        );
        bars[mid + 1 + i].style.background="yellow";
        right[i]=bars[mid + 1 + i].style.height;

    }
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        },  delay)
    );
    let i=0,j=0,k=low;
    while(i<n1 && j<n2)
    {
        await new Promise((resolve) =>
           setTimeout(() => {
               resolve();
            },  delay)
        );
        if(parseInt(left[i])<=parseInt(right[j]))
        {
            if((n1+n2)===bars.length)
            {
                bars[k].style.background="green";
            }
            else
            {
               bars[k].style.background="lightgreen";
            }
            bars[k].style.height=left[i];
            bars[k].childNodes[0].innerHTML=parseInt(left[i]);
            i++;
            k++;

        }
        else
        {
            if((n1+n2)===bars.length)
            {
                bars[k].style.background="green";
            }
            else
            {
               bars[k].style.background="lightgreen";
            }
            bars[k].style.height=right[j];
            bars[k].childNodes[0].innerHTML=parseInt(right[j]);
            j++;
            k++;
        }
        
    }
    while(i<n1)
    {
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            },  delay)
        );
        if((n1+n2)===bars.length)
        {
            bars[k].style.background="green";
        }
        else
        {
            bars[k].style.background="lightgreen";
        }
        bars[k].style.height=left[i];
        bars[k].childNodes[0].innerHTML=parseInt(left[i]);
        i++;
        k++;
    }
    while(j<n2)
    {
        if((n1+n2)===bars.length)
        {
            bars[k].style.background="green";
        }
        else
        {
            bars[k].style.background="lightgreen";
        }
        bars[k].style.height=right[j] ;
        bars[k].childNodes[0].innerHTML=parseInt(right[j]);
        j++;
        k++;
    }
}
async function mergesort(bars,l,r)
{
    if(l>=r)
    return;

    const m=l + Math.floor((r-l)/2);
    await mergesort(bars,l,m);
    await mergesort(bars,m+1,r);
    await merge(bars,l,m,r);
}
const mergebtn=document.querySelector(".mergesort");
mergebtn.addEventListener('click', async function(){
    sliderdisable()
    disablebutton();
    let bars=document.querySelectorAll(".bar");
    let l=0
    let r=parseInt(bars.length) - 1;
    await mergesort(bars,l,r);
    document.getElementById("show").innerHTML="1) The best-case time complexity of quicksort is O(n*logn).2)The average case time complexity of quicksort is O(n*logn)"
    enablebutton();
    sliderenable();
});
