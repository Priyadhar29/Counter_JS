let count=1;

function incr(){
    count++;
    document.getElementById("data").innerHTML = count;
}

function decr(){
    if(count>=1){
    count--;
    }
    document.getElementById("data").innerHTML = count;
}