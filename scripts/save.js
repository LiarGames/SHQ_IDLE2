const sunday=42;
const friday="SHQ_IDLE2_";

function localSave(key,data)
{
    let str = JSON.stringify(data);
    let arr=[];
    for(let i=0; i<str.length; i++)
        arr[i] = str.charCodeAt(i)+sunday;
    localStorage.setItem(friday+key,arr.toString());
}

function localLoad(key)
{
    let str = localStorage.getItem(friday+key);
    if(str===null)
        return -1;
    let arr = str.split(',');
    for(let i=0; i<arr.length; i++)
        arr[i] = String.fromCharCode(Number(arr[i])-sunday);
    return JSON.parse(arr.join(''));
}