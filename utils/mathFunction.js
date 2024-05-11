// untuk luas 
// type untuk memilih persegi/persegipanjang
export function luas( type=null, numberOne, numberTwo=null){
    if(type=='persegi'){
        // sisi*sisi
        return numberOne *numberOne;
    }else if(type=='persegi panjang'){
        // P*L
        return numberOne * numberTwo;
    }else{
        return "harap pilih type bangun datar!";
    }
}

export function keliling( type=null, numberOne, numberTwo=null){
    if(type=='persegi'){
        // 4*sisi
        return 4*numberOne ;
    }else if(type=='persegi panjang'){
        // 2*(p+l)
        return 2*(numberOne + numberTwo);
    }else{
        return "harap pilih type bangun datar!";
    }
}