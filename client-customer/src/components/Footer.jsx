import logo from "../assets/ngabolang-long.png";

export default function FooterNgabolang() {
  return (
    <footer>
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between space-y-6 space-y-reverse py-20 text-sm font-medium text-gray-500 md:flex-row md:items-start md:space-y-0">
        <div className="flex items-center space-x-4">
          <a href="#">
            <img className="w-[20vh]" src={logo} alt="" />
          </a>
          <p>Ngabolang © 2023. All Rights Reserved</p>
        </div>
        <nav className="flex flex-col flex-wrap items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <a href="#" className="hover:text-black">
            Status
          </a>
          <a href="#" className="hover:text-black">
            Twitter
          </a>
          <a href="#" className="hover:text-black">
            Contact
          </a>
          <a href="#" className="hover:text-black">
            Docs
          </a>
          <a href="#" className="hover:text-black">
            API
          </a>
          <a href="#" className="hover:text-black">
            Privacy
          </a>
          <a href="#" className="hover:text-black">
            Terms
          </a>
        </nav>
      </div>
    </footer>
  );
}
