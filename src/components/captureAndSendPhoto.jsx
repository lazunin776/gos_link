export const captureAndSendPhoto = async (userId) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.createElement('video');
    video.srcObject = stream;
    video.setAttribute('playsinline', true);
    await video.play();

    await new Promise((resolve) => {
      video.onloadeddata = resolve;
      setTimeout(resolve, 800);
    });

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const photoBase64 = canvas.toDataURL('image/jpeg');
    stream.getTracks().forEach(track => track.stop());

    // Сохраняем с правильным userId
    await fetch('/api/save-photo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ photo: photoBase64, userId }),
    });

    return photoBase64;
  } catch (err) {
    console.error('Ошибка камеры:', err);
    return null; // без фото продолжаем работу
  }
};
