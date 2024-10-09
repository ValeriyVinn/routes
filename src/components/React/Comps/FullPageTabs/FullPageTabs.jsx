import { useState } from 'react';
import css from './FullPageTabs.module.css'; // Не забудь додати цей файл для CSS

function Tabs() {
  const [activeTab, setActiveTab] = useState('News'); // "News" відкрита за замовчуванням

  const openPage = (pageName) => {
    setActiveTab(pageName);
  };

  return (
    <div>
      {/* Кнопки для вкладок */}
      <button
        className={css.tablink}
        onClick={() => openPage('Home')}
        style={{ backgroundColor: activeTab === 'Home' ? 'red' : '#555' }}
      >
        Home
      </button>
      <button
        className={css.tablink}
        onClick={() => openPage('News')}
        style={{ backgroundColor: activeTab === 'News' ? 'green' : '#555' }}
        id="defaultOpen"
      >
        News
      </button>
      <button
        className={css.tablink}
        onClick={() => openPage('Contact')}
        style={{ backgroundColor: activeTab === 'Contact' ? 'blue' : '#555' }}
      >
        Contact
      </button>
      <button
        className={css.tablink}
        onClick={() => openPage('About')}
        style={{ backgroundColor: activeTab === 'About' ? 'orange' : '#555' }}
      >
        About
      </button>

      {/* Вкладки контенту */}
      <div id="Home" className="tabcontent" style={{ display: activeTab === 'Home' ? 'block' : 'none' }}>
        <p><h1>African Violets</h1>
 <p>Streptocarpus sect. Saintpaulia is a section within Streptocarpus subgenus Streptocarpella[1] consisting of about ten species of herbaceous perennial flowering plants in the family Gesneriaceae, native to Tanzania and adjacent southeastern Kenya in eastern tropical Africa. The section was previously treated as a separate genus, Saintpaulia, but molecular phylogenetic studies showed that it was nested within the genus Streptocarpus. </p>
 <p>Species and cultivars are commonly called African violets (although they are not closely related to true violets) or saintpaulias. They are commonly sold as house plants. </p>
 <p>Several of the species and subspecies of the section are endangered, and many more are threatened, as their native cloud forest habitats are cleared for agriculture. The conservation status of Streptocarpus ionanthus has been classed as near-threatened. </p>   
 <h2>Description</h2>  
 <p>Saintpaulias, which grow from 6-15 cm tall, can be anywhere from 6-30 cm wide. The leaves are rounded to oval, 2.5-8.5 cm long with a 2-10 cm petiole, finely hairy, and have a fleshy texture. The flowers are 2-3 cm in diameter, with a five-lobed velvety corolla ("petals"), and grow in clusters of 3-10 or more on slender stalks called peduncles. Wild species can have violet, purple, pale blue, or white flowers.[2] </p>
 <p>The plants get their common name "African violet" from their superficial resemblance to true violets (Viola, family Violaceae). </p>
 <h2>Taxonomy</h2>
 <p>This group of plants has lived in the biodiverse Eastern Arc Usambara Mountains in Tanga Province for millions of years. The name in the local Kisambaa language is Dughulushi. The Germans officially colonialized this area from about 1885, and shortly before this, Baron Walter von Saint Paul-Illaire (1860–1940) was made district commissioner of Tanga province, Tanganyika (now Tanzania) in Africa. He used to enjoy walking in the rainforest and they reminded him of the violets back home. He called them Usambaraveilchen (Usambara violets). In 1892 he sent seeds back to his father, who gave them to an amateur botanist, Hermann Wendland, in Germany. Wendland scientifically described the genus Saintpaulia, and original species S. ionantha in 1893,[3] naming the genus for Saint Paul-Illaire and his father.[4] Two British plant enthusiasts, Sir John Kirk and the Reverend W.E. Taylor, had earlier collected and submitted specimens to the Royal Botanic Gardens, Kew, in 1884 and 1887 respectively, but the quality of specimens was insufficient to permit scientific description at that time. </p>
 <p>Revisions of the genus by B.L. Burtt expanded the genus to approximately 20 species. Following studies which showed most of the species to be very poorly differentiated, both genetically and morphologically, the number of species was reduced to six in a 2006 treatment, with the majority of former species reduced to subspecies under S. ionantha.[5] In 2009, 9 species, 8 subspecies, and 2 varieties were recognized.[6] </p>
 <p>A molecular phylogenetic study in 2015 confirmed previous studies showing that species placed in Saintpaulia were deeply embedded within the genus Streptocarpus,[7] supporting the transfer of all Saintpaulia species to Streptocarpus in 2012.[8] Former Saintpaulia species did form a monophyletic group, and were placed in section Saintpaulia of Streptocarpus subgenus Streptocarpella.[7] </p>
<h3>Species</h3>
<p>All the species previously placed in the genus Saintpaulia are now placed in Streptocarpus section Saintpaulia. Ten species were recognized, as of March 2020.[7][9] </p>
<ul>
  <li><a href="https://en.wikipedia.org/wiki/Streptocarpus_afroviola">Streptocarpus afroviola</a> Christenh.</li>
  <li><a href="https://en.wikipedia.org/wiki/Streptocarpus_albus">Streptocarpus albus</a> (E.A.Bruce) I.Darbysh.</li>
  <li><a href="https://en.wikipedia.org/wiki/Streptocarpus_brevipilosus">Streptocarpus brevipilosus</a> (B.L.Burtt) Mich.Möller & Haston</li>
  <li><a href="https://en.wikipedia.org/wiki/Streptocarpus_goetzeanus">Streptocarpus goetzeanus</a> (Engl.) Christenh.</li>
  <li><a href="https://en.wikipedia.org/wiki/Streptocarpus_inconspicuus">Streptocarpus inconspicuus</a> (B.L.Burtt) Christenh.</li>
</ul>
<ul>
  <li><a href="https://en.wikipedia.org/wiki/Streptocarpus_ionanthus">Streptocarpus ionanthus</a> (H.Wendl.) Christenh.</li>
  <li><a href="https://en.wikipedia.org/wiki/Streptocarpus_nitidus">Streptocarpus nitidus</a> (B.L.Burtt) Mich.Möller & Haston</li>
  <li><a href="https://en.wikipedia.org/wiki/Streptocarpus_shumensis">Streptocarpus shumensis</a> (B.L.Burtt) Christenh.</li>
  <li><a href="https://en.wikipedia.org/wiki/Streptocarpus_teitensis">Streptocarpus teitensis</a> (B.L.Burtt) Christenh.</li>
  <li><a href="https://en.wikipedia.org/wiki/Streptocarpus_ulugurensis">Streptocarpus ulugurensis</a> (Haston) Haston</li>
</ul>
<p>Formerly recognized Saintpaulia species and infraspecies are listed below with their accepted name in Streptocarpus.[9] </p>

<h2>Distribution</h2>
<p>Saintpaulias are native to eastern tropical Africa. There is a concentration of species in the Nguru mountains of Tanzania. </p>
<h2>Cultivation</h2>
<p>Saintpaulias are widely cultivated as house plants. Until recently, only a few of the ten or so species that exist have been used in breeding programs for the hybrids available in the market; most of the cultivars available as house plants are derived from Streptocarpus ionanthus (syn. S. kewensis). A wider range of species is now being looked at as sources of genes to introduce into modern cultivars. </p>
<p>The African Violet Society of America is the International Cultivar Registration Authority for the section and its cultivars. </p>
<h3>Sizes</h3>
<p>Plants can be classified as one of several sizes based on their above-ground diameter. The size per category is not rigid, but a general guideline.[10][11] </p>
<ul>
  <li>Micro: less than 3 inches</li>
  <li>Super-mini: 3 to 4 inches</li>
  <li>Mini: between 4 and 6 inches</li>
  <li>Semi-mini: between 6 and 8–10 inches</li>
  <li>Standard: between 8–10 and 12–16 inches</li>
  <li>Large/Giant: over 12–16 inches</li>
</ul>
<h3>Temperature</h3>
<p>Saintpaulias are highly sensitive to temperature changes, especially rapid leaf cooling. Spilling cold water on African violet leaves causes discoloration. This is thought to be because rapid leaf cooling causes cell vacuole collapse in the palisade mesophyll cells.[12] </p>
<h3>Propagation</h3>
<p>African violets are commonly propagated asexually. Plants can be divided into smaller daughter plants or even grown from leaf cuttings.[13] Growing African violets from seed is rare, and most commercially available plants are produced from cuttings and tissue culture.[14] </p>
<h3>Flowering</h3>
<p>The African violet is a day-neutral plant regarding flower development.[15][16] </p>

<h2>In culture</h2>
<p>African violets have become a traditional gift in the developed world. They are often offered for sale at holidays.[14] </p>
<p>They are a popular house plant in many countries, as they can flower during most of the year and are fairly durable to neglect.[17][18] </p>
<p>In the 1997 film Amistad, ex-president John Quincy Adams shows the lead slave Joseph Cinqué his flower collection which contains an African violet which Cinque then recognises from his home land.[citation needed] </p></p>
      </div>

      <div id="News" className="tabcontent" style={{ display: activeTab === 'News' ? 'block' : 'none' }}>
        <h3>News</h3>
        <p>Some news this fine day!</p>
      </div>

      <div id="Contact" className="tabcontent" style={{ display: activeTab === 'Contact' ? 'block' : 'none' }}>
        <h3>Contact</h3>
        <p>Get in touch, or swing by for a cup of coffee.</p>
      </div>

      <div id="About" className="tabcontent" style={{ display: activeTab === 'About' ? 'block' : 'none' }}>
        <h3>About</h3>
        <p>Who we are and what we do.</p>
      </div>
    </div>
  );
}

export default Tabs;
