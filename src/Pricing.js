import React, { Component } from "react";
import container from "./cardDetails.js";
class Pricing extends Component {
  constructor() {
    super();
    this.state = container;
  }
  render() {
    return (
      <><div className="task">
        <section className="pricing py-5">
                  <div className="container">
                    <div className="row">
          {this.state.pricingData.map((e) => {
            return (
                
                      <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                          <div className="card-body">
                            <h5 className="card-title text-muted text-uppercase text-center">{e.title}</h5>
                            <h6 className="card-price text-center">{e.currency}{e.price}<span className="period">{e.pricePer}</span></h6>
                            <hr />
                            <ul className="fa-ul">
                              {e.features.map((ele) => {

                                if (ele.access === true) {
                                  return (
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{ele.name}</li>);
                                } else {
                                  return (<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{ele.name}</li>);
                                }
                              })}
                            </ul>
                            <div className="d-grid">
                              <a href="#" className="btn btn-primary text-uppercase">Button</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    
               
            );
          })}
          </div>
                  </div>
                </section>
          </div>
      </>
    );
  }
}
export default Pricing;