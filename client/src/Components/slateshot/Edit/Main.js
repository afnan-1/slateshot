import React,{useContext, useState, useEffect} from 'react'
import Header from './Header'
import PersonelInfo from './PersonelInfo'
import Biography from './Biography'
import BiographyThumbnail from './BiographyThumbnail'
import Index from './index'
import AuthServices from '../../../AuthServices/AuthServices'
import { AuthContext } from '../../../Context/AuthContext'
import { useHistory } from 'react-router-dom'
function Main(props) {
  const history = useHistory()
    const authContext = useContext(AuthContext)
    useEffect(()=>{
      if(!authContext.isAuthenticated && (!localStorage.getItem("facebookusername")&& !localStorage.getItem("googleusername"))){
        history.push('/login')
      }
    })
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
                        <Index user={authContext.user} email={props.email} gender={props.gender} year={props.year} month={props.month} day={props.day} city={props.city}
                        country={props.country} state={props.state} />
                         <div className="col-xl-9 col-lg-9">
                           <div className="bg-white info-header shadow rounded mb-4">
                             <div className="row d-flex align-items-center justify-content-between p-3 border-bottom">
                               <div className="col-lg-7 m-b-4">
                                 <h3 className="text-gray-900 mb-0 mt-0 font-weight-bold">{authContext.user.firstname.toUpperCase()} {authContext.user.lastname.toUpperCase()}</h3>
                                 <p className="mb-0 text-gray-800"><small className="text-muted"><i className="fas fa-user-circle fa-fw fa-sm mr-1" /> {authContext.user.actor}</small></p>
                               </div>
                             </div>
                           </div>
                         {/* Biography */}
                           <Biography user={props.user} />
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
                         <span>Copyright © Christian Film Industry 2020 | Made with <i className="fas fa-heart fa-fw text-danger" /> by <a target="_blank" href="https://www.penbrooks.com">Penbrooks</a></span>
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
               <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                 <div className="modal-dialog modal-dialog-centered" role="document">
                   <div className="modal-content">
                     <div className="modal-header">
                       <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                       <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">×</span>
                       </button>
                     </div>
                     <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                     <div className="modal-footer">
                       <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                       <a className="btn btn-primary" href="login.html">Logout</a>
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
    )
}

export default Main
