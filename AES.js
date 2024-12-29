let user_key = prompt("Enter key");
let user_text = prompt("Enter text");

let key = [];
let key_2 = key;

let text = [];

let text_binary_code = [];
let key_binary_code = [];

let text_l = 0; 
let rcon_l = 0;

let call_count = 0;
let cycl = 16;

let text_2 = new Array(16);
let text_2_____16_8_8 = new Array(16);
let text_2__16_8 = new Array(16);

let numbers = [9,8,7,6,5,4,3,2];
let polynomial = [10,6,5,3,2];

let sbox = [
        ["^^", " 0", " 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", " a", " b", " c", " d", " e", " f" ],
        [" 0", "63", "7c", "77", "7b", "f2", "6b", "6f", "c5", "30", "01", "67", "2b", "fe", "d7", "ab", "76" ],
        [" 1", "ca", "82", "c9", "7d", "fa", "59", "47", "f0", "ad", "d4", "a2", "af", "9c", "a4", "72", "c0" ],
        [" 2", "b7", "fd", "93", "26", "36", "3f", "f7", "cc", "34", "a5", "e5", "f1", "71", "d8", "31", "15" ],
        [" 3", "04", "c7", "23", "c3", "18", "96", "05", "9a", "07", "12", "80", "e2", "eb", "27", "ba", "75" ],
        [" 4", "09", "83", "2c", "1a", "1b", "6e", "5a", "a0", "52", "3b", "d6", "b3", "29", "e3", "2f", "84" ],
        [" 5", "53", "d1", "00", "ed", "20", "fc", "b1", "5b", "6a", "cb", "be", "39", "4a", "4c", "58", "cf" ],
        [" 6", "d0", "ef", "aa", "fb", "43", "4d", "33", "85", "45", "f9", "02", "7f", "50", "3c", "9f", "a8" ],
        [" 7", "51", "a3", "40", "8f", "92", "9d", "38", "f5", "bc", "b6", "da", "21", "10", "ff", "f3", "d2" ],
        [" 8", "cd", "0c", "13", "ec", "5f", "97", "44", "17", "c4", "a7", "7e", "3d", "64", "5d", "19", "73" ],
        [" 9", "60", "81", "4f", "dc", "22", "2a", "90", "88", "46", "ee", "b8", "14", "de", "5e", "0b", "db" ],
        [" a", "e0", "32", "3a", "0a", "49", "06", "24", "5c", "c2", "d3", "ac", "62", "91", "95", "e4", "79" ],
        [" b", "e7", "c8", "37", "6d", "8d", "d5", "4e", "a9", "6c", "56", "f4", "ea", "65", "7a", "ae", "08" ],
        [" c", "ba", "78", "25", "2e", "1c", "a6", "b4", "c6", "e8", "dd", "74", "if", "4b", "bd", "8b", "8a" ],
        [" d", "70", "3e", "b5", "66", "48", "03", "f6", "0e", "61", "35", "57", "b9", "86", "c1", "1d", "9e" ],
        [" e", "e1", "f8", "98", "11", "69", "d9", "8e", "94", "9b", "1e", "87", "e9", "ce", "55", "28", "df" ],
        [" f", "8c", "a1", "89", "0b", "bf", "e6", "42", "68", "41", "99", "2d", "0f", "b0", "54", "bb", "16" ]
    ];
let _16_in_2 = [
        ["0",0,0,0,0],
        ["1",0,0,0,1],
        ["2",0,0,1,0],
        ["3",0,0,1,1],
        ["4",0,1,0,0],
        ["5",0,1,0,1],
        ["6",0,1,1,0],
        ["7",0,1,1,1],
        ["8",1,0,0,0],
        ["9",1,0,0,1],
        ["a",1,0,1,0],
        ["b",1,0,1,1],
        ["c",1,1,0,0],
        ["d",1,1,0,1],
        ["e",1,1,1,0],
        ["f",1,1,1,1]
    ];
let rcon = [
        [0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,1,0],
        [0,0,0,0,0,1,0,0],
        [0,0,0,0,1,0,0,0],
        [0,0,0,1,0,0,0,0],
        [0,0,1,0,0,0,0,0],
        [0,1,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0],
        [0,0,0,1,1,0,1,1],
        [0,0,1,1,0,1,1,0]
];

for( i = 0; i < user_key.length; i++){
    key[i] = user_key[i];
}
for( i = 0; i < user_text.length; i++){
    text[i] = user_text[i];
}

/*------------------------------------- add empty symbols ---*/
if((remainder = text.length % 16) != 0){
    for( i = 0; i < 16 - remainder; i++){
    text.push("0"); 
    }
}

if((remainder = key.length % 16) != 0){
    for(i = 0; i < 16 - remainder; i++){
    key.push("0"); 
    }
}
/*---------------------------------------------------------------------------------*/

/*------------------------------- text, key to binary code ---*/
for(i = 0; i < text.length; i++){
    
    _2_ =["0","0","0","0","0","0","0","0"];
    
    asq_code = text[i].charCodeAt();
    
    for(j = 0; asq_code != 1;j++){
        remainder = asq_code % 2;
        asq_code = Math.floor(asq_code/2);
        _2_[j] = remainder;
        
        if(asq_code == 1 ){_2_[j+1] = 1;}
    }
    
    _2_ = _2_.reverse();
    text_binary_code[i] = _2_;
}

for(i = 0; i < 16; i++){
    _2_ = ["0","0","0","0","0","0","0","0"];
    
    asq_code = key[i].charCodeAt();
    
    for(j = 0; asq_code != 1;j++){
        remainder = asq_code % 2;
        asq_code = Math.floor(asq_code/2);
        _2_[j] = remainder;
        
        if(asq_code == 1 ){_2_[j+1] = 1;}                                     /*!!!*/
    }

    _2_ = _2_.reverse();
    key_binary_code[i] = _2_;
}
/*---------------------------------------------------------------------------------*/

/*------------------------------------------ text XOR key ---*/
for( i = 0, k = 0; i < text.length; i++, k++){
    if( k == 16){ k = 0;}                                                     /*!!!*/
    
    for( j= 0; j < 8; j++){
        if( text_binary_code[i][j] == key_binary_code[k][j]){ text_binary_code[i][j] = "0";}
        else{ text_binary_code[i][j] = "1";}
    }
}
/*---------------------------------------------------------------------------------*/

document.write("text 16 code" + "<br><br>");

function _10_in_2(arr_1, arr_2){
    /*------------------------------- new text 2 - 10 ---*/
    for( i = 0; i < arr_1.length; i++){
        arr_1[i] = 0;
        for( j = 0, k = 7; j < 8; j++){
            arr_1[i] += parseInt(arr_2[i][j]) * Math.pow(2,k-j);
        }
    }
    /*---------------------------------------------------------------------------------*/

    /*---------------------------------- new text 10 - 16 ---*/;     
    for( i = 0; i < arr_1.length; i++){
        _16_ = ["0","0"];                                 

        if( arr_1[i] < 16){ _16_[1] = arr_1[i];}
        else{ _16_[0] = Math.floor(arr_1[i] / 16); _16_[1] = arr_1[i] % 16;}        /*!!!*/

            if(_16_[1] == 10){_16_[1] = "a";}
            if(_16_[1] == 11){_16_[1] = "b";}
            if(_16_[1] == 12){_16_[1] = "c";}
            if(_16_[1] == 13){_16_[1] = "d";}
            if(_16_[1] == 14){_16_[1] = "e";}
            if(_16_[1] == 15){_16_[1] = "f";}
        
            if(_16_[0] == 10){_16_[0] = "a";}
            if(_16_[0] == 11){_16_[0] = "b";}
            if(_16_[0] == 12){_16_[0] = "c";}
            if(_16_[0] == 13){_16_[0] = "d";}
            if(_16_[0] == 14){_16_[0] = "e";}
            if(_16_[0] == 15){_16_[0] = "f";}

        arr_1[i] = _16_;

        document.write(arr_1[i] + "<br>");      /*-------- start ----------*/
    }
    /*---------------------------------------------------------------------------------*/
    document.write("<br>");
}
_10_in_2(text,text_binary_code);

function replacement(){
    if(call_count == 9){call_count = 0;  cycl += 16;   text_l += 16;    key = key_2;  rcon_l = 0;}
    var row;
    var column;
    for( text_l; text_l < cycl ; text_l++){
        for( i = 0; i < 17; i++){
            if(text[text_l][0] == sbox[i][0][1]) {row = i;}
            if(text[text_l][1] == sbox[0][i][1]) {column = i;}
        }
        text[text_l] = sbox[row][column];
        document.write(text[text_l][0] + "," + text[text_l][1] + "<br>");
    }
    call_count++;
    text_l -= 16;
    document.write("<br>");
}

function ShiftRows(){
    arajin = text[text_l + 1];
    text[text_l + 1] = text[text_l + 5];
    text[text_l + 5] = text[text_l + 9];
    text[text_l + 9] = text[text_l + 13];
    text[text_l + 13] = arajin;
    
    arajin = text[text_l + 2];
    erkrord = text[text_l + 6];
    text[text_l + 2] = text[text_l + 10];
    text[text_l + 6] = text[text_l + 14];
    text[text_l + 10] = arajin;
    text[text_l + 14] = erkrord;
    
    last = text[text_l + 15];
    text[text_l + 15] = text[text_l + 11];
    text[text_l + 11] = text[text_l + 7];
    text[text_l + 7] = text[text_l + 3];
    text[text_l + 3] = last;
    
    document.write("<br>");
    for( i = 0; i < 16; i++){
        document.write(text[i] + "<br>");
    }
}
//ShiftRows();

function MixColumns(){
    for(text_l, i = 0; text_l < cycl; text_l++, i++){
        text_2[i] = new Array(2);
        text_2_____16_8_8[i] = new Array(8)
        if(text[text_l][0] == "0"){text_2[i][0] = new Array(0,0,0,0);}
        if(text[text_l][1] == "0"){text_2[i][1] = new Array(0,0,0,0);}
        if(text[text_l][0] == "1"){text_2[i][0] = new Array(0,0,0,1);}
        if(text[text_l][1] == "1"){text_2[i][1] = new Array(0,0,0,1);}
        if(text[text_l][0] == "2"){text_2[i][0] = new Array(0,0,1,0);}
        if(text[text_l][1] == "2"){text_2[i][1] = new Array(0,0,1,0);}
        if(text[text_l][0] == "3"){text_2[i][0] = new Array(0,0,1,1);}
        if(text[text_l][1] == "3"){text_2[i][1] = new Array(0,0,1,1);}
        if(text[text_l][0] == "4"){text_2[i][0] = new Array(0,1,0,0);}
        if(text[text_l][1] == "4"){text_2[i][1] = new Array(0,1,0,0);}
        if(text[text_l][0] == "5"){text_2[i][0] = new Array(0,1,0,1);}
        if(text[text_l][1] == "5"){text_2[i][1] = new Array(0,1,0,1);}
        if(text[text_l][0] == "6"){text_2[i][0] = new Array(0,1,1,0);}
        if(text[text_l][1] == "6"){text_2[i][1] = new Array(0,1,1,0);}
        if(text[text_l][0] == "7"){text_2[i][0] = new Array(0,1,1,1);}
        if(text[text_l][1] == "7"){text_2[i][1] = new Array(0,1,1,1);}
        if(text[text_l][0] == "8"){text_2[i][0] = new Array(1,0,0,0);}
        if(text[text_l][1] == "8"){text_2[i][1] = new Array(1,0,0,0);}
        if(text[text_l][0] == "9"){text_2[i][0] = new Array(1,0,0,1);}
        if(text[text_l][1] == "9"){text_2[i][1] = new Array(1,0,0,1);}
        if(text[text_l][0] == "a"){text_2[i][0] = new Array(1,0,1,0);}
        if(text[text_l][1] == "a"){text_2[i][1] = new Array(1,0,1,0);}
        if(text[text_l][0] == "b"){text_2[i][0] = new Array(1,0,1,1);}
        if(text[text_l][1] == "b"){text_2[i][1] = new Array(1,0,1,1);}
        if(text[text_l][0] == "c"){text_2[i][0] = new Array(1,1,0,0);}
        if(text[text_l][1] == "c"){text_2[i][1] = new Array(1,1,0,0);}
        if(text[text_l][0] == "d"){text_2[i][0] = new Array(1,1,0,1);}
        if(text[text_l][1] == "d"){text_2[i][1] = new Array(1,1,0,1);}
        if(text[text_l][0] == "e"){text_2[i][0] = new Array(1,1,1,0);}
        if(text[text_l][1] == "e"){text_2[i][1] = new Array(1,1,1,0);}
        if(text[text_l][0] == "f"){text_2[i][0] = new Array(1,1,1,1);}
        if(text[text_l][1] == "f"){text_2[i][1] = new Array(1,1,1,1);}
    }
    text_l -=16;
    
    for( i = 0; i < 16; i++){
        for(j = 0; j < 8; j++){
            text_2_____16_8_8[i][j] = new Array(0,0,0,0,0,0,0,0);    
        }
    }
    
    document.write("<br>");
    for( i = 0; i < 16; i++){
        text_2__16_8[i] = new Array(0,0,0,0,0,0,0,0);;
        document.write(text_2[i][0] + ",");
        document.write(text_2[i][1] + "<br>");
    }
    document.write("<br>");
    
    /*------------------------------ X degs ---*/
    for(j = 0; j < 16; j++){ 
        for( i = 0; i < 4; i++){
            text_2[j][0][i] = text_2[j][0][i] * numbers[i];
            document.write(text_2[j][0][i] + ",");
        }
        for( i = 0; i < 4; i++){
            text_2[j][1][i] = text_2[j][1][i] * numbers[i+4];
            document.write(text_2[j][1][i] + ",");
        }
        document.write("<br>");
    }
    /*---------------------------------------------------------------------------*/
    
    /*------------------------ text_2 in text_2_____16_8_8 ---*/
    document.write("<br>");
    for( i = 0; i < 16; i++){
        for( k = 0; k < 4; k++){   
            text_2_____16_8_8[i][0][k] = text_2[i][0][k]; 
            text_2_____16_8_8[i][0][k + 4] = text_2[i][1][k]; 
        }
    }
    for( i = 0; i < 16; i++){document.write(text_2_____16_8_8[i] + "<br>");}
    /*---------------------------------------------------------------------------*/
    
    matric_1_2_3__1 = [2,3,1,1];
    matric_1_2_3__2 = [1,2,3,1];
    matric_1_2_3__3 = [1,1,2,3];
    matric_1_2_3__4 = [3,1,1,2];
    
    row_number = 0;
    row_number_2 = 0;
    function multiplication(mass){
        for(i = 0; i < 4; i++){
            if(mass[i] == 1){
                for( j = 0; j < 4; j++){
                    text_2_____16_8_8[row_number][i * 2][j] = parseInt(text_2[row_number_2 + i][0][j]);
                    text_2_____16_8_8[row_number][i * 2][j + 4] = parseInt(text_2[row_number_2 + i][1][j]);
                }
            }
            
            if(mass[i] == 2){
                for( j = 0; j < 4; j++){
                    text_2_____16_8_8[row_number][i * 2][j] = parseInt(text_2[row_number_2 + i][0][j]) + 1;
                    text_2_____16_8_8[row_number][i * 2][j + 4] = parseInt(text_2[row_number_2 + i][1][j]) + 1;
                }
            }
            
            if(mass[i] == 3){
                for( j = 0; j < 4; j++){
                    text_2_____16_8_8[row_number][i * 2][j] = parseInt(text_2[row_number_2 + i][0][j]);
                    text_2_____16_8_8[row_number][i * 2][j + 4] = parseInt(text_2[row_number_2 + i][1][j]);
                    text_2_____16_8_8[row_number][i * 2 + 1][j] = parseInt(text_2[row_number_2 + i][0][j]) + 1;
                    text_2_____16_8_8[row_number][i * 2 + 1][j + 4] = parseInt(text_2[row_number_2 + i][1][j]) + 1;
                }
            } 
        }
        row_number++;
        if(row_number_2 != 12){if(row_number != 0){ if(row_number % 4 == 0){row_number_2 += 4;}}}
    }
    
    multiplication(matric_1_2_3__1);
    multiplication(matric_1_2_3__2);
    multiplication(matric_1_2_3__3);
    multiplication(matric_1_2_3__4);    
    multiplication(matric_1_2_3__1);
    multiplication(matric_1_2_3__2);
    multiplication(matric_1_2_3__3);
    multiplication(matric_1_2_3__4);
    multiplication(matric_1_2_3__1);
    multiplication(matric_1_2_3__2);
    multiplication(matric_1_2_3__3);
    multiplication(matric_1_2_3__4);
    multiplication(matric_1_2_3__1);
    multiplication(matric_1_2_3__2);
    multiplication(matric_1_2_3__3);
    multiplication(matric_1_2_3__4);
    
    document.write("<br>");

    for( i = 0; i < 16; i++){
        for( j = 0; j < 8; j += 2){
            document.write(text_2_____16_8_8[i][j] + "&nbsp;&nbsp;" + text_2_____16_8_8[i][j + 1] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        }
        if(i != 0){if(i%3==0){document.write("<br>");}}
        document.write("<br>");
    }
    
    text_3 = new Array(16);                         /*!!!!*/
    
    for( i = 0; i < 16; i++){
        text_3[i] = new Array(64);
        for( l = 0; l < 64;){
            for( j = 0; j < 8; j++){
                for( k = 0; k < 8; k++, l++){
                    text_3[i][l] = text_2_____16_8_8[i][j][k];
                }
            }
        }
    }
    
    for( i = 0; i < 16; i++){document.write(text_3[i] + "<br>");}
    document.write("<br>");
    
    /*---------------------------------- polynomials plus (XOR) ---*/
    for( i = 0; i < 16; i++){
        for( j = 0; j < 64; j++){
            for(k =0; k < 64; k++){
                if( j != k){
                    if(text_3[i][j] == text_3[i][k]){
                        text_3[i][j] = 0;
                        text_3[i][k] = 0;
                        continue;
                    }
                    if(text_3[i][j] == 1){text_3[i][j] = 0;}        // - 1
                }
            }
        }
        document.write(text_3[i] + "<br>");
    }
    /*---------------------------------------------------------------------------*/
    document.write("<br>");
    /*---------------------------------- XOR polynomial ---*/
    for( i = 0; i < 16; i++){
        for( j = 0; j < 64; j++){
            if(text_3[i][j] == 10){
                polynomial_clon = [];
                for(o = 0; o < 5; o++){polynomial_clon[o] = polynomial[o];}

                document.write("<br>" + polynomial_clon);

                for( l = 0; l < 64; l++){
                    if(text_3[i][l] == 10){text_3[i][l] = 0;polynomial_clon[0] = 0;}
                    if(text_3[i][l] == 6){text_3[i][l] = 0;polynomial_clon[1] = 0;}
                    if(text_3[i][l] == 5){text_3[i][l] = 0;polynomial_clon[2] = 0;}
                    if(text_3[i][l] == 3){text_3[i][l] = 0;polynomial_clon[3] = 0;}
                    if(text_3[i][l] == 2){text_3[i][l] = 0;polynomial_clon[4] = 0;}
                }

                document.write("<br>" + polynomial_clon + "<br>" + "<br>");
                /*------------------------------------------------------*/
                for( k = 0; k < 5; k++){
                    if(parseInt(polynomial_clon[k]) > 0){
                        for( m = 0; m < 8; m++){
                            if(text_3[i][m] == 0){text_3[i][m] = polynomial[k]; break;}
                        }
                    }
                }
                /*------------------------------------------------------*/
            }
        }
        document.write(text_3[i] + "<br>");
    }
    /*---------------------------------------------------------------------------*/
    document.write("<br>");
    for( i = 0; i < 16; i++){
        for( j = 0; j < 64; j++){
            if(text_3[i][j] > 0){
                text_2__16_8[i][text_3[i][j] - 2] = 1;
            }
        }
        text_2__16_8[i] = text_2__16_8[i].reverse();
        document.write(text_2__16_8[i] + "<br>");
    }
    document.write("<br>");

}
//MixColumns();

document.write("<-------------&nbsp;&nbsp;&nbsp;&nbsp;key&nbsp;&nbsp;&nbsp;&nbsp;---------------><br>");
_10_in_2(key,key_binary_code);

document.write("<br>");

for( i = 0; i < 16; i++){ document.write(key_binary_code[i] + "<br>"); }

function AddRoundKey(){
    document.write("<br>");

    key_12 = key[12];
    key[12] = key[13];
    key[13] = key[14];
    key[14] = key[15];
    key[15] = key_12;

    key_12 = key_binary_code[12];
    key_binary_code[12] = key_binary_code[13];
    key_binary_code[13] = key_binary_code[14];
    key_binary_code[14] = key_binary_code[15];
    key_binary_code[15] = key_12;

    /*----------------- key replacement sbox --------------*/
    var row;
    var column;
    for(j = 0; j < 4;){
        for( i = 0; i < 17; i++){
            if(key[j + 12][0] == sbox[i][0][1]) {row = i;}
            if(key[j + 12][1] == sbox[0][i][1]) {column = i;}
        }
        key[j + 12] = sbox[row][column];
        j++;
    }
    /*---------------------------------------------------------------*/

    for(i = 12; i < 16; i++){
        for(j = 0; j < 16; j++){

            if(key[i][0] == _16_in_2[j][0]){
                for( k = 0; k < 4; k++){
                    key_binary_code[i][k] = _16_in_2[j][k + 1];
                }
            }

            if(key[i][1] == _16_in_2[j][0]){
                for( k = 0; k < 4; k++){
                    key_binary_code[i][k + 4] = _16_in_2[j][k + 1];
                }
            }

        }
    }

    document.write("------ replacement -----" + "<br>" );
    for( i = 0; i < 16; i++){document.write(key[i] + "<br>");}

    document.write("<br>");
    for( i = 0; i < 16; i++){document.write(key_binary_code[i] + "<br>");}
    
    /*---------------------------- text key XOR--------*/
    for( i = 0; i < 4; i++){
        for( j = 0; j < 8; j++){
            if(key_binary_code[i][j] == key_binary_code[i + 12][j]){ key_binary_code[i][j] = 0; }
            else { key_binary_code[i][j] = 1; }
            
            if(key_binary_code[i + 4][j] == key_binary_code[i][j]){ key_binary_code[i + 4][j] = 0; }
            else { key_binary_code[i + 4][j] = 1; }
            
            if(key_binary_code[i + 8][j] == key_binary_code[i + 4][j]){ key_binary_code[i + 8][j] = 0; }
            else  {key_binary_code[i + 8][j] = 1; }
            
            if(key_binary_code[i + 8][j] == key_binary_code[i + 12][j]){ key_binary_code[i + 12][j] = 0; }
            else { key_binary_code[i + 12][j] = 1; }
        }
    }
    /*-------------------------------------------------------------------*/

    /*----------------------------- rcon text XOR ----------*/
    for( j = 0; j < 8; j++){
        if(key_binary_code[0][j] == rcon[rcon_l][j]){key_binary_code[0][j] = 0;}
        else {key_binary_code[0][j] = 1;}
    }
    
    rcon_l++;
    /*-------------------------------------------------------------------*/

    document.write("<br>" + "----- xor 1 12 in 1 top------" + "<br>");
    for( i = 0; i < 16; i++){document.write(key_binary_code[i] + "<br>");}
    
    document.write("<br>" + "----- finnaly key from round ------" + "<br>");
    
    document.write("<br>");
    _10_in_2(key,key_binary_code); 
    
    document.write("<br>" + "----- text binary code after round ------" + "<br>");
    for(text_l; text_l < cycl; text_l++){
        for( j = 0; j < 8; j++){
            if(text_2__16_8[text_l][j] == key_binary_code[text_l][j]){text_2__16_8[text_l][j] = 0;}
            else {text_2__16_8[text_l][j] = 1;}
        }
        document.write(text_2__16_8[text_l] + "<br>");
    }
    text_l -= 16;
    
    a = 0;
    document.write("Finnaly text " + "<br>");
    for( i = 0; i < 16; i++){
        for( j = 0, k = 7; j < 8; j++){
            a += parseInt(text_2__16_8[i][j]) * Math.pow(2,k-j);
        }
        document.write(String.fromCharCode(a));
        a = 0;
    }
    document.write("<br>################################################################################################<br>");
}
//AddRoundKey();

for(q = 0; q < 9; q++){
    replacement();
    ShiftRows();
    MixColumns();
    _10_in_2(key, key_binary_code);
    AddRoundKey();
}