import { motion } from "framer-motion";
import OrganizationCard from "./organization-card";

const organizations = [
    {
        number: 1,
        title: "IEEE Hasanuddin University Student Branch",
        description: "IEEE adalah asosiasi profesional terbesar di dunia yang didedikasikan untuk memajukan inovasi teknologi dan keunggulan demi kebaikan umat manusia. IEEE Hasanuddin University Student Branch menyediakan komunitas melalui publikasi, konferensi, standar teknologi, serta aktivitas profesional dan pendidikan. Organisasi ini berusaha mencapai keunggulan melalui profesionalisme bersama dengan IEEE Student Branch lainnya di Indonesia.",
        activities: ["IEE TALK", "IEE COURSE", "IEEE Leadership Upgrading"],
    },
    {
        number: 2,
        title: "IEEE Hasanuddin University Student Branch",
        description: "IEEE adalah asosiasi profesional terbesar di dunia yang didedikasikan untuk memajukan inovasi teknologi dan keunggulan demi kebaikan umat manusia. IEEE Hasanuddin University Student Branch menyediakan komunitas melalui publikasi, konferensi, standar teknologi, serta aktivitas profesional dan pendidikan. Organisasi ini berusaha mencapai keunggulan melalui profesionalisme bersama dengan IEEE Student Branch lainnya di Indonesia.",
        activities: ["IEE TALK", "IEE COURSE", "IEEE Leadership Upgrading"],
    },
    {
        number: 3,
        title: "IEEE Hasanuddin University Student Branch",
        description: "IEEE adalah asosiasi profesional terbesar di dunia yang didedikasikan untuk memajukan inovasi teknologi dan keunggulan demi kebaikan umat manusia. IEEE Hasanuddin University Student Branch menyediakan komunitas melalui publikasi, konferensi, standar teknologi, serta aktivitas profesional dan pendidikan. Organisasi ini berusaha mencapai keunggulan melalui profesionalisme bersama dengan IEEE Student Branch lainnya di Indonesia.",
        activities: ["IEE TALK", "IEE COURSE", "IEEE Leadership Upgrading"],
    },
];

export default function Organization() {
    return (
        <div>
            {organizations.map((organization, index) => (
                <OrganizationCard
                    key={index}
                    number={organization.number}
                    title={organization.title}
                    description={organization.description}
                    activities={organization.activities}
                />
            ))}
        </div>
    );
}