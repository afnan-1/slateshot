import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthContext";
import AuthService from "../../../AuthServices/AuthServices";
import Header from "./Header";
import PersonelInfo from "./PersonelInfo";
import Biography from "./Biography";
function Index(props) {
  const authContext = useContext(AuthContext);
  const [handle, sethandle] = useState(false);
  const [users, setUsers] = useState(null);
  const style = {
    main: {
      height: props.height,
      width: props.width,
      minWidth: "160px",
      minHeight: "220px",
    },
  };
  useEffect(() => {
    localStorage.removeItem("timer");
  }, []);
  const handleClick = (e) => {
    if (e.target.src !== undefined) {
      sethandle(!handle);
      try {
        handle ? e.target.pause() : e.target.play();
      } catch (err) {}
    }
  };
  return (
    <div>
      <div>
        {/* Page Wrapper */}
        <div id="wrapper">
          {/* Sidebar */}
          
          {/* End of Sidebar */}
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <Header />
              {/* End of Topbar */}
              {/* Begin Page Content */}
              <div className="container-fluid">
                <div className="row">
                  <PersonelInfo
                    email={props.email}
                    gender={props.gender}
                    year={props.year}
                    month={props.month}
                    day={props.day}
                    city={props.city}
                    country={props.country}
                    state={props.state}
                    actor={props.actor}
                  />
                  <div className="col-xl-9 col-lg-9">
                    <div className="bg-white info-header shadow rounded mb-4">
                      <div className="row d-flex align-items-center justify-content-between p-3 border-bottom">
                        <div className="col-lg-7 m-b-4">
                          <h3 className="text-gray-900 mb-0 mt-0 font-weight-bold">
                            {props.firstname.toUpperCase()}{" "}
                            {props.lastname.toUpperCase()}
                          </h3>
                          <p className="mb-0 text-gray-800">
                            <small className="text-muted">
                              <i className="fas fa-user-circle fa-fw fa-sm mr-1" />{" "}
                              Acting
                            </small>
                          </p>
                        </div>
                        <div class="row mr-2">
                          <a
                            href="#"
                            class="btn btn-sm mr-1 btn-primary btn-circle"
                          >
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a
                            href="#"
                            class="btn btn-sm mr-1 btn-danger btn-circle"
                          >
                            <i class="fab fa-youtube"></i>
                          </a>
                          <a
                            href="#"
                            class="btn btn-sm mr-1 btn-warning btn-circle"
                          >
                            <i class="fab fa-snapchat-ghost"></i>
                          </a>
                          <a
                            href="#"
                            class="btn btn-sm mr -1 btn-info btn-circle"
                          >
                            <i class="fab fa-twitter"></i>
                          </a>
                        </div>
                      </div>
                      <div class="p-3 mb-4">
                        <h1 class="h6 mb-3 mt-0 font-weight-bold text-gray-900">
                          Biography
                        </h1>
                        <div>
                          <p class="mb-0 text-gray-600">
                            An American and Canadian actor, producer and
                            semi-retired professional wrestler, signed with WWE.
                            Johnson is half-Black and half-Samoan. His father,
                            Rocky Johnson, is a Black Canadian, from Nova
                            Scotia, and part of the first Black tag team
                            champions in WWE history back when it was known as
                            the WWF along with Tony Atlas. His mother is Samoan
                            and the daughter of Peter Maivia, who was also a pro
                            wrestler. Maivia's wife, Lia Maivia, was one of
                            wrestling's few female promoters, taking over
                            Polynesian Pacific Pro Wrestling after her husband's
                            death in 1982, until 1988. Through his mother, he is
                            ...
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Biography */}
                    <Biography
                      email={props.email}
                      reels={props.reels}
                      voiceover={props.voiceover}
                      excerpts={props.excerpts}
                    />
                  </div>
                </div>
              </div>
              {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>
                    Copyright © Christian Film Industry 2020 | Made with{" "}
                    <i className="fas fa-heart fa-fw text-danger" /> by{" "}
                    <a target="_blank" href="https://www.penbrooks.com">
                      Penbrooks
                    </a>
                  </span>
                </div>
              </div>
            </footer>
            {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}
        {/* Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
        {/* Logout Modal*/}
        <div
          className="modal fade"
          id="logoutModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Bootstrap core JavaScript*/}
        {/* Core plugin JavaScript*/}
        {/* slick Slider JS*/}
        {/* Custom scripts for all pages*/}
      </div>
    </div>
  );
}

export default Index;
