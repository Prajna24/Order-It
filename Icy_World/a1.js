function placeOrder(){
    document.getElementById("order summary").style.display="block";

    Uname=document.getElementById("txtName");
    mobile=document.getElementById("txtmobile");
    cone=document.getElementById("optcone");
    cup=document.getElementById("optcup");
    brownie=document.getElementById("optbrownie");
    hotChocolateBomb=document.getElementById("optchoco");
    redvelvet=document.getElementById("optred");
    blackForest=document.getElementById("optblack");

    fl1=document.getElementById("f1");
    fl2=document.getElementById("f2");
    fl3=document.getElementById("f3");
    fl4=document.getElementById("f4");
    fl5=document.getElementById("f5");
    fl6=document.getElementById("f6");
    fl7=document.getElementById("f7");

    to1=document.getElementById("t1");
    to2=document.getElementById("t2");
    to3=document.getElementById("t3");
    to4=document.getElementById("t4");
    to5=document.getElementById("t5");
    to6=document.getElementById("t6");

    flc1=document.getElementById("fc1");
    flc2=document.getElementById("fc2");
    flc3=document.getElementById("fc3");
    flc4=document.getElementById("fc4");
    flc5=document.getElementById("fc5");
    flc6=document.getElementById("fc6");
    flc7=document.getElementById("fc7");

    top1=document.getElementById("tp1");
    top2=document.getElementById("tp2");
    top3=document.getElementById("tp3");
    top4=document.getElementById("tp4");
    top5=document.getElementById("tp5");
    top6=document.getElementById("tp6");

    var mcost=0;
    var acost=0;
    var mname=" ";
    var aname=" ";
    if(cone.checked){
        mname += "Cone :"+"<br>";
        if(fl1.checked){
            mcost+=75;
            mname+=fl1.value + "&nbsp;" + "-" + "&nbsp;" ;
        }
        if(fl2.checked){
            mcost+=95;
            mname+=fl2.value + "&nbsp;" + "-" + "&nbsp;" ;
        }
        if(fl3.checked){
            mcost+=105;
            mname+=fl3.value + "&nbsp;" + "-" + "&nbsp;" ;
        }
        if(fl4.checked){
            mcost+=120;
            mname+=fl4.value + "&nbsp;" + "-" + "&nbsp;" ;
        }
        if(fl5.checked){
            mcost+=115;
            mname+=fl5.value + "&nbsp;" + "-" + "&nbsp;" ;
        }
        if(fl6.checked){
            mcost+=120;
            mname+=fl6.value + "&nbsp;" + "-" + "&nbsp;" ;
        }
        if(fl7.checked){
            mcost+=90;
            mname+=fl7.value + "&nbsp;" + "-" + "&nbsp;" ;
        }
        if(to1.checked){
            mcost+=25;
            mname+=to1.value + "<br>";
        }
        if(to2.checked){
            mcost+=25;
            mname+=to2.value + "<br>";
        }
        if(to3.checked){
            mcost+=25;
            mname+=to3.value + "<br>";
        }
        if(to4.checked){
            mcost+=20;
            mname+=to4.value + "<br>";
        }
        if(to5.checked){
            mcost+=20;
            mname+=to5.value + "<br>";
        }
        if(to6.checked){
            mcost+=25;
            mname+=to6.value + "<br>";
        }
    }

    if(cup.checked){
        mname += "Cup :"+"<br>";
        if(flc1.checked){
            mcost+=65;
            mname+=flc1.value + "&nbsp;" + "-" + "&nbsp;" ;
        }
        if(flc2.checked){
            mcost+=75;
            mname+=flc2.value + "&nbsp;" + "-" + "&nbsp;" ;
        }
        if(flc3.checked){
            mcost+=90;
            mname+=flc3.value + "&nbsp;" + "-" + "&nbsp;" ;
        }
        if(flc4.checked){
            mcost+=100;
            mname+=flc4.value + "&nbsp;" + "-" + "&nbsp;" ;
        }
        if(flc5.checked){
            mcost+=95;
            mname+=flc5.value + "&nbsp;" + "-" + "&nbsp;" ;
        }
        if(flc6.checked){
            mcost+=100;
            mname+=flc6.value + "&nbsp;" + "-" + "&nbsp;" ;
        }
        if(flc7.checked){
            mcost+=85;
            mname+=flc7.value + "&nbsp;" + "-" + "&nbsp;" ;
        }
        if(top1.checked){
            mcost+=25;
            mname+=top1.value + "<br>";
        }
        if(top2.checked){
            mcost+=25;
            mname+=top2.value + "<br>";
        }
        if(top3.checked){
            mcost+=25;
            mname+=top3.value + "<br>";
        }
        if(top4.checked){
            mcost+=20;
            mname+=top4.value + "<br>";
        }
        if(top5.checked){
            mcost+=20;
            mname+=top5.value + "<br>";
        }
        if(top6.checked){
            mcost+=25;
            mname+=top6.value + "<br>";
        }
    }
    if(brownie.checked){
        mcost+=125;
        mname+=brownie.value + "<br>";
    }
    if(hotChocolateBomb.checked){
        mcost+=115;
        mname+=hotChocolateBomb.value + "<br>";
    }
    if(redvelvet.checked){
        acost+=65;
        mcost+=acost;
        aname+=redvelvet.value + "<br>";
    }
    if(blackForest.checked){
        acost+=60;
        mcost+=acost;
        aname+=blackForest.value + "<br>";
    }
    document.getElementById("lblName").innerHTML=Uname.value
    document.getElementById("lblMobile").innerHTML=mobile.value;
    document.getElementById("lblDessert").innerHTML=mname;
    document.getElementById("lbladd").innerHTML=aname;
    document.getElementById("lblAmount").innerHTML=mcost; 
}