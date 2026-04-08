function setup() {
  const allEpisodes = getAllEpisodes();
  const allEpisodeCards = makePageForEpisodes(allEpisodes);
  document.body.append(allEpisodeCards);
}

function parseEpisode(episode) {
  return {
    name: episode.name,
    season: episode.season,
    number: episode.number,
    episode: episode.episode,
    image: episode.image.medium,
    summary: episode.summary,
  };
}

function createEpisodeCard(episode) {
  const episodeCard = document.createElement("article");
  episodeCard.classList.add("episode-card");

  const title = document.createElement("h2");
  title.textContent = `${episode.name} - (S${episode.season}E${episode.number})`;
  episodeCard.appendChild(title);

  const image = document.createElement("img");
  image.src = episode.image;
  episodeCard.appendChild(image);

  const summary = document.createElement("p");
  summary.innerHTML = episode.summary;
  episodeCard.appendChild(summary);

  return episodeCard;
}

function makePageForEpisodes(episodeList) {
  const mainElem = document.createElement("main");
  const parsedEpisodes = episodeList.map(parseEpisode);
  const episodeCards = parsedEpisodes.map(createEpisodeCard);
  mainElem.append(...episodeCards);
  return mainElem;
}

window.onload = setup;
