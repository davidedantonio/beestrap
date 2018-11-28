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
                <option value="2">Foobar</option>
                <option value="3">Is great</option>
              </select>
            </div>
            <div class="col-lg-5 col-md-6 col-sm-3">
              <select class="selectpicker" data-style="btn btn-info" multiple title="Choose City" data-size="7">
                <option disabled> Multiple Options</option>
                <option value="2">Paris </option>
                <option value="3">Bucharest</option>
                <option value="4">Rome</option>
                <option value="5">New York</option>
                <option value="6">Miami </option>
                <option value="7">Piatra Neamt</option>
                <option value="8">Paris </option>
                <option value="9">Bucharest</option>
                <option value="10">Rome</option>
                <option value="11">New York</option>
                <option value="12">Miami </option>
                <option value="13">Piatra Neamt</option>
                <option value="14">Paris </option>
                <option value="15">Bucharest</option>
                <option value="16">Rome</option>
                <option value="17">New York</option>
                <option value="18">Miami </option>
                <option value="19">Piatra Neamt</option>
              </select>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>

<script type="text/javascript">
  $(document).ready(() => {
    beestrap.initDateTimePicker();
  })
</script>