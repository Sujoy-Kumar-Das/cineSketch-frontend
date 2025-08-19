import Container from "@/_components/shared/container/Container";
import CommonHeader from "@/_components/shared/headers/CommonHeader";
import TestimonialList from "./TestimonialList";

export default function TestimonialSection() {
  return (
    <Container>
      <CommonHeader
        title="What Our Users Say"
        subtitle="Don't just take our word for it - hear from our creative community"
      />

      <TestimonialList />
    </Container>
  );
}
