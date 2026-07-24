import { createFileRoute, Link } from "@tanstack/react-router";
import LegalLayout from "@/components/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — The Design Genius" },
      {
        name: "description",
        content:
          "The terms and conditions governing your use of The Design Genius website design and branding services.",
      },
      { property: "og:title", content: "Terms & Conditions — The Design Genius" },
      {
        property: "og:description",
        content: "Read the terms and conditions for The Design Genius services.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalLayout title="Terms & Conditions" updated="January 2026">
      <p>
        These Terms & Conditions ("Terms") govern the services provided by The Design Genius
        ("we", "us", "our") to you ("Client"). By placing an order, signing an agreement, or
        making a payment, you agree to be bound by these Terms.
      </p>

      <h2>1. Services</h2>
      <p>
        We provide custom website design, logo design, branding, animation, and related digital
        services. Each project is scoped by the specific package purchased (Basic $149, Startup
        $349, Professional $550) or by a written custom quote.
      </p>

      <h2>2. Payments</h2>
      <p>
        All package prices are one-time fees quoted in USD unless otherwise stated. A deposit or
        full payment may be required before work begins. Payments are processed through secure
        third-party providers.
      </p>

      <h2>3. Revisions</h2>
      <p>
        Our packages include unlimited design revisions on the originally agreed scope. Requests
        for entirely new concepts or scope beyond the purchased package may be treated as
        additional work and quoted separately.
      </p>

      <h2>4. Turnaround & Delivery</h2>
      <p>
        Standard delivery times are 5–14 business days depending on the package, provided the
        Client supplies all required content, feedback, and approvals in a timely manner. Delays
        caused by the Client will extend the delivery timeline.
      </p>

      <h2>5. Client Responsibilities</h2>
      <p>
        The Client is responsible for providing accurate briefs, brand assets, content (text,
        images, videos), and timely feedback. The Client warrants that any materials supplied do
        not infringe third-party rights.
      </p>

      <h2>6. Ownership & Rights</h2>
      <p>
        Full ownership of the final approved design is transferred to the Client upon receipt of
        full payment. We retain the right to display the completed work in our portfolio and
        marketing materials unless the Client requests otherwise in writing.
      </p>

      <h2>7. Third-Party Services</h2>
      <p>
        Where a project requires third-party services (hosting, domain, plugins, stock imagery,
        premium fonts, payment gateways), the Client is responsible for the cost of those
        services unless expressly included in the package.
      </p>

      <h2>8. Cancellation</h2>
      <p>
        Either party may cancel a project at any time by written notice. Fees for work already
        completed are non-refundable. Refunds, where applicable, are governed by our{" "}
        <Link to="/refund" className="text-gradient-brand">Refund Policy</Link>.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, our total liability for any claim arising out of
        or relating to our services is limited to the total amount paid by the Client for the
        specific project giving rise to the claim.
      </p>

      <h2>10. Confidentiality</h2>
      <p>
        We treat all Client information as confidential and will not disclose it to third parties
        except as required to deliver the services or by law.
      </p>

      <h2>11. Communication & Consent</h2>
      <p>
        By submitting the lead form or providing a phone number, you consent to be contacted by
        email, phone, or SMS about your inquiry. Standard messaging rates may apply. You may opt
        out at any time by replying STOP or emailing info@thedesignsgenius.com.
      </p>

      <h2>12. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of our services after any
        change constitutes acceptance of the updated Terms.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href="mailto:info@thedesignsgenius.com" className="text-gradient-brand">
          info@thedesignsgenius.com
        </a>{" "}
        or call (210) 920-8669.
      </p>
    </LegalLayout>
  );
}
