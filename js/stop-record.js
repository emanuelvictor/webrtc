function stopRecording() {
  mediaRecorder.stop();
}

stopRecordingButton.addEventListener('click', () => {
  playButton.disabled = false;
  stopRecordingButton.disabled = true;
  stopRecording();
});