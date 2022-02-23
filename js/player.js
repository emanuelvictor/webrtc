playButton.addEventListener('click', () => {
  playButton.disabled = true;
  pauseButton.disabled = false;
  const mimeType = 'video/webm;codecs=vp9,opus'.split(';', 1)[0];
  const superBuffer = new Blob(recordedBlobs, {type: mimeType});
  recordedVideo.src = null;
  recordedVideo.srcObject = null;
  recordedVideo.src = window.URL.createObjectURL(superBuffer);
  recordedVideo.controls = true;
  recordedVideo.play(); //todo we need descover how to continue
});

pauseButton.addEventListener('click', () => {
  playButton.disabled = false;
  pauseButton.disabled = true;
  recordedVideo.pause();
});