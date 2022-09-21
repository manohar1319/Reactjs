import React from 'react'

//Nested Component
import WebApplication from './IT_Services/WebApplication'
import MobileApplication from './IT_Services/MobileApplication'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

//objects---
var services = [
  {
    title: 'WebApplication',
    routeName: 'web-app',
  },
  {
    title: 'MobileApplication',
    routeName: 'mobile-app'
  },
  {
    title: 'UX-UI Design',
    routeName: 'ux-ui'
  },
  {
    title: 'Project Support',
    routeName: 'support'
  },

]

// CREATE ITSERVICES COMPONENT
function Itservices() {

  return (<>
    <BrowserRouter>

      <div className="container-fluid">

        <h2>IT SERVICES</h2>

        <p>Nandamuri Taraka Rama Rao Jr., also known as Jr. NTR or Tarak, is an Indian actor, dancer, and television presenter who primarily works in Telugu cinema. One of the highest paid Telugu film actors, Rama Rao Jr. has won several accolades, including two Filmfare Awards, two state Nandi Awards, and four CineMAA Awards.</p>

        <div className="container my-5">
          <div className="row">

            <div className="col-lg-3">
              
              {/* <ul class="list-group">
                          <li class="list-group-item">
                            <Link to="/itservices/web-app">Web Application Services</Link>
                          </li>
                          <li class="list-group-item">
                            <Link to="/itservices/mobile-app">Mobile Application Services</Link>
                          </li>
                          <li class="list-group-item">
                            <Link to="/itservices/ux-ui">UX-UI Design Services</Link>
                          </li>
                          <li class="list-group-item">
                            <Link to="/itservices/support">Project Support Services</Link>
                          </li>
                         
                </ul> */}

              <ul class="list-group">

                {
                  services.map((data, i) => {
                    return (<li className="list-group-item">
                      <Link to={`/itservices/${data.routeName}`}>
                        {data.title}
                      </Link>
                    </li>)
                  })
                }
              </ul>

            </div>

            <div className="col-lg-9">

              {/*NESTED ROUTINGS*/}

              <Switch>
                <Route exact path="/itservices" component={WebApplication} />
                <Route path="/itservices/web-app" component={WebApplication} />
                <Route path="/itservices/mobile-app" component={MobileApplication} />
                <Route path="/itservices/ux-ui" render={() => <h2>This is UX-UI Services</h2>} />
                <Route path="/itservices/support" render={() => <h2>This is Project Support Services</h2>} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>

  </>)
}
export default Itservices;