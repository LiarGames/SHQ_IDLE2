<<<<<<< HEAD
function randint(n)
{
    return Math.floor(Math.random()*n);
}

let rarep1 = 1;
let rarep2 = 1;
let rarep3 = 1;
let rarep4 = 1;
let rarep5 = 1;
let rarep6 = 1;

function randrare(r)
{
    const p6 = 0.001;
    const p5 = 0.009;
    const p4 = 0.09;
    const p3 = 0.2;
    const p2 = 0.3;
    const p1 = 0.4;

    const pp6 = 1-Math.pow(1-p6,r);
    const pp5 = Math.pow(1-p6,r) - Math.pow(1-p6-p5,r);
    const pp4 = Math.pow(1-p6-p5,r) - Math.pow(1-p6-p5-p4,r);
    const pp3 = Math.pow(1-p6-p5-p4,r) - Math.pow(1-p6-p5-p4-p3,r);
    const pp2 = Math.pow(1-p6-p5-p4-p3,r) - Math.pow(p1,r);
    const pp1 = Math.pow(p1,r);

    rarep6 = Math.floor(pp6*10000)/100;
    rarep5 = Math.floor(pp5*10000)/100;
    rarep4 = Math.floor(pp4*10000)/100;
    rarep3 = Math.floor(pp3*10000)/100;
    rarep2 = Math.floor(pp2*10000)/100;
    rarep1 = Math.floor(pp1*10000)/100;

    const n = Math.random();
    if(n<=pp6)  return 6;
    else if(n<=pp6 + pp5) return 5;
    else if(n<=pp6 + pp5 + pp4) return 4;
    else if(n<=pp6 + pp5 + pp4 + pp3) return 3;
    else if(n<=pp6 + pp5 + pp4 + pp3 + pp2) return 2;
    else return 1;
}

function calrarep(r)
{
    const p6 = 0.001;
    const p5 = 0.009;
    const p4 = 0.09;
    const p3 = 0.2;
    const p2 = 0.3;
    const p1 = 0.4;

    const pp6 = 1-Math.pow(1-p6,r);
    const pp5 = Math.pow(1-p6,r) - Math.pow(1-p6-p5,r);
    const pp4 = Math.pow(1-p6-p5,r) - Math.pow(1-p6-p5-p4,r);
    const pp3 = Math.pow(1-p6-p5-p4,r) - Math.pow(1-p6-p5-p4-p3,r);
    const pp2 = Math.pow(1-p6-p5-p4-p3,r) - Math.pow(p1,r);
    const pp1 = Math.pow(p1,r);

    rarep6 = Math.floor(pp6*10000)/100;
    rarep5 = Math.floor(pp5*10000)/100;
    rarep4 = Math.floor(pp4*10000)/100;
    rarep3 = Math.floor(pp3*10000)/100;
    rarep2 = Math.floor(pp2*10000)/100;
    rarep1 = Math.floor(pp1*10000)/100;
}

function statcal()
{
    if(0<=data.itm1 && data.itm1<=14)
        stat.atks = 100 + data.lv + 100*data.itm1;
    else if(15<=data.itm1 && data.itm1<=19)
        stat.atks = data.lv + 200*data.itm1 - 1300;
    else if(20<=data.itm1 && data.itm1<=24)
        stat.atks = data.lv + 300*data.itm1 - 3200;
    else if(data.itm1==25)
        stat.atks = data.lv + 5000;

    stat.dep = data.sk5;

    if(0<=data.itm2 && data.itm2<=14)
        stat.dep += data.itm2 + 1;
    if(15<=data.itm2 && data.itm2<=19)
        stat.dep += data.itm2*2 -13;
    if(20<=data.itm2 && data.itm2<=24)
        stat.dep += data.itm2*3 -32;
    else if(data.itm2==25)
        stat.dep+=50;

    if(data.job==4) stat.dep+=10;
    stat.crp=0;
    stat.crd=0;
    stat.fid=0;
    stat.fidt=' ';
    stat.spds=100;
    stat.atss=200;
    stat.mods=100;
    if(0<=data.itm3 && data.itm3<=14)
        stat.mods += data.itm3*100 + 100;
    if(15<=data.itm3 && data.itm3<=19)
        stat.mods += data.itm3*200 - 1300;
    if(20<=data.itm3 && data.itm3<=24)
        stat.mods += data.itm3*300 - 3200;
    else if(data.itm3==25)
        stat.mods += 5000;

    stat.itds = 100;
    stat.atkp=0;
    stat.crds=100;
    stat.crdp=0;
    stat.fidp=[];
    stat.spdp=data.sk4*2;
    stat.atsp=0;
    stat.modp=0;
    stat.itdp=0;

    let mopt=0;
    if(data.itm1<=4) mopt=1;
    else if(data.itm1<=9) mopt=2;
    else if(data.itm1<=14) mopt=3;
    else if(data.itm1<=19) mopt=4;
    else if(data.itm1<=24) mopt=5;
    else if(data.itm1==25) mopt=6;
    for(let i=0; i<mopt; i++)
    {
        let ra = Math.floor(data.chu1[i]/10);
        if(ra==6) ra=10;
        let op = data.chu1[i]%10;
        switch(op)
        {
            case 1: stat.atks+=ra*100; break;
            case 2: stat.crp+=ra*10; break;
            case 3: stat.crds+=ra*10; break;
        }
        ra = Math.floor(data.jam1[i]/10);
        if(ra==6) ra=10;
        op = data.jam1[i]%10;
        switch(op)
        {
            case 1: stat.atkp+=ra*2; break;
            case 2: stat.crdp+=ra*3; break;
            case 3: stat.fidp.push(ra*2); break;
        }
    }

    if(data.job==2)
        stat.fidp.push(10);
    if(data.sk1>0)
        stat.fidp.push(10);
    if(data.sk2>0)
        stat.fidp.push(25);
    if(data.sk3>0)
        stat.fidp.push(10);
    if(data.sk4>0)
        stat.fidp.push((data.sk4*data.sk5 + data.sk5*data.sk6 + data.sk6*data.sk7 + data.sk7*data.sk8 + data.sk8*data.sk4)/10);
    
   mopt=0;
    if(data.itm2<=4) mopt=1;
    else if(data.itm2<=9) mopt=2;
    else if(data.itm2<=14) mopt=3;
    else if(data.itm2<=19) mopt=4;
    else if(data.itm2<=24) mopt=5;
    else if(data.itm2==25) mopt=6;
    for(let i=0; i<mopt; i++)
    {
        let ra = Math.floor(data.chu2[i]/10);
        if(ra==6) ra=10;
        let op = data.chu2[i]%10;
        switch(op)
        {
            case 1: stat.spds+=ra; break;
            case 2: stat.atss+=ra*4; break;
        }
        ra = Math.floor(data.jam2[i]/10);
        if(ra==6) ra=10;
        op = data.jam2[i]%10;
        switch(op)
        {
            case 1: stat.spdp+=ra*2; break;
            case 2: stat.atsp+=ra*2; break;
        }
    }   

    mopt=0;
     if(data.itm3<=4) mopt=1;
     else if(data.itm3<=9) mopt=2;
     else if(data.itm3<=14) mopt=3;
     else if(data.itm3<=19) mopt=4;
     else if(data.itm3<=24) mopt=5;
     else if(data.itm3==25) mopt=6;
     for(let i=0; i<mopt; i++)
     {
         let ra = Math.floor(data.chu3[i]/10);
         if(ra==6) ra=10;
         let op = data.chu3[i]%10;
         switch(op)
         {
             case 1: stat.mods+=ra*100; break;
             case 2: stat.itds+=ra*10; break;
         }
         ra = Math.floor(data.jam3[i]/10);
         if(ra==6) ra=10;
         op = data.jam3[i]%10;
         switch(op)
         {
             case 1: stat.modp+=ra*3; break;
             case 2: stat.itdp+=ra*3; break;
         }
     }

     stat.atks += data.itm4*100;
     stat.crds += data.itm5*10;
     stat.mods += data.itm6*100;
     stat.atss += data.itm7*4;
     stat.spds += data.itm8*4;
     stat.mods += data.itm9*100;

     for(let i=0; i<6; i++)
     {
        if(data.chu4[i]==6) data.chu4[i]=10;
        if(data.chu5[i]==6) data.chu5[i]=10;
        if(data.chu6[i]==6) data.chu6[i]=10;
     }

     stat.atks += data.chu4[0]*100;
     stat.crds += data.chu4[1]*20;
     stat.dep += data.chu4[2];
     stat.atts += data.chu4[3]*4;
     stat.spds += data.chu4[4]*4;
     stat.mods += data.chu4[5]*100;
     
     stat.atks += data.chu5[0]*100;
     stat.crds += data.chu5[1]*20;
     stat.dep += data.chu5[2];
     stat.atts += data.chu5[3]*4;
     stat.spds += data.chu5[4]*4;
     stat.mods += data.chu5[5]*100;
     
     stat.atks += data.chu6[0]*100;
     stat.crds += data.chu6[1]*20;
     stat.dep += data.chu6[2];
     stat.atts += data.chu6[3]*4;
     stat.spds += data.chu6[4]*4;
     stat.mods += data.chu6[5]*100;

     for(let i=0; i<6; i++)
     {
        if(data.chu4[i]==10) data.chu4[i]=6;
        if(data.chu5[i]==10) data.chu5[i]=6;
        if(data.chu6[i]==10) data.chu6[i]=6;
     }

     if(data.job==3 && stat.crp>=100)
     {
        stat.crds += stat.crp-100;
        stat.crp = 100;
     }

     stat.atk = Math.floor(stat.atks*(stat.atkp/100+1));
     stat.crd = Math.floor(stat.crds*(stat.crdp/100+1));
     stat.spd = Math.floor(stat.spds*(stat.spdp/100+1));
     stat.ats = Math.floor(stat.atss*(stat.atsp/100+1));
     stat.mod = Math.floor(stat.mods*(stat.modp/100+1));
     stat.itd = Math.floor(stat.itds*(stat.itdp/100+1));

     stat.fid=1;
     stat.fidp.forEach((n,i)=>{
        stat.fid*=(n/100+1);
        stat.fidt+=n+'% ';
     });
     stat.fid-=1;
     stat.fid = Math.floor(stat.fid*100);
     stat.power = Math.floor(stat.atk * (1+(stat.crd/100-1)*stat.crp/100) * stat.ats/100 * (1+stat.fid/100));
}

function diffcal()
{
    if(data.don<=10)
    {
        enhp=300*data.don;
        endd=data.don;
        enxp=data.don;
        enmo=data.don;
    }
    else if(data.don<=20)
    {
        enhp=500*data.don-500;
        endd=data.don;
        enxp=data.don+10;
        enmo=data.don+10;
    }
    else if(data.don<=30)
    {
        enhp=1500*data.don-16500;
        endd=data.don*2-20;
        enxp=data.don+30;
        enmo=data.don+30;
    }
    else if(data.don<=40)
    {
        enhp=5000*data.don-105000;
        endd=data.don*2-20;
        enxp=data.don*2+30;
        enmo=data.don*2+30;
    }
    else if(data.don<=50)
    {
        enhp=15000*data.don-465000;
        endd=data.don*3-60;
        enxp=data.don*10-200;
        enmo=data.don*10-200;
    }
    else if(data.don<=60)
    {
        enhp=50000*data.don-2050000;
        endd=data.don*4-110;
        enxp=data.don*20-700;
        enmo=data.don*20-700;
    }
    enhpn=enhp;
}

function numtext(num)
{
    let str='';
    let zeros=0;
    if(num>=100000000)
    {
        str += Math.floor(num/100000000) + '억 ';
        num%=100000000;
        zeros=1;
    }
    if(num>=10000)
    {
        if(zeros==1)
        {
            if(num/10000<10) str += '000' + Math.floor(num/10000) + '만 ';
            else if(num/10000<100) str += '00' + Math.floor(num/10000) + '만 ';
            else if(num/10000<1000) str += '0' + Math.floor(num/10000) + '만 ';
            else str += Math.floor(num/10000) + '만 ';
        }
        else
            str = Math.floor(num/10000) + '만 ';
        num%=10000;
        zeros=2;
    }
    if(zeros>0)
    {
        if(num<10) str += '000' + num;
        else if(num<100) str += '00' + num;
        else if(num<1000) str += '0' + num;
        else str += num;
    }
    else
        str += num;
    return str;
}
=======
function randint(n)
{
    return Math.floor(Math.random()*n);
}

let rarep1 = 1;
let rarep2 = 1;
let rarep3 = 1;
let rarep4 = 1;
let rarep5 = 1;
let rarep6 = 1;

function randrare(r)
{
    const p6 = 0.001;
    const p5 = 0.009;
    const p4 = 0.09;
    const p3 = 0.2;
    const p2 = 0.3;
    const p1 = 0.4;

    const pp6 = 1-Math.pow(1-p6,r);
    const pp5 = Math.pow(1-p6,r) - Math.pow(1-p6-p5,r);
    const pp4 = Math.pow(1-p6-p5,r) - Math.pow(1-p6-p5-p4,r);
    const pp3 = Math.pow(1-p6-p5-p4,r) - Math.pow(1-p6-p5-p4-p3,r);
    const pp2 = Math.pow(1-p6-p5-p4-p3,r) - Math.pow(p1,r);
    const pp1 = Math.pow(p1,r);

    rarep6 = Math.floor(pp6*10000)/100;
    rarep5 = Math.floor(pp5*10000)/100;
    rarep4 = Math.floor(pp4*10000)/100;
    rarep3 = Math.floor(pp3*10000)/100;
    rarep2 = Math.floor(pp2*10000)/100;
    rarep1 = Math.floor(pp1*10000)/100;

    const n = Math.random();
    if(n<=pp6)  return 6;
    else if(n<=pp6 + pp5) return 5;
    else if(n<=pp6 + pp5 + pp4) return 4;
    else if(n<=pp6 + pp5 + pp4 + pp3) return 3;
    else if(n<=pp6 + pp5 + pp4 + pp3 + pp2) return 2;
    else return 1;
}

function calrarep(r)
{
    const p6 = 0.001;
    const p5 = 0.009;
    const p4 = 0.09;
    const p3 = 0.2;
    const p2 = 0.3;
    const p1 = 0.4;

    const pp6 = 1-Math.pow(1-p6,r);
    const pp5 = Math.pow(1-p6,r) - Math.pow(1-p6-p5,r);
    const pp4 = Math.pow(1-p6-p5,r) - Math.pow(1-p6-p5-p4,r);
    const pp3 = Math.pow(1-p6-p5-p4,r) - Math.pow(1-p6-p5-p4-p3,r);
    const pp2 = Math.pow(1-p6-p5-p4-p3,r) - Math.pow(p1,r);
    const pp1 = Math.pow(p1,r);

    rarep6 = Math.floor(pp6*10000)/100;
    rarep5 = Math.floor(pp5*10000)/100;
    rarep4 = Math.floor(pp4*10000)/100;
    rarep3 = Math.floor(pp3*10000)/100;
    rarep2 = Math.floor(pp2*10000)/100;
    rarep1 = Math.floor(pp1*10000)/100;
}

function statcal()
{
    if(0<=data.itm1 && data.itm1<=14)
        stat.atks = 100 + data.lv + 100*data.itm1;
    else if(15<=data.itm1 && data.itm1<=19)
        stat.atks = data.lv + 200*data.itm1 - 1300;
    else if(20<=data.itm1 && data.itm1<=24)
        stat.atks = data.lv + 300*data.itm1 - 3200;
    else if(data.itm1==25)
        stat.atks = data.lv + 5000;

    stat.dep = data.sk5;

    if(0<=data.itm2 && data.itm2<=14)
        stat.dep += data.itm2 + 1;
    if(15<=data.itm2 && data.itm2<=19)
        stat.dep += data.itm2*2 -13;
    if(20<=data.itm2 && data.itm2<=24)
        stat.dep += data.itm2*3 -32;
    else if(data.itm2==25)
        stat.dep+=50;

    if(data.job==4) stat.dep+=10;
    stat.crp=0;
    stat.crd=0;
    stat.fid=0;
    stat.fidt=' ';
    stat.spds=100;
    stat.atss=200;
    stat.mods=100;
    if(0<=data.itm3 && data.itm3<=14)
        stat.mods += data.itm3*100 + 100;
    if(15<=data.itm3 && data.itm3<=19)
        stat.mods += data.itm3*200 - 1300;
    if(20<=data.itm3 && data.itm3<=24)
        stat.mods += data.itm3*300 - 3200;
    else if(data.itm3==25)
        stat.mods += 5000;

    stat.itds = 100;
    stat.atkp=0;
    stat.crds=100;
    stat.crdp=0;
    stat.fidp=[];
    stat.spdp=data.sk4*2;
    stat.atsp=0;
    stat.modp=0;
    stat.itdp=0;

    let mopt=0;
    if(data.itm1<=4) mopt=1;
    else if(data.itm1<=9) mopt=2;
    else if(data.itm1<=14) mopt=3;
    else if(data.itm1<=19) mopt=4;
    else if(data.itm1<=24) mopt=5;
    else if(data.itm1==25) mopt=6;
    for(let i=0; i<mopt; i++)
    {
        let ra = Math.floor(data.chu1[i]/10);
        if(ra==6) ra=10;
        let op = data.chu1[i]%10;
        switch(op)
        {
            case 1: stat.atks+=ra*100; break;
            case 2: stat.crp+=ra*10; break;
            case 3: stat.crds+=ra*10; break;
        }
        ra = Math.floor(data.jam1[i]/10);
        if(ra==6) ra=10;
        op = data.jam1[i]%10;
        switch(op)
        {
            case 1: stat.atkp+=ra*2; break;
            case 2: stat.crdp+=ra*3; break;
            case 3: stat.fidp.push(ra*2); break;
        }
    }

    if(data.job==2)
        stat.fidp.push(10);
    if(data.sk1>0)
        stat.fidp.push(10);
    if(data.sk2>0)
        stat.fidp.push(25);
    if(data.sk3>0)
        stat.fidp.push(10);
    if(data.sk4>0)
        stat.fidp.push((data.sk4*data.sk5 + data.sk5*data.sk6 + data.sk6*data.sk7 + data.sk7*data.sk8 + data.sk8*data.sk4)/10);
    
   mopt=0;
    if(data.itm2<=4) mopt=1;
    else if(data.itm2<=9) mopt=2;
    else if(data.itm2<=14) mopt=3;
    else if(data.itm2<=19) mopt=4;
    else if(data.itm2<=24) mopt=5;
    else if(data.itm2==25) mopt=6;
    for(let i=0; i<mopt; i++)
    {
        let ra = Math.floor(data.chu2[i]/10);
        if(ra==6) ra=10;
        let op = data.chu2[i]%10;
        switch(op)
        {
            case 1: stat.spds+=ra; break;
            case 2: stat.atss+=ra*4; break;
        }
        ra = Math.floor(data.jam2[i]/10);
        if(ra==6) ra=10;
        op = data.jam2[i]%10;
        switch(op)
        {
            case 1: stat.spdp+=ra*2; break;
            case 2: stat.atsp+=ra*2; break;
        }
    }   

    mopt=0;
     if(data.itm3<=4) mopt=1;
     else if(data.itm3<=9) mopt=2;
     else if(data.itm3<=14) mopt=3;
     else if(data.itm3<=19) mopt=4;
     else if(data.itm3<=24) mopt=5;
     else if(data.itm3==25) mopt=6;
     for(let i=0; i<mopt; i++)
     {
         let ra = Math.floor(data.chu3[i]/10);
         if(ra==6) ra=10;
         let op = data.chu3[i]%10;
         switch(op)
         {
             case 1: stat.mods+=ra*100; break;
             case 2: stat.itds+=ra*10; break;
         }
         ra = Math.floor(data.jam3[i]/10);
         if(ra==6) ra=10;
         op = data.jam3[i]%10;
         switch(op)
         {
             case 1: stat.modp+=ra*3; break;
             case 2: stat.itdp+=ra*3; break;
         }
     }

     stat.atks += data.itm4*100;
     stat.crds += data.itm5*10;
     stat.mods += data.itm6*100;
     stat.atss += data.itm7*4;
     stat.spds += data.itm8*4;
     stat.mods += data.itm9*100;

     for(let i=0; i<6; i++)
     {
        if(data.chu4[i]==6) data.chu4[i]=10;
        if(data.chu5[i]==6) data.chu5[i]=10;
        if(data.chu6[i]==6) data.chu6[i]=10;
     }

     stat.atks += data.chu4[0]*100;
     stat.crds += data.chu4[1]*20;
     stat.dep += data.chu4[2];
     stat.atss += data.chu4[3]*4;
     stat.spds += data.chu4[4]*4;
     stat.mods += data.chu4[5]*100;
     
     stat.atks += data.chu5[0]*100;
     stat.crds += data.chu5[1]*20;
     stat.dep += data.chu5[2];
     stat.atss += data.chu5[3]*4;
     stat.spds += data.chu5[4]*4;
     stat.mods += data.chu5[5]*100;
     
     stat.atks += data.chu6[0]*100;
     stat.crds += data.chu6[1]*20;
     stat.dep += data.chu6[2];
     stat.atss += data.chu6[3]*4;
     stat.spds += data.chu6[4]*4;
     stat.mods += data.chu6[5]*100;

     for(let i=0; i<6; i++)
     {
        if(data.chu4[i]==10) data.chu4[i]=6;
        if(data.chu5[i]==10) data.chu5[i]=6;
        if(data.chu6[i]==10) data.chu6[i]=6;
     }

     if(data.job==3 && stat.crp>=100)
     {
        stat.crds += stat.crp-100;
        stat.crp = 100;
     }

     stat.atk = Math.floor(stat.atks*(stat.atkp/100+1));
     stat.crd = Math.floor(stat.crds*(stat.crdp/100+1));
     stat.spd = Math.floor(stat.spds*(stat.spdp/100+1));
     stat.ats = Math.floor(stat.atss*(stat.atsp/100+1));
     stat.mod = Math.floor(stat.mods*(stat.modp/100+1));
     stat.itd = Math.floor(stat.itds*(stat.itdp/100+1));

     stat.fid=1;
     stat.fidp.forEach((n,i)=>{
        stat.fid*=(n/100+1);
        stat.fidt+=n+'% ';
     });
     stat.fid-=1;
     stat.fid = Math.floor(stat.fid*100);
     stat.power = Math.floor(stat.atk * (1+(stat.crd/100-1)*stat.crp/100) * stat.ats/100 * (1+stat.fid/100));
}

function diffcal()
{
    if(data.don<=10)
    {
        enhp=300*data.don;
        endd=data.don;
        enxp=data.don;
        enmo=data.don;
    }
    else if(data.don<=20)
    {
        enhp=500*data.don-500;
        endd=data.don;
        enxp=data.don+10;
        enmo=data.don+10;
    }
    else if(data.don<=30)
    {
        enhp=1500*data.don-16500;
        endd=data.don*2-20;
        enxp=data.don+30;
        enmo=data.don+30;
    }
    else if(data.don<=40)
    {
        enhp=5000*data.don-105000;
        endd=data.don*2-20;
        enxp=data.don*2+30;
        enmo=data.don*2+30;
    }
    else if(data.don<=50)
    {
        enhp=15000*data.don-465000;
        endd=data.don*3-60;
        enxp=data.don*10-200;
        enmo=data.don*10-200;
    }
    else if(data.don<=60)
    {
        enhp=50000*data.don-2050000;
        endd=data.don*4-110;
        enxp=data.don*20-700;
        enmo=data.don*20-700;
    }
    enhpn=enhp;
}

function numtext(num)
{
    let str='';
    let zeros=0;
    if(num>=100000000)
    {
        str += Math.floor(num/100000000) + '억 ';
        num%=100000000;
        zeros=1;
    }
    if(num>=10000)
    {
        if(zeros==1)
        {
            if(num/10000<10) str += '000' + Math.floor(num/10000) + '만 ';
            else if(num/10000<100) str += '00' + Math.floor(num/10000) + '만 ';
            else if(num/10000<1000) str += '0' + Math.floor(num/10000) + '만 ';
            else str += Math.floor(num/10000) + '만 ';
        }
        else
            str = Math.floor(num/10000) + '만 ';
        num%=10000;
        zeros=2;
    }
    if(zeros>0)
    {
        if(num<10) str += '000' + num;
        else if(num<100) str += '00' + num;
        else if(num<1000) str += '0' + num;
        else str += num;
    }
    else
        str += num;
    return str;
}
>>>>>>> 666df278a63db5de2b1beeb2ad7951a8568572c7
