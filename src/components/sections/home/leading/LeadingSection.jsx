import { Container } from "@mui/material";

const LeadingSection = ({ leadingData }) => {
  return (
    <section className="py-8 lg:py-16 text-textDark">
      <Container>{leadingData[0].title}</Container>
    </section>
  );
};

export default LeadingSection;
