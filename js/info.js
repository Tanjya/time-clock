function digitalClock(){

  //! get the real time from the time Date function
  const date = new Date();
  const seconds  = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  //! time formating by hh/mm/ss
  const time = `${hours} : ${minutes} : ${seconds}`

  //! show the time by html on web page
  const clockHTML = document.getElementById("clock");
  clockHTML.textContent = time;

  //! write setTime function for updating the time
  setInterval(() => {
    digitalClock();
}, 1000);

}
//! call the function
digitalClock();