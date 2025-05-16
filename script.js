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
// Function to update the right-panel progress bar
function setRightPanelProgress(percent) {
  const bar = document.getElementById("progress-bar-inner");
  if (bar) {
    bar.style.width = `${Math.max(0, Math.min(100, percent))}%`;
  }
}

// Animate the right-panel progress bar linearly from current to target percent
function animateRightPanelProgress(targetPercent, duration = 600) {
  const bar = document.getElementById("progress-bar-inner");
  if (!bar) return;
  const startPercent = parseFloat(bar.style.width) || 0;
  const startTime = performance.now();
  const endPercent = Math.max(0, Math.min(100, targetPercent));
  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = startPercent + (endPercent - startPercent) * progress;
    bar.style.width = current + "%";
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      bar.style.width = endPercent + "%";
    }
  }
  requestAnimationFrame(animate);
}
document.addEventListener("DOMContentLoaded", function () {
  animateRightPanelProgress(0); // Start at 0% progress
});
const THINKING_DURATION = 500; // total thinking time in ms
const japanImageUrls = [
  "https://ttgasia.2017.ttgasia.com/wp-content/uploads/sites/2/2023/04/Dotoburi-in-Osaka_640.jpg",
  "https://www.aljazeera.com/wp-content/uploads/2024/07/AFP__20240311__34LB4CK__v1__HighRes__JapanLifestyleTourism-1-1721361890.jpg?resize=1920%2C1440",
  "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fec6f7cf8-6dbe-4b56-9972-cbf4fbc76462.jpg?crop=1564%2C880%2C318%2C0",
  "https://www.hindustantimes.com/ht-img/img/2024/04/29/550x309/japan_tourism_1713344920936_1714387811211.jpg",
  "https://media.istockphoto.com/id/1161555395/photo/osaka-tower-and-view-of-the-neon-advertisements-in-shinsekai-district-at-dusk-osaka-japan.jpg?s=612x612&w=0&k=20&c=2z2ViOxKPfKzq_rDtCE_aW7KxbROK7MUJ-ti-Oqf4KQ=",
  "https://i.postimg.cc/W1tbJGS7/image.png",
  "https://pohcdn.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/japan-1.jpg",
  // "https://res.cloudinary.com/jnto/image/upload/w_600,fl_lossy,f_auto,q_auto,c_scale/v1/media/filer_public/4d/e0/4de04120-b27a-4f12-b9e4-413c6fcbe7fb/49tokushima_udatsu_edit_3_dbwqpo",
  // "https://img.kyodonews.net/english/public/images/posts/b0467b7bb63b5f0fbaa42ef56c03f801/photo_l.jpg",
];

const japanImageUrls2 = [
  "https://miro.medium.com/v2/resize:fit:1118/1*AauvYRhYA6GHTdkC4VbWgA.png",
  "https://blog.btrax.com/wp-content/uploads/2010/08/2.jpg",
  "https://digitalcommunications.wp.st-andrews.ac.uk/files/2016/02/japanese-design.jpg",
  "https://www.humblebunny.com/wp-content/uploads/2024/01/example-japanese-web-design-yahoo-2013-2020.jpg",
  "https://i.postimg.cc/W1tbJGS7/image.png",
  "https://nothingapps.com/wp-content/uploads/2024/01/example-japanese-web-design-kakaku.jpg",
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNkiXmARqgMPtFfQjIH0CFuNovv-D16Jlhaw&s",
  // "https://speckyboy.com/wp-content/uploads/2016/05/japanese-web-deign-01.jpg",
];

const sources = [
  "https://i.postimg.cc/W1tbJGS7/image.png",
]

const japaneseWebsiteUrls = [
  "yahoo.co.jp",
  "rakuten.co.jp",
  "cookpad.com",
  "nikkei.com",
  "mercari.com/jp",
  "zozo.jp",
  "kakaku.com",
  "ameblo.jp",
];

const processTasks = [
  {
    title: "Researching Japan travel basics",
    details: [
      {
        type: "search",
        text: "Searching: Best time to visit Japan in April",
      },
    ],
  },
  {
    title: "Creating todo checklist",
    details: [
      { type: "file", text: "Creating file: japan_trip_checklist.md" },
    ],
  },
  {
    title: "Planning 7-day itinerary",
    details: [{ type: "browse", text: "Browsing: Kyoto travel guides" }],
  },
  {
    title: "Researching transportation",
    details: [
      { type: "search", text: "Searching: Japan Rail Pass information" },
    ],
  },
  {
    title: "Creating HTML travel handbook",
    details: [
      { type: "file", text: "Creating file: japan_travel_handbook.html" },
    ],
  },
  {
    title: "Researching proposal locations",
    details: [
      {
        type: "browse",
        text: "Browsing: Cherry blossom viewing locations",
      },
    ],
  },
  {
    title: "Finalizing documentation",
    details: [
      { type: "command", text: "Executing command: compile_documents" },
    ],
  },
  {
    title: "Preparing delivery",
    details: [{ type: "file", text: "Creating file: README.md" }],
  },
];

// List of external reference sources to include during thinking
const referenceSources = [
  "Reddit: r/JapanTravel – user discussion on best cherry blossom spots",
  'Quora: "What is the best time to visit Kyoto?" answers roundup',
  "TravelBlog: Tokyo Cheapo – budget travel tips in Tokyo",
  "Reddit: r/TravelTips – packing essentials thread",
  'Quora: "How to use JR Pass efficiently?" Q&A',
  "Blog: Nomadic Matt – Japan itinerary guide",
];

// calculate per-task delay after tasks are defined
const timePerTask = THINKING_DURATION / processTasks.length;

const taskSection = document.getElementById("task-section");
const leftPanel = document.getElementById("left-panel");
const finalSummary = document.getElementById("task-final-summary");
const replayCompleted = document.getElementById("task-replay-completed");
const dynamicImage = document.getElementById("dynamic-image");
const dynamicImage2 = document.getElementById("dynamic-image-2");
const documentHeader = document.getElementById("document-header");
const documentContent = document.getElementById("document-content");
const rightPanel = document.getElementById("right-panel");
const reasoningBar = document.getElementById("reasoning-bar");
let currentStepIndex = 0;
let previousStepElement = null;
let isProcessingTask = false; // Flag to track if a task is currently being processed

document.addEventListener("DOMContentLoaded", () => {
  // Loading screen handling
  const loadingScreen = document.getElementById("loading-screen");
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 2000);

  // Add event listener for process completion
  document.addEventListener("processComplete", () => {
    const reasoningBar = document.getElementById("reasoning-bar");
    reasoningBar.classList.add("hidden");
    setTimeout(() => {
      reasoningBar.style.display = "none";
    }, 300); // Match the transition duration
    animateRightPanelProgress(100); // Ensure progress is filled on complete
  });

  // Initialize images and website display
  dynamicImage.src = japanImageUrls[0];
  dynamicImage2.src = japanImageUrls2[0];
  setTimeout(displayNextStep, 500);

  // Add event listener for process completion
  document.addEventListener("processComplete", () => {
    const reasoningBar = document.getElementById("reasoning-bar");
    reasoningBar.style.opacity = "0";
    reasoningBar.style.visibility = "hidden";
    reasoningBar.style.transform = "translateY(100%)";
  });

  // Add event listeners for document controls
  const documentControls = document.querySelector(".document-controls");
  const navIcons = documentControls.querySelectorAll(".nav-icon");

  // Close button (last icon)
  navIcons[navIcons.length - 1].addEventListener("click", () => {
    documentHeader.classList.remove("visible");
    documentContent.classList.remove("visible");
    dynamicImage.classList.remove("hidden");
    dynamicImage2.classList.remove("hidden");
  });

  // Close panel button
  const togglePanelBtn = document.getElementById("toggle-panel");
  const mainContent = document.querySelector(".main-content");
  const rightPanel = document.getElementById("right-panel");
  const leftPanel = document.getElementById("left-panel");

  // Variable to track panel state
  let rightPanelVisible = true;

  togglePanelBtn.addEventListener("click", () => {
    if (rightPanelVisible) {
      // Hide right panel with improved transitions
      rightPanel.classList.add("hidden");
      setTimeout(() => {
        mainContent.classList.add("right-panel-hidden");
        leftPanel.classList.add("centered");
        // Add expanded for smooth animation
        setTimeout(() => {
          leftPanel.classList.add("expanded");
        }, 10);
      }, 0);
      togglePanelBtn.classList.remove("close-panel-icon");
      togglePanelBtn.classList.add("open-panel-icon");
      togglePanelBtn.classList.add("rotated");
    } else {
      // Show right panel with improved transitions
      rightPanel.classList.remove("hidden");
      mainContent.classList.remove("right-panel-hidden");
      // Remove expanded first for smooth reverse animation
      leftPanel.classList.remove("expanded");
      leftPanel.classList.remove("centered");
      togglePanelBtn.classList.remove("open-panel-icon");
      togglePanelBtn.classList.remove("rotated");
      togglePanelBtn.classList.add("close-panel-icon");
    }
    // Toggle state
    rightPanelVisible = !rightPanelVisible;
  });

  // Initialize the toggle button with close icon class
  togglePanelBtn.classList.add("close-panel-icon");
  togglePanelBtn.classList.remove("open-panel-icon");
  togglePanelBtn.classList.remove("rotated");

  // Maximize button (second icon)
  navIcons[1].addEventListener("click", () => {
    rightPanel.classList.toggle("maximized");
    if (rightPanel.classList.contains("maximized")) {
      leftPanel.style.display = "none";
    } else {
      leftPanel.style.display = "block";
    }
  });

  // Copy button in document controls
  const copyBtn = document.getElementById("copy-content");
  copyBtn.addEventListener("click", () => {
    const textToCopy = documentContent.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Show feedback
      const feedback = document.createElement("div");
      feedback.textContent = "Copied to clipboard!";
      feedback.style.position = "fixed";
      feedback.style.top = "20px";
      feedback.style.right = "20px";
      feedback.style.backgroundColor = "var(--accent-green)";
      feedback.style.color = "var(--bg-primary)";
      feedback.style.padding = "10px 20px";
      feedback.style.borderRadius = "4px";
      feedback.style.zIndex = "1000";
      document.body.appendChild(feedback);
      setTimeout(() => feedback.remove(), 2000);
    });
  });

  // Watch again button
  document
    .querySelector(".watch-button")
    .addEventListener("click", () => {
      // Reset state
      taskSection.innerHTML = "";
      finalSummary.classList.remove("visible");
      replayCompleted.classList.remove("visible");
      currentStepIndex = 0;
      previousStepElement = null;
      animateRightPanelProgress(0); // Reset progress bar

      // Hide document content
      documentHeader.classList.remove("visible");
      documentContent.classList.remove("visible");
      dynamicImage.classList.remove("hidden");
      dynamicImage2.classList.remove("hidden");

      // Restart animation
      setTimeout(displayNextStep, 500);
    });

  // Add zoom functionality
  let currentZoom = 100;
  navIcons[0].addEventListener("click", () => {
    currentZoom = Math.min(currentZoom + 25, 200);
    documentContent.style.transform = `scale(${currentZoom / 100})`;
    documentContent.style.transformOrigin = "top left";
  });

  navIcons[2].addEventListener("click", () => {
    currentZoom = Math.max(currentZoom - 25, 50);
    documentContent.style.transform = `scale(${currentZoom / 100})`;
    documentContent.style.transformOrigin = "top left";
  });

  // Add task progress collapse functionality
  const taskProgress = document.getElementById("task-progress");
  const taskProgressHeader = document.getElementById(
    "task-progress-header"
  );

  taskProgressHeader.addEventListener("click", () => {
    taskProgress.classList.toggle("collapsed");
  });

  // Start with task progress expanded
  taskProgress.classList.remove("collapsed");

  // Add task replay collapse functionality
  const taskReplayCompleted = document.getElementById(
    "task-replay-completed"
  );
  const taskReplayHeader = document.getElementById("task-replay-header");
  const taskReplayContent = document.getElementById(
    "task-replay-content"
  );

  taskReplayHeader.addEventListener("click", () => {
    taskReplayContent.classList.toggle("collapsed");
  });

  // Add listener to the container, check target
  taskReplayCompleted.addEventListener("click", (event) => {
    // Check if the click happened on the header or its direct children
    if (taskReplayHeader.contains(event.target)) {
      taskReplayCompleted.classList.toggle("collapsed");
    }
  });

  // Start with task replay expanded (or collapsed if you prefer)
  taskReplayCompleted.classList.remove("collapsed");

  // Add click handlers for browser URLs
  const browserUrls = document.querySelectorAll(".browser-url");
  browserUrls.forEach((url) => {
    url.addEventListener("click", (e) => {
      e.preventDefault();
      const url = url.getAttribute("data-url");

      // Add clicked class for visual feedback
      url.classList.add("clicked");

      // Remove clicked class after animation
      setTimeout(() => {
        url.classList.remove("clicked");
      }, 1000);

      // (Removed website display text update)

      // Update the corresponding image
      const image = url.closest(".browser-window").querySelector("img");
      if (image) {
        const imageUrls =
          image.id === "dynamic-image" ? japanImageUrls : japanImageUrls2;
        const currentIndex = imageUrls.indexOf(image.src);
        const nextIndex = (currentIndex + 1) % imageUrls.length;
        image.src = imageUrls[nextIndex];
      }
    });
  });

  // Modal logic
  const modalOverlay = document.getElementById("file-modal-overlay");
  const modalClose = document.getElementById("file-modal-close");
  const viewAllBtn = document.getElementById("view-all-files-btn");
  const modalTabs = document.querySelectorAll(".modal-tab");

  viewAllBtn.addEventListener("click", () => {
    modalOverlay.classList.add("active");
    renderModalFiles("all");
    modalTabs.forEach((tab) => tab.classList.remove("active"));
    modalTabs[0].classList.add("active");
  });
  modalClose.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
  });
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
    }
  });
  modalTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      modalTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderModalFiles(tab.getAttribute("data-tab"));
    });
  });

  // Add click handler for file buttons
  document.querySelectorAll(".file-item-button").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const fileName =
        this.querySelector(".file-name").textContent.trim();

      if (fileName === "proposal_locations") {
        // Create and show proposal popup
        const proposalPopup = document.createElement("div");
        proposalPopup.className = "proposal-popup";

        proposalPopup.innerHTML = `
                        <button class="close-button">&times;</button>
                        <h1>Romantic Proposal Locations in Japan (April 2025)</h1>
                        <p>This guide provides detailed information about three carefully selected proposal locations during cherry blossom season in Japan, with specific recommendations for timing, photography considerations, and backup options.</p>

                        <div class="location-card">
                            <h2>1. Chidorigafuchi Park, Tokyo</h2>
                            <img class="location-image" src="${japanImageUrls[0]}" alt="Chidorigafuchi Park">
                            <h3>Description:</h3>
                            <p>A romantic pedestrian path along the moat of the Imperial Palace, famous for its tunnel of cherry blossoms. The boat ride offers an intimate setting with stunning views of cherry blossoms reflecting on the water.</p>
                            
                            <h3>Best Timing:</h3>
                            <ul>
                                <li>Time of Day: Early morning (around sunrise) or late afternoon (1-2 hours before sunset) for the best lighting and fewer crowds</li>
                                <li>Cherry Blossom Peak: Expected around late March to early April 2025</li>
                                <li>Illumination Period: Special evening illumination typically runs from late March to early April (around 6:00 PM to 10:00 PM)</li>
                            </ul>

                            <h3>Photography Considerations:</h3>
                            <ul>
                                <li>Morning light provides a soft, ethereal quality to photos</li>
                                <li>Golden hour (late afternoon) creates a warm, romantic glow</li>
                                <li>Evening illuminations offer a magical atmosphere with lit-up cherry blossoms</li>
                            </ul>

                            <h3>Privacy Level: Moderate</h3>
                            <ul>
                                <li>While popular, early morning visits can provide relative privacy</li>
                                <li>Weekdays are less crowded than weekends</li>
                                <li>The boat ride offers more privacy than the walking paths</li>
                            </ul>

                            <h3>Backup Weather Options:</h3>
                            <ul>
                                <li>If raining: Consider proposing at nearby Imperial Palace East Gardens (covered areas available)</li>
                                <li>If too crowded: Visit on a weekday morning or consider the nearby Yasukuni Shrine which has beautiful cherry trees but fewer visitors</li>
                            </ul>

                            <h3>Special Notes:</h3>
                            <ul>
                                <li>Boat rental costs approximately ¥800 per 30 minutes</li>
                                <li>Boats are available from 9:30 AM to 8:30 PM (last admission at 7:30 PM) during cherry blossom season</li>
                                <li>Consider hiring a professional photographer who knows the area for candid proposal shots</li>
                            </ul>

                            <h2>2. Maruyama Park, Kyoto</h2>
                            <h3>Description:</h3>
                            <p>Maruyama Park is Kyoto's most famous cherry blossom viewing spot, centered around a magnificent weeping cherry tree (shidarezakura) that becomes illuminated in the evenings. The park offers a traditional Japanese garden setting with ponds and pathways.</p>

                            <h3>Best Timing:</h3>
                            <ul>
                                <li>Time of Day: Early morning (before 8:00 AM) for fewer crowds or evening for illuminated views</li>
                                <li>Cherry Blossom Peak: Expected around March 30 to April 10, 2025</li>
                                <li>Illumination Period: Typically from sunset until midnight during peak bloom</li>
                            </ul>

                            <h3>Photography Considerations:</h3>
                            <ul>
                                <li>The iconic weeping cherry tree makes for a stunning backdrop</li>
                                <li>Evening illuminations create a romantic, magical atmosphere</li>
                                <li>Morning light offers clearer photos with fewer people in the background</li>
                            </ul>

                            <h3>Privacy Level: Low to Moderate</h3>
                            <ul>
                                <li>Very popular during peak season</li>
                                <li>Early morning visits (before 7:00 AM) offer the most privacy</li>
                                <li>The park has various secluded corners away from the main weeping cherry tree</li>
                            </ul>

                            <h3>Backup Weather Options:</h3>
                            <ul>
                                <li>If raining: Nearby Yasaka Shrine has covered areas with cherry trees</li>
                                <li>If too crowded: Consider the quieter Kyoto Gyoen National Garden or Kamogawa River banks</li>
                            </ul>

                            <h3>Special Notes:</h3>
                            <ul>
                                <li>The weeping cherry tree tends to bloom earlier than other varieties</li>
                                <li>Evening illumination creates an especially romantic atmosphere</li>
                                <li>Food stalls and vendors are available in the park during cherry blossom season</li>
                                <li>Consider reserving a nearby traditional restaurant for a celebratory meal after the proposal</li>
                            </ul>

                            <h2>3. Hozugawa River, Arashiyama</h2>
                            <h3>Description:</h3>
                            <p>The Hozugawa River boat ride offers a unique proposal setting as you float through the scenic ravines of Arashiyama. During cherry blossom season, the riverbanks are lined with blooming trees, creating a natural, romantic backdrop away from the crowds.</p>

                            <h3>Best Timing:</h3>
                            <ul>
                                <li>Time of Day: Morning boat rides (first departure around 9:00 AM) for best lighting and calmer water</li>
                                <li>Cherry Blossom Peak: Expected around late March to early April 2025</li>
                                <li>Boat Schedule: Typically operates from 9:00 AM to 3:30 PM (last departure)</li>
                            </ul>

                            <h3>Photography Considerations:</h3>
                            <ul>
                                <li>The boat ride provides unique perspectives of cherry blossoms from the water</li>
                                <li>Natural lighting on the river creates beautiful reflections</li>
                                <li>Consider hiring a photographer to wait at a scenic point or arrange with boat staff in advance</li>
                            </ul>

                            <h3>Privacy Level: High</h3>
                            <ul>
                                <li>Private experience on the boat</li>
                                <li>The 16km journey provides multiple scenic spots for proposing</li>
                                <li>Other passengers will be present but focused on the scenery</li>
                            </ul>

                            <h3>Backup Weather Options:</h3>
                            <ul>
                                <li>If boat rides are canceled: The nearby Sagano Romantic Train offers covered viewing of similar scenery</li>
                                <li>If weather is poor: Consider the indoor spaces at Arashiyama's temples or a traditional ryokan with garden views</li>
                            </ul>

                            <h3>Special Notes:</h3>
                            <ul>
                                <li>Boat ride costs approximately ¥4,100 per person</li>
                                <li>The full ride takes about 2 hours from Kameoka to Arashiyama</li>
                                <li>Reservations are highly recommended during cherry blossom season</li>
                                <li>The boat ride may be canceled due to high water or bad weather (refunds are typically provided)</li>
                                <li>Consider combining with the Sagano Romantic Train for a full day experience</li>
                            </ul>

                            <h2>General Proposal Tips</h2>
                            <ul>
                                <li>Weather Contingency: Always have an indoor backup plan during cherry blossom season as spring weather can be unpredictable</li>
                                <li>Timing Flexibility: Build 2-3 days of flexibility into your itinerary for the proposal, as cherry blossom peaks can vary</li>
                                <li>Professional Help: Consider hiring a local photographer familiar with the location for candid proposal photos</li>
                                <li>Ring Security: Keep the ring secure but accessible; consider a pocket with a zipper</li>
                                <li>Post-Proposal Celebration: Research and reserve a special restaurant near your chosen proposal spot</li>
                                <li>Local Assistance: Hotel concierges can often help with proposal arrangements and recommendations</li>
                                <li>Privacy Considerations: For more privacy, consider proposing during a weekday rather than weekend</li>
                            </ul>

                            <h2>Cherry Blossom Forecast for April 2025</h2>
                            <ul>
                                <li>Tokyo: Peak bloom expected from March 25 to April 5, 2025</li>
                                <li>Kyoto: Peak bloom expected from March 30 to April 10, 2025</li>
                                <li>Arashiyama: Similar to Kyoto's forecast, with potential for slightly earlier blooming</li>
                            </ul>
                            <p><em>Note: Cherry blossom forecasts are updated regularly starting in January of each year. Check the latest forecast closer to your travel date.</em></p>
                        `;
        const rightPanel = document.getElementById("right-panel");
        rightPanel.appendChild(proposalPopup);

        // Add close functionality
        proposalPopup
          .querySelector(".close-button")
          .addEventListener("click", () => {
            proposalPopup.remove();
          });
      }
    });
  });

  // Add click handler for proposal locations
  document.addEventListener("click", function (e) {
    if (e.target.matches(".proposal-list li strong, .proposal-list li")) {
      // Hide other content
      dynamicImage?.classList.add("hidden");
      dynamicImage2?.classList.add("hidden");

      // Create and show proposal popup
      const proposalPopup = document.createElement("div");
      proposalPopup.className = "proposal-popup";

      const location = e.target.closest("li").textContent;
      const locationName = location
        .split(":")[0]
        .replace("Proposal Opportunity", "")
        .trim();

      proposalPopup.innerHTML = `
                    <button class="close-button">&times;</button>
                    <h1>${locationName}</h1>
                    <div class="location-card">
                        <h2>Overview</h2>
                        <img class="location-image" src="${japanImageUrls[
        Math.floor(
          Math.random() * japanImageUrls.length
        )
        ]
        }" alt="${locationName}">
                        <p>${getLocationDescription(locationName)}</p>
                    </div>
                    <div class="location-card">
                        <h2>Best Time</h2>
                        <p>Early morning or during sunset for the most romantic atmosphere. Cherry blossoms are typically in full bloom in mid-April.</p>
                    </div>
                    <div class="location-card">
                        <h2>Tips</h2>
                        <ul>
                            <li>Visit on a weekday for fewer crowds</li>
                            <li>Consider hiring a local photographer to capture the moment</li>
                            <li>Check the weather forecast in advance</li>
                            <li>Have a backup indoor location nearby</li>
                        </ul>
                    </div>
                `;

      rightPanel.appendChild(proposalPopup);

      // Add close functionality
      proposalPopup
        .querySelector(".close-button")
        .addEventListener("click", () => {
          proposalPopup.remove();
          // Restore original content
          dynamicImage?.classList.remove("hidden");
          dynamicImage2?.classList.remove("hidden");
        });
    }
  });

  // Helper function to get location descriptions
  function getLocationDescription(location) {
    const descriptions = {
      "Chidorigafuchi Park":
        "A romantic pedestrian path along the moat of the Imperial Palace, famous for its tunnel of cherry blossoms. The boat ride offers an intimate setting with stunning views of cherry blossoms reflecting on the water.",
      "Maruyama Park":
        "Kyoto's most famous cherry blossom viewing spot, centered around a massive weeping cherry tree that's illuminated at night. The evening atmosphere with lanterns creates a magical setting.",
      "Hozugawa River":
        "A peaceful boat ride through the scenic Arashiyama district, surrounded by mountains and cherry blossoms. The traditional wooden boats and skilled boatmen provide a uniquely Japanese experience.",
    };
    return (
      descriptions[location] ||
      "A beautiful location perfect for a romantic proposal."
    );
  }

  // Add toggle for custom info section
  const customInfoHeader = document.getElementById("custom-info-header");
  const customInfoContent = document.getElementById(
    "custom-info-content"
  );
  customInfoHeader.addEventListener("click", () => {
    customInfoContent.classList.toggle("collapsed");
  });
});

function updateReasoningBar(text) {
  const reasoningBar = document.getElementById("reasoning-bar");
  const bottomBar = document.getElementById("bottom-bar");
  const progressBarContainer = document.querySelector(
    ".progress-bar-container"
  );
  if (text) {
    reasoningBar.textContent = text;
    reasoningBar.classList.remove("hidden");
    if (bottomBar) bottomBar.classList.remove("hidden");
    if (progressBarContainer) progressBarContainer.classList.remove("hidden");
  } else {
    setTimeout(() => {
      reasoningBar.classList.add("hidden");
      if (bottomBar) bottomBar.classList.add("hidden");
      if (progressBarContainer) progressBarContainer.classList.add("hidden");
    }, 500);
  }
}

function displayNextStep() {
  // Restore progress bar if starting a new process
  if (currentStepIndex === 0) {
    const progressBarContainer = document.querySelector(
      ".progress-bar-container"
    );
    if (progressBarContainer) progressBarContainer.style.display = "";
  }
  // Update progress bar for the current step
  const percent = Math.round(
    (currentStepIndex / processTasks.length) * 100
  );
  animateRightPanelProgress(percent);
  if (isProcessingTask) return;
  if (currentStepIndex < processTasks.length) {
    updateReasoningBar(
      `Thinking: Task ${currentStepIndex + 1} – ${processTasks[currentStepIndex].title
      }`
    );
    // Position the reasoning bar in the right panel
    const rightPanel = document.getElementById("right-panel");
    const reasoningBar = document.getElementById("reasoning-bar");
    reasoningBar.style.bottom = "20px";
    reasoningBar.style.left = "20px";
    reasoningBar.style.right = "20px";
    reasoningBar.style.transform = "none";
    reasoningBar.style.position = "absolute";
    reasoningBar.style.zIndex = "1000";

    // Show reasoning bar with current task
    reasoningBar.style.opacity = "1";
    reasoningBar.style.visibility = "visible";
    reasoningBar.textContent = `Thinking: Task ${currentStepIndex + 1
      } – ${processTasks[currentStepIndex].title}`;

    // Rest of your existing displayNextStep code...
    reasoningBar.style.opacity = "1";
    reasoningBar.style.visibility = "visible";
    reasoningBar.style.transform = "translateY(0)";
    reasoningBar.textContent = `Thinking: Task ${currentStepIndex + 1
      } – ${processTasks[currentStepIndex].title}`;
    isProcessingTask = true;
    const task = processTasks[currentStepIndex];
    const details = [
      ...task.details,
      {
        type: "source",
        text: `Referencing: ${referenceSources[currentStepIndex % referenceSources.length]
          }`,
      },
    ];
    const stepDiv = document.createElement("div");
    stepDiv.className = "task-step";

    // Create header
    const headerDiv = document.createElement("div");
    headerDiv.className = "task-step-header";
    headerDiv.textContent = `Task ${currentStepIndex + 1}: ${task.title}`;
    stepDiv.appendChild(headerDiv);

    // Create details container
    const detailsContainer = document.createElement("div");
    detailsContainer.className = "task-details-container";

    // Add each detail with typing effect
    details.forEach((detail, detailIndex) => {
      const detailDiv = document.createElement("div");
      detailDiv.className = "task-details";

      // Add appropriate icon based on type
      const iconDiv = document.createElement("div");
      iconDiv.className = `task-icon ${detail.type}-icon`;
      detailDiv.appendChild(iconDiv);

      // Add detail text with typing effect
      const textSpan = document.createElement("span");
      textSpan.className = "typing-effect";
      detailDiv.appendChild(textSpan);

      detailsContainer.appendChild(detailDiv);

      // Only show one detail at a time, each completes in 0.5 seconds
      if (detailIndex === 0) {
        // Start typing the first detail immediately
        const typingSpeed = calculateTypingSpeed(
          detail.text,
          timePerTask
        );
        typeText(textSpan, detail.text, 0, typingSpeed);
      } else {
        // Hide details that will be shown later
        detailDiv.style.opacity = "0";
      }
    });

    stepDiv.appendChild(detailsContainer);
    taskSection.appendChild(stepDiv);

    if (previousStepElement) {
      previousStepElement.classList.remove("active");
    }

    setTimeout(() => {
      stepDiv.classList.add("visible", "active");
    }, 10);

    previousStepElement = stepDiv;
    stepDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // Update images and website display
    const imageIndex = currentStepIndex % japanImageUrls.length;
    dynamicImage.src = japanImageUrls[imageIndex];
    dynamicImage.alt = `Japan Scene 1 - ${imageIndex + 1}`;

    const imageIndex2 = currentStepIndex % japanImageUrls2.length;
    dynamicImage2.src = japanImageUrls2[imageIndex2];
    dynamicImage2.alt = `Japan Scene 2 - ${imageIndex2 + 1}`;

    // (Removed website display text update)

    // schedule reference text in right-panel after each task interval
    // remove old references
    const allBrowserContents =
      document.querySelectorAll(".browser-content");
    allBrowserContents.forEach((c) =>
      c.querySelectorAll(".reference-source").forEach((el) => el.remove())
    );
    const refText =
      referenceSources[currentStepIndex % referenceSources.length];
    const target =
      allBrowserContents[currentStepIndex % allBrowserContents.length];
    setTimeout(() => {
      const refEl = document.createElement("p");
      refEl.className = "reference-source";
      refEl.textContent = `Referencing: ${refText}`;
      target.appendChild(refEl);
    }, timePerTask);

    currentStepIndex++;

    // Process the combined details and source one by one
    processDetailsSequentially(stepDiv, details, 0);
  } else {
    updateReasoningBar(""); // This will hide the reasoning bar
    // Hide the progress bar when process is complete
    const progressBarContainer = document.querySelector(
      ".progress-bar-container"
    );
    if (progressBarContainer) progressBarContainer.style.display = "none";
    // Process complete - trigger the event
    animateRightPanelProgress(100); // Fill the bar on completion
    document.dispatchEvent(new Event("processComplete"));

    if (previousStepElement) {
      previousStepElement.classList.remove("active");
    }
    finalSummary.classList.add("visible");
    replayCompleted.classList.add("visible");
    // Add file attachments visibility
    document.querySelector(".file-attachments").classList.add("visible");
    leftPanel.scrollTop = leftPanel.scrollHeight;

    dynamicImage.classList.add("hidden");
    dynamicImage2.classList.add("hidden");

    documentContent.innerHTML = `
                <h3>7-Day Japan Itinerary (April 15-23, 2025)</h3>
                <h4>Overview</h4>
                <p>This itinerary is designed for a couple traveling from Seattle to Japan in April, focusing on historical sites, cultural experiences, and hidden gems. The plan includes Tokyo, Kyoto, and Nara, with opportunities to experience kendo, tea ceremonies, and Zen meditation. A special romantic proposal location is included during cherry blossom season.</p>
                <h4>Day 1 (April 15): Arrival in Tokyo</h4>
                <p><span class="time-block">Morning:</span> Arrive at Narita/Haneda Airport</p>
                <p><span class="time-block">Afternoon:</span></p>
                <ul>
                    <li>Check into hotel in Tokyo</li>
                    <li>Exchange JR Pass voucher at airport JR office</li>
                    <li>Light exploration of hotel neighborhood</li>
                </ul>
                <p><span class="time-block">Evening:</span></p>
                <ul>
                    <li>Dinner at local restaurant near accommodation</li>
                    <li>Early night to recover from jet lag</li>
                </ul>
                <h4>Day 2 (April 16): Tokyo Exploration - Modern & Traditional</h4>
                <p><span class="time-block">Morning:</span></p>
                <ul>
                    <li>Visit Meiji Shrine and Yoyogi Park (peaceful forest walk)</li>
                    <li>Explore Harajuku and Takeshita Street</li>
                </ul>
                <p><span class="time-block">Afternoon:</span></p>
                <ul>
                    <li>Shibuya Crossing and Shibuya Sky observation deck</li>
                    <li>Shopping in Shibuya</li>
                </ul>
                <p><span class="time-block">Evening:</span></p>
                <ul>
                    <li>Dinner in Harmonica Yokocho (hidden gem in Kichijoji)</li>
                    <li>Explore this former black market area with small izakayas and shops</li>
                </ul>
                <h4>Day 3 (April 17): Tokyo Hidden Gems & Cultural Experience</h4>
                 <p><span class="time-block">Morning:</span></p>
                <ul>
                    <li>Visit Gotokuji Temple (home of the beckoning cat figurines)</li>
                    <li>Explore Shimokitazawa neighborhood (trendy area with vintage shops)</li>
                </ul>
                 <p><span class="time-block">Afternoon:</span></p>
                 <ul class="proposal-list">
                    <li><strong>Proposal Opportunity:</strong> Chidorigafuchi Park for cherry blossom viewing and boat ride</li>
                    <li>Stroll along the Imperial Palace East Gardens</li>
                </ul>
                 <p><span class="time-block">Evening:</span></p>
                 <ul>
                    <li>Dinner at Ebisu Yokocho food alley</li>
                    <li>Optional: Tokyo Tower night view</li>
                </ul>
                <h4>Day 4 (April 18): Travel to Kyoto & First Impressions</h4>
                 <p><span class="time-block">Morning:</span></p>
                 <ul>
                    <li>Shinkansen from Tokyo to Kyoto (2-2.5 hours)</li>
                    <li>Check into Kyoto accommodation</li>
                </ul>
                 <p><span class="time-block">Afternoon:</span></p>
                 <ul>
                    <li>Visit Fushimi Inari Shrine (thousand torii gates)</li>
                    <li>Explore southern Higashiyama district</li>
                </ul>
                 <p><span class="time-block">Evening:</span></p>
                 <ul>
                    <li>Dinner in Pontocho Alley</li>
                    <li>Evening stroll along Kamogawa River</li>
                </ul>
                <h4>Day 5 (April 19): Kyoto Cultural Immersion</h4>
                 <p><span class="time-block">Morning:</span></p>
                 <ul>
                    <li>Tea Ceremony experience at WAK JAPAN or Toyokuni Shrine</li>
                    <li>Zen Meditation session at a local temple</li>
                </ul>
                 <p><span class="time-block">Afternoon:</span></p>
                 <ul>
                    <li>Kendo experience through WAK JAPAN</li>
                    <li>Visit Kinkaku-ji (Golden Pavilion)</li>
                </ul>
                 <p><span class="time-block">Evening:</span></p>
                 <ul class="proposal-list">
                    <li><strong>Proposal Opportunity:</strong> Maruyama Park during evening cherry blossom illumination</li>
                    <li>Dinner at traditional Kyoto restaurant</li>
                </ul>
                <h4>Day 6 (April 20): Nara Day Trip</h4>
                 <p><span class="time-block">Morning:</span></p>
                 <ul><li>Train from Kyoto to Nara (30-45 minutes)</li></ul>
                 <p><span class="time-block">Full Day in Nara:</span></p>
                 <ul>
                    <li>Nara Park and friendly deer</li>
                    <li>Todai-ji Temple and Great Buddha</li>
                    <li>Kofukuji Temple and five-story pagoda</li>
                    <li>Kasuga Taisha Shrine</li>
                </ul>
                 <p><span class="time-block">Evening:</span></p>
                 <ul>
                    <li>Return to Kyoto</li>
                    <li>Dinner in Gion district</li>
                    <li>Possible geisha spotting in Gion</li>
                </ul>
                <h4>Day 7 (April 21): Arashiyama & Northern Kyoto</h4>
                <p><span class="time-block">Morning:</span></p>
                 <ul>
                    <li>Visit Arashiyama Bamboo Grove (early to avoid crowds)</li>
                    <li>Tenryu-ji Temple and gardens</li>
                    <li>Monkey Park Iwatayama</li>
                </ul>
                 <p><span class="time-block">Afternoon:</span></p>
                 <ul class="proposal-list">
                    <li><strong>Proposal Opportunity:</strong> Romantic boat ride on the Hozugawa River</li>
                    <li>Visit Ryoan-ji Temple (famous rock garden)</li>
                </ul>
                 <p><span class="time-block">Evening:</span></p>
                <ul>
                    <li>Farewell dinner at upscale restaurant</li>
                    <li>Final night in Kyoto</li>
                </ul>
                <h4>Day 8 (April 22): Return to Tokyo & Departure Preparation</h4>
                 <p><span class="time-block">Morning:</span></p>
                 <ul>
                    <li>Shinkansen from Kyoto to Tokyo</li>
                    <li>Last-minute shopping in Tokyo</li>
                </ul>
                 <p><span class="time-block">Afternoon:</span></p>
                 <ul>
                    <li>Visit any missed Tokyo attractions</li>
                    <li>Pack and prepare for departure</li>
                </ul>
                <p><span class="time-block">Evening:</span></p>
                <ul><li>Final dinner in Tokyo</li></ul>

                <h4>Day 9 (April 23): Departure</h4>
                <p><span class="time-block">Morning/Afternoon:</span></p>
                <ul>
                    <li>Transfer to Narita/Haneda Airport</li>
                    <li>Departure flight to Seattle</li>
                </ul>

                <h3>Proposal Location Recommendations</h3>
                <ul class="proposal-list">
                     <li><strong>Chidorigafuchi Park (Tokyo):</strong> Romantic boat ride surrounded by cherry blossoms</li>
                     <li><strong>Maruyama Park (Kyoto):</strong> Famous for its weeping cherry trees, especially beautiful during evening illumination</li>
                     <li><strong>Hozugawa River (Arashiyama):</strong> Scenic boat ride through beautiful natural landscapes</li>
                </ul>

                <h3>Transportation Notes</h3>
                 <ul class="transport-list">
                     <li>Activate 7-day JR Pass on April 17 (Day 3) to maximize usage for long-distance travel</li>
                     <li>Use local transit in Tokyo for first two days</li>
                     <li>JR Pass will cover:
                         <ul>
                             <li>Tokyo to Kyoto shinkansen</li>
                             <li>Kyoto to Nara round trip</li>
                             <li>Kyoto to Tokyo return journey</li>
                         </ul>
                     </li>
                     <li>Consider purchasing IC card (Suica/Pasmo) for local transit in cities</li>
                 </ul>
            `;
    documentHeader.classList.add("visible");
    documentContent.classList.add("visible");
    // Show copy button when content is ready
    document.getElementById("copy-content").style.display =
      "inline-block";
    rightPanel.scrollTop = 0;
  }

  // Add animation classes
  const browserWindows = document.querySelectorAll(".browser-window");
  browserWindows.forEach((window, index) => {
    setTimeout(() => {
      window.classList.add("animate");
    }, index * 100);
  });

  // Animate document content
  setTimeout(() => {
    documentContent.classList.add("animate");
  }, browserWindows.length * 100);
}

// Function to create typing effect - faster speed
function typeText(element, text, index, speed) {
  // Speed up typing effect by typing 3 characters at a time
  const charsPerStep = 3;
  if (index < text.length) {
    const nextIndex = Math.min(index + charsPerStep, text.length);
    element.textContent = text.substring(0, nextIndex);
    setTimeout(() => {
      typeText(element, text, nextIndex, speed);
    }, speed);
  } else {
    element.classList.remove("typing-effect");
  }
}

// Function to calculate typing speed needed to complete in given duration
function calculateTypingSpeed(text, duration) {
  return duration / text.length;
}

// Function to process details one by one
function processDetailsSequentially(
  stepDiv,
  details,
  currentDetailIndex
) {
  if (currentDetailIndex >= details.length) {
    // All details for this task have been processed
    setTimeout(() => {
      animateRightPanelProgress(0);
      isProcessingTask = false;
      displayNextStep();
    }, timePerTask);
    return;
  }

  const detailsContainer = stepDiv.querySelector(
    ".task-details-container"
  );
  const detailDivs = detailsContainer.querySelectorAll(".task-details");

  if (currentDetailIndex > 0) {
    // Make current detail visible
    detailDivs[currentDetailIndex].style.opacity = "1";

    // Get the text span and start typing
    const textSpan = detailDivs[currentDetailIndex].querySelector("span");
    const typingSpeed = calculateTypingSpeed(
      details[currentDetailIndex].text,
      timePerTask
    );
    typeText(textSpan, details[currentDetailIndex].text, 0, typingSpeed);
  }

  // Schedule the next detail to be processed after 0.5 seconds
  setTimeout(() => {
    processDetailsSequentially(stepDiv, details, currentDetailIndex + 1);
  }, 500);
}

// Add this function for proposal content display
function displayProposalContent() {
  documentContent.innerHTML = `
            <h1>Romantic Proposal Locations in Japan (April 2025)</h1>
            <p>This guide provides detailed information about three carefully selected proposal locations during cherry blossom season in Japan, with specific recommendations for timing, photography considerations, and backup options.</p>

            <h2>1. Chidorigafuchi Park, Tokyo</h2>
            <h3>Description:</h3>
            <p>Chidorigafuchi Park is one of Tokyo's most picturesque cherry blossom viewing spots, featuring hundreds of cherry trees lining a moat of the former Edo Castle. The location offers romantic boat rides through a tunnel of cherry blossoms, creating a magical setting for a proposal.</p>

            <h3>Best Timing:</h3>
            <ul>
                <li>Time of Day: Early morning (around sunrise) or late afternoon (1-2 hours before sunset) for the best lighting and fewer crowds</li>
                <li>Cherry Blossom Peak: Expected around late March to early April 2025</li>
                <li>Illumination Period: Special evening illumination typically runs from late March to early April (around 6:00 PM to 10:00 PM)</li>
            </ul>

            <h3>Photography Considerations:</h3>
            <ul>
                <li>Morning light provides a soft, ethereal quality to photos</li>
                <li>Golden hour (late afternoon) creates a warm, romantic glow</li>
                <li>Evening illuminations offer a magical atmosphere with lit-up cherry blossoms</li>
            </ul>

            <h3>Privacy Level: Moderate</h3>
            <ul>
                <li>While popular, early morning visits can provide relative privacy</li>
                <li>Weekdays are less crowded than weekends</li>
                <li>The boat ride offers more privacy than the walking paths</li>
            </ul>

            <h3>Backup Weather Options:</h3>
            <ul>
                <li>If raining: Consider proposing at nearby Imperial Palace East Gardens (covered areas available)</li>
                <li>If too crowded: Visit on a weekday morning or consider the nearby Yasukuni Shrine which has beautiful cherry trees but fewer visitors</li>
            </ul>

            <h3>Special Notes:</h3>
            <ul>
                <li>Boat rental costs approximately ¥800 per 30 minutes</li>
                <li>Boats are available from 9:30 AM to 8:30 PM (last admission at 7:30 PM) during cherry blossom season</li>
                <li>Consider hiring a professional photographer who knows the area for candid proposal shots</li>
            </ul>

            <h2>2. Maruyama Park, Kyoto</h2>
            <h3>Description:</h3>
            <p>Maruyama Park is Kyoto's most famous cherry blossom viewing spot, centered around a magnificent weeping cherry tree (shidarezakura) that becomes illuminated in the evenings. The park offers a traditional Japanese garden setting with ponds and pathways.</p>

            <h3>Best Timing:</h3>
            <ul>
                <li>Time of Day: Early morning (before 8:00 AM) for fewer crowds or evening for illuminated views</li>
                <li>Cherry Blossom Peak: Expected around March 30 to April 10, 2025</li>
                <li>Illumination Period: Typically from sunset until midnight during peak bloom</li>
            </ul>

            <h3>Photography Considerations:</h3>
            <ul>
                <li>The iconic weeping cherry tree makes for a stunning backdrop</li>
                <li>Evening illuminations create a romantic, magical atmosphere</li>
                <li>Morning light offers clearer photos with fewer people in the background</li>
            </ul>

            <h3>Privacy Level: Low to Moderate</h3>
            <ul>
                <li>Very popular during peak season</li>
                <li>Early morning visits (before 7:00 AM) offer the most privacy</li>
                <li>The park has various secluded corners away from the main weeping cherry tree</li>
            </ul>

            <h3>Backup Weather Options:</h3>
            <ul>
                <li>If raining: Nearby Yasaka Shrine has covered areas with cherry trees</li>
                <li>If too crowded: Consider the quieter Kyoto Gyoen National Garden or Kamogawa River banks</li>
            </ul>

            <h3>Special Notes:</h3>
            <ul>
                <li>The weeping cherry tree tends to bloom earlier than other varieties</li>
                <li>Evening illumination creates an especially romantic atmosphere</li>
                <li>Food stalls and vendors are available in the park during cherry blossom season</li>
                <li>Consider reserving a nearby traditional restaurant for a celebratory meal after the proposal</li>
            </ul>

            <h2>3. Hozugawa River, Arashiyama</h2>
            <h3>Description:</h3>
            <p>The Hozugawa River boat ride offers a unique proposal setting as you float through the scenic ravines of Arashiyama. During cherry blossom season, the riverbanks are lined with blooming trees, creating a natural, romantic backdrop away from the crowds.</p>

            <h3>Best Timing:</h3>
            <ul>
                <li>Time of Day: Morning boat rides (first departure around 9:00 AM) for best lighting and calmer water</li>
                <li>Cherry Blossom Peak: Expected around late March to early April 2025</li>
                <li>Boat Schedule: Typically operates from 9:00 AM to 3:30 PM (last departure)</li>
            </ul>

            <h3>Photography Considerations:</h3>
            <ul>
                <li>The boat ride provides unique perspectives of cherry blossoms from the water</li>
                <li>Natural lighting on the river creates beautiful reflections</li>
                <li>Consider hiring a photographer to wait at a scenic point or arrange with boat staff in advance</li>
            </ul>

            <h3>Privacy Level: High</h3>
            <ul>
                <li>Private experience on the boat</li>
                <li>The 16km journey provides multiple scenic spots for proposing</li>
                <li>Other passengers will be present but focused on the scenery</li>
            </ul>

            <h3>Backup Weather Options:</h3>
            <ul>
                <li>If boat rides are canceled: The nearby Sagano Romantic Train offers covered viewing of similar scenery</li>
                <li>If weather is poor: Consider the indoor spaces at Arashiyama's temples or a traditional ryokan with garden views</li>
            </ul>

            <h3>Special Notes:</h3>
            <ul>
                <li>Boat ride costs approximately ¥4,100 per person</li>
                <li>The full ride takes about 2 hours from Kameoka to Arashiyama</li>
                <li>Reservations are highly recommended during cherry blossom season</li>
                <li>The boat ride may be canceled due to high water or bad weather (refunds are typically provided)</li>
                <li>Consider combining with the Sagano Romantic Train for a full day experience</li>
            </ul>

            <h2>General Proposal Tips</h2>
            <ul>
                <li>Weather Contingency: Always have an indoor backup plan during cherry blossom season as spring weather can be unpredictable</li>
                <li>Timing Flexibility: Build 2-3 days of flexibility into your itinerary for the proposal, as cherry blossom peaks can vary</li>
                <li>Professional Help: Consider hiring a local photographer familiar with the location for candid proposal photos</li>
                <li>Ring Security: Keep the ring secure but accessible; consider a pocket with a zipper</li>
                <li>Post-Proposal Celebration: Research and reserve a special restaurant near your chosen proposal spot</li>
                <li>Local Assistance: Hotel concierges can often help with proposal arrangements and recommendations</li>
                <li>Privacy Considerations: For more privacy, consider proposing during a weekday rather than weekend</li>
            </ul>

            <h2>Cherry Blossom Forecast for April 2025</h2>
            <ul>
                <li>Tokyo: Peak bloom expected from March 25 to April 5, 2025</li>
                <li>Kyoto: Peak bloom expected from March 30 to April 10, 2025</li>
                <li>Arashiyama: Similar to Kyoto's forecast, with potential for slightly earlier blooming</li>
            </ul>
            <p><em>Note: Cherry blossom forecasts are updated regularly starting in January of each year. Check the latest forecast closer to your travel date.</em></p>
        `;
}
function preloadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve(); // Resolve even if error
    img.src = url;
  });
}

// Show sources images immediately after loading screen ends
document.addEventListener("DOMContentLoaded", function () {
  const docContent = document.getElementById('document-content');
  if (!docContent) return;
  // Clear any existing content
  docContent.innerHTML = '';
  // Create and show sources gallery
  let sourcesGallery = document.createElement('div');
  sourcesGallery.className = 'sources-gallery';
  sources.forEach((url, idx) => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = `Source Image ${idx + 1}`;
    img.style.width = '30%';
    img.style.margin = '1.5%';
    img.style.borderRadius = '8px';
    img.style.boxShadow = '0 2px 8px rgba(0,0,0,0.13)';
    sourcesGallery.appendChild(img);
  });
  docContent.appendChild(sourcesGallery);
});