import React from "react";
import "../App.css";


function Signup() {
    return (
        <div className="Signup">
            <div className="jumbotron" id="hdrbr">
            <p id="hdr">Looking For Group</p>
            </div><div id="group">

            <div className="jumbotron" id="bckrnd">
            <div class="form-horizontal">      
        <div class="form-group form-group-sm">
            <label for="pid" class="control-label field_name2 row-xs-4 row-sm-4 row-md-3">Username:</label>
            <div class="row-xs-8 row-sm-4 row-md-4">
                    <input class="form-control" id="pid" />
            </div>
        </div>
</div>
<div class="form-horizontal">      
        <div class="form-group form-group-sm">
            <label for="pid" class="control-label field_name2 row-xs-4 row-sm-4 row-md-3">Email:</label>
            <div class="row-xs-8 row-sm-4 row-md-4">
                    <input class="form-control" id="pid" />
            </div>
        </div>
</div>
<div class="form-horizontal">      
        <div class="form-group form-group-sm">
            <label for="pid" class="control-label field_name2 row-xs-4 row-sm-4 row-md-3">Password:</label>
            <div class="row-xs-8 row-sm-4 row-md-4">
                    <input class="form-control" id="pid" />
            </div>
        </div>
</div>
<div class="form-horizontal">      
        <div class="form-group form-group-sm">
            <label for="pid" class="control-label field_name2 row-xs-4 row-sm-4 row-md-3">Confirm password:</label>
            <div class="row-xs-8 row-sm-4 row-md-4">
                    <input class="form-control" id="pid" />
            </div>
        </div>
</div>
<br></br>
<button type="button" id="btnsu" class="btn btn-outline-danger">Sign me up!</button>
</div>

            </div>
        </div>
    );
}

export default Signup;