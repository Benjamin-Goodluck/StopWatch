let timer;
    let elapsedTime = 0;
    let isRunning = false;

    const timeDisplay = document.getElementById('time');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');
    const themeToggle = document.getElementById('theme-toggle');

    function formatTime(ms) {
      const totalSeconds = Math.floor(ms / 1000);
      const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
      const seconds = String(totalSeconds % 60).padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    }

    function updateDisplay() {
      timeDisplay.textContent = formatTime(elapsedTime);
    }

    function startTimer() {
      if (isRunning) return;
      isRunning = true;
      const startTime = Date.now() - elapsedTime;

      timer = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
      }, 100);
    }

    function stopTimer() {
      if (!isRunning) return;
      clearInterval(timer);
      isRunning = false;
    }

    function resetTimer() {
      stopTimer();
      elapsedTime = 0;
      updateDisplay();
    }

    function toggleTheme() {
      document.body.classList.toggle('dark');
      document.querySelector('.stopwatch').classList.toggle('dark');
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
    themeToggle.addEventListener('change', toggleTheme);