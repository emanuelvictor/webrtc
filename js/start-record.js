function startRecording() {
  recordedBlobs = [];
  const mimeType = 'video/webm;codecs=vp9,opus';
  const options = { mimeType };

  try {
    mediaRecorder = new MediaRecorder(stream, options);
  } catch (e) {
    console.error('Exception while creating MediaRecorder:', e);
    return;
  }

  console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
  stopRecordingButton.disabled = false;
  startRecordingButton.disabled = true;
  playButton.disabled = true;

  mediaRecorder.onstop = (event) => {
    console.log('Recorder stopped: ', event);
    console.log('Recorded Blobs: ', recordedBlobs);
  };

  mediaRecorder.ondataavailable = function handleDataAvailable(event) {
    console.log('handleDataAvailable', event);
    if (event.data && event.data.size > 0) {
      recordedBlobs.push(event.data);
    }
  };

  mediaRecorder.start();
  console.log('MediaRecorder started', mediaRecorder);
}

startRecordingButton.addEventListener('click', () => {
  startRecording();
});