const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");  //"1".padStart(2, "0") -- (자리수, 글자수 부족 시 0 추가)
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconsds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconsds}`; 
};

getClock();
setInterval(getClock, 1000);
// setInterval(getClock, 1000); 5초에 한번씩 출력
// setTimeout(getClock, 5000); 5초 후 1번 출력
