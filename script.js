// script.js
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const jobList = document.querySelectorAll('#job-list li');

    jobList.forEach(job => {
        if (job.textContent.toLowerCase().includes(query)) {
            job.style.display = 'list-item';
        } else {
            job.style.display = 'none';
        }
    });
});
