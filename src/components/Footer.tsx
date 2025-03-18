
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-izcode-gray-light text-izcode-black py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/public/logo.png" 
              alt="izcode Logo" 
              className="h-8 mb-6"
            />
            <p className="text-sm font-light">
              Transformando ideias em soluções digitais<br />
              para impulsionar o crescimento do seu negócio.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="mb-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=5531991732236&text&type=phone_number&app_absent=0r" 
                target="_blank" 
                rel="noreferrer"
                className="font-mono text-sm uppercase tracking-wider hover:text-izcode-blue transition-colors"
              >
                WhatsApp: (31) 99173-2236
              </a>
            </div>
            <p className="text-sm font-light">
              &copy; {currentYear} izcode. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
