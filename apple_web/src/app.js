const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
// END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

// SCROLL MAGIC
const controller = new ScrollMagic.Controller();

// Scenes
const scene = new ScrollMagic.Scene({
  // duration must be the length of video time
  // in our sample video, it has 9000ms
  // so, duration set 9000
  duration: 9000,
  triggerElement: intro,
  // triggerHook works when scroll reach on half height of the web page if triggerHook i 0.5
  // in our case, we want to operate it instantly and immediately on the top of the page
  triggerHook: 0,
})
  .addIndicators()
  .setPin(intro) // it works for trigger stick on the top of the page
  .addTo(controller);

// Video Animation
let accelamount = 0.1; // connect the change of scrollY to frames of video's amount of the video delta
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

// time interval set 33.3ms ('cause 1000ms / 30fps )
// in our sample video, it has 30fps
// if you use the 24fps video, set the value of 1000ms / 24fps
setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  // if you set the value of video.currentTime is equal to scrollpos
  // then it stops immediately when you stop scrolling page
  // it could be not enough to good UI
  // video.currentTime = scrollpos;
  // set video.currentTime = delay is more natural!
  video.currentTime = delay;
}, 33.3);
