// --------------------------------------
// Line lengths
//
// var devShape = $("#yellow path");
// var devLength = devShape.get(0).getTotalLength();
// var designShape = $("#des-thick path");
// var designLength = designShape.get(0).getTotalLength();
// var skillShape = $("#skill-thick path");
// var skillLength = skillShape.get(0).getTotalLength();
// var workShape = $("#thick path");
// var workLength = workShape.get(1).getTotalLength();
// var contactShape = $("#thick path");
// var contactLength = contactShape.get(0).getTotalLength();
// var pointerShape = $("#category-pointer path");
// var pointerLength = pointerShape.get(0).getTotalLength();
// --------------------------------------

// --------------------------------------
// Prevent Cache Reload (Safari and Firefox)
//
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload()
    }
};
// --------------------------------------

// --------------------------------------
// Splash Page Exit Delays
//
$(".link-delay").on("click", function(e) {
  e.preventDefault();
  var linkedPage = this.getAttribute("xlink:href");

  setTimeout(function() {
    window.location = linkedPage;
  }, 1500);
})
// --------------------------------------

// --------------------------------------
// Homepage Icon Highlight and Text Reveal
//
var devLink = $(".dev-link");
$(".dev-icon").hover(function() {
  devLink.toggleClass("unhide");
})

var designLink = $(".design-link");
$(".design-icon").hover(function() {
  designLink.toggleClass("unhide");
})

var resumeLink = $(".resume-link");
$(".resume-icon").hover(function() {
  resumeLink.toggleClass("unhide");
})

var designBlur = $(".design-icon-filter");
$(".design-icon").hover(function() {
  designBlur.addClass("transition");
  designBlur.toggleClass("unhide");
})

var devBlur = $(".dev-icon-filter");
$(".dev-icon").hover(function() {
  devBlur.addClass("transition");
  devBlur.toggleClass("unhide");
})

var resumeBlur = $(".resume-icon-filter");
$(".resume-icon").hover(function() {
  resumeBlur.addClass("transition");
  resumeBlur.toggleClass("unhide");
})
// --------------------------------------

var navGraphic = $(".nav-container");

// --------------------------------------
// Developer Splash Page Interactions
//
var devLines = $(".dev-lines");
var splashBack = $(".splash-bg");

var sandboxPointer = $("#sandbox-pointer");
var sandboxText = $("#sandbox-text");
var sandboxBox = $(".sandbox-text-box");
var sandboxDesc = $(".sandbox-description");

$("#pulse-sandbox, #sandbox-text").hover(function() {
  sandboxText.addClass("transition");
  sandboxText.toggleClass("visible-text");
})

$("#pulse-sandbox, #sandbox-text").on("click", function() {
  sandboxPointer.addClass("transition");
  sandboxPointer.toggleClass("visible-pointer");
  sandboxText.toggleClass("click-text");
  sandboxBox.toggleClass("unhide");
  sandboxDesc.toggleClass("unhide");
})

$(document).ready(function() {
  $(document).mouseup(function(e) {
    if (!sandboxBox.is(e.target) && !sandboxText.is(e.target) && !sandboxDesc.is(e.target)) {
    sandboxBox.removeClass("unhide");
    sandboxDesc.removeClass("unhide");
    sandboxText.removeClass("click-text");
    sandboxPointer.removeClass("visible-pointer");
    }
  })
})

var litmusPointer = $("#litmus-pointer");
var litmusText = $("#litmus-text");
var litmusBox = $(".litmus-text-box");
var litmusDesc = $(".litmus-description");

$("#pulse-litmus, #litmus-text").hover(function() {
  litmusText.addClass("transition");
  litmusText.toggleClass("visible-text");
})

$("#pulse-litmus, #litmus-text").on("click", function() {
  litmusPointer.addClass("transition");
  litmusPointer.toggleClass("visible-pointer");
  litmusText.toggleClass("click-text");
  litmusBox.toggleClass("unhide");
  litmusDesc.toggleClass("unhide");
})

$(document).mouseup(function(e) {
  if (!litmusBox.is(e.target) && !litmusText.is(e.target) && !litmusDesc.is(e.target)) {
    litmusBox.removeClass("unhide");
    litmusDesc.removeClass("unhide");
    litmusText.removeClass("click-text");
    litmusPointer.removeClass("visible-pointer");
  }
})

var scenesPointer = $("#scenes-pointer");
var scenesText = $("#scenes-text");
var scenesBox = $(".scenes-text-box");
var scenesDesc = $(".scenes-description");

$("#pulse-scenes, #scenes-text").hover(function() {
  scenesText.addClass("transition");
  scenesText.toggleClass("visible-text");
})

$("#pulse-scenes, #scenes-text").on("click", function() {
  scenesPointer.addClass("transition");
  scenesPointer.toggleClass("visible-pointer");
  scenesText.toggleClass("click-text");
  scenesBox.toggleClass("unhide");
  scenesDesc.toggleClass("unhide");
})

$(document).mouseup(function(e) {
  if (!scenesBox.is(e.target) && !scenesText.is(e.target) && !scenesBox.is(e.target)) {
    scenesBox.removeClass("unhide");
    scenesDesc.removeClass("unhide");
    scenesText.removeClass("click-text");
    scenesPointer.removeClass("visible-pointer");
  }
})

$(".scenes-link").on("click", function() {
  scenesBox.addClass("text-hide");
  scenesText.addClass("text-hide");
  scenesPointer.addClass("text-hide");
  devLines.addClass("dev-eraser");
  navGraphic.addClass("text-hide");
})
// --------------------------------------

// --------------------------------------
// Design Splash Page Interactions
//
var archPointer = $("#arch-pointer");
var archText = $("#arch-text");
var archBox = $(".arch-text-box");
var archDesc = $(".arch-description");

$("#arch-pulse, #arch-text").hover(function() {
  archText.addClass("transition");
  archText.toggleClass("visible-text");
})

$("#arch-pulse, #arch-text").on("click", function() {
  archPointer.addClass("transition");
  archPointer.toggleClass("visible-pointer");
  archText.toggleClass("click-text");
  archBox.toggleClass("unhide");
  archDesc.toggleClass("unhide");
})

$(document).mouseup(function(e) {
  if (!archBox.is(e.target) && !archText.is(e.target) && !archDesc.is(e.target)) {
    archBox.removeClass("unhide");
    archDesc.removeClass("unhide");
    archText.removeClass("click-text");
    archPointer.removeClass("visible-pointer");
  }
})

var webPointer = $("#web-pointer");
var webText = $("#web-text");
var webBox = $(".web-text-box");
var webDesc = $(".web-description");

$("#web-pulse, #web-text").hover(function() {
  webText.addClass("transition");
  webText.toggleClass("visible-text");
})

$("#web-pulse, #web-text").on("click", function() {
  webPointer.addClass("transition");
  webPointer.toggleClass("visible-pointer");
  webText.toggleClass("click-text");
  webBox.toggleClass("unhide");
  webDesc.toggleClass("unhide");
})

$(document).mouseup(function(e) {
  if (!webBox.is(e.target) && !webText.is(e.target) && !webDesc.is(e.target)) {
    webBox.removeClass("unhide");
    webDesc.removeClass("unhide");
    webText.removeClass("click-text");
    webPointer.removeClass("visible-pointer");
  }
})
// --------------------------------------

// --------------------------------------
// Resume Splash Page Interactions
//
var resumeLines = $(".resume-lines");

var skillsPointer = $("#skills-pointer");
var skillsText = $("#skills-text");

$("#skills-pulse, #skills-text").hover(function() {
  skillsText.addClass("transition");
  skillsText.toggleClass("visible-resume-text");
  skillsPointer.addClass("transition");
  skillsPointer.toggleClass("visible-resume-pointer");
})

$("#skills-pulse, #skills-text").on("click", function() {
  skillsText.addClass("text-hide");
  skillsPointer.addClass("text-hide");
  resumeLines.addClass("resume-eraser");
  navGraphic.addClass("text-hide");
})

var experiencePointer = $("#experience-pointer");
var experienceText = $("#experience-text");

$("#experience-pulse, #experience-text").hover(function() {
  experienceText.addClass("transition");
  experienceText.toggleClass("visible-resume-text");
  experiencePointer.addClass("transition");
  experiencePointer.toggleClass("visible-resume-pointer");
})

$("#experience-pulse, #experience-text").on("click", function() {
  experienceText.addClass("text-hide");
  experiencePointer.addClass("text-hide");
  resumeLines.addClass("resume-eraser");
  navGraphic.addClass("text-hide");
})

var contactPointer = $("#contact-pointer");
var contactText = $("#contact-text");

$("#contact-pulse, #contact-text").hover(function() {
  contactText.addClass("transition");
  contactText.toggleClass("visible-resume-text");
  contactPointer.addClass("transition");
  contactPointer.toggleClass("visible-resume-pointer");
})

$("#contact-pulse, #contact-text").on("click", function() {
  contactText.addClass("text-hide");
  contactPointer.addClass("text-hide");
  resumeLines.addClass("resume-eraser");
  navGraphic.addClass("text-hide");
})
// --------------------------------------

// --------------------------------------
// Transit Map Navigation
//
var navIcon = $("#nav-icon-outline");
var transitMap = $(".transit-container");
var navExit = $("#nav-close");

$(navIcon).on("click", function() {
  transitMap.addClass("nav-transition");
  transitMap.toggleClass("unhide");
})

$(navExit).on("click", function() {
  transitMap.toggleClass("unhide");
})
