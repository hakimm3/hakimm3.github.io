import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white my-2 p-4 text-center" id="footer">
      <div className="row">
        <div className="col-md-12">
          <a target="_blank" href="https://www.linkedin.com/in/trisa-abdul-hakim/" className="btn btn-sm btn-outline-light mx-1 my-1">
            Linkedin
          </a>
          <a target="_blank" href="https://github.com/hakimm3" className="btn btn-sm btn-outline-light mx-1 my-1">
            Github
          </a>
          <a target="_blank" href="https://gitlab.com/hakimpbg" className="btn btn-sm btn-outline-light mx-1 my-1">
            Gitlab
          </a>
          <a target="_blank" href="mailto:trisaabdul@gmail.com" className="btn btn-sm btn-outline-light mx-1 my-1">
            Email
          </a>
        </div>
      </div>
        <div className="row">
            <div className="col-md-12">
                <p className="mt-3">Copyright <span className="text-light">&copy;</span> 2023 Trisa Abdul Hakim. All right reserved.</p>
            </div>
        </div>
    </footer>
  );
}