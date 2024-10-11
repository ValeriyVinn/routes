import React, { useState } from 'react';
import data from './HiWordsData.json';
import css from './HiWords.module.css';

const WordTables = () => {
  const [fontSize, setFontSize] = useState(26);

  const handleFontSizeChange = event => {
    setFontSize(parseInt(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        min="16"
        max="36"
        value={fontSize}
        onChange={handleFontSizeChange}
        className={css.fontSizeChange}
      />

      <article>
        {data.map((item, index) => (
          <div key={index} className={css.article}>
            <h1
              className={css.hiWordsHeader}
              style={{ fontSize: `${fontSize + 10}px` }}
            >
              {item.header}
            </h1>

            <div className={css.paragraph}>
              {item.firstWordParagraph.map((word, i) => (
                <table key={`first-${index}-${i}`} className={css.wordTable1}>
                  <tbody>
                    <tr>
                      <td
                        className={css.word}
                        style={{ fontSize: `${fontSize}px` }}
                      >
                        {word}
                      </td>
                    </tr>
                    <tr>
                      <td
                        className={css.transcription}
                        style={{ fontSize: `${fontSize - 2}px` }}
                      >
                        {item.firstTranscriptionParagraph[i]}
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>

            <div className={css.paragraph}>
              {item.secondWordParagraph.map((word, i) => (
                <table key={`second-${index}-${i}`} className={css.wordTable2}>
                  <tbody>
                    <tr>
                      <td
                        className={css.word}
                        style={{ fontSize: `${fontSize}px` }}
                      >
                        {word}
                      </td>
                    </tr>
                    <tr>
                      <td
                        className={css.transcription}
                        style={{ fontSize: `${fontSize - 2}px` }}
                      >
                        {item.secondTranscriptionParagraph[i]}
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>

            <div className={css.paragraph}>
              {item.thirdWordParagraph.map((word, i) => (
                <table key={`third-${index}-${i}`} className={css.wordTable3}>
                  <tbody>
                    <tr>
                      <td
                        className={css.word}
                        style={{ fontSize: `${fontSize}px` }}
                      >
                        {word}
                      </td>
                    </tr>
                    <tr>
                      <td
                        className={css.transcription}
                        style={{ fontSize: `${fontSize - 2}px` }}
                      >
                        {item.thirdTranscriptionParagraph[i]}
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>

            <div className={css.paragraph}>
              {item.fourthWordParagraph.map((word, i) => (
                <table key={`fourth-${index}-${i}`} className={css.wordTable4}>
                  <tbody>
                    <tr>
                      <td
                        className={css.word}
                        style={{ fontSize: `${fontSize}px` }}
                      >
                        {word}
                      </td>
                    </tr>
                    <tr>
                      <td
                        className={css.transcription}
                        style={{ fontSize: `${fontSize - 2}px` }}
                      >
                        {item.fourthTranscriptionParagraph[i]}
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>
          </div>
        ))}
      </article>
    </div>
  );
};

export default WordTables;  


// import React, { useState } from 'react';
// import data from './HiWordsData.json';
// import css from './HiWords.module.css';

// const WordTables = () => {
//   const [fontSize, setFontSize] = useState(26);

//   const handleFontSizeChange = event => {
//     setFontSize(parseInt(event.target.value));
//   };

//   return (
//     <div>
//       <input
//         type="range"
//         min="16"
//         max="36"
//         value={fontSize}
//         onChange={handleFontSizeChange}
//         className={css.fontSizeChange}
//       />

//       <article>
//         {data.map((item, index) => (
//           <div key={index} className={css.article}>
//             <h1
//               className={css.hiWordsHeader}
//               style={{ fontSize: `${fontSize + 10}px` }}
//             >
//               {item.header}
//             </h1>

//             <div className={css.paragraph}>
//               {item.firstWordParagraph.map((word, i) => (
//                 <table key={`first-${index}-${i}`} className={css.wordTable1}>
//                   <tbody>
//                     <tr>
//                       <td
//                         className={`${css.word} ${
//                           item.header.includes(word) ? css.color : ''
//                         }`}
//                         style={{ fontSize: `${fontSize}px` }}
//                       >
//                         {word}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td
//                         className={css.transcription}
//                         style={{ fontSize: `${fontSize - 2}px` }}
//                       >
//                         {item.firstTranscriptionParagraph[i]}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               ))}
//             </div>

//             <div className={css.paragraph}>
//               {item.secondWordParagraph.map((word, i) => (
//                 <table key={`second-${index}-${i}`} className={css.wordTable2}>
//                   <tbody>
//                     <tr>
//                       <td
//                         className={`${css.word} ${
//                           item.header.includes(word) ? css.color : ''
//                         }`}
//                         style={{ fontSize: `${fontSize}px` }}
//                       >
//                         {word}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td
//                         className={css.transcription}
//                         style={{ fontSize: `${fontSize - 2}px` }}
//                       >
//                         {item.secondTranscriptionParagraph[i]}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               ))}
//             </div>

//             <div className={css.paragraph}>
//               {item.thirdWordParagraph.map((word, i) => (
//                 <table key={`third-${index}-${i}`} className={css.wordTable3}>
//                   <tbody>
//                     <tr>
//                       <td
//                         className={`${css.word} ${
//                           item.header.includes(word) ? css.color : ''
//                         }`}
//                         style={{ fontSize: `${fontSize}px` }}
//                       >
//                         {word}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td
//                         className={css.transcription}
//                         style={{ fontSize: `${fontSize - 2}px` }}
//                       >
//                         {item.thirdTranscriptionParagraph[i]}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               ))}
//             </div>

//             <div className={css.paragraph}>
//               {item.fourthWordParagraph.map((word, i) => (
//                 <table key={`fourth-${index}-${i}`} className={css.wordTable4}>
//                   <tbody>
//                     <tr>
//                       <td
//                         className={`${css.word} ${
//                           item.header.includes(word) ? css.color : ''
//                         }`}
//                         style={{ fontSize: `${fontSize}px` }}
//                       >
//                         {word}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td
//                         className={css.transcription}
//                         style={{ fontSize: `${fontSize - 2}px` }}
//                       >
//                         {item.fourthTranscriptionParagraph[i]}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               ))}
//             </div>
//           </div>
//         ))}
//       </article>
//     </div>
//   );
// };

// export default WordTables;

