//Services.js Module
import React from 'react'
//styles
var bgc={
    backgroundColor:'#12151c'
}

//Create Services-Component
function Services() {
    return (<React.Fragment>
        <div className="container-fluid" style={bgc}>
            <div className="container p-5 text-center">
                <h1 className="pt-2 pb-5 text-white">Services</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card text-center text-white p-4" style={bgc}>
                            {/* <p className="text-center">
                                <FontAwesomeIcon icon={fa coffee} size="4x" className="fw-bold text-success"/>

                            </p> */}
                            <div className="crad-body">
                                <h3 className="py-3">UX/UI Design</h3>
                                <p className="text-justify">Nandamuri Taraka Rama Rao Jr., also known as Jr. NTR or Tarak, is an Indian actor, dancer, and television presenter who primarily works in Telugu cinema. One of the highest paid Telugu film actors, Rama Rao Jr. has won several accolades, including two Filmfare Awards, two state Nandi Awards, and four CineMAA Awards.
                                </p>

                            </div>

                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className="crad text-center text-white p-3" style={bgc}>
                            <div className='crad-body'>
                                <h3 className="py-3">Marketing</h3>
                                <p className="text-justify">Nandamuri Taraka Rama Rao Jr., also known as Jr. NTR or Tarak, is an Indian actor, dancer, and television presenter who primarily works in Telugu cinema. One of the highest paid Telugu film actors, Rama Rao Jr. has won several accolades, including two Filmfare Awards, two state Nandi Awards, and four CineMAA Awards.
                                </p>

                            </div>

                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className="crad text-center text-white p-3" style={bgc}>
                            <div className="crad-body">
                            <h3 className="py-3">BRANDING</h3>
                                <p className="text-justify">Nandamuri Taraka Rama Rao Jr., also known as Jr. NTR or Tarak, is an Indian actor, dancer, and television presenter who primarily works in Telugu cinema. One of the highest paid Telugu film actors, Rama Rao Jr. has won several accolades, including two Filmfare Awards, two state Nandi Awards, and four CineMAA Awards.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </React.Fragment>

    )
}
export default Services;