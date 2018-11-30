---
layout: docs
---
<div class="row">
  <div class="col-md-4">
    <div class="card ">
      <div class="card-header ">
        <h4 class="card-title">Date-Time-Picker</h4>
      </div>
      <div class="card-body ">
        <div class="form-group">
          <input type="text" class="form-control datetimepicker" value="10/05/2018">
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card ">
      <div class="card-header ">
        <h4 class="card-title">Date Picker</h4>
      </div>
      <div class="card-body ">
        <div class="form-group">
          <input type="text" class="form-control datepicker" value="10/05/2018">
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card ">
      <div class="card-header ">
        <h4 class="card-title">Time Picker</h4>
      </div>
      <div class="card-body ">
        <div class="form-group">
          <input type="text" class="form-control timepicker" value="10/05/2018">
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-md-6 mb-4">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Select Picker</h4>
          <div class="row">
            <div class="col-lg-5 col-md-6 col-sm-3">
              <select class="selectpicker" data-size="7" data-style="btn btn-primary" title="Single Select">
                <option disabled selected>Single Option</option>
                <option value="2">Naples</option>
                <option value="3">Rome</option>
              </select>
            </div>
            <div class="col-lg-5 col-md-6 col-sm-3">
              <select class="selectpicker" data-style="btn btn-info" multiple title="Choose City" data-size="7">
                <option disabled> Multiple Options</option>
                <option value="2">Naples</option>
                <option value="3">Rome</option>
                <option value="5">New York</option>
                <option value="6">Miami</option>
                <option value="7">Barcelona</option>
                <option value="8">Amsterdam</option>
                <option value="9">Bucharest</option>
                <option value="10">Venice</option>
              </select>
            </div>
          </div>
        </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card">
        <div class="card-body">
          <h4 class="card-title">Dropdown</h4>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-3">
              <div class="dropdown">
                <button class="dropdown-toggle btn btn-primary btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <h6 class="dropdown-header">Dropdown header</h6>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-3">
              <div class="dropup">
                <button type="button" class="dropdown-toggle btn btn-primary btn-block" data-toggle="dropdown">
                  Dropup
                </button>
                <div class="dropdown-menu">
                  <h6 class="dropdown-header">Dropdown header</h6>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>

<div class="row">
  <div class="col-md-6 mb-4">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">Progress Bars</h4>
      </div>
      <div class="card-body">
        <div class="progress-container">
          <span class="progress-badge">Default</span>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 25%;">
              <span class="progress-value">25%</span>
            </div>
          </div>
        </div>
        <div class="progress-container progress-primary">
          <span class="progress-badge">Primary</span>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
              <span class="progress-value">60%</span>
            </div>
          </div>
        </div>
        <div class="progress-container progress-info">
          <span class="progress-badge">Info</span>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 44%;">
              <span class="progress-value">44%</span>
            </div>
          </div>
        </div>
        <div class="progress-container progress-warning">
          <span class="progress-badge">Warning</span>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 92%;">
              <span class="progress-value">92%</span>
            </div>
          </div>
        </div>
        <div class="progress-container progress-success">
          <span class="progress-badge">Success</span>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">
              <span class="progress-value">50%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">Sliders</h4>
      </div>
      <div class="card-body">
        <div id="regularSlider" class="slider"></div>
        <br>
        <div id="doubleSlider" class="slider slider-primary mb-3"></div>
      </div>
      <div class="card-header">
        <h4 class="card-title">Tags</h4>
      </div>
      <div class="card-body">
        <input type="text" value="Amsterdam,Rome,New York" class="tagsinput" data-role="tagsinput" data-color="primary" />
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
  $(document).ready(() => {
    beestrap.initDateTimePicker();
    beestrap.initSliders();
  })
</script>