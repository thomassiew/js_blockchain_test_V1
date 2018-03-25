const publicIp = require('public-ip');



// async function GetIpAddress() {
//     var abc = await publicIp.v4().then(ip => {
//         return ip;
//     });



// }

async function GetIpAddress() {
    var a = await publicIp.v4();
    return await a;
}



async function hi(){
    var a = await GetIpAddress();
console.log(a);


}


hi();

