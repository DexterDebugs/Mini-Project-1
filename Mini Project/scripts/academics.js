document.addEventListener("DOMContentLoaded", function () {
    console.log("Academics section loaded!");

    // Example function for Academics
    function showCourseSchedule() {
        alert("Showing Course Schedule!");
    }

    // Attach events (if needed)
    const courseBtn = document.getElementById("course-schedule-btn");
    if (courseBtn) {
        courseBtn.addEventListener("click", showCourseSchedule);
    }
});
