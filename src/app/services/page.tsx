import { Services } from "@/components/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Alex — Infrastructure Engineer",
  description:
    "Server infrastructure, network engineering, Active Directory, and virtualization services.",
};

export default function ServicesPage() {
  return (
    <div className="py-8">
      <Services />
    </div>
  );
}
