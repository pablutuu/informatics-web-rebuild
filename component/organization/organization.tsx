import { motion } from "framer-motion";
import OrganizationCard from "./organization-card";

const organizations = [
    {
        number: 1,
        title: "IEEE Hasanuddin University Student Branch",
        description: "IEEE adalah asosiasi profesional terbesar di dunia yang didedikasikan untuk memajukan inovasi teknologi dan keunggulan demi kebaikan umat manusia. IEEE Hasanuddin University Student Branch menyediakan komunitas melalui publikasi, konferensi, standar teknologi, serta aktivitas profesional dan pendidikan. Organisasi ini berusaha mencapai keunggulan melalui profesionalisme bersama dengan IEEE Student Branch lainnya di Indonesia.",
        activities: ["IEE TALK", "IEE COURSE", "IEEE Leadership Upgrading"],
        image: "/images/IEEE.jpg", 
    },
    {
        number: 2,
        title: "OKIF FT-UH",
        description: "OKIF FT-UH merupakan organisasi kemahasiswaan bagi mahasiswa Program Studi Informatika di Universitas Hasanuddin yang menjadi wadah untuk berkegiatan, berkreasi, serta mengembangkan potensi dalam bidang akademik maupun non-akademik.",
        activities: ["Forum Diskusi", "Pelatihan Keilmuan"],
        image: "/images/OKIF.jpg",
    },
    {
        number: 3,
        title: "Developer Student Clubs Universitas Hasanuddin",
        description: "Google Developer Student Club (GDSC) merupakan komunitas berbasis universitas bagi mahasiswa yang tertarik dengan teknologi, khususnya teknologi dari Google. GDSC menjadi wadah untuk berkembang sebagai developer, mulai dari pemula hingga tingkat lanjut. Tidak hanya berfokus pada 'pemrograman', GDSC juga menekankan pentingnya terhubung, belajar bersama, dan tumbuh bersama. Komunitas ini menjadi forum koneksi lintas jurusan dan latar belakang bagi mahasiswa yang memiliki minat terhadap teknologi. Instagram: gdsc_unhas",
        activities: ["GDSC Summit Global", "GDSC Indonesia Summit", "Microblog"],
        image: "/images/GDSC.jpg",
    },
    
];

export default function Organization() {
    return (
        <div className="w-full relative bg-white"> 
            <div className="flex flex-col gap-0">
                {organizations.map((organization, index) => (
                    <OrganizationCard
                        key={index}
                        number={organization.number}
                        title={organization.title}
                        description={organization.description}
                        activities={organization.activities}
                        image={organization.image}
                    />
                ))}
            </div>
        </div>
    );
}