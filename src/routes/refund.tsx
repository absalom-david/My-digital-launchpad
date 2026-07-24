import { createFileRoute } from "@tanstack/react-router";
import LegalLayout from "@/components/LegalLayout";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — The Design Genius" },
      {
        name: "description",
        content:
          "The Design Genius 100% satisfaction and refund policy for our website design and branding services.",
      },
      { property: "og:title", content: "Refund Policy — The Design Genius" },
      {
        property: "og:description",
        content: "How refunds work at The Design Genius.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Refund,
});

function Refund() {
  return (
    <LegalLayout title="Refund Policy" updated="January 2026">
      <p>
        Every project at The Design Genius is backed by our{" "}
        <strong>100% Satisfaction Guarantee</strong>. If for any reason you are not happy with
        the initial design concepts, we will keep working with unlimited revisions until you are
        — or you may request a refund according to the terms below.
      </p>

      <h2>1. Eligibility for a Full Refund</h2>
      <p>
        You are eligible for a full refund of the amount paid if all of the following apply:
      </p>
      <ul>
        <li>You request the refund in writing before the initial design concepts are approved.</li>
        <li>You have supplied all required project information and feedback in good faith.</li>
        <li>The request is made within 15 days of your initial payment.</li>
      </ul>

      <h2>2. Partial Refunds</h2>
      <p>
        If work has begun and design concepts have been delivered, refunds may be issued on a
        pro-rata basis reflecting the work already completed. Once a design has been approved
        and finalized, that portion of the project is non-refundable.
      </p>

      <h2>3. Non-Refundable Items</h2>
      <ul>
        <li>Domain registration, hosting, SSL certificates, and other third-party purchases.</li>
        <li>Stock photography, premium fonts, plugins, or paid integrations.</li>
        <li>Any project marked as final and approved by the Client.</li>
        <li>Rush delivery fees once work has commenced.</li>
      </ul>

      <h2>4. How to Request a Refund</h2>
      <p>
        Send a written refund request to{" "}
        <a href="mailto:info@thedesignsgenius.com" className="text-gradient-brand">
          info@thedesignsgenius.com
        </a>{" "}
        including your name, project details, and reason for the request. We will respond within
        3 business days.
      </p>

      <h2>5. Processing</h2>
      <p>
        Approved refunds are processed back to the original payment method within 7–14 business
        days. Bank and card processing times may extend when the funds appear in your account.
      </p>

      <h2>6. Chargebacks</h2>
      <p>
        Please contact us before filing a chargeback — most issues can be resolved quickly. Any
        chargeback filed in bad faith or after work has been delivered and approved will be
        contested with the payment provider.
      </p>

      <h2>7. Contact</h2>
      <p>
        Email:{" "}
        <a href="mailto:info@thedesignsgenius.com" className="text-gradient-brand">
          info@thedesignsgenius.com
        </a>
        <br />
        Phone: (210) 920-8669
      </p>
    </LegalLayout>
  );
}
