document.getElementById('horoscopeButton').onclick = findHoroscope;

function findHoroscope(month, day){
 var month = document.getElementById('month').value;
 var day = parseInt(document.getElementById('day').value);

 month = month.toLowerCase();
if(month === 'january' && day >= 20 && day <= 31 || month === 'february' && day >= 1 && day <= 18 ){
  // Aquarius
 document.getElementById('aquarius').style.display = 'block';
}
  else if(month === 'february' && day >= 19  && day <= 28 || month === 'march' && day >= 1 && day <= 20){
    //  Pisces;
  document.getElementById('pisces').style.display = 'block';
}
 else if(month === 'march' && day >= 21 && day <= 31 || month === 'april' && day >= 1 && day <= 19 ){
   //Aries
  document.getElementById('aries').style.display = 'block';
 }
 else if(month === 'april' && day >= 20 && day <= 30 || month === 'may' && day >= 1 && day <= 20){
    document.getElementById('taurus').style.display = 'block';
   // Taurus
 }
 else if(month === 'may' && day >= 21 && day <= 31 || month === 'june' && day >= 1 && day <= 20){
   document.getElementById('gemini').style.display = 'block'
   //Gemini (May 21-June 20)
 }
  else if(month === 'june' && day >= 21 && day <= 30 || month === 'july' && day >= 1 && day <= 22){
    document.getElementById('cancer').style.display = 'block'
   // Cancer (June 21-July 22)
 }
 else if(month === 'july' && day >= 23 && day <= 31 || month === 'august' && day >= 1 && day <=22){
   document.getElementById('leo').style.display = 'block'
   // Leo (July 23-August 22)
 }
 else if(month === 'august' && day >= 23 && day <= 31 || month === 'september' && day >= 1 && day <=22){
   document.getElementById('virgo').style.display = 'block';
   // Virgo (August 23-September 22)
 }
 else if(month === 'september' && day >= 23 && day <= 30 || month === 'october' && day >=1 && day <= 22){
    document.getElementById('libra').style.display = 'block';
   // Libra (September 23-October 22)
 }
 else if(month === 'october' && day >= 23 && day <=31 || month === 'november' && day >= 1 && day <= 21){
     document.getElementById('scorpio').style.display = 'block';
   // Scorpio (October 23-November 21)
 }
 else if(month === 'november' && day >= 22 && day <= 30 || month === 'december' && day >= 1 && day <= 21){
    document.getElementById('sagittarius').style.display = 'block';
   //Sagittarius (November 22-December 21)
 }
 else if(month === 'december' && day >= 22 && day <=31 || month === 'january' && day >= 1 && day <= 19){
   document.getElementById('capricorn').style.display = 'block';
   // Capricorn (December 22-January 19)
 } else {
   document.getElementById('else').style.display = 'block';
 }
}// ending of function
document.getElementById('horoscopeButton').onclick = findHoroscope;
