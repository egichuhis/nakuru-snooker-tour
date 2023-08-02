const speakers = [
  {
    fullName: 'Allan Walker',
    image: './imgs/speaker_001.png',
    intro: 'The Number 1 ranked Snooker Player in Nakuru County',
    funFact: 'Loves cycling in the Lake Nakuru shores and valleys',
  },
  {
    fullName: 'Desmond Tutu',
    image: './imgs/speaker_002.png',
    intro: 'The Number 8 ranked Snooker Player in Nakuru County',
    funFact: 'Finds solace in stargazing on clear nights with a telescope',
  },
  {
    fullName: 'Edwin Gichuhi',
    image: './imgs/speaker_003.png',
    intro: 'The Number 5 ranked Snooker Player in Nakuru County',
    funFact: 'Collects vintage vinyl records from various genres and eras',
  },
  {
    fullName: 'Natasha Legero',
    image: './imgs/speaker_004.png',
    intro: 'The Number 12 ranked Snooker Player in Nakuru County',
    funFact: 'Spends weekends volunteering at a local animal shelter, caring for rescued pets.',
  },
  {
    fullName: 'Linus Omondi',
    image: './imgs/speaker_005.png',
    intro: 'The Number 17 ranked Snooker Player in Nakuru County',
    funFact: 'Fascinated by the intricate art of origami and its cultural origins',
  },
  {
    fullName: 'Mbadala Kamau',
    image: './imgs/speaker_006.png',
    intro: 'The Number 26 ranked Snooker Player in Nakuru County',
    funFact: 'Enjoys hiking along the scenic trails of the Great Smoky Mountains',
  },

];

let isShowingAllSpeakers = window.innerWidth >= 768;

const createSpeakerItem = (speaker) => `<div class="col-auto col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 speaker-item">
            <div class="row mt-3">
                <div class="col-4">
                    <img src="${speaker.image}" width="fit-content" height="100px" />
                </div>
                <div class="col-8">
                    <h2 class="fw-bold fs-5">${speaker.fullName}</h2>
                    <h6 class="fs-6 lh-5 text-danger">${speaker.intro}</h6>
                    <p class="lh-20 speaker-fun-fact">${speaker.funFact}</p>
                </div>
            </div>
        </div>`;

const renderSpeakers = (limit = 2) => {
  const speakerContainer = document.getElementById('speakerContainer');
  speakerContainer.innerHTML = speakers
    .slice(0, isShowingAllSpeakers ? speakers.length : limit)
    .map(createSpeakerItem)
    .join('');

  const showButton = document.getElementById('show-btn');
  showButton.textContent = isShowingAllSpeakers ? 'Show Less' : 'Show More';
  showButton.addEventListener('click', () => {
    isShowingAllSpeakers = !isShowingAllSpeakers;
    renderSpeakers();

    if (window.innerWidth < 768) {
      showButton.removeEventListener('click', renderSpeakers); // Remove previous listener
      showButton.addEventListener('click', () => {
        isShowingAllSpeakers = !isShowingAllSpeakers;
        renderSpeakers();
      });
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  renderSpeakers();
});
