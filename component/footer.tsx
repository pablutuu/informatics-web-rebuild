export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center px-4 md:px-16 py-16 md:py-24 rounded-t-[44px] bg-[#0C1B43]">
      <div className="w-full max-w-[1320px] flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
        <div className="w-full lg:w-auto flex flex-col items-start gap-7">
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex justify-start items-center gap-2 w-full">
              <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M25.6654 7.25004C25.6654 5.92087 24.6154 4.83337 23.332 4.83337H4.66536C3.38203 4.83337 2.33203 5.92087 2.33203 7.25004V21.75C2.33203 23.0792 3.38203 24.1667 4.66536 24.1667H23.332C24.6154 24.1667 25.6654 23.0792 25.6654 21.75V7.25004ZM23.332 7.25004L13.9987 13.2917L4.66536 7.25004H23.332ZM23.332 21.75H4.66536V9.66671L13.9987 15.7084L23.332 9.66671V21.75Z" fill="white"/>
              </svg>
              <h3 className="flex-1 text-white text-2xl md:text-[28px] font-[590] leading-normal">Kontak</h3>
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
              <p className="w-full text-white text-lg md:text-xl font-normal leading-8">Kampus 1. Jalan Perintis Kemerdekaan Km.10, Makassar</p>
              <p className="w-full text-white text-lg md:text-xl font-normal leading-8">Kampus 1. Jalan Perintis Kemerdekaan Km.10, Makassar</p>
              <p className="w-full text-white text-lg md:text-xl font-normal leading-8">Email : informatika@unhas.ac.id</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex justify-start items-center gap-2 w-full">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              </svg>
              <h3 className="flex-1 text-white text-2xl md:text-[28px] font-[590] leading-normal">Tautan</h3>
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
              <a href="https://neosia.unhas.ac.id" target="_blank" rel="noopener noreferrer" className="w-full text-white text-lg md:text-xl font-normal leading-8 hover:underline">https://neosia.unhas.ac.id</a>
              <a href="https://digilib.unhas.ac.id" target="_blank" rel="noopener noreferrer" className="w-full text-white text-lg md:text-xl font-normal leading-8 hover:underline">https://digilib.unhas.ac.id</a>
              <a href="https://repository.unhas.ac.id" target="_blank" rel="noopener noreferrer" className="w-full text-white text-lg md:text-xl font-normal leading-8 hover:underline">https://repository.unhas.ac.id</a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-auto lg:max-w-[574px] flex flex-col items-start gap-3">
          <div className="flex justify-start items-center gap-2 w-full">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <path d="M17.5 24.5L10.5 22.05L5.075 24.15C4.68611 24.3056 4.32639 24.262 3.99583 24.0193C3.66528 23.7767 3.5 23.4508 3.5 23.0417V6.70833C3.5 6.45556 3.57311 6.23194 3.71933 6.0375C3.86556 5.84306 4.06467 5.69722 4.31667 5.6L10.5 3.5L17.5 5.95L22.925 3.85C23.3139 3.69444 23.6736 3.73839 24.0042 3.98183C24.3347 4.22528 24.5 4.55078 24.5 4.95833V21.2917C24.5 21.5444 24.4273 21.7681 24.2818 21.9625C24.1364 22.1569 23.9369 22.3028 23.6833 22.4L17.5 24.5ZM16.3333 21.6417V7.99167L11.6667 6.35833V20.0083L16.3333 21.6417ZM18.6667 21.6417L22.1667 20.475V6.65L18.6667 7.99167V21.6417ZM5.83333 21.35L9.33333 20.0083V6.35833L5.83333 7.525V21.35Z" fill="white"/>
            </svg>
            <h3 className="flex-1 text-white text-2xl md:text-[28px] font-[590] leading-normal">Peta kampus</h3>
          </div>
          <div className="w-full h-64 md:h-[402px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.732087766729!2d119.49241831476536!3d-5.133862496290562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee329d96c4c63%3A0x3030bfbcaf770b0!2sUniversitas%20Hasanuddin!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Kampus"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
