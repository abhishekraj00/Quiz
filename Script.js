
let ans1= "Tiger" ;


let ans = [
    {
        Q1:"Q.1 National Animal of India", choices:['Tiger','Cat','Dog','Fox'] , corAns: "Tiger" , id: "q-1"
    }
]

let a = document.getElementsByClassName("1-opt");

function subAns(){

    for(let i =0 ;i<4;i++){
        if(a[i]===ans1){
            alert("Your ans is correct");
            return;
        }
    }

}






