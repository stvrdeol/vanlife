function Footer() {
  const date = new Date();
  return (
    <footer className="h-20 text-[#FFF7ED] bg-[#252525] grid place-items-center">
      &copy; {date.getFullYear()} #vanlife
    </footer>
  );
}

export default Footer;
