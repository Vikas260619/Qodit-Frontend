import React, {useState} from "react";
import axios from 'axios';

export default function  Forgot() {
    const [email, setEmail] = useState(null);
    
    const handleSubmit = async (e) =>  {
        // e.preventDefult();
        axios.post('forgot',).then(
            res => {
                console.log("show data here=-===========>>>>>>>>>>",res.data);
            }
        ).catch(
            err =>{
                console.log(err);
            }
        )
    }
    
  return (
    <div>
      <div class="form-gap"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="text-center">
                  <h3>
                    <i class="fa fa-lock fa-4x"></i>
                  </h3>
                  <h2 class="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div class="panel-body">
                    <form onClick={handleSubmit}>
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="glyphicon glyphicon-envelope color-blue"></i>
                          </span>
                          <input
                            id="email"
                            name="email"
                            placeholder="email address"
                            class="form-control"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                      </div>
                      <div class="form-group">
                        <input
                          name="recover-submit"
                          class="btn btn-lg btn-primary btn-block"
                          value="Reset Password"
                          type="submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

