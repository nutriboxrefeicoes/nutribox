export function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5583998334460?text=Ol%C3%A1%21+Vim+pelo+site+da+NutriBox+e+gostaria+de+falar+com+voc%C3%AAs."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f3727] shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#1f3727]/50"
            aria-label="Fale conosco pelo WhatsApp"
        >
            <div className="absolute inset-0 rounded-full animate-ping [animation-duration:2.5s] bg-[#1f3727] opacity-75"></div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f5f2dc"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10 h-7 w-7"
            >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
            </svg>
        </a>
    )
}
