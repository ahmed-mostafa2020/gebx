import { Container } from "@mui/material";

const LeadingSection = ({ leadingData }) => {
  return (
    <section className="py-8 lg:py-16 text-textDark">
      <Container>
        <h2>{leadingData[0].title}</h2>
      </Container>
    </section>
  );
};

export default LeadingSection;
