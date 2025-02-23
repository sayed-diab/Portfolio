const Footer = () => {
  return (
    <>
      <footer className="footer d-flex justify-content-center align-items-center h-[60px]">
        <div className="bg-[transparent] text-md font-semibold text-[#333] mr-0 lg:mr-[150px] xl:mr-[250px]">© {new Date().getFullYear()} Code & design by Sayed Diab</div>
      </footer>
    </>
  );
};

export default Footer;
