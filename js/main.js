let mediaRecorder;
let recordedBlobs;

let stream;

const gumVideo = document.querySelector('video#gum');

// const codecPreferences = document.querySelector('#codecPreferences');

const recordedVideo = document.querySelector('video#recorded');
const startRecordingButton = document.querySelector('button#start-recording');
const stopRecordingButton = document.querySelector('button#stop-recording');

const startCameraButton = document.querySelector('button#start-camera');
const stopCameraButton = document.querySelector('button#stop-camera');

const playButton = document.querySelector('button#play-button');
const pauseButton = document.querySelector('button#pause-button');