function myFunction0(){
    for(var a = 0;a<=11;a++){
        if(b[0]){
            if(b[0].body.position.x > d[a].body.position.x && b[0].body.position.x < d[a+1].body.position.x && b[0].body.speed <= 0.5 && b[0].body.position.y >= 550  && divi[a]=="free" && b[0].visibility == "true"){
                score = score+10;
                b[0].visibility = "false";
                divi[a] = "filled";
            }
        }
    }
}

function myFunction1(){
    for(var a = 0;a<=11;a++){
        if(b[1]){
            if(b[1].body.position.x>d[a].body.position.x && b[1].body.position.x<d[a+1].body.position.x && b[1].body.speed <=0.5 && b[1].body.position.y >= 550  && divi[a]=="free" && b[1].visibility == "true"){
                score = score+10;
                b[1].visibility = "false";
                divi[a] = "filled";
            }
            else if(b[1].body.position.x>d[a].body.position.x && b[1].body.position.x<d[a+1].body.position.x && b[1].body.speed <=0.5 && b[1].body.position.y >= 550  && divi[a]=="filled" && b[1].visibility == "true"){
                score = score+5;
                divi[a] = "filled";
                b[1].visibility = "false";
            }
        }
    }
}

function myFunction2(){
    for(var a = 0;a<=11;a++){
        if(b[2]){
            if(b[2].body.position.x>d[a].body.position.x && b[2].body.position.x<d[a+1].body.position.x && b[2].body.speed <=0.5 && b[2].body.position.y >= 550  && divi[a]=="free" && b[2].visibility == "true"){
                score = score+10;
                divi[a] = "filled";
                b[2].visibility = "false";
            }
            else if(b[2].body.position.x>d[a].body.position.x && b[2].body.position.x<d[a+1].body.position.x && b[2].body.speed <=0.5 && b[2].body.position.y >= 550  && divi[a]=="filled" && b[2].visibility == "true"){
                score = score+5;
                b[2].visibility = "false";
                divi[a] = "filled";
            }
        }
    }
}

function myFunction3(){
    for(var a = 0;a<=11;a++){
        if(b[3]){
            if(b[3].body.position.x>d[a].body.position.x && b[3].body.position.x<d[a+1].body.position.x && b[3].body.speed <=0.5 && b[3].body.position.y >= 550  && divi[a]=="free" && b[3].visibility == "true"){
                score = score+10;
                b[3].visibility = "false";
                divi[a] = "filled";
            }
            else if(b[3].body.position.x>d[a].body.position.x && b[3].body.position.x<d[a+1].body.position.x && b[3].body.speed <=0.5 && b[3].body.position.y >= 550  && divi[a]=="filled" && b[3].visibility == "true"){
                score = score+5;
                b[3].visibility = "false";
                divi[a] = "filled";
            }
        }
    }
}

function myFunction4(){
    for(var a = 0;a<=11;a++){
        if(b[4]){
            if(b[4].body.position.x>d[a].body.position.x && b[4].body.position.x<d[a+1].body.position.x && b[4].body.speed <=0.5 && b[4].body.position.y >= 550  && divi[a]=="free" && b[4].visibility == "true"){
                score = score+10;
                b[4].visibility = "false";
                divi[a] = "filled";
            }
            else if(b[4].body.position.x>d[a].body.position.x && b[4].body.position.x<d[a+1].body.position.x && b[4].body.speed <=0.5 && b[4].body.position.y >= 550  && divi[a]=="filled" && b[4].visibility == "true"){
                score = score+5;
                b[4].visibility = "false";
                divi[a] = "filled";
            }
        }
    }
}

function myFunction5(){
    for(var a = 0;a<=11;a++){
        if(b[5]){
            if(b[5].body.position.x>d[a].body.position.x && b[5].body.position.x<d[a+1].body.position.x && b[5].body.speed <=0.5 && b[5].body.position.y >= 550  && divi[a]=="free" && b[5].visibility == "true"){
                score = score+10;
                b[5].visibility = "false";
                divi[a] = "filled";
            }
            else if(b[5].body.position.x>d[a].body.position.x && b[5].body.position.x<d[a+1].body.position.x && b[5].body.speed <=0.5 && b[5].body.position.y >= 550  && divi[a]=="filled" && b[5].visibility == "true"){
                score = score+5;
                b[5].visibility = "false";
                divi[a] = "filled";
            }
        }
    }
}

function myFunction6(){
    for(var a = 0;a<=11;a++){
        if(b[6]){
            if(b[6].body.position.x>d[a].body.position.x && b[6].body.position.x<d[a+1].body.position.x && b[6].body.speed <=0.5 && b[6].body.position.y >= 550  && divi[a]=="free" && b[6].visibility == "true"){
                score = score+10;
                b[6].visibility = "false";
                divi[a] = "filled";
            }
            else if(b[6].body.position.x>d[a].body.position.x && b[6].body.position.x<d[a+1].body.position.x && b[6].body.speed <=0.5 && b[6].body.position.y >= 550  && divi[a]=="filled" && b[6].visibility == "true"){
                score = score+5;
                b[6].visibility = "false";
                divi[a] = "filled";
            }
        }
    }
}

function myFunction7(){
    for(var a = 0;a<=11;a++){
        if(b[7]){
            if(b[7].body.position.x>d[a].body.position.x && b[7].body.position.x<d[a+1].body.position.x && b[7].body.speed <=0.5 && b[7].body.position.y >= 550  && divi[a]=="free" && b[7].visibility == "true"){
                score = score+10;
                b[7].visibility = "false";
                divi[a] = "filled";
            }
            else if(b[7].body.position.x>d[a].body.position.x && b[7].body.position.x<d[a+1].body.position.x && b[7].body.speed <=0.5 && b[7].body.position.y >= 550  && divi[a]=="filled" && b[7].visibility == "true"){
                score = score+5;
                b[7].visibility = "false";
                divi[a] = "filled";
            }
        }
    }
}

function myFunction8(){
    for(var a = 0;a<=11;a++){
		if(b[8]){
            if(b[8].body.position.x>d[a].body.position.x && b[8].body.position.x<d[a+1].body.position.x && b[8].body.speed <=0.5 && b[8].body.position.y >= 550  && divi[a]=="free" && b[8].visibility == "true"){
                score = score+10;
                b[8].visibility = "false";
                divi[a] = "filled";
            }
            else if(b[8].body.position.x>d[a].body.position.x && b[8].body.position.x<d[a+1].body.position.x && b[8].body.speed <=0.5 && b[8].body.position.y >= 550  && divi[a]=="filled" && b[8].visibility == "true"){
                score = score+5;
                b[8].visibility = "false";
                divi[a] = "filled";
            }
        }
    }
}

function myFunction9(){
    for(var a = 0;a<=11;a++){
		if(b[9]){
            if(b[9].body.position.x>d[a].body.position.x && b[9].body.position.x<d[a+1].body.position.x && b[9].body.speed <=0.5 && b[9].body.position.y >= 550  && divi[a]=="free" && b[9].visibility == "true"){
                score = score+10;
                b[9].visibility = "false";
                divi[a] = "filled";
            }
            else if(b[9].body.position.x>d[a].body.position.x && b[9].body.position.x<d[a+1].body.position.x && b[9].body.speed <=0.5 && b[9].body.position.y >= 550  && divi[a]=="filled" && b[9].visibility == "true"){
                score = score+5;
                b[9].visibility = "false";
                divi[a] = "filled";
            }
        }
    }
}