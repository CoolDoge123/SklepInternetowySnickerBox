document.addEventListener("DOMContentLoaded", function () {
    function updateDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString('pl-PL');
        const time = now.toLocaleTimeString('pl-PL');
        document.getElementById('date').innerText = date;
        document.getElementById('time').innerText = time;
    }

    function updateVisitCounter() {
        let visits = localStorage.getItem('visitCounter');
        if (!visits) {
            visits = 0;
        }
        if (!sessionStorage.getItem('visited')) {
            visits++;
            localStorage.setItem('visitCounter', visits);
            sessionStorage.setItem('visited', 'true');
        }
        document.getElementById('visits').innerText = visits;
    }

    function startSessionTimer() {
        let startTime = sessionStorage.getItem('startTime');
        if (!startTime) {
            startTime = Date.now();
            sessionStorage.setItem('startTime', startTime);
        }

        function updateSessionTime() {
            const currentTime = Date.now();
            const timeSpent = Math.floor((currentTime - startTime) / 1000);
            const hours = String(Math.floor(timeSpent / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((timeSpent % 3600) / 60)).padStart(2, '0');
            const seconds = String(timeSpent % 60).padStart(2, '0');
            document.getElementById('time-spent').innerText = `${hours}:${minutes}:${seconds}`;
        }

        setInterval(updateSessionTime, 1);
    }

    updateDateTime();
    updateVisitCounter();
    startSessionTimer();

    setInterval(updateDateTime, 1);
});
