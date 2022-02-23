startCameraButton.addEventListener('click', async () => {
  startCameraButton.disabled = true;
  const constraints = {
    audio: {
      echoCancellation: { exact: true }
    },
    video: {
      width: 1280, height: 720
    }
  };
  console.log('Using media constraints:', constraints);
  stream = await navigator.mediaDevices.getUserMedia(constraints);
  handleSuccess();
});

function handleSuccess() {
  stopCameraButton.disabled = false;
  startRecordingButton.disabled = false;
  console.log('getUserMedia() got stream:', stream);

  gumVideo.srcObject = stream;

}