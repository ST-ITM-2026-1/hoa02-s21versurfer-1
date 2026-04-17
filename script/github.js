const username = "s21versurfer";
const profileContainer = document.getElementById("githubProfile");
const repoContainer = document.getElementById("repoContainer");
const repoStatus = document.getElementById("repoStatus");

async function loadGitHubProfile() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub profile.");
    }

    const data = await response.json();

    profileContainer.innerHTML = `
      <div class="profile-card">
        <img src="${data.avatar_url}" alt="${data.login} avatar" class="github-avatar">
        <div class="profile-info">
          <h3>${data.name ? data.name : data.login}</h3>
          <p>${data.bio ? data.bio : "No bio available."}</p>
          <p><strong>Public Repos:</strong> ${data.public_repos}</p>
          <p><strong>Followers:</strong> ${data.followers}</p>
          <p><strong>Following:</strong> ${data.following}</p>
          <p><strong>GitHub:</strong> <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
        </div>
      </div>
    `;
  } catch (error) {
    profileContainer.innerHTML = `<p class="error-text">${error.message}</p>`;
  }
}

async function loadRepositories() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);

    if (!response.ok) {
      throw new Error("Failed to fetch repositories.");
    }

    const repos = await response.json();
    repoStatus.textContent = "";

    if (repos.length === 0) {
      repoStatus.textContent = "No public repositories found.";
      return;
    }

    repoContainer.innerHTML = "";

    repos.forEach((repo) => {
      const repoCard = document.createElement("div");
      repoCard.className = "repo-card";

      repoCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description ? repo.description : "No description provided."}</p>
        <p><strong>Language:</strong> ${repo.language ? repo.language : "Not specified"}</p>
        <p><strong>Stars:</strong> ${repo.stargazers_count}</p>
        <p><strong>Forks:</strong> ${repo.forks_count}</p>
        <a href="${repo.html_url}" target="_blank" class="repo-link">View Repository</a>
      `;

      repoContainer.appendChild(repoCard);
    });
  } catch (error) {
    repoStatus.innerHTML = `<p class="error-text">${error.message}</p>`;
  }
}

loadGitHubProfile();
loadRepositories();