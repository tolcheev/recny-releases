const fallbackManifest = {
  macos: {
    display_version: "v0.1.7",
    release_url: "https://github.com/tolcheev/torec-releases/releases",
    download_url: "https://github.com/tolcheev/torec-releases/releases",
    notes: "Stable MVP test build for Apple Silicon Macs."
  },
  windows: {
    display_version: "v0.2.5-beta",
    release_url: "https://github.com/tolcheev/torec-releases/releases",
    download_url: "https://github.com/tolcheev/torec-releases/releases",
    notes: "Experimental tray client for student-side testing."
  }
};

function applyRelease(platform, release) {
  document.querySelectorAll(`[data-version="${platform}"]`).forEach((node) => {
    node.textContent = release.display_version || release.version;
  });

  document.querySelectorAll(`[data-notes="${platform}"]`).forEach((node) => {
    node.textContent = release.notes || fallbackManifest[platform].notes;
  });

  document.querySelectorAll(`[data-download="${platform}"]`).forEach((node) => {
    node.href = release.download_url || release.downloadURL || fallbackManifest[platform].download_url;
  });

  document.querySelectorAll(`[data-release="${platform}"]`).forEach((node) => {
    node.href = release.release_url || release.releaseURL || fallbackManifest[platform].release_url;
  });
}

async function loadManifest() {
  const status = document.getElementById("manifest-status");

  try {
    const response = await fetch("latest.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const manifest = await response.json();
    applyRelease("macos", manifest.macos || fallbackManifest.macos);
    applyRelease("windows", manifest.windows || fallbackManifest.windows);

    if (status) {
      status.textContent = manifest.generated_at
        ? `Manifest updated ${manifest.generated_at}`
        : "Latest manifest loaded";
    }
  } catch (error) {
    applyRelease("macos", fallbackManifest.macos);
    applyRelease("windows", fallbackManifest.windows);

    if (status) {
      status.textContent = "Could not read latest.json. Showing release links.";
    }
  }
}

loadManifest();
