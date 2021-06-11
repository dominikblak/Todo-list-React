import "./style.css";
const Section = ({ title, sectionContent, extraHeaderContent }) => (
  <section className="section">
    <h2 className="section__header">
      {title}
      {extraHeaderContent}
    </h2>
    <div className="section__content">{sectionContent}</div>
  </section>
);
export default Section;
