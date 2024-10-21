// import React from 'react';
// import { useState } from 'react';
// import css from './TongueTwisters.module.css';
// import videoData from './videoData.json';
// import Modal from './Modal';

// const TongueTwisters = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const openModal = video => {
//     setSelectedVideo(video);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedVideo(null);
//   };

//   return (
//     <div>

//       {videoData.map(video => (
//         <div className={css.article} key={video.id}>
//           <div className={css.chart}>
//           <h2>{video.title}</h2>

//           <button
//             className={css.btnWatchVideo}
//             onClick={() => openModal(video)}
//           >
//             Watch Video
//           </button>
//           </div>

//           <p>{video.text}</p>
//         </div>
//       ))}

//       {isModalOpen && selectedVideo && (
//         <Modal closeModal={closeModal}>
//           <iframe
//             width="560"
//             height="315"
//             src={selectedVideo.src}
//             style={{
//               border: '1px solid blue',
//               borderRadius: '5px',
//               overflow: 'hidden',
//               padding: '5px',
//             }}
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             title="YouTube Video"
//           ></iframe>
//         </Modal>
//       )}
//     </div>
//   );
// };
// export default TongueTwisters;

import React, { useState, useEffect } from 'react';
import css from './TongueTwisters.module.css';
import videoData from './videoData.json';
import Modal from './Modal';

const TongueTwisters = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [openAccordions, setOpenAccordions] = useState([]);

  // Відновлення стану акордеона при завантаженні сторінки
  useEffect(() => {
    const savedState = videoData.map(
      (_, i) => localStorage.getItem(`accordion-${i}`) === 'true'
    );
    setOpenAccordions(savedState);
  }, []);

  const openModal = video => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideo(null);
  };

  const toggleAccordion = index => {
    const updatedAccordions = [...openAccordions];
    updatedAccordions[index] = !openAccordions[index];

    // Збереження стану в localStorage
    localStorage.setItem(`accordion-${index}`, updatedAccordions[index]);

    setOpenAccordions(updatedAccordions);
  };

  return (
    <div>
      {videoData.map((video, index) => (
        <div className={css.article} key={video.id}>
          <div className={css.chart}>
            <h2>{video.title}</h2>

            <button
              className={css.btnWatchVideo}
              onClick={() => openModal(video)}
            >
              Watch Video
            </button>
          </div>

          {/* Акордеон */}
          <button
            className={`${css.accordion} ${openAccordions[index] ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            Examples
          </button>
          <div
            className={css.panel}
            style={{
              maxHeight: openAccordions[index] ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease',
            }}
          >
            {video.accordeon.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>

          <p className={css.paragraph}> {video.text} </p>
        </div>
      ))}

      {isModalOpen && selectedVideo && (
        <Modal closeModal={closeModal}>
          <iframe
            width="560"
            height="315"
            src={selectedVideo.src}
            style={{
              border: '1px solid blue',
              borderRadius: '5px',
              overflow: 'hidden',
              padding: '5px',
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </Modal>
      )}
    </div>
  );
};

export default TongueTwisters;
