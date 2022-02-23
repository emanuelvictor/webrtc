stopCameraButton.addEventListener('click', async () => {
  stopStream(stream)

  stopCameraButton.disabled = true;
  startCameraButton.disabled = false;
  startRecordingButton.disabled = true;
  gumVideo.srcObject = null;
});

stopStream = function (stream) {
  stream.getTracks().forEach(track => {
    track.stop()
  });
}