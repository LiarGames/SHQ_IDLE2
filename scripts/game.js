<<<<<<< HEAD
const canavs = document.getElementById('canvas');
const ctx = document.getElementById('canvas').getContext('2d');
const FPS = 60;
let data={
    id : 'err',
    pw : 'err',
    job : 0,
    lv : 1,
    exp : 0,
    don : 1,
    mon : 0,
    itm1 : 0,
    itm2 : 0,
    itm3 : 0,
    itm4 : 0,
    itm5 : 0,
    itm6 : 0,
    itm7 : 0,
    itm8 : 0,
    itm9 : 0,
    chu1 : [0,0,0,0,0,0],
    jam1 : [0,0,0,0,0,0],
    chu2 : [0,0,0,0,0,0],
    jam2 : [0,0,0,0,0,0],
    chu3 : [0,0,0,0,0,0],
    jam3 : [0,0,0,0,0,0],
    chu4 : [0,0,0,0,0,0],
    chu5 : [0,0,0,0,0,0],
    chu6 : [0,0,0,0,0,0],
    mop : 0,
    opr : 100,
    hpr : 100,
    gol : 0,
    ob1 : 0,
    ob2 : 0,
    ob3 : 0,
    ob4 : 0,
    ob5 : 0,
    sk1 : 0,
    sk2 : 0,
    sk3 : 0,
    sk4 : 0,
    sk5 : 0,
    sk6 : 0,
    sk7 : 0,
    sk8 : 0
};

let stat = {
    atk : 0,
    atks : 0,
    atkp : 0,
    dep : 0,
    crp : 0,
    crd : 0,
    crds : 0,
    crdp : 0,
    fid : 0,
    fidp : [],
    fidt : '',
    spd : 0,
    spds : 0,
    spdp : 0,
    mod : 0,
    mods : 0,
    modp : 0,
    itd : 0,
    itds : 0,
    itdp : 0,
    ats : 0,
    atss : 0,
    atsp : 0,
    power : 0
};

let jobname='';
let menu=1;

function dataload(id)
{
    data = localLoad(id);
    //구버전 데이터 호환 코드가 들어갈 자리
}

canavs.onclick = function(event)
{
    let mouse_x = event.clientX - ctx.canvas.offsetLeft;
    let mouse_y = event.clientY - ctx.canvas.offsetTop;
    if(0<=mouse_x && mouse_x<=128)
    {
        if(192<=mouse_y && mouse_y<=264)
            menu=1;
        else if(264<=mouse_y && mouse_y<=336)
            menu=2;
        else if(336<=mouse_y && mouse_y<=408)
        {
            if(data.lv>=100)
                menu=3;
            else
                alert('레벨 100 부터 이용가능합니다.');
        }
        else if(408<=mouse_y && mouse_y<=480)
        {
            if(data.lv>=250)
                menu=4;
            else
                alert('레벨 250 부터 이용가능합니다.');
        }
        else if(480<=mouse_y && mouse_y<=552)
        {
            if(data.lv>=500)
                menu=5;
            else
                alert('레벨 500 부터 이용가능합니다.');
        }
        else if(552<=mouse_y && mouse_y<=624)
        {
            if(data.lv>=500)
                menu=6;
            else
                alert('레벨 500 부터 이용가능합니다.');
        }
        else if(624<=mouse_y && mouse_y<=696)
        {
            if(data.lv>=1000)
                menu=7;
            else
                alert('레벨 1000 부터 이용가능합니다.');
        }
    }
    if(0<=mouse_y && mouse_y<=60)
    {
        if(0<=mouse_x && mouse_x<=80)
        {
            if(data.don==1)
                alert('가장 쉬운 난이도입니다.');
            else
            {
                data.don-=1;
                diffcal();
            }
        }
        if(200<=mouse_x && mouse_x<=280)
        {
            if(data.don==60)
                alert('가장 어려운 난이도입니다.');
            else
            {
                data.don+=1;
                diffcal();
            }
        }
    }
    if(0<=mouse_x && mouse_x<=160)
        if(120<=mouse_y && mouse_y<=192)
        {
            if(bgonoff==1)
                bgonoff=0;
            else   
                bgonoff=1;
        }
    
    if(menu==2)
    {
        if(150<=mouse_x && mouse_x<=350)
        {
            if(644<=mouse_y && mouse_y<=664)
            {
                if(data.itm1<=24)
                {
                    if(data.gol>=20*Math.pow(2,data.itm1))
                    {
                        data.gol-=20*Math.pow(2,data.itm1);
                        data.itm1+=1;
                        statcal();
                        localSave(id,data);
                    }
                    else
                        alert('골드가 부족합니다.');
                }
            }
            if(668<=mouse_y && mouse_y<=688)
            {
                if(data.ob1>=1)
                {
                    data.ob1-=1;
                    let optm=0;
                    if(data.itm1<=4) optm=1;
                    else if(data.itm1<=9) optm=2;
                    else if(data.itm1<=14) optm=3;
                    else if(data.itm1<=19) optm=4;
                    else if(data.itm1<=24) optm=5;
                    else if(data.itm1==25) optm=6;
                    for(let i=0; i<optm; i++)
                        data.chu1[i]=randrare(data.opr/100)*10+randint(3)+1;
                    statcal();
                    localSave(id,data);
                    data.opr++;
                    if(data.job==5) data.opr+=0.1;
                }
            }
            if(692<=mouse_y && mouse_y<=712)
            {
                if(data.ob2>=1)
                {
                    data.ob2-=1;
                    let optm=0;
                    if(data.itm1<=4) optm=1;
                    else if(data.itm1<=9) optm=2;
                    else if(data.itm1<=14) optm=3;
                    else if(data.itm1<=19) optm=4;
                    else if(data.itm1<=24) optm=5;
                    else if(data.itm1==25) optm=6;
                    for(let i=0; i<optm; i++)
                        data.jam1[i]=randrare(data.opr/100)*10+randint(3)+1;
                    statcal();
                    localSave(id,data);
                    data.opr++;
                    if(data.job==5) data.opr+=0.1;
                }
            }
        }
        if(150+288<=mouse_x && mouse_x<=350+288)
        {
            if(644<=mouse_y && mouse_y<=664)
            {
                if(data.itm2<=24)
                {
                    if(data.gol>=20*Math.pow(2,data.itm2))
                    {
                        data.gol-=20*Math.pow(2,data.itm2);
                        data.itm2+=1;
                        statcal();
                        localSave(id,data);
                    }
                    else
                        alert('골드가 부족합니다.');
                }
            }
            if(668<=mouse_y && mouse_y<=688)
            {
                if(data.ob1>=1)
                {
                    data.ob1-=1;
                    let optm=0;
                    if(data.itm2<=4) optm=1;
                    else if(data.itm2<=9) optm=2;
                    else if(data.itm2<=14) optm=3;
                    else if(data.itm2<=19) optm=4;
                    else if(data.itm2<=24) optm=5;
                    else if(data.itm2==25) optm=6;
                    for(let i=0; i<optm; i++)
                        data.chu2[i]=randrare(data.opr/100)*10+2;
                    statcal();
                    localSave(id,data);
                    data.opr++;
                    if(data.job==5) data.opr+=0.1;
                }
            }
            if(692<=mouse_y && mouse_y<=712)
            {
                if(data.ob2>=1)
                {
                    data.ob2-=1;
                    let optm=0;
                    if(data.itm2<=4) optm=1;
                    else if(data.itm2<=9) optm=2;
                    else if(data.itm2<=14) optm=3;
                    else if(data.itm2<=19) optm=4;
                    else if(data.itm2<=24) optm=5;
                    else if(data.itm2==25) optm=6;
                    for(let i=0; i<optm; i++)
                        data.jam2[i]=randrare(data.opr/100)*10+2;
                    statcal();
                    localSave(id,data);
                    data.opr++;
                    if(data.job==5) data.opr+=0.1;
                }
            }
        }
        if(150+576<=mouse_x && mouse_x<=350+576)
        {
            if(644<=mouse_y && mouse_y<=664)
            {
                if(data.itm3<=24)
                {
                    if(data.gol>=20*Math.pow(2,data.itm3))
                    {
                        data.gol-=20*Math.pow(2,data.itm3);
                        data.itm3+=1;
                        statcal();
                        localSave(id,data);
                    }
                    else
                        alert('골드가 부족합니다.');
                }
            }
            if(668<=mouse_y && mouse_y<=688)
            {
                if(data.ob1>=1)
                {
                    data.ob1-=1;
                    let optm=0;
                    if(data.itm3<=4) optm=1;
                    else if(data.itm3<=9) optm=2;
                    else if(data.itm3<=14) optm=3;
                    else if(data.itm3<=19) optm=4;
                    else if(data.itm3<=24) optm=5;
                    else if(data.itm3==25) optm=6;
                    for(let i=0; i<optm; i++)
                        data.chu3[i]=randrare(data.opr/100)*10+randint(2)+1;
                    statcal();
                    localSave(id,data);
                    data.opr++;
                    if(data.job==5) data.opr+=0.1;
                }
            }
            if(692<=mouse_y && mouse_y<=712)
            {
                if(data.ob2>=1)
                {
                    data.ob2-=1;
                    let optm=0;
                    if(data.itm3<=4) optm=1;
                    else if(data.itm3<=9) optm=2;
                    else if(data.itm3<=14) optm=3;
                    else if(data.itm3<=19) optm=4;
                    else if(data.itm3<=24) optm=5;
                    else if(data.itm3==25) optm=6;
                    for(let i=0; i<optm; i++)
                        data.jam3[i]=randrare(data.opr/100)*10+randint(2)+1;
                    statcal();
                    localSave(id,data);
                    data.opr++;
                    if(data.job==5) data.opr+=0.1;
                }
            }
        }
    }
    if(menu==3)
    {
        if(330<=mouse_y && mouse_y<=375)
        {
            if(241<=mouse_x && mouse_x<=311 && data.itm4<10)
            {
                if(data.gol>=100000)
                {
                    if(randint(10)>=data.itm4)
                    {
                        data.itm4++;
                        statcal();
                        localSave(id,data);
                    }
                    else
                    {
                        data.itm4--;
                        statcal();
                        localSave(id,data);
                    }
                    data.gol-=100000;
                }
                else
                    alert('골드가 부족합니다.');
            }
            if(241+288<=mouse_x && mouse_x<=311+288 && data.itm5<10)
            {
                if(data.gol>=100000)
                {
                    if(randint(10)>=data.itm5)
                    {
                        data.itm5++;
                        statcal();
                        localSave(id,data);
                    }
                    else
                    {
                        data.itm5--;
                        statcal();
                        localSave(id,data);
                    }
                    data.gol-=100000;
                }
                else
                    alert('골드가 부족합니다.');
            }
            if(241+576<=mouse_x && mouse_x<=311+576 && data.itm6<10)
            {
                if(data.gol>=100000)
                {
                    if(randint(10)>=data.itm6)
                    {
                        data.itm6++;
                        statcal();
                        localSave(id,data);
                    }
                    else
                    {
                        data.itm6--;
                        statcal();
                        localSave(id,data);
                    }
                    data.gol-=100000;
                }
                else
                    alert('골드가 부족합니다.');
            }
        }
        if(330+264<=mouse_y && mouse_y<=375+264)
        {
            if(241<=mouse_x && mouse_x<=311 && data.itm7<10)
            {
                if(data.gol>=10000000*(data.itm7+1))
                {
                    data.gol-=10000000*(data.itm7+1);
                    if(randint(100)>=data.itm7*8)
                        data.itm7++;
                    else
                        data.itm7--;
                    statcal();
                    localSave(id,data);
                }
                else
                    alert('골드가 부족합니다');
            }
            if(241+288<=mouse_x && mouse_x<=311+288 && data.itm8<10)
            {
                if(data.gol>=10000000*(data.itm8+1))
                {
                    data.gol-=10000000*(data.itm8+1);
                    if(randint(100)>=data.itm8*8)
                        data.itm8++;
                    else
                        data.itm8--;
                    statcal();
                    localSave(id,data);
                }
                else
                    alert('골드가 부족합니다');
            }
            if(241+576<=mouse_x && mouse_x<=311+576 && data.itm9<10)
            {
                if(data.gol>=10000000*(data.itm9+1))
                {
                    data.gol-=10000000*(data.itm9+1);
                    if(randint(100)>=data.itm9*8)
                        data.itm9++;
                    else
                        data.itm9--;
                    statcal();
                    localSave(id,data);
                }
                else
                    alert('골드가 부족합니다');
            }
        }
    }
    if(menu==4)
    {
        if(450<=mouse_y && mouse_y <=495)
        {
            if(241<=mouse_x && mouse_x<=311)
            {
                if(data.ob1>=100 && data.ob3>=10)
                {
                    data.sk1=216000;
                    data.ob1-=100;
                    data.ob3-=10;
                    statcal();
                    localSave(id,data);
                }
                else
                    alert('재료가 부족합니다.');
            }
            if(241+288<=mouse_x && mouse_x<=311+288)
            {
                if(data.ob1>=300 && data.ob3>=100)
                {
                    data.sk2=36000;
                    data.ob1-=300;
                    data.ob3-=100;
                    statcal();
                    localSave(id,data);
                }
                else
                    alert('재료가 부족합니다.');
            }
            if(241+576<=mouse_x && mouse_x<=311+576)
            {
                if(data.ob1>=6666 && data.ob2>=2222 && data.ob3>=1000)
                {
                    data.sk3=1;
                    data.ob1-=6666;
                    data.ob2-=2222;
                    data.ob3-=1000;
                    statcal();
                    localSave(id,data);
                }
                else
                    alert('재료가 부족합니다.');
            }
        }
    }
    if(menu==5)
    {
        if(390<=mouse_y && mouse_y<=435)
        {
            if(241<=mouse_x && mouse_x<=311)
            {
                if(data.ob1>=100 && data.ob3>=10)
                {
                    data.ob1-=100;
                    data.ob3-=10;
                    data.gol+=3000000;
                    localSave(id,data);
                }
                else
                    alert('재료가 부족합니다.');
            }
            if(241+288<=mouse_x && mouse_x<=311+288)
            {
                if(data.ob2>=100 && data.ob3>=10)
                {
                    data.ob2-=100;
                    data.ob3-=10;
                    data.gol+=10000000;
                    localSave(id,data);
                }
                else
                    alert('재료가 부족합니다.');
            }
            if(241+576<=mouse_x && mouse_x<=311+576)
            {
                if(data.ob1>=100 && data.ob2>=100 && data.ob3>=10 && data.gol>=20000000)
                {
                    data.ob1-=100
                    data.ob2-=100;
                    data.ob3-=10;
                    data.gol-=20000000;
                    data.ob4++;
                    localSave(id,data);
                }
                else
                    alert('재료가 부족합니다.');
            }
        }
        if(data.sk6>0 && 241<=mouse_x && mouse_x<=311 && 654<=mouse_y && mouse_y<=699)
        {
            if(data.ob1>=100)
            {
                data.ob1-=100;
                data.opr+=data.sk6*10;
                calrarep(data.opr/100);
            }
            else
                alert('재료가 부족합니다.');
        }
    }
    if(menu==6)
    {
        if(data.sk4==0 && 195<=mouse_x && mouse_x<=365 && 415<=mouse_y && mouse_y<=445)
        {
            if(data.ob4>=1)
            {
                switch(data.job)
                {
                    case 1: data.sk4=10; data.sk5=1; data.sk6=1; data.sk7=1; data.sk8=1; break;
                    case 2: data.sk4=1; data.sk5=10; data.sk6=1; data.sk7=1; data.sk8=1; break;
                    case 3: data.sk4=1; data.sk5=1; data.sk6=10; data.sk7=1; data.sk8=1; break;
                    case 4: data.sk4=1; data.sk5=1; data.sk6=1; data.sk7=10; data.sk8=1; break;
                    case 5: data.sk4=1; data.sk5=1; data.sk6=1; data.sk7=1; data.sk8=10; break;
                }
                data.ob4--;
            }
            else
                alert('재료가 부족합니다.');
        }
        if(data.sk4!=0)
        {
            if(1029<=mouse_x && mouse_x<=1119)
            {
                if(283<=mouse_y && mouse_y<=303 && data.sk4<10)
                {
                    if(data.ob4>=data.sk4)
                    {
                        data.ob4-=data.sk4;
                        data.sk4++;
                        localSave(id,data);
                        statcal();
                    }
                    else
                        alert('재료가 부족합니다.');
                }
                if(323<=mouse_y && mouse_y<=343 && data.sk5<10)
                {
                    if(data.ob4>=data.sk5)
                    {
                        data.ob4-=data.sk5;
                        data.sk5++;
                        localSave(id,data);
                        statcal();
                    }
                    else
                        alert('재료가 부족합니다.');
                }
                if(363<=mouse_y && mouse_y<=383 && data.sk6<10)
                {
                    if(data.ob4>=data.sk6)
                    {
                        data.ob4-=data.sk6;
                        data.sk6++;
                        localSave(id,data);
                        statcal();
                    }
                    else
                        alert('재료가 부족합니다.');
                }
                if(403<=mouse_y && mouse_y<=423 && data.sk7<10)
                {
                    if(data.ob4>=data.sk7)
                    {
                        data.ob4-=data.sk7;
                        data.sk7++;
                        localSave(id,data);
                        statcal();
                    }
                    else
                        alert('재료가 부족합니다.');
                }
                if(443<=mouse_y && mouse_y<=463 && data.sk8<10)
                {
                    if(data.ob4>=data.sk8)
                    {
                        data.ob4-=data.sk8;
                        data.sk8++;
                        localSave(id,data);
                        statcal();
                    }
                    else
                        alert('재료가 부족합니다.');
                }
            }
        }
    }
    if(menu==7)
    {
        if(480<=mouse_y && mouse_y<=525)
        {
            if(181<=mouse_x && mouse_x<=371)
            {
                if(data.gol>=100000000 && data.ob3>=10 && data.ob5>=1)
                {
                    for(let i=0; i<6; i++)
                        data.chu4[i] = randrare(data.hpr/100);
                    data.gol-=100000000;
                    data.ob3-=10;
                    data.ob5-=1;
                    data.hpr+=10;
                    statcal();
                    localSave(id,data)
                }
                else
                    alert('재료가 부족합니다.');
            }
            if(181+288<=mouse_x && mouse_x<=371+288)
            {
                if(data.gol>=100000000 && data.ob3>=10 && data.ob5>=1)
                {
                    for(let i=0; i<6; i++)
                        data.chu5[i] = randrare(data.hpr/100);
                    data.gol-=100000000;
                    data.ob3-=10;
                    data.ob5-=1;
                    data.hpr+=10;
                    statcal();
                    localSave(id,data)
                }
                else
                    alert('재료가 부족합니다.');
            }
            if(181+576<=mouse_x && mouse_x<=371+576)
            {
                if(data.gol>=100000000 && data.ob3>=10 && data.ob5>=1)
                {
                    for(let i=0; i<6; i++)
                        data.chu6[i] = randrare(data.hpr/100);
                    data.gol-=100000000;
                    data.ob3-=10;
                    data.ob5-=1;
                    data.hpr+=10;
                    statcal();
                    localSave(id,data)
                }
                else
                    alert('재료가 부족합니다.');
            }
        }
    }
};

let col=1;
let ani=0;
let bgonoff=0;

class vfx{
    constructor(x,y,type){
        this.x=x;
        this.y=y;
        this.type=type;
        this.t=6;
    }
}
let vfxs=[]


function step()
{
    ani+=0.2;
    switch(data.job)
    {
        case 1: jobname='군인'; break;
        case 2: jobname='전사'; break;
        case 3: jobname='궁수'; break;
        case 4: jobname='도적'; break;
        case 5: jobname='마법사'; break;
    }
    col+=1;

    let dmg=0;
    if(col%Math.floor(6000/stat.ats)==0)
    {
        dmg=stat.atk;
        if(randint(100)<stat.crp)
            dmg*=stat.crd/100;
        dmg*=(stat.fid+100)/100;
        dmg*=(100-endd+stat.dep)/100;
        enhpn-=dmg;

        vfxs.push(new vfx(672,64-16+64,randint(2)+1));

        if(enhpn<=0)
        {
            data.gol+=Math.floor((enmo+data.sk7*10)*stat.mod/100);
            data.exp+=enxp*(1+data.sk8*2/100);
            diffcal();
            data.mop++;

            if(randint(100)<3*stat.itd/100)
                data.ob1++;
            if(randint(100)<stat.itd/100)
                data.ob2++;
            if(randint(1000)<5*stat.itd/100)
                if(data.don>=31)
                    data.ob3++;
            if(randint(10000)<5*stat.itd/100)
                if(data.don>=51)
                    data.ob5++;
            while(data.exp>=90+data.lv*9.99 + data.lv*data.lv*0.01)
            {
                data.exp-=90+data.lv*9.99 + data.lv*data.lv*0.01;
                data.lv++;
                statcal();
            }
            localSave(id,data);
        }
    }

    vfxs.forEach((obj,index)=>{
        obj.t--;
        if(obj.t<=0)
        vfxs.splice(index,1);
    });

    if(data.sk1>0)
        data.sk1--;
    if(data.sk1<0)
        data.sk1=0;
    if(data.sk2>0)
        data.sk2--;
    if(data.sk2<0)
        data.sk2=0;
}

function draw()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.font='36px 궁서체';

    if(bgonoff===1)
    {
        if(data.don<=10)
            for(let i=0; i<9; i++)
                ctx.drawImage(spr_bg1,160*i-Math.floor(ani)%160,0);
        else if(data.don<=20)
            for(let i=0; i<9; i++)
                ctx.drawImage(spr_bg2,160*i-Math.floor(ani)%160,0);
        else if(data.don<=30)
            for(let i=0; i<9; i++)
                ctx.drawImage(spr_bg3,160*i-Math.floor(ani)%160,0);
        else if(data.don<=40)
            for(let i=0; i<9; i++)
                ctx.drawImage(spr_bg4,160*i-Math.floor(ani)%160,0);
        else if(data.don<=50)
            for(let i=0; i<9; i++)
                ctx.drawImage(spr_bg5,160*i-Math.floor(ani)%160,0);
        else if(data.don<=60)
            for(let i=0; i<9; i++)
                ctx.drawImage(spr_bg6,160*i-Math.floor(ani)%160,0);
        ctx.fillText('배경 : ON',4,180);
    }
    else
        ctx.fillText('배경 : OFF',4,180);

    ctx.drawImage(spr_player,544,128-16);
    if(data.don<=10)
    {
        ctx.drawImage(spr_enemy1,672,64-16);
        ctx.strokeRect(672,64-16-12+64,64,10);
        ctx.fillRect(672,64-16-12+64,64*(enhpn/enhp),10);
    }
    else if(data.don<=20)
    {
        ctx.drawImage(spr_enemy2,672,64-16);
        ctx.strokeRect(672,64-16-10+54,64,10);
        ctx.fillRect(672,64-16-10+54,64*(enhpn/enhp),10);
    }
    else if(data.don<=30)
    {
        ctx.drawImage(spr_enemy3,672,64-16);
        ctx.strokeRect(672,64-16-10+44,64,10);
        ctx.fillRect(672,64-16-10+44,64*(enhpn/enhp),10);
    }
    else if(data.don<=40)
    {
        ctx.drawImage(spr_enemy4,672,64-16);
        ctx.strokeRect(672,64-16-10+34,64,10);
        ctx.fillRect(672,64-16-10+34,64*(enhpn/enhp),10);
    }
    else if(data.don<=50)
    {
        ctx.drawImage(spr_enemy5,672,64-16);
        ctx.strokeRect(672,64-16-10+24,64,10);
        ctx.fillRect(672,64-16-10+24,64*(enhpn/enhp),10);
    }
    else if(data.don<=60)
    {
        ctx.drawImage(spr_enemy6,672,64-16);
        ctx.strokeRect(672,64-16-10+10,64,10);
        ctx.fillRect(672,64-16-10+10,64*(enhpn/enhp),10);
    }

    vfxs.forEach((obj,index)=>{
        switch(obj.type)
        {
            case 1: ctx.drawImage(spr_vfx1, obj.x, obj.y); break;
            case 2: ctx.drawImage(spr_vfx2, obj.x, obj.y); break;
        }
    });

    ctx.strokeRect(0,192,1280,530);
    ctx.strokeRect(1,191,1278,528);
    ctx.strokeRect(0,192,128,530);
    ctx.strokeRect(1,191,127,530);

    ctx.strokeRect(4,196,120,64);
    ctx.strokeRect(4,268,120,64);

    ctx.font = '24px 궁서체';
    ctx.fillText('캐릭터',28,196+40);
    ctx.fillText('아이템',28,268+40);
    ctx.fillText('특수장비',15,340+40);
    ctx.fillText('연금술',28,484+40);
    ctx.fillText('2차전직',25,556+40);
    ctx.fillText('유물',40,628+40);
    ctx.font = '18px 궁서체';
    ctx.fillText('환생의 불꽃',12,412+40);
    ctx.font = '36px 궁서체';
    
    ctx.strokeRect(4,340,120,64);
    ctx.strokeRect(4,412,120,64);
    ctx.strokeRect(4,484,120,64);
    ctx.strokeRect(4,556,120,64);
    ctx.strokeRect(4,628,120,64);

    let diff='';
    if(data.don<=10) diff='쉬움'+(data.don);
    else if(data.don<=20) diff='보통'+(data.don-10);
    else if(data.don<=30) diff='어려움'+(data.don-20);
    else if(data.don<=40) diff='지옥'+(data.don-30);
    else if(data.don<=50) diff='파멸'+(data.don-40);
    else if(data.don<=60) diff='종말'+(data.don-50);
    diff ='◀  ' + diff + '  ▶';
    ctx.fillText(diff,4,40);

    ctx.font = '16px 궁서체';
    ctx.fillText('적 체력 : '+enhp,1150,24);
    ctx.fillText('적 방어력 : '+endd,1150,44);
    ctx.fillText('적 경험치 : '+Math.floor((enxp*(1+data.sk8*2/100))),1150,64);
    ctx.fillText('적 골드 : '+(enmo+data.sk7*10),1150,84);

    if(menu==1)
    {
        ctx.font = '24px 궁서체';
        ctx.fillText(data.id + '(레벨' + data.lv + ' ' + jobname + ')',130,220);
        ctx.fillText('경험치 : ' + Math.floor(data.exp) + '/' + Math.floor(90+data.lv*9.99+data.lv*data.lv*0.01),140,250);
        ctx.fillText('공격력 : ' + stat.atk + ' ( ' + stat.atks + ' + ' + stat.atkp + '% )',140,280);
        ctx.fillText('방어력 관통 : ' + stat.dep,140,310);
        ctx.fillText('치명타 확률 : ' + stat.crp + '%',140,340);
        ctx.fillText('치명타 피해배율 : ' + stat.crd + '% ( ' + stat.crds + ' + ' + stat.crdp + '% )',140,370);
        ctx.fillText('최종 데미지 : ' + stat.fid + '% (' + stat.fidt + ')',140,400);
        ctx.fillText('이동속도 : ' + stat.spd + ' ( ' + stat.spds + ' + ' + stat.spdp + '% )',140,430);
        ctx.fillText('공격속도 : ' + stat.ats + ' ( ' + stat.atss + ' + ' + stat.atsp + '% )',140,460);
        ctx.fillText('골드 획득량 : ' + stat.mod + '% ( ' + stat.mods + ' + ' + stat.modp + '% )',140,490);
        ctx.fillText('아이템 획득량 : ' + stat.itd + '% ( ' + stat.itds + ' + ' + stat.itdp + '% )',140,520);
        ctx.fillText('옵션 희귀도 : ' + Math.floor(data.opr) + '%',140,550);
        ctx.fillText('처치한 몬스터 : ' + data.mop,140,610);
        ctx.fillText('전투력 : ' + stat.power,140,670);
        ctx.fillText('골드 : ' + numtext(data.gol),740,250);
        ctx.fillText('카오스 오브 : ' + numtext(data.ob1),740,280);
        ctx.fillText('에디셔널 카오스 오브 : ' + numtext(data.ob2),740,310);
        ctx.fillText('불꽃 오브 : ' + numtext(data.ob3),740,340);
        ctx.fillText('코스모스 오브 : ' + numtext(data.ob4),740,370);
        ctx.fillText('신성한 오브 : ' + numtext(data.ob5),740,400);
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(4,196,120,64);
        ctx.fillStyle = "rgba(0,0,0,1)";
    }
    else if(menu==2)
    {
        ctx.font = '16px 궁서체';
        ctx.fillText('골드 : ' + numtext(data.gol),740+280,250);
        ctx.fillText('카오스 오브 : ' + numtext(data.ob1),740+280,280);
        ctx.fillText('에디셔널 카오스 오브 : ' + numtext(data.ob2),740+280,310);
        ctx.fillText('옵션 희귀도 : ' + Math.floor(data.opr) + '%',740+280,370);

        calrarep(data.opr/100);
        for(let i=0; i<6; i++)
        {
            switch(i)
            {
                case 0: ctx.fillStyle = "rgba(128,128,128,1)"; break;
                case 1: ctx.fillStyle = "rgba(34,177,76,1)"; break;
                case 2: ctx.fillStyle = "rgba(0,162,232,1)"; break;
                case 3: ctx.fillStyle = "rgba(163,73,164,1)"; break;
                case 4: ctx.fillStyle = "rgba(255,127,39,1)"; break;
                case 5: ctx.fillStyle = "rgba(0,0,0,1)"; break;
            }
            ctx.fillRect(1020,380+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
            switch(i)
            {
                case 0: ctx.fillText(rarep1+'%',1035,392+20*i); break;
                case 1: ctx.fillText(rarep2+'%',1035,392+20*i); break;
                case 2: ctx.fillText(rarep3+'%',1035,392+20*i); break;
                case 3: ctx.fillText(rarep4+'%',1035,392+20*i); break;
                case 4: ctx.fillText(rarep5+'%',1035,392+20*i); break;
                case 5: ctx.fillText(rarep6+'%',1035,392+20*i); break;
            }
        }
        let itmhead = '';
        if(data.itm1<=4)
            {itmhead='일반 '; ctx.strokeStyle="rgba(128,128,128,1)";}
        else if(data.itm1<=9)
            {itmhead='고급 '; ctx.strokeStyle="rgba(34,177,76,1)";}
        else if(data.itm1<=14)
            {itmhead='희귀 '; ctx.strokeStyle="rgba(0,162,232,1)";}
        else if(data.itm1<=19)
            {itmhead='영웅 '; ctx.strokeStyle="rgba(163,73,164,1)";}
        else if(data.itm1<=24)
            {itmhead='전설 '; ctx.strokeStyle="rgba(255,127,39,1)";}
        else if(data.itm1==25)
            {itmhead='수퍼고퀄 '; ctx.strokeStyle="rgba(0,0,0,1)";}
        ctx.strokeRect(132,196,280,520);
        ctx.strokeStyle = "rgba(0,0,0,1)";
        
        let starforce1 = '';
        let starforce2 = '';
        if(data.itm1<=15)
        {
            for(let i=0; i<data.itm1; i++)
            {
                starforce1+='★';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=data.itm1; i<15; i++)
            {
                starforce1+='☆';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=0; i<10; i++)
            {
                starforce2+='☆';
                if(i%5==4)
                    starforce2+=' ';
            }
        }
        else
        {
            for(let i=0; i<15; i++)
            {
                starforce1+='★';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=0; i<data.itm1-15; i++)
            {
                starforce2+='★';
                if(i%5==4)
                    starforce2+=' ';
            }
            for(let i=data.itm1-15; i<10; i++)
            {
                starforce2+='☆';
                if(i%5==4)
                    starforce2+=' ';
            }
        }
        ctx.fillText(starforce1,145,212);
        ctx.fillText(starforce2,190,230);

        ctx.font = '24px 궁서체';
        if(data.itm1!=25)
            ctx.fillText(itmhead + '무기 (+' + data.itm1 + ')',188,260);
        else
            ctx.fillText(itmhead + '무기 (+' + data.itm1 + ')',160,260);

        ctx.font = '16px 궁서체';    
        itmhead = '';
        if(data.itm2<=4)
            {itmhead='일반 '; ctx.strokeStyle="rgba(128,128,128,1)";}
        else if(data.itm2<=9)
            {itmhead='고급 '; ctx.strokeStyle="rgba(34,177,76,1)";}
        else if(data.itm2<=14)
            {itmhead='희귀 '; ctx.strokeStyle="rgba(0,162,232,1)";}
        else if(data.itm2<=19)
            {itmhead='영웅 '; ctx.strokeStyle="rgba(163,73,164,1)";}
        else if(data.itm2<=24)
            {itmhead='전설 '; ctx.strokeStyle="rgba(255,127,39,1)";}
        else if(data.itm2==25)
            {itmhead='수퍼고퀄 '; ctx.strokeStyle="rgba(0,0,0,1)";}
        ctx.strokeRect(132+288,196,280,520);
        ctx.strokeStyle = "rgba(0,0,0,1)";

        starforce1 = '';
        starforce2 = '';
        if(data.itm2<=15)
        {
            for(let i=0; i<data.itm2; i++)
            {
                starforce1+='★';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=data.itm2; i<15; i++)
            {
                starforce1+='☆';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=0; i<10; i++)
            {
                starforce2+='☆';
                if(i%5==4)
                    starforce2+=' ';
            }
        }
        else
        {
            for(let i=0; i<15; i++)
            {
                starforce1+='★';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=0; i<data.itm2-15; i++)
            {
                starforce2+='★';
                if(i%5==4)
                    starforce2+=' ';
            }
            for(let i=data.itm2-15; i<10; i++)
            {
                starforce2+='☆';
                if(i%5==4)
                    starforce2+=' ';
            }
        }
        ctx.fillText(starforce1,145+288,212);
        ctx.fillText(starforce2,190+288,230);

        ctx.font = '24px 궁서체';
        if(data.itm2!=25)
            ctx.fillText(itmhead + '방어구 (+' + data.itm2 + ')',176+288,260);
        else
            ctx.fillText(itmhead + '방어구 (+' + data.itm2 + ')',148+288,260);

    
        ctx.font = '16px 궁서체';    
        itmhead = '';
        if(data.itm3<=4)
            {itmhead='일반 '; ctx.strokeStyle="rgba(128,128,128,1)";}
        else if(data.itm3<=9)
            {itmhead='고급 '; ctx.strokeStyle="rgba(34,177,76,1)";}
        else if(data.itm3<=14)
            {itmhead='희귀 '; ctx.strokeStyle="rgba(0,162,232,1)";}
        else if(data.itm3<=19)
            {itmhead='영웅 '; ctx.strokeStyle="rgba(163,73,164,1)";}
        else if(data.itm3<=24)
            {itmhead='전설 '; ctx.strokeStyle="rgba(255,127,39,1)";}
        else if(data.itm3==25)
            {itmhead='수퍼고퀄 '; ctx.strokeStyle="rgba(0,0,0,1)";}
        ctx.strokeRect(132+576,196,280,520);
        ctx.strokeStyle = "rgba(0,0,0,1)";

        starforce1 = '';
        starforce2 = '';
        if(data.itm3<=15)
        {
            for(let i=0; i<data.itm3; i++)
            {
                starforce1+='★';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=data.itm3; i<15; i++)
            {
                starforce1+='☆';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=0; i<10; i++)
            {
                starforce2+='☆';
                if(i%5==4)
                    starforce2+=' ';
            }
        }
        else
        {
            for(let i=0; i<15; i++)
            {
                starforce1+='★';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=0; i<data.itm3-15; i++)
            {
                starforce2+='★';
                if(i%5==4)
                    starforce2+=' ';
            }
            for(let i=data.itm3-15; i<10; i++)
            {
                starforce2+='☆';
                if(i%5==4)
                    starforce2+=' ';
            }
        }
        ctx.fillText(starforce1,145+576,212);
        ctx.fillText(starforce2,190+576,230);

        ctx.font = '24px 궁서체';
        if(data.itm3!=25)
            ctx.fillText(itmhead + '장신구 (+' + data.itm3 + ')',176+576,260);
        else
            ctx.fillText(itmhead + '장신구 (+' + data.itm3 + ')',148+576,260);

        let itadd1 = 0;
        let itadd2 = 0;
        let itadd3 = 0;

        if(data.itm1 <=14)
            itadd1 = 100*data.itm1 + 100;
        else if(data.itm1<=19)
            itadd1 = 200*data.itm1-1300;
        else if(data.itm1<=24)
            itadd1 = 300*data.itm1-3200;
        else if(data.itm1==25)
            itadd1 = 5000;

        if(data.itm2 <=14)
            itadd2 = data.itm2 + 1;
        else if(data.itm2<=19)
            itadd2 = 2*data.itm2-13;
        else if(data.itm2<=24)
            itadd2 = 3*data.itm2-32;
        else if(data.itm2==25)
            itadd2 = 50;

        if(data.itm3 <=14)
            itadd3 = 100*data.itm3 + 100;
        else if(data.itm3<=19)
            itadd3 = 200*data.itm3-1300;
        else if(data.itm3<=24)
            itadd3 = 300*data.itm3-3200;
        else if(data.itm3==25)
            itadd3 = 5000;

        ctx.fillText('잠재옵션',140,330);
        ctx.fillText('잠재옵션',140+288,330);
        ctx.fillText('잠재옵션',140+576,330);
        ctx.fillText('에디셔널 잠재옵션',140,500);
        ctx.fillText('에디셔널 잠재옵션',140+288,500);
        ctx.fillText('에디셔널 잠재옵션',140+576,500);

        ctx.font ='16px 궁서체';
        ctx.fillText('공격력 +'+itadd1,140,290);
        ctx.fillText('방어력 관통 +'+itadd2,140+288,290);
        ctx.fillText('골드 획득량 +'+itadd3+'%p',140+576,290);

        let optmax = 0;
        if(data.itm1<=4) optmax=1;
        else if(data.itm1<=9) optmax=2;
        else if(data.itm1<=14) optmax=3;
        else if(data.itm1<=19) optmax=4;
        else if(data.itm1<=24) optmax=5;
        else if(data.itm1==25) optmax=6;
        for(let i=0; i<optmax; i++)
        {
            let ra=Math.floor(data.chu1[i]/10);
            if(ra==6) ra=10;
            let op=data.chu1[i]%10;
            let txe = '';
            switch(op)
            {
                case 1: txe='공격력 +'+ra*100; break;
                case 2: txe='치명타 확률 +' + (ra*10) + '%p'; break;
                case 3: txe='치명타 피해배율 +' + (ra*10) + '%p'; break;
            }
            ctx.fillText(txe,165,350+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle="rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle="rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle="rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle="rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle="rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle="rgba(0,0,0,1)"; break;                
            }
            ctx.fillRect(150,338+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        for(let i=0; i<optmax; i++)
        {
            let ra=Math.floor(data.jam1[i]/10);
            if(ra==6) ra=10;
            let op=data.jam1[i]%10;
            let txe = '';
            switch(op)
            {
                case 1: txe='공격력 +'+(ra*2) + '%'; break;
                case 2: txe='치명타 피해배율 +' + (ra*3) + '%'; break;
                case 3: txe='최종 데미지 +' + (ra*2) + '%'; break;
            }
            ctx.fillText(txe,165,520+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle="rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle="rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle="rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle="rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle="rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle="rgba(0,0,0,1)"; break;                
            }
            ctx.fillRect(150,508+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        if(data.itm1<=24)
        {
            ctx.strokeRect(150,644,34,20);
            ctx.fillText('강화',150,660);
            ctx.fillText(numtext(20*Math.pow(2,data.itm1))+'골드',190,660);
        }
        ctx.strokeRect(150,668,120,20); ctx.fillText('잠재옵션 재설정',150,684);
        ctx.strokeRect(150,692,192,20); ctx.fillText('에디셔널 잠재옵션 재설정',150,708);

        optmax = 0;
        if(data.itm2<=4) optmax=1;
        else if(data.itm2<=9) optmax=2;
        else if(data.itm2<=14) optmax=3;
        else if(data.itm2<=19) optmax=4;
        else if(data.itm2<=24) optmax=5;
        else if(data.itm2==25) optmax=6;
        for(let i=0; i<optmax; i++)
        {
            let ra=Math.floor(data.chu2[i]/10);
            if(ra==6) ra=10;
            let op=data.chu2[i]%10;
            let txe = '';
            switch(op)
            {
                case 1: txe='이동속도 +' + ra; break;
                case 2: txe='공격속도 +' + (ra*4); break;
            }
            ctx.fillText(txe,165+288,350+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle="rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle="rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle="rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle="rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle="rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle="rgba(0,0,0,1)"; break;                
            }
            ctx.fillRect(150+288,338+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        for(let i=0; i<optmax; i++)
        {
            let ra=Math.floor(data.jam2[i]/10);
            if(ra==6) ra=10;
            let op=data.jam2[i]%10;
            let txe = '';
            switch(op)
            {
                case 1: txe='이동속도 +' + (ra*2) + '%'; break;
                case 2: txe='공격속도 +' + (ra*2) + '%'; break;
            }
            ctx.fillText(txe,165+288,520+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle="rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle="rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle="rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle="rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle="rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle="rgba(0,0,0,1)"; break;                
            }
            ctx.fillRect(150+288,508+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        if(data.itm2<=24)
        {
            ctx.strokeRect(150+288,644,34,20);
            ctx.fillText('강화',150+288,660);
            ctx.fillText(numtext(20*Math.pow(2,data.itm2))+'골드',190+288,660);
        }
        ctx.strokeRect(150+288,668,120,20); ctx.fillText('잠재옵션 재설정',150+288,684);
        ctx.strokeRect(150+288,692,192,20); ctx.fillText('에디셔널 잠재옵션 재설정',150+288,708);

        optmax = 0;
        if(data.itm3<=4) optmax=1;
        else if(data.itm3<=9) optmax=2;
        else if(data.itm3<=14) optmax=3;
        else if(data.itm3<=19) optmax=4;
        else if(data.itm3<=24) optmax=5;
        else if(data.itm3==25) optmax=6;
        for(let i=0; i<optmax; i++)
        {
            let ra=Math.floor(data.chu3[i]/10);
            if(ra==6) ra=10;
            let op=data.chu3[i]%10;
            let txe = '';
            switch(op)
            {
                case 1: txe='골드 획득량 +' + ra*100 + '%p'; break;
                case 2: txe='아이템 획득량 +' + ra*10 + '%p'; break;
            }
            ctx.fillText(txe,165+576,350+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle="rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle="rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle="rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle="rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle="rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle="rgba(0,0,0,1)"; break;                
            }
            ctx.fillRect(150+576,338+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        for(let i=0; i<optmax; i++)
        {
            let ra=Math.floor(data.jam3[i]/10);
            if(ra==6) ra=10;
            let op=data.jam3[i]%10;
            let txe = '';
            switch(op)
            {
                case 1: txe='골드 획득량 +' + ra*3 + '%'; break;
                case 2: txe='아이템 획득량 +' + ra*3 + '%'; break;
            }
            ctx.fillText(txe,165+576,520+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle="rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle="rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle="rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle="rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle="rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle="rgba(0,0,0,1)"; break;                
            }
            ctx.fillRect(150+576,508+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        if(data.itm3<=24)
        {
            ctx.strokeRect(150+576,644,34,20);
            ctx.fillText('강화',150+576,660);
            ctx.fillText(numtext(20*Math.pow(2,data.itm3))+'골드',190+576,660);
        }
        ctx.strokeRect(150+576,668,120,20); ctx.fillText('잠재옵션 재설정',150+576,684);
        ctx.strokeRect(150+576,692,192,20); ctx.fillText('에디셔널 잠재옵션 재설정',150+576,708);

        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(4,268,120,64);
        ctx.fillStyle = "rgba(0,0,0,1)";
    }
    else if(menu==3)
    {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(4,340,120,64);
        ctx.fillStyle = "rgba(0,0,0,1)";

        ctx.font = '16px 궁서체';
        ctx.fillText('골드 : ' + numtext(data.gol),740+280,250);
        ctx.strokeRect(132,196,280,256);
        ctx.strokeRect(420,196,280,256);
        ctx.strokeRect(708,196,280,256);
        ctx.strokeRect(132,196+264,280,256);
        ctx.strokeRect(420,196+264,280,256);
        ctx.strokeRect(708,196+264,280,256);

        let starforce1 = '';
        for(let i=0; i<data.itm4; i++) starforce1+='★';
        for(let i=data.itm4; i<10; i++) starforce1+='☆';
        ctx.fillText(starforce1,195,212);
        starforce1 = '';
        for(let i=0; i<data.itm5; i++) starforce1+='★';
        for(let i=data.itm5; i<10; i++) starforce1+='☆';
        ctx.fillText(starforce1,195+288,212);
        starforce1 = '';
        for(let i=0; i<data.itm6; i++) starforce1+='★';
        for(let i=data.itm6; i<10; i++) starforce1+='☆';
        ctx.fillText(starforce1,195+576,212);

        ctx.font = '24px 궁서체';
        ctx.fillText('보조무기 (+' + data.itm4 +')',196,240);
        ctx.fillText('장갑 (+' + data.itm5 +')',484+24,240);
        ctx.fillText('팬던트 (+' + data.itm6 +')',772+12,240);
        
        ctx.font = '16px 궁서체';
        ctx.fillText('공격력 +' + data.itm4*100,140,290);
        ctx.fillText('치명타 피해배율 +' + data.itm5*10 +'%p',140+288,290);
        ctx.fillText('골드 획득량 +' + data.itm6*100 +'%p',140+576,290);

        if(data.itm4<10)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241,330,70,45);
            ctx.fillText('강화',250,360);
            ctx.font = '16px 궁서체';
            ctx.fillText('강화비용 : 10만 0000골드',140,395);
            ctx.fillText('성공확률 : ' + (10-data.itm4)*10 + '%',140,415);
            ctx.fillStyle = "rgba(255,0,0,1)";
            ctx.fillText('강화에 실패하면 등급이 하락합니다.',138,435);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        if(data.itm5<10)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241+288,330,70,45);
            ctx.fillText('강화',250+288,360);
            ctx.font = '16px 궁서체';
            ctx.fillText('강화비용 : 10만 0000골드',140+288,395);
            ctx.fillText('성공확률 : ' + (10-data.itm5)*10 + '%',140+288,415);
            ctx.fillStyle = "rgba(255,0,0,1)";
            ctx.fillText('강화에 실패하면 등급이 하락합니다.',138+288,435);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        if(data.itm6<10)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241+576,330,70,45);
            ctx.fillText('강화',250+576,360);
            ctx.font = '16px 궁서체';
            ctx.fillText('강화비용 : 10만 0000골드',140+576,395);
            ctx.fillText('성공확률 : ' + (10-data.itm6)*10 + '%',140+576,415);
            ctx.fillStyle = "rgba(255,0,0,1)";
            ctx.fillText('강화에 실패하면 등급이 하락합니다.',138+576,435);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }

        starforce1 = '';
        for(let i=0; i<data.itm7; i++) starforce1+='★';
        for(let i=data.itm7; i<10; i++) starforce1+='☆';
        ctx.fillText(starforce1,195,212+264);
        starforce1 = '';
        for(let i=0; i<data.itm8; i++) starforce1+='★';
        for(let i=data.itm8; i<10; i++) starforce1+='☆';
        ctx.fillText(starforce1,195+288,212+264);
        starforce1 = '';
        for(let i=0; i<data.itm9; i++) starforce1+='★';
        for(let i=data.itm9; i<10; i++) starforce1+='☆';
        ctx.fillText(starforce1,195+576,212+264);

        ctx.font = '24px 궁서체';
        ctx.fillText('망토 (+' + data.itm7 +')',196+24,240+264);
        ctx.fillText('신발 (+' + data.itm8 +')',484+24,240+264);
        ctx.fillText('귀걸이 (+' + data.itm9 +')',772+12,240+264);
        
        ctx.font = '16px 궁서체';
        ctx.fillText('공격속도 +' + data.itm7*4,140,290+264);
        ctx.fillText('이동속도 +' + data.itm8*4,140+288,290+264);
        ctx.fillText('골드 획득량 +' + data.itm9*100 +'%p',140+576,290+264);

        if(data.itm7<10)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241,330+264,70,45);
            ctx.fillText('강화',250,360+264);
            ctx.font = '16px 궁서체';
            ctx.fillText('강화비용 : ' + 1000*(data.itm7+1) + '만 0000골드',140,395+264);
            ctx.fillText('성공확률 : ' + (100-data.itm7*8) + '%',140,415+264);
            ctx.fillStyle = "rgba(255,0,0,1)";
            ctx.fillText('강화에 실패하면 등급이 하락합니다.',138,435+264);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        if(data.itm8<10)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241+288,330+264,70,45);
            ctx.fillText('강화',250+288,360+264);
            ctx.font = '16px 궁서체';
            ctx.fillText('강화비용 : ' + 1000*(data.itm8+1) + '만 0000골드',140+288,395+264);
            ctx.fillText('성공확률 : ' + (100-data.itm8*8) + '%',140+288,415+264);
            ctx.fillStyle = "rgba(255,0,0,1)";
            ctx.fillText('강화에 실패하면 등급이 하락합니다.',138+288,435+264);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        if(data.itm9<10)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241+576,330+264,70,45);
            ctx.fillText('강화',250+576,360+264);
            ctx.font = '16px 궁서체';
            ctx.fillText('강화비용 : ' + 1000*(data.itm9+1) + '만 0000골드',140+576,395+264);
            ctx.fillText('성공확률 : ' + (100-data.itm9*8) + '%',140+576,415+264);
            ctx.fillStyle = "rgba(255,0,0,1)";
            ctx.fillText('강화에 실패하면 등급이 하락합니다.',138+576,435+264);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
    }
    else if(menu==4)
    {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(4,412,120,64);
        ctx.fillStyle = "rgba(0,0,0,1)";

        ctx.font = '16px 궁서체';
        ctx.fillText('카오스 오브 : ' + numtext(data.ob1),740+280,250);
        ctx.fillText('에디셔널 카오스 오브 : ' + numtext(data.ob2),740+280,270);
        ctx.fillText('불꽃 오브 : ' + numtext(data.ob3),740+280,290);
        ctx.fillText('불꽃 오브는 지옥 이상',740+280,330);
        ctx.fillText('난이도에서 드랍됩니다.',740+280,350);

        ctx.strokeRect(132,196,280,520);
        ctx.strokeRect(420,196,280,520);
        ctx.strokeRect(708,196,280,520);

        ctx.font = '24px 궁서체';
        ctx.fillText('환생의 불꽃',196,225);
        ctx.fillText('강력한 환생의 불꽃',484-36,230);
        ctx.fillText('영원한 환생의 불꽃',772-36,230);

        ctx.drawImage(spr_fire1,208,240);
        ctx.drawImage(spr_fire2,208+288,240);
        ctx.drawImage(spr_fire3,208+576,240);
        ctx.strokeRect(208,240,128,128);
        ctx.strokeRect(208+288,240,128,128);
        ctx.strokeRect(208+576,240,128,128);

        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(208,240+128*data.sk1/216000,128,128*(216000-data.sk1)/216000);
        ctx.fillRect(208+288,240+128*data.sk2/36000,128,128*(36000-data.sk2)/36000);
        ctx.fillRect(208+576,240+128*data.sk3,128,128*(1-data.sk3));
        ctx.fillStyle = "rgba(0,0,0,1)";

        ctx.font = '16px 궁서체';
        ctx.fillText('활성 효과 : 최종데미지 +10%',140,400);
        ctx.fillText('지속 시간 : 1시간',140,420);
        ctx.fillText('활성 효과 : 최종데미지 +25%',140+288,400);
        ctx.fillText('지속 시간 : 10분',140+288,420);
        ctx.fillText('활성 효과 : 최종데미지 +10%',140+576,400);
        ctx.fillText('지속 시간 : 무한',140+576,420);

        if(data.sk1==0)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241,450,70,45);
            ctx.fillText('활성',250,480);
            ctx.font = '16px 궁서체';
            ctx.fillText('활성 비용',140,515);
            ctx.fillText('  불꽃 오브 10개',140,535);
            ctx.fillText('  카오스 오브 100개',140,555);
        }
        if(data.sk2==0)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241+288,450,70,45);
            ctx.fillText('활성',250+288,480);
            ctx.font = '16px 궁서체';
            ctx.fillText('활성 비용',140+288,515);
            ctx.fillText('  불꽃 오브 100개',140+288,535);
            ctx.fillText('  카오스 오브 300개',140+288,555);
        }
        if(data.sk3==0)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241+576,450,70,45);
            ctx.fillText('활성',250+576,480);
            ctx.font = '16px 궁서체';
            ctx.fillText('활성 비용',140+576,515);
            ctx.fillText('  불꽃 오브 1000개',140+576,535);
            ctx.fillText('  카오스 오브 6666개',140+576,555);
            ctx.fillText('  에디셔널 카오스 오브 2222개',140+576,575);
        }
    }
    else if(menu==5)
    {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(4,484,120,64);
        ctx.fillStyle = "rgba(0,0,0,1)";

        ctx.strokeRect(132,196,280,256);
        ctx.strokeRect(420,196,280,256);
        ctx.strokeRect(708,196,280,256);

        ctx.font = '16px 궁서체';
        ctx.fillText('골드 : ' + numtext(data.gol),740+280,230);
        ctx.fillText('카오스 오브 : ' + numtext(data.ob1),740+280,250);
        ctx.fillText('에디셔널 카오스 오브 : ' + numtext(data.ob2),740+280,270);
        ctx.fillText('불꽃 오브 : ' + numtext(data.ob3),740+280,290);
        ctx.fillText('코스모스 오브 : ' + numtext(data.ob4),740+280,310);

        ctx.font = '24px 궁서체';
        ctx.strokeRect(241,330+60,70,45);
        ctx.fillText('제작',250,360+60);
        ctx.strokeRect(241+288,330+60,70,45);
        ctx.fillText('제작',250+288,360+60);
        ctx.strokeRect(241+576,330+60,70,45);
        ctx.fillText('제작',250+576,360+60);

        ctx.font = '16px 궁서체';
        ctx.fillText('<재료>',140,215);
        ctx.fillText('100 카오스 오브',140,235);
        ctx.fillText('10 불꽃 오브',140,255);
        ctx.fillText('<결과>',140,325);
        ctx.fillText('300만 0000골드',140,345);
        
        ctx.fillText('<재료>',140+288,215);
        ctx.fillText('100 에디셔널 카오스 오브',140+288,235);
        ctx.fillText('10 불꽃 오브',140+288,255);
        ctx.fillText('<결과>',140+288,325);
        ctx.fillText('1000만 0000골드',140+288,345);
        
        ctx.fillText('<재료>',140+576,215);
        ctx.fillText('100 카오스 오브',140+576,235);
        ctx.fillText('100 에디셔널 카오스 오브',140+576,255);
        ctx.fillText('10 불꽃 오브',140+576,275);
        ctx.fillText('2000만 0000골드',140+576,295);
        ctx.fillText('<결과>',140+576,325);
        ctx.fillText('1 코스모스 오브',140+576,345);

        if(data.sk6>0)
        {
            ctx.fillText('<재료>',140,215+264);
            ctx.fillText('100 카오스 오브',140,235+264);
            ctx.fillText('<결과>',140,325+264);
            ctx.fillText('옵션 희귀도 +' + data.sk6*10 + '%p',140,345+264);
            ctx.strokeRect(132,460,280,256);
            ctx.strokeRect(241,330+60+264,70,45);
            ctx.font='24px 궁서체';
            ctx.fillText('제작',250,360+60+264);
        }
    }
    else if(menu==6)
    {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(4,556,120,64);
        ctx.fillStyle = "rgba(0,0,0,1)";

        if(data.sk4>=1)
        {
            ctx.fillText('코스모스 오브 : ' + numtext(data.ob4),740+280,230);
            ctx.strokeStyle = "rgba(128,128,128,1)";
            for(let i=12; i<=120; i+=12)
            {
                ctx.beginPath();
                ctx.moveTo(50+278+i*Math.cos(Math.PI/10),342-i*Math.sin(Math.PI/10));
                ctx.lineTo(50+278+i*Math.cos(Math.PI/2),342-i*Math.sin(Math.PI/2));
                ctx.lineTo(50+278+i*Math.cos(9*Math.PI/10),342-i*Math.sin(9*Math.PI/10));
                ctx.lineTo(50+278+i*Math.cos(13*Math.PI/10),342-i*Math.sin(13*Math.PI/10));
                ctx.lineTo(50+278+i*Math.cos(17*Math.PI/10),342-i*Math.sin(17*Math.PI/10));
                ctx.lineTo(50+278+i*Math.cos(Math.PI/10),342-i*Math.sin(Math.PI/10));
                ctx.closePath();
                ctx.stroke();
            }
            ctx.strokeStyle="rgba(0,0,0,1)";
            ctx.beginPath();
            ctx.moveTo(50+278+60*Math.cos(Math.PI/10),342-60*Math.sin(Math.PI/10));
            ctx.lineTo(50+278+60*Math.cos(Math.PI/2),342-60*Math.sin(Math.PI/2));
            ctx.lineTo(50+278+60*Math.cos(9*Math.PI/10),342-60*Math.sin(9*Math.PI/10));
            ctx.lineTo(50+278+60*Math.cos(13*Math.PI/10),342-60*Math.sin(13*Math.PI/10));
            ctx.lineTo(50+278+60*Math.cos(17*Math.PI/10),342-60*Math.sin(17*Math.PI/10));
            ctx.lineTo(50+278+60*Math.cos(Math.PI/10),342-60*Math.sin(Math.PI/10));
            ctx.closePath();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(50+278+120*Math.cos(Math.PI/10),342-120*Math.sin(Math.PI/10));
            ctx.lineTo(50+278+120*Math.cos(Math.PI/2),342-120*Math.sin(Math.PI/2));
            ctx.lineTo(50+278+120*Math.cos(9*Math.PI/10),342-120*Math.sin(9*Math.PI/10));
            ctx.lineTo(50+278+120*Math.cos(13*Math.PI/10),342-120*Math.sin(13*Math.PI/10));
            ctx.lineTo(50+278+120*Math.cos(17*Math.PI/10),342-120*Math.sin(17*Math.PI/10));
            ctx.lineTo(50+278+120*Math.cos(Math.PI/10),342-120*Math.sin(Math.PI/10));
            ctx.closePath();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(50+278+12*data.sk8*Math.cos(Math.PI/10),342-12*data.sk8*Math.sin(Math.PI/10));
            ctx.lineTo(50+278+12*data.sk4*Math.cos(Math.PI/2),342-12*data.sk4*Math.sin(Math.PI/2));
            ctx.lineTo(50+278+12*data.sk5*Math.cos(9*Math.PI/10),342-12*data.sk5*Math.sin(9*Math.PI/10));
            ctx.lineTo(50+278+12*data.sk6*Math.cos(13*Math.PI/10),342-12*data.sk6*Math.sin(13*Math.PI/10));
            ctx.lineTo(50+278+12*data.sk7*Math.cos(17*Math.PI/10),342-12*data.sk7*Math.sin(17*Math.PI/10));
            ctx.lineTo(50+278+12*data.sk8*Math.cos(Math.PI/10),342-12*data.sk8*Math.sin(Math.PI/10));
            ctx.closePath();
            ctx.stroke();
            ctx.fill();

            ctx.font = '24px 궁서체';
            ctx.fillText('군인 LV' + data.sk4,50+278+120*Math.cos(Math.PI/2)-50,342-120*Math.sin(Math.PI/2));
            ctx.fillText('전사 LV' + data.sk5,50+278+120*Math.cos(9*Math.PI/10)-80,342-120*Math.sin(9*Math.PI/10)-20);
            ctx.fillText('궁수 LV' + data.sk6,50+278+120*Math.cos(13*Math.PI/10)-80,342-120*Math.sin(13*Math.PI/10)+30);
            ctx.fillText('도적 LV' + data.sk7,50+278+120*Math.cos(17*Math.PI/10)-20,342-120*Math.sin(17*Math.PI/10)+30);
            ctx.fillText('법사 LV' + data.sk8,50+278+120*Math.cos(Math.PI/10),342-120*Math.sin(Math.PI/10)-20);

            ctx.fillText('군인 LV' + data.sk4 + ' : 이동속도 +' + data.sk4*2 + '%',550,300);
            ctx.fillText('전사 LV' + data.sk5 + ' : 방어력 관통 +' + data.sk5,550,340);
            ctx.fillText('궁수 LV' + data.sk6 + ' : 연금술 레시피 추가, 효율 +' + data.sk6*10 + '%',550,380);
            ctx.fillText('도적 LV' + data.sk7 + ' : 적이 ' + data.sk7*10 + '골드를 추가로 드랍',550,420);
            ctx.fillText('법사 LV' + data.sk8 + ' : 경험치 획득량 +' + data.sk8*2 + '%',550,460);

            let per = data.sk4*data.sk5 + data.sk5*data.sk6 + data.sk6*data.sk7 + data.sk7*data.sk8 + data.sk8*data.sk4;
            ctx.fillText('점령한 지역 : ' + per/5 + '%',200,540);
            ctx.fillText('최종 데미지 증가 : ' + per/10 + '%',200,580);

            ctx.font = '16px 궁서체';
            if(data.sk4<10)
            {
                ctx.fillText('스킬 레벨업',1030,300);
                ctx.strokeRect(1029,283,90,20);
                ctx.fillText(data.sk4+' 코스모스 오브',1130,300);
            }
            if(data.sk5<10)
            {
                ctx.fillText('스킬 레벨업',1030,340);
                ctx.strokeRect(1029,323,90,20);
                ctx.fillText(data.sk5+' 코스모스 오브',1130,340);
            }
            if(data.sk6<10)
            {
                ctx.fillText('스킬 레벨업',1030,380);
                ctx.strokeRect(1029,363,90,20);
                ctx.fillText(data.sk6+' 코스모스 오브',1130,380);
            }
            if(data.sk7<10)
            {
                ctx.fillText('스킬 레벨업',1030,420);
                ctx.strokeRect(1029,403,90,20);
                ctx.fillText(data.sk7+' 코스모스 오브',1130,420);
            }
            if(data.sk8<10)
            {
                ctx.fillText('스킬 레벨업',1030,460);
                ctx.strokeRect(1029,443,90,20);
                ctx.fillText(data.sk8+' 코스모스 오브',1130,460);
            }
        }
        else
        {
            ctx.font = '24px 궁서체';
            ctx.fillText('2차 전직을 통해 각 직업의 새로운 패시브 스킬을 배울 수 있습니다.',200,320);
            ctx.fillText('자신 직업의 스킬은 최대 레벨인 LV10 이며, 다른 직업의 스킬 레벨은 LV1로 시작합니다.',200,360);
            ctx.strokeRect(195,415,165,30);
            ctx.fillText('2차 전직 시작',200,440);
            ctx.fillText('비용 : 1 코스모스 오브',200,480);
        }
    }
    else if(menu==7)
    {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(4,628,120,64);
        ctx.fillStyle = "rgba(0,0,0,1)";

        ctx.font = '16px 궁서체';
        ctx.fillText('골드 : ' + numtext(data.gol),740+280,250);
        ctx.fillText('불꽃 오브 : ' + numtext(data.ob3),740+280,280);
        ctx.fillText('신성한 오브 : ' + numtext(data.ob5),740+280,310);
        ctx.fillText('유물 희귀도 : ' + Math.floor(data.hpr) + '%',740+280,370);
        ctx.fillText('신성한 오브는 종말 이상',740+280,530);
        ctx.fillText('난이도에서 드랍됩니다',740+280,550);

        calrarep(data.hpr/100);
        for(let i=0; i<6; i++)
        {
            switch(i)
            {
                case 0: ctx.fillStyle = "rgba(128,128,128,1)"; break;
                case 1: ctx.fillStyle = "rgba(34,177,76,1)"; break;
                case 2: ctx.fillStyle = "rgba(0,162,232,1)"; break;
                case 3: ctx.fillStyle = "rgba(163,73,164,1)"; break;
                case 4: ctx.fillStyle = "rgba(255,127,39,1)"; break;
                case 5: ctx.fillStyle = "rgba(0,0,0,1)"; break;
            }
            ctx.fillRect(1020,380+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
            switch(i)
            {
                case 0: ctx.fillText(rarep1 + '%',1035,392+20*i); break;
                case 1: ctx.fillText(rarep2 + '%',1035,392+20*i); break;
                case 2: ctx.fillText(rarep3 + '%',1035,392+20*i); break;
                case 3: ctx.fillText(rarep4 + '%',1035,392+20*i); break;
                case 4: ctx.fillText(rarep5 + '%',1035,392+20*i); break;
                case 5: ctx.fillText(rarep6 + '%',1035,392+20*i); break;
            }
        }
        ctx.strokeRect(132,196,280,520);
        ctx.strokeRect(132+288,196,280,520);
        ctx.strokeRect(132+576,196,280,520);

        let txe='';
        for(let i=0; i<6; i++)
        {
            let ra = Math.floor(data.chu4[i]);
            if(ra==6) ra=10;
            switch(i)
            {
                case 0: txe='공격력 +' + ra*100; break;
                case 1: txe='치명타 피해배율 +' + ra*20 + '%p'; break;
                case 2: txe='방어력 관통 +' + ra; break;
                case 3: txe='공격속도 +' + ra*4; break;
                case 4: txe='이동속도 +' + ra*4; break;
                case 5: txe='골드 획득량 +' + ra*100 + '%p'; break;
            }
            ctx.fillText(txe,165,350+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle = "rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle = "rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle = "rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle = "rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle = "rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle = "rgba(0,0,0,1)"; break;
            }
            ctx.fillRect(150,338+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        for(let i=0; i<6; i++)
        {
            let ra = Math.floor(data.chu5[i]);
            if(ra==6) ra=10;
            switch(i)
            {
                case 0: txe='공격력 +' + ra*100; break;
                case 1: txe='치명타 피해배율 +' + ra*20 + '%p'; break;
                case 2: txe='방어력 관통 +' + ra; break;
                case 3: txe='공격속도 +' + ra*4; break;
                case 4: txe='이동속도 +' + ra*4; break;
                case 5: txe='골드 획득량 +' + ra*100 + '%p'; break;
            }
            ctx.fillText(txe,165+288,350+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle = "rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle = "rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle = "rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle = "rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle = "rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle = "rgba(0,0,0,1)"; break;
            }
            ctx.fillRect(150+288,338+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        for(let i=0; i<6; i++)
        {
            let ra = Math.floor(data.chu6[i]);
            if(ra==6) ra=10;
            switch(i)
            {
                case 0: txe='공격력 +' + ra*100; break;
                case 1: txe='치명타 피해배율 +' + ra*20 + '%p'; break;
                case 2: txe='방어력 관통 +' + ra; break;
                case 3: txe='공격속도 +' + ra*4; break;
                case 4: txe='이동속도 +' + ra*4; break;
                case 5: txe='골드 획득량 +' + ra*100 + '%p'; break;
            }
            ctx.fillText(txe,165+576,350+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle = "rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle = "rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle = "rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle = "rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle = "rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle = "rgba(0,0,0,1)"; break;
            }
            ctx.fillRect(150+576,338+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }

        ctx.font = '24px 궁서체';
        ctx.fillText('유물1',240,250);
        ctx.fillText('유물2',240+288,250);
        ctx.fillText('유물3',240+576,250);
        ctx.fillText('추가옵션',140,320);
        ctx.fillText('추가옵션',140+288,320);
        ctx.fillText('추가옵션',140+576,320);
        ctx.strokeRect(181,480,190,45);
        ctx.strokeRect(181+288,480,190,45);
        ctx.strokeRect(181+576,480,190,45);
        ctx.fillText('추가옵션 재설정',185,510);
        ctx.fillText('추가옵션 재설정',185+288,510);
        ctx.fillText('추가옵션 재설정',185+576,510);

        ctx.font = '16px 궁서체';
        for(let i=0; i<3; i++)
        {
            ctx.fillText('재설정 비용',140+288*i,545);
            ctx.fillText('  불꽃 오브 10개',140+288*i,575);
            ctx.fillText('  신성한 오브 1개',140+288*i,595);
            ctx.fillText('  1억 0000만 0000골드',140+288*i,615);
        }

    }
}

function game()
{
    step();
    draw();
}
=======
const canavs = document.getElementById('canvas');
const ctx = document.getElementById('canvas').getContext('2d');
const FPS = 60;
let data={
    id : 'err',
    pw : 'err',
    job : 0,
    lv : 1,
    exp : 0,
    don : 1,
    mon : 0,
    itm1 : 0,
    itm2 : 0,
    itm3 : 0,
    itm4 : 0,
    itm5 : 0,
    itm6 : 0,
    itm7 : 0,
    itm8 : 0,
    itm9 : 0,
    chu1 : [0,0,0,0,0,0],
    jam1 : [0,0,0,0,0,0],
    chu2 : [0,0,0,0,0,0],
    jam2 : [0,0,0,0,0,0],
    chu3 : [0,0,0,0,0,0],
    jam3 : [0,0,0,0,0,0],
    chu4 : [0,0,0,0,0,0],
    chu5 : [0,0,0,0,0,0],
    chu6 : [0,0,0,0,0,0],
    mop : 0,
    opr : 100,
    hpr : 100,
    gol : 0,
    ob1 : 0,
    ob2 : 0,
    ob3 : 0,
    ob4 : 0,
    ob5 : 0,
    sk1 : 0,
    sk2 : 0,
    sk3 : 0,
    sk4 : 0,
    sk5 : 0,
    sk6 : 0,
    sk7 : 0,
    sk8 : 0
};

let stat = {
    atk : 0,
    atks : 0,
    atkp : 0,
    dep : 0,
    crp : 0,
    crd : 0,
    crds : 0,
    crdp : 0,
    fid : 0,
    fidp : [],
    fidt : '',
    spd : 0,
    spds : 0,
    spdp : 0,
    mod : 0,
    mods : 0,
    modp : 0,
    itd : 0,
    itds : 0,
    itdp : 0,
    ats : 0,
    atss : 0,
    atsp : 0,
    power : 0
};

let jobname='';
let menu=1;

function dataload(id)
{
    data = localLoad(id);
    //구버전 데이터 호환 코드가 들어갈 자리
}

canavs.onclick = function(event)
{
    let mouse_x = event.clientX - ctx.canvas.offsetLeft;
    let mouse_y = event.clientY - ctx.canvas.offsetTop;
    if(0<=mouse_x && mouse_x<=128)
    {
        if(192<=mouse_y && mouse_y<=264)
            menu=1;
        else if(264<=mouse_y && mouse_y<=336)
            menu=2;
        else if(336<=mouse_y && mouse_y<=408)
        {
            if(data.lv>=100)
                menu=3;
            else
                alert('레벨 100 부터 이용가능합니다.');
        }
        else if(408<=mouse_y && mouse_y<=480)
        {
            if(data.lv>=250)
                menu=4;
            else
                alert('레벨 250 부터 이용가능합니다.');
        }
        else if(480<=mouse_y && mouse_y<=552)
        {
            if(data.lv>=500)
                menu=5;
            else
                alert('레벨 500 부터 이용가능합니다.');
        }
        else if(552<=mouse_y && mouse_y<=624)
        {
            if(data.lv>=500)
                menu=6;
            else
                alert('레벨 500 부터 이용가능합니다.');
        }
        else if(624<=mouse_y && mouse_y<=696)
        {
            if(data.lv>=1000)
                menu=7;
            else
                alert('레벨 1000 부터 이용가능합니다.');
        }
    }
    if(0<=mouse_y && mouse_y<=60)
    {
        if(0<=mouse_x && mouse_x<=80)
        {
            if(data.don==1)
                alert('가장 쉬운 난이도입니다.');
            else
            {
                data.don-=1;
                diffcal();
            }
        }
        if(200<=mouse_x && mouse_x<=280)
        {
            if(data.don==60)
                alert('가장 어려운 난이도입니다.');
            else
            {
                data.don+=1;
                diffcal();
            }
        }
    }
    if(0<=mouse_x && mouse_x<=160)
        if(120<=mouse_y && mouse_y<=192)
        {
            if(bgonoff==1)
                bgonoff=0;
            else   
                bgonoff=1;
        }
    
    if(menu==2)
    {
        if(150<=mouse_x && mouse_x<=350)
        {
            if(644<=mouse_y && mouse_y<=664)
            {
                if(data.itm1<=24)
                {
                    if(data.gol>=20*Math.pow(2,data.itm1))
                    {
                        data.gol-=20*Math.pow(2,data.itm1);
                        data.itm1+=1;
                        statcal();
                        localSave(id,data);
                    }
                    else
                        alert('골드가 부족합니다.');
                }
            }
            if(668<=mouse_y && mouse_y<=688)
            {
                if(data.ob1>=1)
                {
                    data.ob1-=1;
                    let optm=0;
                    if(data.itm1<=4) optm=1;
                    else if(data.itm1<=9) optm=2;
                    else if(data.itm1<=14) optm=3;
                    else if(data.itm1<=19) optm=4;
                    else if(data.itm1<=24) optm=5;
                    else if(data.itm1==25) optm=6;
                    for(let i=0; i<optm; i++)
                        data.chu1[i]=randrare(data.opr/100)*10+randint(3)+1;
                    statcal();
                    localSave(id,data);
                    data.opr++;
                    if(data.job==5) data.opr+=0.1;
                }
            }
            if(692<=mouse_y && mouse_y<=712)
            {
                if(data.ob2>=1)
                {
                    data.ob2-=1;
                    let optm=0;
                    if(data.itm1<=4) optm=1;
                    else if(data.itm1<=9) optm=2;
                    else if(data.itm1<=14) optm=3;
                    else if(data.itm1<=19) optm=4;
                    else if(data.itm1<=24) optm=5;
                    else if(data.itm1==25) optm=6;
                    for(let i=0; i<optm; i++)
                        data.jam1[i]=randrare(data.opr/100)*10+randint(3)+1;
                    statcal();
                    localSave(id,data);
                    data.opr++;
                    if(data.job==5) data.opr+=0.1;
                }
            }
        }
        if(150+288<=mouse_x && mouse_x<=350+288)
        {
            if(644<=mouse_y && mouse_y<=664)
            {
                if(data.itm2<=24)
                {
                    if(data.gol>=20*Math.pow(2,data.itm2))
                    {
                        data.gol-=20*Math.pow(2,data.itm2);
                        data.itm2+=1;
                        statcal();
                        localSave(id,data);
                    }
                    else
                        alert('골드가 부족합니다.');
                }
            }
            if(668<=mouse_y && mouse_y<=688)
            {
                if(data.ob1>=1)
                {
                    data.ob1-=1;
                    let optm=0;
                    if(data.itm2<=4) optm=1;
                    else if(data.itm2<=9) optm=2;
                    else if(data.itm2<=14) optm=3;
                    else if(data.itm2<=19) optm=4;
                    else if(data.itm2<=24) optm=5;
                    else if(data.itm2==25) optm=6;
                    for(let i=0; i<optm; i++)
                        data.chu2[i]=randrare(data.opr/100)*10+2;
                    statcal();
                    localSave(id,data);
                    data.opr++;
                    if(data.job==5) data.opr+=0.1;
                }
            }
            if(692<=mouse_y && mouse_y<=712)
            {
                if(data.ob2>=1)
                {
                    data.ob2-=1;
                    let optm=0;
                    if(data.itm2<=4) optm=1;
                    else if(data.itm2<=9) optm=2;
                    else if(data.itm2<=14) optm=3;
                    else if(data.itm2<=19) optm=4;
                    else if(data.itm2<=24) optm=5;
                    else if(data.itm2==25) optm=6;
                    for(let i=0; i<optm; i++)
                        data.jam2[i]=randrare(data.opr/100)*10+2;
                    statcal();
                    localSave(id,data);
                    data.opr++;
                    if(data.job==5) data.opr+=0.1;
                }
            }
        }
        if(150+576<=mouse_x && mouse_x<=350+576)
        {
            if(644<=mouse_y && mouse_y<=664)
            {
                if(data.itm3<=24)
                {
                    if(data.gol>=20*Math.pow(2,data.itm3))
                    {
                        data.gol-=20*Math.pow(2,data.itm3);
                        data.itm3+=1;
                        statcal();
                        localSave(id,data);
                    }
                    else
                        alert('골드가 부족합니다.');
                }
            }
            if(668<=mouse_y && mouse_y<=688)
            {
                if(data.ob1>=1)
                {
                    data.ob1-=1;
                    let optm=0;
                    if(data.itm3<=4) optm=1;
                    else if(data.itm3<=9) optm=2;
                    else if(data.itm3<=14) optm=3;
                    else if(data.itm3<=19) optm=4;
                    else if(data.itm3<=24) optm=5;
                    else if(data.itm3==25) optm=6;
                    for(let i=0; i<optm; i++)
                        data.chu3[i]=randrare(data.opr/100)*10+randint(2)+1;
                    statcal();
                    localSave(id,data);
                    data.opr++;
                    if(data.job==5) data.opr+=0.1;
                }
            }
            if(692<=mouse_y && mouse_y<=712)
            {
                if(data.ob2>=1)
                {
                    data.ob2-=1;
                    let optm=0;
                    if(data.itm3<=4) optm=1;
                    else if(data.itm3<=9) optm=2;
                    else if(data.itm3<=14) optm=3;
                    else if(data.itm3<=19) optm=4;
                    else if(data.itm3<=24) optm=5;
                    else if(data.itm3==25) optm=6;
                    for(let i=0; i<optm; i++)
                        data.jam3[i]=randrare(data.opr/100)*10+randint(2)+1;
                    statcal();
                    localSave(id,data);
                    data.opr++;
                    if(data.job==5) data.opr+=0.1;
                }
            }
        }
    }
    if(menu==3)
    {
        if(330<=mouse_y && mouse_y<=375)
        {
            if(241<=mouse_x && mouse_x<=311 && data.itm4<10)
            {
                if(data.gol>=100000)
                {
                    if(randint(10)>=data.itm4)
                    {
                        data.itm4++;
                        statcal();
                        localSave(id,data);
                    }
                    else
                    {
                        data.itm4--;
                        statcal();
                        localSave(id,data);
                    }
                    data.gol-=100000;
                }
                else
                    alert('골드가 부족합니다.');
            }
            if(241+288<=mouse_x && mouse_x<=311+288 && data.itm5<10)
            {
                if(data.gol>=100000)
                {
                    if(randint(10)>=data.itm5)
                    {
                        data.itm5++;
                        statcal();
                        localSave(id,data);
                    }
                    else
                    {
                        data.itm5--;
                        statcal();
                        localSave(id,data);
                    }
                    data.gol-=100000;
                }
                else
                    alert('골드가 부족합니다.');
            }
            if(241+576<=mouse_x && mouse_x<=311+576 && data.itm6<10)
            {
                if(data.gol>=100000)
                {
                    if(randint(10)>=data.itm6)
                    {
                        data.itm6++;
                        statcal();
                        localSave(id,data);
                    }
                    else
                    {
                        data.itm6--;
                        statcal();
                        localSave(id,data);
                    }
                    data.gol-=100000;
                }
                else
                    alert('골드가 부족합니다.');
            }
        }
        if(330+264<=mouse_y && mouse_y<=375+264)
        {
            if(241<=mouse_x && mouse_x<=311 && data.itm7<10)
            {
                if(data.gol>=10000000*(data.itm7+1))
                {
                    data.gol-=10000000*(data.itm7+1);
                    if(randint(100)>=data.itm7*8)
                        data.itm7++;
                    else
                        data.itm7--;
                    statcal();
                    localSave(id,data);
                }
                else
                    alert('골드가 부족합니다');
            }
            if(241+288<=mouse_x && mouse_x<=311+288 && data.itm8<10)
            {
                if(data.gol>=10000000*(data.itm8+1))
                {
                    data.gol-=10000000*(data.itm8+1);
                    if(randint(100)>=data.itm8*8)
                        data.itm8++;
                    else
                        data.itm8--;
                    statcal();
                    localSave(id,data);
                }
                else
                    alert('골드가 부족합니다');
            }
            if(241+576<=mouse_x && mouse_x<=311+576 && data.itm9<10)
            {
                if(data.gol>=10000000*(data.itm9+1))
                {
                    data.gol-=10000000*(data.itm9+1);
                    if(randint(100)>=data.itm9*8)
                        data.itm9++;
                    else
                        data.itm9--;
                    statcal();
                    localSave(id,data);
                }
                else
                    alert('골드가 부족합니다');
            }
        }
    }
    if(menu==4)
    {
        if(450<=mouse_y && mouse_y <=495)
        {
            if(241<=mouse_x && mouse_x<=311)
            {
                if(data.ob1>=100 && data.ob3>=10)
                {
                    data.sk1=216000;
                    data.ob1-=100;
                    data.ob3-=10;
                    statcal();
                    localSave(id,data);
                }
                else
                    alert('재료가 부족합니다.');
            }
            if(241+288<=mouse_x && mouse_x<=311+288)
            {
                if(data.ob1>=300 && data.ob3>=100)
                {
                    data.sk2=36000;
                    data.ob1-=300;
                    data.ob3-=100;
                    statcal();
                    localSave(id,data);
                }
                else
                    alert('재료가 부족합니다.');
            }
            if(241+576<=mouse_x && mouse_x<=311+576)
            {
                if(data.ob1>=6666 && data.ob2>=2222 && data.ob3>=1000)
                {
                    data.sk3=1;
                    data.ob1-=6666;
                    data.ob2-=2222;
                    data.ob3-=1000;
                    statcal();
                    localSave(id,data);
                }
                else
                    alert('재료가 부족합니다.');
            }
        }
    }
    if(menu==5)
    {
        if(390<=mouse_y && mouse_y<=435)
        {
            if(241<=mouse_x && mouse_x<=311)
            {
                if(data.ob1>=100 && data.ob3>=10)
                {
                    data.ob1-=100;
                    data.ob3-=10;
                    data.gol+=3000000;
                    localSave(id,data);
                }
                else
                    alert('재료가 부족합니다.');
            }
            if(241+288<=mouse_x && mouse_x<=311+288)
            {
                if(data.ob2>=100 && data.ob3>=10)
                {
                    data.ob2-=100;
                    data.ob3-=10;
                    data.gol+=10000000;
                    localSave(id,data);
                }
                else
                    alert('재료가 부족합니다.');
            }
            if(241+576<=mouse_x && mouse_x<=311+576)
            {
                if(data.ob1>=100 && data.ob2>=100 && data.ob3>=10 && data.gol>=20000000)
                {
                    data.ob1-=100
                    data.ob2-=100;
                    data.ob3-=10;
                    data.gol-=20000000;
                    data.ob4++;
                    localSave(id,data);
                }
                else
                    alert('재료가 부족합니다.');
            }
        }
        if(data.sk6>0 && 241<=mouse_x && mouse_x<=311 && 654<=mouse_y && mouse_y<=699)
        {
            if(data.ob1>=100)
            {
                data.ob1-=100;
                data.opr+=data.sk6*10;
                calrarep(data.opr/100);
            }
            else
                alert('재료가 부족합니다.');
        }
    }
    if(menu==6)
    {
        if(data.sk4==0 && 195<=mouse_x && mouse_x<=365 && 415<=mouse_y && mouse_y<=445)
        {
            if(data.ob4>=1)
            {
                switch(data.job)
                {
                    case 1: data.sk4=10; data.sk5=1; data.sk6=1; data.sk7=1; data.sk8=1; break;
                    case 2: data.sk4=1; data.sk5=10; data.sk6=1; data.sk7=1; data.sk8=1; break;
                    case 3: data.sk4=1; data.sk5=1; data.sk6=10; data.sk7=1; data.sk8=1; break;
                    case 4: data.sk4=1; data.sk5=1; data.sk6=1; data.sk7=10; data.sk8=1; break;
                    case 5: data.sk4=1; data.sk5=1; data.sk6=1; data.sk7=1; data.sk8=10; break;
                }
                data.ob4--;
            }
            else
                alert('재료가 부족합니다.');
        }
        if(data.sk4!=0)
        {
            if(1029<=mouse_x && mouse_x<=1119)
            {
                if(283<=mouse_y && mouse_y<=303 && data.sk4<10)
                {
                    if(data.ob4>=data.sk4)
                    {
                        data.ob4-=data.sk4;
                        data.sk4++;
                        localSave(id,data);
                        statcal();
                    }
                    else
                        alert('재료가 부족합니다.');
                }
                if(323<=mouse_y && mouse_y<=343 && data.sk5<10)
                {
                    if(data.ob4>=data.sk5)
                    {
                        data.ob4-=data.sk5;
                        data.sk5++;
                        localSave(id,data);
                        statcal();
                    }
                    else
                        alert('재료가 부족합니다.');
                }
                if(363<=mouse_y && mouse_y<=383 && data.sk6<10)
                {
                    if(data.ob4>=data.sk6)
                    {
                        data.ob4-=data.sk6;
                        data.sk6++;
                        localSave(id,data);
                        statcal();
                    }
                    else
                        alert('재료가 부족합니다.');
                }
                if(403<=mouse_y && mouse_y<=423 && data.sk7<10)
                {
                    if(data.ob4>=data.sk7)
                    {
                        data.ob4-=data.sk7;
                        data.sk7++;
                        localSave(id,data);
                        statcal();
                    }
                    else
                        alert('재료가 부족합니다.');
                }
                if(443<=mouse_y && mouse_y<=463 && data.sk8<10)
                {
                    if(data.ob4>=data.sk8)
                    {
                        data.ob4-=data.sk8;
                        data.sk8++;
                        localSave(id,data);
                        statcal();
                    }
                    else
                        alert('재료가 부족합니다.');
                }
            }
        }
    }
    if(menu==7)
    {
        if(480<=mouse_y && mouse_y<=525)
        {
            if(181<=mouse_x && mouse_x<=371)
            {
                if(data.gol>=100000000 && data.ob3>=10 && data.ob5>=1)
                {
                    for(let i=0; i<6; i++)
                        data.chu4[i] = randrare(data.hpr/100);
                    data.gol-=100000000;
                    data.ob3-=10;
                    data.ob5-=1;
                    data.hpr+=10;
                    statcal();
                    localSave(id,data)
                }
                else
                    alert('재료가 부족합니다.');
            }
            if(181+288<=mouse_x && mouse_x<=371+288)
            {
                if(data.gol>=100000000 && data.ob3>=10 && data.ob5>=1)
                {
                    for(let i=0; i<6; i++)
                        data.chu5[i] = randrare(data.hpr/100);
                    data.gol-=100000000;
                    data.ob3-=10;
                    data.ob5-=1;
                    data.hpr+=10;
                    statcal();
                    localSave(id,data)
                }
                else
                    alert('재료가 부족합니다.');
            }
            if(181+576<=mouse_x && mouse_x<=371+576)
            {
                if(data.gol>=100000000 && data.ob3>=10 && data.ob5>=1)
                {
                    for(let i=0; i<6; i++)
                        data.chu6[i] = randrare(data.hpr/100);
                    data.gol-=100000000;
                    data.ob3-=10;
                    data.ob5-=1;
                    data.hpr+=10;
                    statcal();
                    localSave(id,data)
                }
                else
                    alert('재료가 부족합니다.');
            }
        }
    }
};

let col=1;
let ani=0;
let bgonoff=0;

class vfx{
    constructor(x,y,type){
        this.x=x;
        this.y=y;
        this.type=type;
        this.t=6;
    }
}
let vfxs=[]


function step()
{
    ani+=0.2;
    switch(data.job)
    {
        case 1: jobname='군인'; break;
        case 2: jobname='전사'; break;
        case 3: jobname='궁수'; break;
        case 4: jobname='도적'; break;
        case 5: jobname='마법사'; break;
    }
    col+=1;

    let dmg=0;
    if(col%Math.floor(6000/stat.ats)==0)
    {
        dmg=stat.atk;
        if(randint(100)<stat.crp)
            dmg*=stat.crd/100;
        dmg*=(stat.fid+100)/100;
        dmg*=(100-endd+stat.dep)/100;
        enhpn-=dmg;

        vfxs.push(new vfx(672,64-16+64,randint(2)+1));

        if(enhpn<=0)
        {
            data.gol+=Math.floor((enmo+data.sk7*10)*stat.mod/100);
            data.exp+=enxp*(1+data.sk8*2/100);
            diffcal();
            data.mop++;

            if(randint(100)<3*stat.itd/100)
                data.ob1++;
            if(randint(100)<stat.itd/100)
                data.ob2++;
            if(randint(1000)<5*stat.itd/100)
                if(data.don>=31)
                    data.ob3++;
            if(randint(10000)<5*stat.itd/100)
                if(data.don>=51)
                    data.ob5++;
            while(data.exp>=90+data.lv*9.99 + data.lv*data.lv*0.01)
            {
                data.exp-=90+data.lv*9.99 + data.lv*data.lv*0.01;
                data.lv++;
                statcal();
            }
            localSave(id,data);
        }
    }

    vfxs.forEach((obj,index)=>{
        obj.t--;
        if(obj.t<=0)
        vfxs.splice(index,1);
    });

    if(data.sk1>0)
        data.sk1--;
    if(data.sk1<0)
        data.sk1=0;
    if(data.sk2>0)
        data.sk2--;
    if(data.sk2<0)
        data.sk2=0;
}

function draw()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.font='36px 궁서체';

    if(bgonoff===1)
    {
        if(data.don<=10)
            for(let i=0; i<9; i++)
                ctx.drawImage(spr_bg1,160*i-Math.floor(ani)%160,0);
        else if(data.don<=20)
            for(let i=0; i<9; i++)
                ctx.drawImage(spr_bg2,160*i-Math.floor(ani)%160,0);
        else if(data.don<=30)
            for(let i=0; i<9; i++)
                ctx.drawImage(spr_bg3,160*i-Math.floor(ani)%160,0);
        else if(data.don<=40)
            for(let i=0; i<9; i++)
                ctx.drawImage(spr_bg4,160*i-Math.floor(ani)%160,0);
        else if(data.don<=50)
            for(let i=0; i<9; i++)
                ctx.drawImage(spr_bg5,160*i-Math.floor(ani)%160,0);
        else if(data.don<=60)
            for(let i=0; i<9; i++)
                ctx.drawImage(spr_bg6,160*i-Math.floor(ani)%160,0);
        ctx.fillText('배경 : ON',4,180);
    }
    else
        ctx.fillText('배경 : OFF',4,180);

    ctx.drawImage(spr_player,544,128-16);
    if(data.don<=10)
    {
        ctx.drawImage(spr_enemy1,672,64-16);
        ctx.strokeRect(672,64-16-12+64,64,10);
        ctx.fillRect(672,64-16-12+64,64*(enhpn/enhp),10);
    }
    else if(data.don<=20)
    {
        ctx.drawImage(spr_enemy2,672,64-16);
        ctx.strokeRect(672,64-16-10+54,64,10);
        ctx.fillRect(672,64-16-10+54,64*(enhpn/enhp),10);
    }
    else if(data.don<=30)
    {
        ctx.drawImage(spr_enemy3,672,64-16);
        ctx.strokeRect(672,64-16-10+44,64,10);
        ctx.fillRect(672,64-16-10+44,64*(enhpn/enhp),10);
    }
    else if(data.don<=40)
    {
        ctx.drawImage(spr_enemy4,672,64-16);
        ctx.strokeRect(672,64-16-10+34,64,10);
        ctx.fillRect(672,64-16-10+34,64*(enhpn/enhp),10);
    }
    else if(data.don<=50)
    {
        ctx.drawImage(spr_enemy5,672,64-16);
        ctx.strokeRect(672,64-16-10+24,64,10);
        ctx.fillRect(672,64-16-10+24,64*(enhpn/enhp),10);
    }
    else if(data.don<=60)
    {
        ctx.drawImage(spr_enemy6,672,64-16);
        ctx.strokeRect(672,64-16-10+10,64,10);
        ctx.fillRect(672,64-16-10+10,64*(enhpn/enhp),10);
    }

    vfxs.forEach((obj,index)=>{
        switch(obj.type)
        {
            case 1: ctx.drawImage(spr_vfx1, obj.x, obj.y); break;
            case 2: ctx.drawImage(spr_vfx2, obj.x, obj.y); break;
        }
    });

    ctx.strokeRect(0,192,1280,530);
    ctx.strokeRect(1,191,1278,528);
    ctx.strokeRect(0,192,128,530);
    ctx.strokeRect(1,191,127,530);

    ctx.strokeRect(4,196,120,64);
    ctx.strokeRect(4,268,120,64);

    ctx.font = '24px 궁서체';
    ctx.fillText('캐릭터',28,196+40);
    ctx.fillText('아이템',28,268+40);
    ctx.fillText('특수장비',15,340+40);
    ctx.fillText('연금술',28,484+40);
    ctx.fillText('2차전직',25,556+40);
    ctx.fillText('유물',40,628+40);
    ctx.font = '18px 궁서체';
    ctx.fillText('환생의 불꽃',12,412+40);
    ctx.font = '36px 궁서체';
    
    ctx.strokeRect(4,340,120,64);
    ctx.strokeRect(4,412,120,64);
    ctx.strokeRect(4,484,120,64);
    ctx.strokeRect(4,556,120,64);
    ctx.strokeRect(4,628,120,64);

    let diff='';
    if(data.don<=10) diff='쉬움'+(data.don);
    else if(data.don<=20) diff='보통'+(data.don-10);
    else if(data.don<=30) diff='어려움'+(data.don-20);
    else if(data.don<=40) diff='지옥'+(data.don-30);
    else if(data.don<=50) diff='파멸'+(data.don-40);
    else if(data.don<=60) diff='종말'+(data.don-50);
    diff ='◀  ' + diff + '  ▶';
    ctx.fillText(diff,4,40);

    ctx.font = '16px 궁서체';
    ctx.fillText('적 체력 : '+enhp,1150,24);
    ctx.fillText('적 방어력 : '+endd,1150,44);
    ctx.fillText('적 경험치 : '+Math.floor((enxp*(1+data.sk8*2/100))),1150,64);
    ctx.fillText('적 골드 : '+(enmo+data.sk7*10),1150,84);

    if(menu==1)
    {
        ctx.font = '24px 궁서체';
        ctx.fillText(data.id + '(레벨' + data.lv + ' ' + jobname + ')',130,220);
        ctx.fillText('경험치 : ' + Math.floor(data.exp) + '/' + Math.floor(90+data.lv*9.99+data.lv*data.lv*0.01),140,250);
        ctx.fillText('공격력 : ' + stat.atk + ' ( ' + stat.atks + ' + ' + stat.atkp + '% )',140,280);
        ctx.fillText('방어력 관통 : ' + stat.dep,140,310);
        ctx.fillText('치명타 확률 : ' + stat.crp + '%',140,340);
        ctx.fillText('치명타 피해배율 : ' + stat.crd + '% ( ' + stat.crds + ' + ' + stat.crdp + '% )',140,370);
        ctx.fillText('최종 데미지 : ' + stat.fid + '% (' + stat.fidt + ')',140,400);
        ctx.fillText('이동속도 : ' + stat.spd + ' ( ' + stat.spds + ' + ' + stat.spdp + '% )',140,430);
        ctx.fillText('공격속도 : ' + stat.ats + ' ( ' + stat.atss + ' + ' + stat.atsp + '% )',140,460);
        ctx.fillText('골드 획득량 : ' + stat.mod + '% ( ' + stat.mods + ' + ' + stat.modp + '% )',140,490);
        ctx.fillText('아이템 획득량 : ' + stat.itd + '% ( ' + stat.itds + ' + ' + stat.itdp + '% )',140,520);
        ctx.fillText('옵션 희귀도 : ' + Math.floor(data.opr) + '%',140,550);
        ctx.fillText('처치한 몬스터 : ' + data.mop,140,610);
        ctx.fillText('전투력 : ' + stat.power,140,670);
        ctx.fillText('골드 : ' + numtext(data.gol),740,250);
        ctx.fillText('카오스 오브 : ' + numtext(data.ob1),740,280);
        ctx.fillText('에디셔널 카오스 오브 : ' + numtext(data.ob2),740,310);
        ctx.fillText('불꽃 오브 : ' + numtext(data.ob3),740,340);
        ctx.fillText('코스모스 오브 : ' + numtext(data.ob4),740,370);
        ctx.fillText('신성한 오브 : ' + numtext(data.ob5),740,400);
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(4,196,120,64);
        ctx.fillStyle = "rgba(0,0,0,1)";
    }
    else if(menu==2)
    {
        ctx.font = '16px 궁서체';
        ctx.fillText('골드 : ' + numtext(data.gol),740+280,250);
        ctx.fillText('카오스 오브 : ' + numtext(data.ob1),740+280,280);
        ctx.fillText('에디셔널 카오스 오브 : ' + numtext(data.ob2),740+280,310);
        ctx.fillText('옵션 희귀도 : ' + Math.floor(data.opr) + '%',740+280,370);

        calrarep(data.opr/100);
        for(let i=0; i<6; i++)
        {
            switch(i)
            {
                case 0: ctx.fillStyle = "rgba(128,128,128,1)"; break;
                case 1: ctx.fillStyle = "rgba(34,177,76,1)"; break;
                case 2: ctx.fillStyle = "rgba(0,162,232,1)"; break;
                case 3: ctx.fillStyle = "rgba(163,73,164,1)"; break;
                case 4: ctx.fillStyle = "rgba(255,127,39,1)"; break;
                case 5: ctx.fillStyle = "rgba(0,0,0,1)"; break;
            }
            ctx.fillRect(1020,380+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
            switch(i)
            {
                case 0: ctx.fillText(rarep1+'%',1035,392+20*i); break;
                case 1: ctx.fillText(rarep2+'%',1035,392+20*i); break;
                case 2: ctx.fillText(rarep3+'%',1035,392+20*i); break;
                case 3: ctx.fillText(rarep4+'%',1035,392+20*i); break;
                case 4: ctx.fillText(rarep5+'%',1035,392+20*i); break;
                case 5: ctx.fillText(rarep6+'%',1035,392+20*i); break;
            }
        }
        let itmhead = '';
        if(data.itm1<=4)
            {itmhead='일반 '; ctx.strokeStyle="rgba(128,128,128,1)";}
        else if(data.itm1<=9)
            {itmhead='고급 '; ctx.strokeStyle="rgba(34,177,76,1)";}
        else if(data.itm1<=14)
            {itmhead='희귀 '; ctx.strokeStyle="rgba(0,162,232,1)";}
        else if(data.itm1<=19)
            {itmhead='영웅 '; ctx.strokeStyle="rgba(163,73,164,1)";}
        else if(data.itm1<=24)
            {itmhead='전설 '; ctx.strokeStyle="rgba(255,127,39,1)";}
        else if(data.itm1==25)
            {itmhead='수퍼고퀄 '; ctx.strokeStyle="rgba(0,0,0,1)";}
        ctx.strokeRect(132,196,280,520);
        ctx.strokeStyle = "rgba(0,0,0,1)";
        
        let starforce1 = '';
        let starforce2 = '';
        if(data.itm1<=15)
        {
            for(let i=0; i<data.itm1; i++)
            {
                starforce1+='★';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=data.itm1; i<15; i++)
            {
                starforce1+='☆';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=0; i<10; i++)
            {
                starforce2+='☆';
                if(i%5==4)
                    starforce2+=' ';
            }
        }
        else
        {
            for(let i=0; i<15; i++)
            {
                starforce1+='★';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=0; i<data.itm1-15; i++)
            {
                starforce2+='★';
                if(i%5==4)
                    starforce2+=' ';
            }
            for(let i=data.itm1-15; i<10; i++)
            {
                starforce2+='☆';
                if(i%5==4)
                    starforce2+=' ';
            }
        }
        ctx.fillText(starforce1,145,212);
        ctx.fillText(starforce2,190,230);

        ctx.font = '24px 궁서체';
        if(data.itm1!=25)
            ctx.fillText(itmhead + '무기 (+' + data.itm1 + ')',188,260);
        else
            ctx.fillText(itmhead + '무기 (+' + data.itm1 + ')',160,260);

        ctx.font = '16px 궁서체';    
        itmhead = '';
        if(data.itm2<=4)
            {itmhead='일반 '; ctx.strokeStyle="rgba(128,128,128,1)";}
        else if(data.itm2<=9)
            {itmhead='고급 '; ctx.strokeStyle="rgba(34,177,76,1)";}
        else if(data.itm2<=14)
            {itmhead='희귀 '; ctx.strokeStyle="rgba(0,162,232,1)";}
        else if(data.itm2<=19)
            {itmhead='영웅 '; ctx.strokeStyle="rgba(163,73,164,1)";}
        else if(data.itm2<=24)
            {itmhead='전설 '; ctx.strokeStyle="rgba(255,127,39,1)";}
        else if(data.itm2==25)
            {itmhead='수퍼고퀄 '; ctx.strokeStyle="rgba(0,0,0,1)";}
        ctx.strokeRect(132+288,196,280,520);
        ctx.strokeStyle = "rgba(0,0,0,1)";

        starforce1 = '';
        starforce2 = '';
        if(data.itm2<=15)
        {
            for(let i=0; i<data.itm2; i++)
            {
                starforce1+='★';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=data.itm2; i<15; i++)
            {
                starforce1+='☆';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=0; i<10; i++)
            {
                starforce2+='☆';
                if(i%5==4)
                    starforce2+=' ';
            }
        }
        else
        {
            for(let i=0; i<15; i++)
            {
                starforce1+='★';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=0; i<data.itm2-15; i++)
            {
                starforce2+='★';
                if(i%5==4)
                    starforce2+=' ';
            }
            for(let i=data.itm2-15; i<10; i++)
            {
                starforce2+='☆';
                if(i%5==4)
                    starforce2+=' ';
            }
        }
        ctx.fillText(starforce1,145+288,212);
        ctx.fillText(starforce2,190+288,230);

        ctx.font = '24px 궁서체';
        if(data.itm2!=25)
            ctx.fillText(itmhead + '방어구 (+' + data.itm2 + ')',176+288,260);
        else
            ctx.fillText(itmhead + '방어구 (+' + data.itm2 + ')',148+288,260);

    
        ctx.font = '16px 궁서체';    
        itmhead = '';
        if(data.itm3<=4)
            {itmhead='일반 '; ctx.strokeStyle="rgba(128,128,128,1)";}
        else if(data.itm3<=9)
            {itmhead='고급 '; ctx.strokeStyle="rgba(34,177,76,1)";}
        else if(data.itm3<=14)
            {itmhead='희귀 '; ctx.strokeStyle="rgba(0,162,232,1)";}
        else if(data.itm3<=19)
            {itmhead='영웅 '; ctx.strokeStyle="rgba(163,73,164,1)";}
        else if(data.itm3<=24)
            {itmhead='전설 '; ctx.strokeStyle="rgba(255,127,39,1)";}
        else if(data.itm3==25)
            {itmhead='수퍼고퀄 '; ctx.strokeStyle="rgba(0,0,0,1)";}
        ctx.strokeRect(132+576,196,280,520);
        ctx.strokeStyle = "rgba(0,0,0,1)";

        starforce1 = '';
        starforce2 = '';
        if(data.itm3<=15)
        {
            for(let i=0; i<data.itm3; i++)
            {
                starforce1+='★';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=data.itm3; i<15; i++)
            {
                starforce1+='☆';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=0; i<10; i++)
            {
                starforce2+='☆';
                if(i%5==4)
                    starforce2+=' ';
            }
        }
        else
        {
            for(let i=0; i<15; i++)
            {
                starforce1+='★';
                if(i%5==4)
                    starforce1+=' ';
            }
            for(let i=0; i<data.itm3-15; i++)
            {
                starforce2+='★';
                if(i%5==4)
                    starforce2+=' ';
            }
            for(let i=data.itm3-15; i<10; i++)
            {
                starforce2+='☆';
                if(i%5==4)
                    starforce2+=' ';
            }
        }
        ctx.fillText(starforce1,145+576,212);
        ctx.fillText(starforce2,190+576,230);

        ctx.font = '24px 궁서체';
        if(data.itm3!=25)
            ctx.fillText(itmhead + '장신구 (+' + data.itm3 + ')',176+576,260);
        else
            ctx.fillText(itmhead + '장신구 (+' + data.itm3 + ')',148+576,260);

        let itadd1 = 0;
        let itadd2 = 0;
        let itadd3 = 0;

        if(data.itm1 <=14)
            itadd1 = 100*data.itm1 + 100;
        else if(data.itm1<=19)
            itadd1 = 200*data.itm1-1300;
        else if(data.itm1<=24)
            itadd1 = 300*data.itm1-3200;
        else if(data.itm1==25)
            itadd1 = 5000;

        if(data.itm2 <=14)
            itadd2 = data.itm2 + 1;
        else if(data.itm2<=19)
            itadd2 = 2*data.itm2-13;
        else if(data.itm2<=24)
            itadd2 = 3*data.itm2-32;
        else if(data.itm2==25)
            itadd2 = 50;

        if(data.itm3 <=14)
            itadd3 = 100*data.itm3 + 100;
        else if(data.itm3<=19)
            itadd3 = 200*data.itm3-1300;
        else if(data.itm3<=24)
            itadd3 = 300*data.itm3-3200;
        else if(data.itm3==25)
            itadd3 = 5000;

        ctx.fillText('잠재옵션',140,330);
        ctx.fillText('잠재옵션',140+288,330);
        ctx.fillText('잠재옵션',140+576,330);
        ctx.fillText('에디셔널 잠재옵션',140,500);
        ctx.fillText('에디셔널 잠재옵션',140+288,500);
        ctx.fillText('에디셔널 잠재옵션',140+576,500);

        ctx.font ='16px 궁서체';
        ctx.fillText('공격력 +'+itadd1,140,290);
        ctx.fillText('방어력 관통 +'+itadd2,140+288,290);
        ctx.fillText('골드 획득량 +'+itadd3+'%p',140+576,290);

        let optmax = 0;
        if(data.itm1<=4) optmax=1;
        else if(data.itm1<=9) optmax=2;
        else if(data.itm1<=14) optmax=3;
        else if(data.itm1<=19) optmax=4;
        else if(data.itm1<=24) optmax=5;
        else if(data.itm1==25) optmax=6;
        for(let i=0; i<optmax; i++)
        {
            let ra=Math.floor(data.chu1[i]/10);
            if(ra==6) ra=10;
            let op=data.chu1[i]%10;
            let txe = '';
            switch(op)
            {
                case 1: txe='공격력 +'+ra*100; break;
                case 2: txe='치명타 확률 +' + (ra*10) + '%p'; break;
                case 3: txe='치명타 피해배율 +' + (ra*10) + '%p'; break;
            }
            ctx.fillText(txe,165,350+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle="rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle="rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle="rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle="rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle="rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle="rgba(0,0,0,1)"; break;                
            }
            ctx.fillRect(150,338+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        for(let i=0; i<optmax; i++)
        {
            let ra=Math.floor(data.jam1[i]/10);
            if(ra==6) ra=10;
            let op=data.jam1[i]%10;
            let txe = '';
            switch(op)
            {
                case 1: txe='공격력 +'+(ra*2) + '%'; break;
                case 2: txe='치명타 피해배율 +' + (ra*3) + '%'; break;
                case 3: txe='최종 데미지 +' + (ra*2) + '%'; break;
            }
            ctx.fillText(txe,165,520+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle="rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle="rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle="rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle="rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle="rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle="rgba(0,0,0,1)"; break;                
            }
            ctx.fillRect(150,508+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        if(data.itm1<=24)
        {
            ctx.strokeRect(150,644,34,20);
            ctx.fillText('강화',150,660);
            ctx.fillText(numtext(20*Math.pow(2,data.itm1))+'골드',190,660);
        }
        ctx.strokeRect(150,668,120,20); ctx.fillText('잠재옵션 재설정',150,684);
        ctx.strokeRect(150,692,192,20); ctx.fillText('에디셔널 잠재옵션 재설정',150,708);

        optmax = 0;
        if(data.itm2<=4) optmax=1;
        else if(data.itm2<=9) optmax=2;
        else if(data.itm2<=14) optmax=3;
        else if(data.itm2<=19) optmax=4;
        else if(data.itm2<=24) optmax=5;
        else if(data.itm2==25) optmax=6;
        for(let i=0; i<optmax; i++)
        {
            let ra=Math.floor(data.chu2[i]/10);
            if(ra==6) ra=10;
            let op=data.chu2[i]%10;
            let txe = '';
            switch(op)
            {
                case 1: txe='이동속도 +' + ra; break;
                case 2: txe='공격속도 +' + (ra*4); break;
            }
            ctx.fillText(txe,165+288,350+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle="rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle="rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle="rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle="rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle="rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle="rgba(0,0,0,1)"; break;                
            }
            ctx.fillRect(150+288,338+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        for(let i=0; i<optmax; i++)
        {
            let ra=Math.floor(data.jam2[i]/10);
            if(ra==6) ra=10;
            let op=data.jam2[i]%10;
            let txe = '';
            switch(op)
            {
                case 1: txe='이동속도 +' + (ra*2) + '%'; break;
                case 2: txe='공격속도 +' + (ra*2) + '%'; break;
            }
            ctx.fillText(txe,165+288,520+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle="rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle="rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle="rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle="rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle="rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle="rgba(0,0,0,1)"; break;                
            }
            ctx.fillRect(150+288,508+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        if(data.itm2<=24)
        {
            ctx.strokeRect(150+288,644,34,20);
            ctx.fillText('강화',150+288,660);
            ctx.fillText(numtext(20*Math.pow(2,data.itm2))+'골드',190+288,660);
        }
        ctx.strokeRect(150+288,668,120,20); ctx.fillText('잠재옵션 재설정',150+288,684);
        ctx.strokeRect(150+288,692,192,20); ctx.fillText('에디셔널 잠재옵션 재설정',150+288,708);

        optmax = 0;
        if(data.itm3<=4) optmax=1;
        else if(data.itm3<=9) optmax=2;
        else if(data.itm3<=14) optmax=3;
        else if(data.itm3<=19) optmax=4;
        else if(data.itm3<=24) optmax=5;
        else if(data.itm3==25) optmax=6;
        for(let i=0; i<optmax; i++)
        {
            let ra=Math.floor(data.chu3[i]/10);
            if(ra==6) ra=10;
            let op=data.chu3[i]%10;
            let txe = '';
            switch(op)
            {
                case 1: txe='골드 획득량 +' + ra*100 + '%p'; break;
                case 2: txe='아이템 획득량 +' + ra*10 + '%p'; break;
            }
            ctx.fillText(txe,165+576,350+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle="rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle="rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle="rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle="rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle="rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle="rgba(0,0,0,1)"; break;                
            }
            ctx.fillRect(150+576,338+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        for(let i=0; i<optmax; i++)
        {
            let ra=Math.floor(data.jam3[i]/10);
            if(ra==6) ra=10;
            let op=data.jam3[i]%10;
            let txe = '';
            switch(op)
            {
                case 1: txe='골드 획득량 +' + ra*3 + '%'; break;
                case 2: txe='아이템 획득량 +' + ra*3 + '%'; break;
            }
            ctx.fillText(txe,165+576,520+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle="rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle="rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle="rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle="rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle="rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle="rgba(0,0,0,1)"; break;                
            }
            ctx.fillRect(150+576,508+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        if(data.itm3<=24)
        {
            ctx.strokeRect(150+576,644,34,20);
            ctx.fillText('강화',150+576,660);
            ctx.fillText(numtext(20*Math.pow(2,data.itm3))+'골드',190+576,660);
        }
        ctx.strokeRect(150+576,668,120,20); ctx.fillText('잠재옵션 재설정',150+576,684);
        ctx.strokeRect(150+576,692,192,20); ctx.fillText('에디셔널 잠재옵션 재설정',150+576,708);

        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(4,268,120,64);
        ctx.fillStyle = "rgba(0,0,0,1)";
    }
    else if(menu==3)
    {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(4,340,120,64);
        ctx.fillStyle = "rgba(0,0,0,1)";

        ctx.font = '16px 궁서체';
        ctx.fillText('골드 : ' + numtext(data.gol),740+280,250);
        ctx.strokeRect(132,196,280,256);
        ctx.strokeRect(420,196,280,256);
        ctx.strokeRect(708,196,280,256);
        ctx.strokeRect(132,196+264,280,256);
        ctx.strokeRect(420,196+264,280,256);
        ctx.strokeRect(708,196+264,280,256);

        let starforce1 = '';
        for(let i=0; i<data.itm4; i++) starforce1+='★';
        for(let i=data.itm4; i<10; i++) starforce1+='☆';
        ctx.fillText(starforce1,195,212);
        starforce1 = '';
        for(let i=0; i<data.itm5; i++) starforce1+='★';
        for(let i=data.itm5; i<10; i++) starforce1+='☆';
        ctx.fillText(starforce1,195+288,212);
        starforce1 = '';
        for(let i=0; i<data.itm6; i++) starforce1+='★';
        for(let i=data.itm6; i<10; i++) starforce1+='☆';
        ctx.fillText(starforce1,195+576,212);

        ctx.font = '24px 궁서체';
        ctx.fillText('보조무기 (+' + data.itm4 +')',196,240);
        ctx.fillText('장갑 (+' + data.itm5 +')',484+24,240);
        ctx.fillText('팬던트 (+' + data.itm6 +')',772+12,240);
        
        ctx.font = '16px 궁서체';
        ctx.fillText('공격력 +' + data.itm4*100,140,290);
        ctx.fillText('치명타 피해배율 +' + data.itm5*10 +'%p',140+288,290);
        ctx.fillText('골드 획득량 +' + data.itm6*100 +'%p',140+576,290);

        if(data.itm4<10)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241,330,70,45);
            ctx.fillText('강화',250,360);
            ctx.font = '16px 궁서체';
            ctx.fillText('강화비용 : 10만 0000골드',140,395);
            ctx.fillText('성공확률 : ' + (10-data.itm4)*10 + '%',140,415);
            ctx.fillStyle = "rgba(255,0,0,1)";
            ctx.fillText('강화에 실패하면 등급이 하락합니다.',138,435);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        if(data.itm5<10)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241+288,330,70,45);
            ctx.fillText('강화',250+288,360);
            ctx.font = '16px 궁서체';
            ctx.fillText('강화비용 : 10만 0000골드',140+288,395);
            ctx.fillText('성공확률 : ' + (10-data.itm5)*10 + '%',140+288,415);
            ctx.fillStyle = "rgba(255,0,0,1)";
            ctx.fillText('강화에 실패하면 등급이 하락합니다.',138+288,435);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        if(data.itm6<10)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241+576,330,70,45);
            ctx.fillText('강화',250+576,360);
            ctx.font = '16px 궁서체';
            ctx.fillText('강화비용 : 10만 0000골드',140+576,395);
            ctx.fillText('성공확률 : ' + (10-data.itm6)*10 + '%',140+576,415);
            ctx.fillStyle = "rgba(255,0,0,1)";
            ctx.fillText('강화에 실패하면 등급이 하락합니다.',138+576,435);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }

        starforce1 = '';
        for(let i=0; i<data.itm7; i++) starforce1+='★';
        for(let i=data.itm7; i<10; i++) starforce1+='☆';
        ctx.fillText(starforce1,195,212+264);
        starforce1 = '';
        for(let i=0; i<data.itm8; i++) starforce1+='★';
        for(let i=data.itm8; i<10; i++) starforce1+='☆';
        ctx.fillText(starforce1,195+288,212+264);
        starforce1 = '';
        for(let i=0; i<data.itm9; i++) starforce1+='★';
        for(let i=data.itm9; i<10; i++) starforce1+='☆';
        ctx.fillText(starforce1,195+576,212+264);

        ctx.font = '24px 궁서체';
        ctx.fillText('망토 (+' + data.itm7 +')',196+24,240+264);
        ctx.fillText('신발 (+' + data.itm8 +')',484+24,240+264);
        ctx.fillText('귀걸이 (+' + data.itm9 +')',772+12,240+264);
        
        ctx.font = '16px 궁서체';
        ctx.fillText('공격속도 +' + data.itm7*4,140,290+264);
        ctx.fillText('이동속도 +' + data.itm8*4,140+288,290+264);
        ctx.fillText('골드 획득량 +' + data.itm9*100 +'%p',140+576,290+264);

        if(data.itm7<10)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241,330+264,70,45);
            ctx.fillText('강화',250,360+264);
            ctx.font = '16px 궁서체';
            ctx.fillText('강화비용 : ' + 1000*(data.itm7+1) + '만 0000골드',140,395+264);
            ctx.fillText('성공확률 : ' + (100-data.itm7*8) + '%',140,415+264);
            ctx.fillStyle = "rgba(255,0,0,1)";
            ctx.fillText('강화에 실패하면 등급이 하락합니다.',138,435+264);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        if(data.itm8<10)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241+288,330+264,70,45);
            ctx.fillText('강화',250+288,360+264);
            ctx.font = '16px 궁서체';
            ctx.fillText('강화비용 : ' + 1000*(data.itm8+1) + '만 0000골드',140+288,395+264);
            ctx.fillText('성공확률 : ' + (100-data.itm8*8) + '%',140+288,415+264);
            ctx.fillStyle = "rgba(255,0,0,1)";
            ctx.fillText('강화에 실패하면 등급이 하락합니다.',138+288,435+264);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        if(data.itm9<10)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241+576,330+264,70,45);
            ctx.fillText('강화',250+576,360+264);
            ctx.font = '16px 궁서체';
            ctx.fillText('강화비용 : ' + 1000*(data.itm9+1) + '만 0000골드',140+576,395+264);
            ctx.fillText('성공확률 : ' + (100-data.itm9*8) + '%',140+576,415+264);
            ctx.fillStyle = "rgba(255,0,0,1)";
            ctx.fillText('강화에 실패하면 등급이 하락합니다.',138+576,435+264);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
    }
    else if(menu==4)
    {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(4,412,120,64);
        ctx.fillStyle = "rgba(0,0,0,1)";

        ctx.font = '16px 궁서체';
        ctx.fillText('카오스 오브 : ' + numtext(data.ob1),740+280,250);
        ctx.fillText('에디셔널 카오스 오브 : ' + numtext(data.ob2),740+280,270);
        ctx.fillText('불꽃 오브 : ' + numtext(data.ob3),740+280,290);
        ctx.fillText('불꽃 오브는 지옥 이상',740+280,330);
        ctx.fillText('난이도에서 드랍됩니다.',740+280,350);

        ctx.strokeRect(132,196,280,520);
        ctx.strokeRect(420,196,280,520);
        ctx.strokeRect(708,196,280,520);

        ctx.font = '24px 궁서체';
        ctx.fillText('환생의 불꽃',196,225);
        ctx.fillText('강력한 환생의 불꽃',484-36,230);
        ctx.fillText('영원한 환생의 불꽃',772-36,230);

        ctx.drawImage(spr_fire1,208,240);
        ctx.drawImage(spr_fire2,208+288,240);
        ctx.drawImage(spr_fire3,208+576,240);
        ctx.strokeRect(208,240,128,128);
        ctx.strokeRect(208+288,240,128,128);
        ctx.strokeRect(208+576,240,128,128);

        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(208,240+128*data.sk1/216000,128,128*(216000-data.sk1)/216000);
        ctx.fillRect(208+288,240+128*data.sk2/36000,128,128*(36000-data.sk2)/36000);
        ctx.fillRect(208+576,240+128*data.sk3,128,128*(1-data.sk3));
        ctx.fillStyle = "rgba(0,0,0,1)";

        ctx.font = '16px 궁서체';
        ctx.fillText('활성 효과 : 최종데미지 +10%',140,400);
        ctx.fillText('지속 시간 : 1시간',140,420);
        ctx.fillText('활성 효과 : 최종데미지 +25%',140+288,400);
        ctx.fillText('지속 시간 : 10분',140+288,420);
        ctx.fillText('활성 효과 : 최종데미지 +10%',140+576,400);
        ctx.fillText('지속 시간 : 무한',140+576,420);

        if(data.sk1==0)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241,450,70,45);
            ctx.fillText('활성',250,480);
            ctx.font = '16px 궁서체';
            ctx.fillText('활성 비용',140,515);
            ctx.fillText('  불꽃 오브 10개',140,535);
            ctx.fillText('  카오스 오브 100개',140,555);
        }
        if(data.sk2==0)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241+288,450,70,45);
            ctx.fillText('활성',250+288,480);
            ctx.font = '16px 궁서체';
            ctx.fillText('활성 비용',140+288,515);
            ctx.fillText('  불꽃 오브 100개',140+288,535);
            ctx.fillText('  카오스 오브 300개',140+288,555);
        }
        if(data.sk3==0)
        {
            ctx.font = '24px 궁서체';
            ctx.strokeRect(241+576,450,70,45);
            ctx.fillText('활성',250+576,480);
            ctx.font = '16px 궁서체';
            ctx.fillText('활성 비용',140+576,515);
            ctx.fillText('  불꽃 오브 1000개',140+576,535);
            ctx.fillText('  카오스 오브 6666개',140+576,555);
            ctx.fillText('  에디셔널 카오스 오브 2222개',140+576,575);
        }
    }
    else if(menu==5)
    {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(4,484,120,64);
        ctx.fillStyle = "rgba(0,0,0,1)";

        ctx.strokeRect(132,196,280,256);
        ctx.strokeRect(420,196,280,256);
        ctx.strokeRect(708,196,280,256);

        ctx.font = '16px 궁서체';
        ctx.fillText('골드 : ' + numtext(data.gol),740+280,230);
        ctx.fillText('카오스 오브 : ' + numtext(data.ob1),740+280,250);
        ctx.fillText('에디셔널 카오스 오브 : ' + numtext(data.ob2),740+280,270);
        ctx.fillText('불꽃 오브 : ' + numtext(data.ob3),740+280,290);
        ctx.fillText('코스모스 오브 : ' + numtext(data.ob4),740+280,310);

        ctx.font = '24px 궁서체';
        ctx.strokeRect(241,330+60,70,45);
        ctx.fillText('제작',250,360+60);
        ctx.strokeRect(241+288,330+60,70,45);
        ctx.fillText('제작',250+288,360+60);
        ctx.strokeRect(241+576,330+60,70,45);
        ctx.fillText('제작',250+576,360+60);

        ctx.font = '16px 궁서체';
        ctx.fillText('<재료>',140,215);
        ctx.fillText('100 카오스 오브',140,235);
        ctx.fillText('10 불꽃 오브',140,255);
        ctx.fillText('<결과>',140,325);
        ctx.fillText('300만 0000골드',140,345);
        
        ctx.fillText('<재료>',140+288,215);
        ctx.fillText('100 에디셔널 카오스 오브',140+288,235);
        ctx.fillText('10 불꽃 오브',140+288,255);
        ctx.fillText('<결과>',140+288,325);
        ctx.fillText('1000만 0000골드',140+288,345);
        
        ctx.fillText('<재료>',140+576,215);
        ctx.fillText('100 카오스 오브',140+576,235);
        ctx.fillText('100 에디셔널 카오스 오브',140+576,255);
        ctx.fillText('10 불꽃 오브',140+576,275);
        ctx.fillText('2000만 0000골드',140+576,295);
        ctx.fillText('<결과>',140+576,325);
        ctx.fillText('1 코스모스 오브',140+576,345);

        if(data.sk6>0)
        {
            ctx.fillText('<재료>',140,215+264);
            ctx.fillText('100 카오스 오브',140,235+264);
            ctx.fillText('<결과>',140,325+264);
            ctx.fillText('옵션 희귀도 +' + data.sk6*10 + '%p',140,345+264);
            ctx.strokeRect(132,460,280,256);
            ctx.strokeRect(241,330+60+264,70,45);
            ctx.font='24px 궁서체';
            ctx.fillText('제작',250,360+60+264);
        }
    }
    else if(menu==6)
    {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(4,556,120,64);
        ctx.fillStyle = "rgba(0,0,0,1)";

        if(data.sk4>=1)
        {
            ctx.fillText('코스모스 오브 : ' + numtext(data.ob4),740+280,230);
            ctx.strokeStyle = "rgba(128,128,128,1)";
            for(let i=12; i<=120; i+=12)
            {
                ctx.beginPath();
                ctx.moveTo(50+278+i*Math.cos(Math.PI/10),342-i*Math.sin(Math.PI/10));
                ctx.lineTo(50+278+i*Math.cos(Math.PI/2),342-i*Math.sin(Math.PI/2));
                ctx.lineTo(50+278+i*Math.cos(9*Math.PI/10),342-i*Math.sin(9*Math.PI/10));
                ctx.lineTo(50+278+i*Math.cos(13*Math.PI/10),342-i*Math.sin(13*Math.PI/10));
                ctx.lineTo(50+278+i*Math.cos(17*Math.PI/10),342-i*Math.sin(17*Math.PI/10));
                ctx.lineTo(50+278+i*Math.cos(Math.PI/10),342-i*Math.sin(Math.PI/10));
                ctx.closePath();
                ctx.stroke();
            }
            ctx.strokeStyle="rgba(0,0,0,1)";
            ctx.beginPath();
            ctx.moveTo(50+278+60*Math.cos(Math.PI/10),342-60*Math.sin(Math.PI/10));
            ctx.lineTo(50+278+60*Math.cos(Math.PI/2),342-60*Math.sin(Math.PI/2));
            ctx.lineTo(50+278+60*Math.cos(9*Math.PI/10),342-60*Math.sin(9*Math.PI/10));
            ctx.lineTo(50+278+60*Math.cos(13*Math.PI/10),342-60*Math.sin(13*Math.PI/10));
            ctx.lineTo(50+278+60*Math.cos(17*Math.PI/10),342-60*Math.sin(17*Math.PI/10));
            ctx.lineTo(50+278+60*Math.cos(Math.PI/10),342-60*Math.sin(Math.PI/10));
            ctx.closePath();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(50+278+120*Math.cos(Math.PI/10),342-120*Math.sin(Math.PI/10));
            ctx.lineTo(50+278+120*Math.cos(Math.PI/2),342-120*Math.sin(Math.PI/2));
            ctx.lineTo(50+278+120*Math.cos(9*Math.PI/10),342-120*Math.sin(9*Math.PI/10));
            ctx.lineTo(50+278+120*Math.cos(13*Math.PI/10),342-120*Math.sin(13*Math.PI/10));
            ctx.lineTo(50+278+120*Math.cos(17*Math.PI/10),342-120*Math.sin(17*Math.PI/10));
            ctx.lineTo(50+278+120*Math.cos(Math.PI/10),342-120*Math.sin(Math.PI/10));
            ctx.closePath();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(50+278+12*data.sk8*Math.cos(Math.PI/10),342-12*data.sk8*Math.sin(Math.PI/10));
            ctx.lineTo(50+278+12*data.sk4*Math.cos(Math.PI/2),342-12*data.sk4*Math.sin(Math.PI/2));
            ctx.lineTo(50+278+12*data.sk5*Math.cos(9*Math.PI/10),342-12*data.sk5*Math.sin(9*Math.PI/10));
            ctx.lineTo(50+278+12*data.sk6*Math.cos(13*Math.PI/10),342-12*data.sk6*Math.sin(13*Math.PI/10));
            ctx.lineTo(50+278+12*data.sk7*Math.cos(17*Math.PI/10),342-12*data.sk7*Math.sin(17*Math.PI/10));
            ctx.lineTo(50+278+12*data.sk8*Math.cos(Math.PI/10),342-12*data.sk8*Math.sin(Math.PI/10));
            ctx.closePath();
            ctx.stroke();
            ctx.fill();

            ctx.font = '24px 궁서체';
            ctx.fillText('군인 LV' + data.sk4,50+278+120*Math.cos(Math.PI/2)-50,342-120*Math.sin(Math.PI/2));
            ctx.fillText('전사 LV' + data.sk5,50+278+120*Math.cos(9*Math.PI/10)-80,342-120*Math.sin(9*Math.PI/10)-20);
            ctx.fillText('궁수 LV' + data.sk6,50+278+120*Math.cos(13*Math.PI/10)-80,342-120*Math.sin(13*Math.PI/10)+30);
            ctx.fillText('도적 LV' + data.sk7,50+278+120*Math.cos(17*Math.PI/10)-20,342-120*Math.sin(17*Math.PI/10)+30);
            ctx.fillText('법사 LV' + data.sk8,50+278+120*Math.cos(Math.PI/10),342-120*Math.sin(Math.PI/10)-20);

            ctx.fillText('군인 LV' + data.sk4 + ' : 이동속도 +' + data.sk4*2 + '%',550,300);
            ctx.fillText('전사 LV' + data.sk5 + ' : 방어력 관통 +' + data.sk5,550,340);
            ctx.fillText('궁수 LV' + data.sk6 + ' : 연금술 레시피 추가, 효율 +' + data.sk6*10 + '%',550,380);
            ctx.fillText('도적 LV' + data.sk7 + ' : 적이 ' + data.sk7*10 + '골드를 추가로 드랍',550,420);
            ctx.fillText('법사 LV' + data.sk8 + ' : 경험치 획득량 +' + data.sk8*2 + '%',550,460);

            let per = data.sk4*data.sk5 + data.sk5*data.sk6 + data.sk6*data.sk7 + data.sk7*data.sk8 + data.sk8*data.sk4;
            ctx.fillText('점령한 지역 : ' + per/5 + '%',200,540);
            ctx.fillText('최종 데미지 증가 : ' + per/10 + '%',200,580);

            ctx.font = '16px 궁서체';
            if(data.sk4<10)
            {
                ctx.fillText('스킬 레벨업',1030,300);
                ctx.strokeRect(1029,283,90,20);
                ctx.fillText(data.sk4+' 코스모스 오브',1130,300);
            }
            if(data.sk5<10)
            {
                ctx.fillText('스킬 레벨업',1030,340);
                ctx.strokeRect(1029,323,90,20);
                ctx.fillText(data.sk5+' 코스모스 오브',1130,340);
            }
            if(data.sk6<10)
            {
                ctx.fillText('스킬 레벨업',1030,380);
                ctx.strokeRect(1029,363,90,20);
                ctx.fillText(data.sk6+' 코스모스 오브',1130,380);
            }
            if(data.sk7<10)
            {
                ctx.fillText('스킬 레벨업',1030,420);
                ctx.strokeRect(1029,403,90,20);
                ctx.fillText(data.sk7+' 코스모스 오브',1130,420);
            }
            if(data.sk8<10)
            {
                ctx.fillText('스킬 레벨업',1030,460);
                ctx.strokeRect(1029,443,90,20);
                ctx.fillText(data.sk8+' 코스모스 오브',1130,460);
            }
        }
        else
        {
            ctx.font = '24px 궁서체';
            ctx.fillText('2차 전직을 통해 각 직업의 새로운 패시브 스킬을 배울 수 있습니다.',200,320);
            ctx.fillText('자신 직업의 스킬은 최대 레벨인 LV10 이며, 다른 직업의 스킬 레벨은 LV1로 시작합니다.',200,360);
            ctx.strokeRect(195,415,165,30);
            ctx.fillText('2차 전직 시작',200,440);
            ctx.fillText('비용 : 1 코스모스 오브',200,480);
        }
    }
    else if(menu==7)
    {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(4,628,120,64);
        ctx.fillStyle = "rgba(0,0,0,1)";

        ctx.font = '16px 궁서체';
        ctx.fillText('골드 : ' + numtext(data.gol),740+280,250);
        ctx.fillText('불꽃 오브 : ' + numtext(data.ob3),740+280,280);
        ctx.fillText('신성한 오브 : ' + numtext(data.ob5),740+280,310);
        ctx.fillText('유물 희귀도 : ' + Math.floor(data.hpr) + '%',740+280,370);
        ctx.fillText('신성한 오브는 종말 이상',740+280,530);
        ctx.fillText('난이도에서 드랍됩니다',740+280,550);

        calrarep(data.hpr/100);
        for(let i=0; i<6; i++)
        {
            switch(i)
            {
                case 0: ctx.fillStyle = "rgba(128,128,128,1)"; break;
                case 1: ctx.fillStyle = "rgba(34,177,76,1)"; break;
                case 2: ctx.fillStyle = "rgba(0,162,232,1)"; break;
                case 3: ctx.fillStyle = "rgba(163,73,164,1)"; break;
                case 4: ctx.fillStyle = "rgba(255,127,39,1)"; break;
                case 5: ctx.fillStyle = "rgba(0,0,0,1)"; break;
            }
            ctx.fillRect(1020,380+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
            switch(i)
            {
                case 0: ctx.fillText(rarep1 + '%',1035,392+20*i); break;
                case 1: ctx.fillText(rarep2 + '%',1035,392+20*i); break;
                case 2: ctx.fillText(rarep3 + '%',1035,392+20*i); break;
                case 3: ctx.fillText(rarep4 + '%',1035,392+20*i); break;
                case 4: ctx.fillText(rarep5 + '%',1035,392+20*i); break;
                case 5: ctx.fillText(rarep6 + '%',1035,392+20*i); break;
            }
        }
        ctx.strokeRect(132,196,280,520);
        ctx.strokeRect(132+288,196,280,520);
        ctx.strokeRect(132+576,196,280,520);

        let txe='';
        for(let i=0; i<6; i++)
        {
            let ra = Math.floor(data.chu4[i]);
            if(ra==6) ra=10;
            switch(i)
            {
                case 0: txe='공격력 +' + ra*100; break;
                case 1: txe='치명타 피해배율 +' + ra*20 + '%p'; break;
                case 2: txe='방어력 관통 +' + ra; break;
                case 3: txe='공격속도 +' + ra*4; break;
                case 4: txe='이동속도 +' + ra*4; break;
                case 5: txe='골드 획득량 +' + ra*100 + '%p'; break;
            }
            ctx.fillText(txe,165,350+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle = "rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle = "rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle = "rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle = "rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle = "rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle = "rgba(0,0,0,1)"; break;
            }
            ctx.fillRect(150,338+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        for(let i=0; i<6; i++)
        {
            let ra = Math.floor(data.chu5[i]);
            if(ra==6) ra=10;
            switch(i)
            {
                case 0: txe='공격력 +' + ra*100; break;
                case 1: txe='치명타 피해배율 +' + ra*20 + '%p'; break;
                case 2: txe='방어력 관통 +' + ra; break;
                case 3: txe='공격속도 +' + ra*4; break;
                case 4: txe='이동속도 +' + ra*4; break;
                case 5: txe='골드 획득량 +' + ra*100 + '%p'; break;
            }
            ctx.fillText(txe,165+288,350+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle = "rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle = "rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle = "rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle = "rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle = "rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle = "rgba(0,0,0,1)"; break;
            }
            ctx.fillRect(150+288,338+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }
        for(let i=0; i<6; i++)
        {
            let ra = Math.floor(data.chu6[i]);
            if(ra==6) ra=10;
            switch(i)
            {
                case 0: txe='공격력 +' + ra*100; break;
                case 1: txe='치명타 피해배율 +' + ra*20 + '%p'; break;
                case 2: txe='방어력 관통 +' + ra; break;
                case 3: txe='공격속도 +' + ra*4; break;
                case 4: txe='이동속도 +' + ra*4; break;
                case 5: txe='골드 획득량 +' + ra*100 + '%p'; break;
            }
            ctx.fillText(txe,165+576,350+20*i);
            switch(ra)
            {
                case 1: ctx.fillStyle = "rgba(128,128,128,1)"; break;
                case 2: ctx.fillStyle = "rgba(34,177,76,1)"; break;
                case 3: ctx.fillStyle = "rgba(0,162,232,1)"; break;
                case 4: ctx.fillStyle = "rgba(163,73,164,1)"; break;
                case 5: ctx.fillStyle = "rgba(255,127,39,1)"; break;
                case 6: ctx.fillStyle = "rgba(0,0,0,1)"; break;
            }
            ctx.fillRect(150+576,338+20*i,10,10);
            ctx.fillStyle = "rgba(0,0,0,1)";
        }

        ctx.font = '24px 궁서체';
        ctx.fillText('유물1',240,250);
        ctx.fillText('유물2',240+288,250);
        ctx.fillText('유물3',240+576,250);
        ctx.fillText('추가옵션',140,320);
        ctx.fillText('추가옵션',140+288,320);
        ctx.fillText('추가옵션',140+576,320);
        ctx.strokeRect(181,480,190,45);
        ctx.strokeRect(181+288,480,190,45);
        ctx.strokeRect(181+576,480,190,45);
        ctx.fillText('추가옵션 재설정',185,510);
        ctx.fillText('추가옵션 재설정',185+288,510);
        ctx.fillText('추가옵션 재설정',185+576,510);

        ctx.font = '16px 궁서체';
        for(let i=0; i<3; i++)
        {
            ctx.fillText('재설정 비용',140+288*i,545);
            ctx.fillText('  불꽃 오브 10개',140+288*i,575);
            ctx.fillText('  신성한 오브 1개',140+288*i,595);
            ctx.fillText('  1억 0000만 0000골드',140+288*i,615);
        }

    }
}

function game()
{
    step();
    draw();
}
>>>>>>> 666df278a63db5de2b1beeb2ad7951a8568572c7
