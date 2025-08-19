import Container from "@/_components/shared/container/Container";
import CommonHeader from "@/_components/shared/headers/CommonHeader";
import FAQList from "./FAQList";

export default function FAQSection() {
  return (
    <Container>
      <CommonHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about cineSketch"
      />

      <FAQList />
    </Container>
  );
}
