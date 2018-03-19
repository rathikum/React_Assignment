import React, { Component } from 'react';
import './App.css';
import json from './json/projectList';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    /* data From json
    this.state = {
      referer:json.profile[0].referer,
      added_date:json.profile[0].added_date,
      last_login:json.profile[0].last_login,
      language:json.profile[0].language,
      orders_count:json.profile[0].orders_count,
      email:json.profile[0].email,
      access_level:json.profile[0].access_level,
      Password_flag:json.profile[0].Password_flag
    }; */

    /* data from server */
    this.state = {
      referer:'',
      added_date:'',
      last_login:'',
      language:'',
      orders_count:'',
      email:'',
      access_level:'',
      Password_flag:true
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
     axios.get(`http://172.16.100.144:3000/users/myprofile?id=2`)
          .then(res => { 
            this.setState({
              referer:res.profile[0].referer,
              added_date:res.profile[0].added_date,
              last_login:res.profile[0].last_login,
              language:res.profile[0].language,
              orders_count:res.profile[0].orders_count,
              email:res.profile[0].email,
              access_level:res.profile[0].access_level
            })
          });
      }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }
  
render() {
  return (
    <div>
        <h2>Edit profile</h2>
        <div id="main">
          <div className="tabbed-content-wrapper">
            <div className="tabs-container">
              <div className="tab-content">
                <form>
                  <div className="model-properties">
                    <fieldset>
                      <legend><h3 id data-name>
                          Account summary
                        </h3>
                      </legend>
                      <div>
                        <ul className="table summary-table">
                          <li className="input input-label first">
                            <div className="table-label referer-label">
                              <label htmlFor="referer" title="Referer">
                                Referer        </label>
                            </div>
                            <div className="star">&nbsp;</div>
                            <div className="table-value referer-value">
                              <span title="unknown" id="referer" name="referer" className=" label-field input">{this.state.referer}</span>
                            </div>
                            <div className="clear" />
                          </li>
                          <li className="input input-label">
                            <div className="table-label added-label">
                              <label htmlFor="added" title="Added">
                                Added        </label>
                            </div>
                            <div className="star">&nbsp;</div>
                            <div className="table-value added-value">
                              <span id="added" name="added" className=" label-field input">{this.state.added_date}</span>
                            </div>
                            <div className="clear" />
                          </li>
                          <li className="input input-label">
                            <div className="table-label last-login-label">
                              <label htmlFor="last-login" title="Last login">
                                Last login        </label>
                            </div>
                            <div className="star">&nbsp;</div>
                            <div className="table-value last-login-value">
                              <span id="last-login" name="last_login" className=" label-field input">{this.state.last_login}</span>
                            </div>
                            <div className="clear" />
                          </li>
                          <li className="input input-label">
                            <div className="table-label language-label">
                              <label htmlFor="language" title="Language">
                                Language        </label>
                            </div>
                            <div className="star">&nbsp;</div>
                            <div className="table-value language-value">
                              <span id="language" name="language" className=" label-field input">{this.state.language}</span>
                            </div>
                            <div className="clear" />
                          </li>
                          <li className="input input-label last">
                            <div className="table-label orders-count-label">
                              <label htmlFor="orders-count" title="Orders count">
                                Orders count        </label>
                            </div>
                            <div className="star">&nbsp;</div>
                            <div className="table-value orders-count-value">
                              <span id="orders-count" name="orders_count" className=" label-field input"><a href="admin.php?target=order_list&action=searchByCustomer&profileId=1&xcart_form_id=LYmiTFxsrB1jmnQfXXt8HrGTWTe4git8">{this.state.orders_count}</a></span>
                            </div>
                            <div className="clear" />
                          </li>
                        </ul>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend><h3 id data-name>
                          Email &amp; password
                        </h3>
                      </legend>
                      <div>
                        <ul className="table main-table">
                          <li className="input input-label first last">
                            <div className="table-label login-label">
                              <label htmlFor="login" title="Email">
                                Email        </label>
                            </div>
                            <div className="star">&nbsp;</div>
                            <div className="table-value login-value">
                              <span maxLength={128} id="login" name="login" className=" label-field input">{this.state.email}</span>
                            </div>
                            <div className="clear" />
                          </li>
                        </ul>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend><h3 id data-name>
                          Access information
                        </h3>
                      </legend>
                      <div>
                        <ul className="table access-table">
                          <li className="input input-label first">
                            <div className="table-label access-level-label">
                              <label htmlFor="access-level" title="Access level">
                                Access level        </label>
                            </div>
                            <div className="star">&nbsp;</div>
                            <div className="table-value access-level-value">
                              <span id="access-level" name="access_level" className=" label-field input">{this.state.access_level}</span>
                            </div>
                            <div className="clear" />
                          </li>
                          <li className="input input-checkbox-enabled last">
                            <div className="table-label forcechangepassword-label">
                              <label htmlFor="forcechangepassword" title="Require to change password on next log in">
                                Require to change password on next log in        </label>
                            </div>
                            <div className="star">&nbsp;</div>
                            <div className="table-value forcechangepassword-value">
                              <span className="input-field-wrapper checkbox input input-checkbox-enabled">
                                <input type="hidden" name="forceChangePassword" defaultValue />
                                <input id="forcechangepassword" name="forceChangePassword" type="checkbox" defaultValue={1} className="form-control" />
                              </span>
                            </div>
                            <div className="clear" />
                          </li>
                        </ul>
                      </div>
                    </fieldset>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div></div>
  );
}
}

export default App;
