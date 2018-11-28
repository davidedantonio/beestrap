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

<script type="text/javascript">
  $(document).ready(() => {
    beestrap.initDateTimePicker();
  })
</script>