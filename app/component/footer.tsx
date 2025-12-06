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
                <path d="M12.8169 20.6435C12.9393 20.7654 13.0364 20.9103 13.1026 21.0698C13.1688 21.2294 13.2029 21.4004 13.2029 21.5732C13.2029 21.7459 13.1688 21.9169 13.1026 22.0765C13.0364 22.236 12.9393 22.3809 12.8169 22.5028L12.2569 23.0628C11.6624 23.6595 10.9556 24.1324 10.1772 24.4542C9.39889 24.776 8.56446 24.9402 7.72222 24.9375C6.45383 24.9379 5.21382 24.5621 4.15907 23.8576C3.10431 23.1532 2.28221 22.1517 1.79676 20.9798C1.31132 19.808 1.18434 18.5186 1.43191 17.2746C1.67947 16.0306 2.29044 14.888 3.18753 13.9913L6.98831 10.1905C7.79674 9.38219 8.80652 8.80465 9.91312 8.51767C11.0197 8.23068 12.1829 8.24469 13.2823 8.55824C14.3816 8.87179 15.3772 9.47348 16.166 10.301C16.9547 11.1286 17.5079 12.1519 17.7683 13.265C17.8114 13.4343 17.8204 13.6104 17.7945 13.7832C17.7687 13.9559 17.7087 14.1218 17.6179 14.271C17.5272 14.4202 17.4076 14.5499 17.2661 14.6523C17.1246 14.7547 16.9641 14.8279 16.794 14.8675C16.6239 14.9071 16.4476 14.9123 16.2754 14.8829C16.1033 14.8535 15.9387 14.79 15.7914 14.6962C15.6441 14.6024 15.517 14.4801 15.4175 14.3365C15.3181 14.1929 15.2483 14.0309 15.2122 13.86C15.0577 13.2029 14.7305 12.599 14.2644 12.1108C13.7983 11.6225 13.2102 11.2676 12.561 11.0827C11.9118 10.8978 11.225 10.8897 10.5716 11.0591C9.91821 11.2286 9.32193 11.5695 8.8444 12.0466L5.04362 15.8474C4.51382 16.3767 4.1529 17.0513 4.00651 17.7858C3.86012 18.5203 3.93483 19.2818 4.2212 19.9738C4.50757 20.6658 4.99273 21.2574 5.61533 21.6737C6.23792 22.09 6.96999 22.3123 7.71894 22.3125C8.21657 22.314 8.70956 22.2167 9.16934 22.0263C9.62913 21.836 10.0466 21.5563 10.3975 21.2035L10.9564 20.6435C11.0784 20.5209 11.2233 20.4237 11.383 20.3574C11.5426 20.291 11.7138 20.2569 11.8867 20.2569C12.0595 20.2569 12.2307 20.291 12.3904 20.3574C12.55 20.4237 12.6949 20.5209 12.8169 20.6435ZM24.8099 4.9405C23.6069 3.73794 21.9756 3.06238 20.2746 3.06238C18.5737 3.06238 16.9424 3.73794 15.7394 4.9405L15.1805 5.4994C14.9339 5.74597 14.7954 6.08039 14.7954 6.42909C14.7954 6.77779 14.9339 7.11221 15.1805 7.35878C15.4271 7.60535 15.7615 7.74387 16.1102 7.74387C16.4589 7.74387 16.7933 7.60535 17.0399 7.35878L17.5999 6.79878C18.3106 6.08808 19.2745 5.68882 20.2796 5.68882C21.2846 5.68882 22.2486 6.08808 22.9592 6.79878C23.6699 7.50948 24.0692 8.47339 24.0692 9.47847C24.0692 10.4835 23.6699 11.4475 22.9592 12.1582L19.1519 15.9535C18.801 16.3063 18.3835 16.586 17.9237 16.7763C17.4639 16.9667 16.9709 17.064 16.4733 17.0625C15.6196 17.0619 14.7912 16.773 14.1223 16.2425C13.4535 15.712 12.9835 14.9711 12.7885 14.14C12.7096 13.8009 12.4992 13.5071 12.2036 13.3231C11.908 13.1391 11.5515 13.08 11.2124 13.1589C10.8733 13.2378 10.5794 13.4482 10.3954 13.7438C10.2114 14.0394 10.1524 14.3959 10.2313 14.735C10.5606 16.1425 11.3558 17.3975 12.4878 18.2965C13.6198 19.1954 15.0223 19.6856 16.4678 19.6875H16.4733C17.316 19.6898 18.1507 19.5251 18.9292 19.2027C19.7078 18.8804 20.4147 18.4068 21.0091 17.8096L24.8099 14.0088C25.4054 13.4134 25.8778 12.7065 26.2001 11.9286C26.5224 11.1506 26.6883 10.3167 26.6883 9.47464C26.6883 8.63254 26.5224 7.7987 26.2001 7.02072C25.8778 6.24275 25.4054 5.53588 24.8099 4.9405Z" fill="white"/>
              </svg>
              <h3 className="flex-1 text-white text-2xl md:text-[28px] font-[590] leading-normal">Tautan</h3>
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
              <a href="https://unhas.ac.id" target="_blank" rel="noopener noreferrer" className="w-full text-white text-lg md:text-xl font-normal leading-8 hover:underline">https://unhas.ac.id</a>
              <a href="https://sso.unhas.ac.id" target="_blank" rel="noopener noreferrer" className="w-full text-white text-lg md:text-xl font-normal leading-8 hover:underline">https://sso.unhas.ac.id</a>
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
