// console.log("hey");
// setTimeout(function(){
//     console.log("hey 2");
// },5000);

//Main stack(Synch) and Side stack(Asynch)

// console.log("hey");
// console.log("hey2");
// setTimeout(function(){
//     console.log("hey3");
// },0)
// console.log("hey4");

// var ans = new Promise((res,rej)=>{
//     if(false){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// ans
// .then(function(){
// console.log("Resolved");
// })
// .catch(function(){
//     console.log("Rejected");

// var ans=new Promise((res,rej)=>{
//     var n = Math.floor(Math.random()*10);
//     if(n<5){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// ans
// .then(function(){
//     console.log("Below");
// })
// .catch(function(){
//     console.log("Above");
// })

// var ans = new Promise(function(res,rej){
//     return res("Sabse Pehle Ghar Par Aao");
// });

// var p2=ans.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res("Gate Kholo aur Gate Lagao");
//     });
// });

// var p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res("Khaana Pakao Khaana Khao");
//     });
// });

// function abcd(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }

async function abcd(){
    let raw = await fetch (`https://randomuser.me/api/`);
    let ans = raw.json();
    console.log(ans);
}

abcd();