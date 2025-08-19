import Container from "@/_components/shared/container/Container";
import CommonHeader from "@/_components/shared/headers/CommonHeader";
import Link from "next/link";
import PricingList from "./PriceingList";

export default function PricingSection() {
  return (
    <Container>
      <CommonHeader
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that fits your creative needs. Cancel anytime."
      />

      <PricingList />

      <div className="text-center mt-8 text-sm text-zinc-400">
        Need something different? for {""}
        <Link href={"#"} className="text-indigo-400 hover:text-indigo-300">
          Contact us
        </Link>{" "}
        {""}
        custom plans.
      </div>
    </Container>
  );
}
