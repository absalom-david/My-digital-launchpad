import { createFileRoute } from "@tanstack/react-router";
import LegalLayout from "@/components/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — The Design Genius" },
      {
        name: "description",
        content:
          "How The Design Genius collects, uses, and protects your personal information when you use our services.",
      },
      { property: "og:title", content: "Privacy Policy — The Design Genius" },
      {
        property: "og:description",
        content: "Read The Design Genius's privacy policy.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="January 2026">
      <p>
        This Privacy Policy explains how The Design Genius ("we", "us") collects, uses, and
        protects information you provide when you use this website or engage our services.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>Contact details you submit: name, email address, phone number, business name.</li>
        <li>Project details you share in the lead form or over email/chat.</li>
        <li>Package selection and any payment/billing information handled by our provider.</li>
        <li>Basic technical data such as browser, device, and pages visited.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To respond to your inquiry and prepare a custom quote.</li>
        <li>To deliver, invoice, and support the services you purchase.</li>
        <li>To send project updates, revision requests, and follow-up communications.</li>
        <li>To improve our website, services, and customer experience.</li>
      </ul>

      <h2>3. SMS & Phone Communications</h2>
      <p>
        By providing a phone number and submitting the form, you consent to be contacted by SMS
        text message and phone call. Message & data rates may apply. Reply STOP at any time to
        opt out of further messaging.
      </p>

      <h2>4. Sharing of Information</h2>
      <p>
        We do not sell your personal information. We only share it with trusted service providers
        that help us operate our business — such as payment processors, email tools, and hosting
        — and only to the extent necessary to deliver our services. We may also disclose
        information where required by law.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We keep your information for as long as needed to provide our services and to comply
        with our legal and accounting obligations. You may request deletion of your data at any
        time by contacting us.
      </p>

      <h2>6. Security</h2>
      <p>
        We use reasonable administrative, technical, and physical safeguards to protect your
        information. No system is 100% secure, but we work to ensure your data stays confidential.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Our website may use cookies and similar technologies to remember preferences and measure
        traffic. You can disable cookies in your browser settings.
      </p>

      <h2>8. Your Rights</h2>
      <p>
        You have the right to access, correct, or request deletion of your personal information.
        To exercise these rights, contact us at info@thedesignsgenius.com.
      </p>

      <h2>9. Children's Privacy</h2>
      <p>
        Our services are not directed to individuals under the age of 16. We do not knowingly
        collect information from children.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. The latest version will always be posted
        on this page.
      </p>

      <h2>11. Contact</h2>
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
