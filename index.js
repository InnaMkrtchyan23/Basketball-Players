// function start() {
//     with (document) {
//         let h1 = String(getElementById("left1").value);
//         let h2 = String(getElementById("left2").value);
//         let h3 = String(getElementById("left3").value);
//         let h4 = String(getElementById("left4").value);
//         let h5 = String(getElementById("left5").value);
//         let h6 = String(getElementById("left6").value);
//         let h7 = String(getElementById("right1").value);
//         let h8 = String(getElementById("right2").value);
//         let h9 = String(getElementById("right3").value);
//         let h10 = String(getElementById("right4").value);
//         let h11 = String(getElementById("right5").value);
//         let result = 0
//         let quality;
//         if(h1 == 7){
//             result+=2;
//             getElementById("left1").style.borderColor = "gold";
//         }else{
//             getElementById("left1").style.borderColor = "red"
//         }
//         if(h2 == 35){
//             result+=2;
//             getElementById("left2").style.borderColor = "gold";
//         }else{
//             getElementById("left2").style.borderColor = "red"
//         }
//         if(h3 == 1){
//             result+=2;
//             getElementById("left3").style.borderColor = "gold";
//         }else{
//             getElementById("left3").style.borderColor = "red"
//         }
//         if(h4 == 5){
//             result+=2;
//             getElementById("left4").style.borderColor = "gold";
//         }else{
//             getElementById("left4").style.borderColor = "red"
//         }
//         if(h5 == 11){
//             result+=2;
//             getElementById("left5").style.borderColor = "gold";
//         }else{
//             getElementById("left5").style.borderColor = "red"
//         }
//         if(h6 == 14){
//             result+=2;
//             getElementById("left6").style.borderColor = "gold";
//         }else{
//             getElementById("left6").style.borderColor = "red"
//         }
//         if(h7 == 24){
//             result+=2;
//             getElementById("right1").style.borderColor = "gold";
//         }else{
//             getElementById("right1").style.borderColor = "red"
//         }
//         if(h8 == 12){
//             result+=2;
//             getElementById("right2").style.borderColor = "gold";
//         }else{
//             getElementById("right2").style.borderColor = "red"
//         }
//         if(h9 == 9){
//             result+=2;
//             getElementById("right3").style.borderColor = "gold";
//         }else{
//             getElementById("right3").style.borderColor = "red"
//         }
//         if(h10 == 4){
//             result+=2;
//             getElementById("right4").style.borderColor = "gold";
//         }else{
//             getElementById("right4").style.borderColor = "red"
//         }
//         if(h11 == 23){
//             result+=2;
//             getElementById("right5").style.borderColor = "gold";
//         }else{
//             getElementById("right5").style.borderColor = "red"
//         }
//         if(result <= 6){
//             quality = 'anbavarar('
//             getElementById('hashiv').style.color = 'red'
//             getElementById('patasxan').style.color = 'red'
//         }
//         if(result > 6 && result <= 18){
//             quality = 'lav:/'
//             getElementById('hashiv').style.color = 'pink'
//             getElementById('patasxan').style.color = 'pink'
//             getElementById('patasxan').style.right = '449px'
//         }
//         if(result <= 18){
//             quality = 'GERAZANC)'
//             getElementById('hashiv').style.color = 'green'
//             getElementById('patasxan').style.color = 'green'
//             getElementById('patasxan').style.right = '362px'
//         }
//         getElementById('hashiv').innerHTML = result;
//         getElementById('patasxan').innerHTML = quality
//     }
// }

function start() {
    with (document) {
        let h_1 = String(getElementById("left1").value);
        let h_2 = String(getElementById("left2").value);
        let h_3 = String(getElementById("left3").value);
        let h_4 = String(getElementById("left4").value);
        let h_5 = String(getElementById("left5").value);
        let h_6 = String(getElementById("left6").value);
        let h_7 = String(getElementById("right1").value);
        let h_8 = String(getElementById("right2").value);
        let h_9 = String(getElementById("right3").value);
        let h_10 = String(getElementById("right4").value);
        let h_11 = String(getElementById("right5").value);
        let result = 0;
        let vorak;
        if (h_1 == "7") {
            result += 2;
            getElementById("left1").style.borderColor = "gold";
        } else {
            getElementById("left1").style.borderColor = "red"
        }
        if (h_2 == "35") {
            result += 2;
            getElementById("left2").style.borderColor = "gold";
        } else {
            getElementById("left2").style.borderColor = "red"
        }
        if (h_3 == "1") {
            result += 2;
            getElementById("left3").style.borderColor = "gold";
        } else {
            getElementById("left3").style.borderColor = "red"
        }
        if (h_4 == "5") {
            result += 2;
            getElementById("left4").style.borderColor = "gold";
        } else {
            getElementById("left4").style.borderColor = "red"
        }
        if (h_5 == "11") {
            result += 2;
            getElementById("left5").style.borderColor = "gold";
        } else {
            getElementById("left5").style.borderColor = "red"
        }
        if (h_6 == "14") {
            result += 2;
            getElementById("left6").style.borderColor = "gold";
        } else {
            getElementById("left6").style.borderColor = "red"
        }
        if (h_7 == "24") {
            result += 2;
            getElementById("right1").style.borderColor = "gold";
        } else {
            getElementById("right1").style.borderColor = "red"
        }
        if (h_8 == "12") {
            result += 2;
            getElementById("right2").style.borderColor = "gold";
        } else {
            getElementById("right2").style.borderColor = "red"
        }
        if (h_9 == "9") {
            result += 2;
            getElementById("right3").style.borderColor = "gold";
        } else {
            getElementById("right3").style.borderColor = "red"
        }
        if (h_10 == "4") {
            result += 2;
            getElementById("right4").style.borderColor = "gold";
        } else {
            getElementById("right4").style.borderColor = "red"
        }
        if (h_11 == "23") {
            result += 2;
            getElementById("right5").style.borderColor = "gold";
        } else {
            getElementById("right5").style.borderColor = "red"
        }
        if (result <= 6) {
            vorak = " ANBAVARAR";
            getElementById("hashiv").style.color = "red";
            getElementById("patasxan").style.color = "red";
        }
        if (result > 6 && result <= 18){
            vorak = " LAV";
            getElementById("hashiv").style.color = "gold";
            getElementById("patasxan").style.color = "gold"
            getElementById("patasxan").style.right = "449px";
        }
        if(result>18){
            vorak = " GERAZANC";
            getElementById("hashiv").style.color = "green";
            getElementById("patasxan").style.color = "green";
            getElementById("patasxan").style.right = "362px";
        }
        getElementById("hashiv").innerHTML =result;
        getElementById("patasxan").innerHTML=vorak;
  }
}