export default function Footer() {
  return (
    <footer className="bg-[#0D1B4C] text-white mt-20 py-12 rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-10">
        
        <div>
          <h2 className="text-xl font-semibold mb-4">📧 Kontak</h2>
          <p>Kampus 1. Jalan Perintis Kemerdekaan Km.10, Makassar</p>
          <p>Kampus 1. Jalan Perintis Kemerdekaan Km.10, Makassar</p>
          <p className="mt-2">Email : informatika@unhas.ac.id</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">🔗 Link</h3>
          <ul className="space-y-1 text-gray-200">
            <li>https://unhas.ac.id</li>
            <li>https://sso.unhas.ac.id</li>
            <li>https://neosia.unhas.ac.id</li>
            <li>https://digilib.unhas.ac.id</li>
            <li>https://repository.unhas.ac.id</li>
          </ul>
        </div>

        {/* Peta */}
        <div>
          <h2 className="text-xl font-semibold mb-4">🗺 Peta kampus</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15928.10895507588!2d119.489!3d-5.139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf03eacdcc343%3A0x774b51c5d218a0a5!2sHasanuddin%20University!5e0!3m2!1sen!2sid!4v1700000000000"
            width="100%"
            height="260"
            className="rounded-xl border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
