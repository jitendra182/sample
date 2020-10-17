function calculate(array){

    let val = new Map();
    for(let i =0; i< array.length; i++){
        let data = array[i];
        let counter=0;
        for(let j=0;j< array.length; j++){

            if(array[j] == data)
                counter++;
        }
        val.set(array[i],counter);
    }
    let arr=0;
    val.forEach( (v,k)=>{
        let c = Math.floor(v/2);
        if(c>0)
            arr+=c;
    });
    console.log( arr );
}

let arr='10 10 10 10 20 30 30 30 30 30 30 30 40 40 40 40 40';
let array=arr.split(' ');
calculate(array);
