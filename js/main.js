console.log("JS file connected");


const ball = document.querySelector("#ball");
//console.log(ball);

function logId() {
  console.log(this.id);
}

ball.addEventListener("click", logId);


const face = document.querySelector("#face");

function logId() {
  console.log(this.id);
}

face.addEventListener("click", logId);


const loading = document.querySelector("#loading");

function logId() {
  console.log(this.id);
}

loading.addEventListener("click", logId);


const planet = document.querySelector("#planet");

function logId() {
  console.log(this.id);
}

planet.addEventListener("click", logId);


const reload = document.querySelector("#reload");

function logId() {
  console.log(this.id);
}

reload.addEventListener("click", logId);


const settings = document.querySelector("#settings");

function logId() {
  console.log(this.id);
}

settings.addEventListener("click", logId);