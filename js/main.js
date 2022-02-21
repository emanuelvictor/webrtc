let mediaRecorder;
let recordedBlobs;

let stream;

const gumVideo = document.querySelector('video#gum');

// const codecPreferences = document.querySelector('#codecPreferences');

const recordedVideo = document.querySelector('video#recorded');
const recordButton = document.querySelector('button#record');

const startCameraButton = document.querySelector('button#start');
const stopCameraButton = document.querySelector('button#stop');