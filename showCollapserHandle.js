// Call this when the thinking process is done
function showTaskUI() {
  document.querySelectorAll('.task-ui-group').forEach(el => el.classList.add('visible'));
}

// Optional: Call this to hide again when thinking starts
function hideTaskUI() {
  document.querySelectorAll('.task-ui-group').forEach(el => el.classList.remove('visible'));
}

// Example usage:
// showTaskUI(); // when thinking is done
// hideTaskUI(); // when thinking starts

// Auto-show on page load for visibility
window.addEventListener('DOMContentLoaded', showTaskUI);
