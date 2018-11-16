---
layout: docs
---
<div class="row">
  <div class="col-12">
    <div class="card card-chart">
      <div class="card-header ">
        <div class="row">
          <div class="col-sm-6 text-left">
            <h5 class="card-category">Twitter</h5>
            <h2 class="card-title">Last Year</h2>
          </div>
          <div class="col-sm-6">
            <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
              <label class="btn btn-sm btn-primary btn-simple active" id="0">
                <input type="radio" name="options" autocomplete="off" checked> Tweet
              </label>
              <label class="btn btn-sm btn-primary btn-simple " id="1">
                <input type="radio" name="options" autocomplete="off"> Likes
              </label>
              <label class="btn btn-sm btn-primary btn-simple " id="2">
                <input type="radio" name="options" autocomplete="off"> Retweets
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="chart-area">
          <canvas id="chartBig1"></canvas>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-6">
    <div class="card card-stats">
      <div class="card-body ">
        <div class="row">
          <div class="col-5">
            <div class="info-icon text-center icon-warning">
              <i class="bee-icons far fa-comments"></i>
            </div>
          </div>
          <div class="col-7">
            <div class="numbers">
              <p class="card-category">Number</p>
              <h3 class="card-title">150GB</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer ">
        <hr>
        <div class="stats">
          <i class="bee-icons fas fa-undo"></i> Update Now
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-6">
    <div class="card card-stats">
      <div class="card-body ">
        <div class="row">
          <div class="col-5">
            <div class="info-icon text-center icon-primary">
              <i class="bee-icons far fa-star"></i>
            </div>
          </div>
          <div class="col-7">
            <div class="numbers">
              <p class="card-category">Followers</p>
              <h3 class="card-title">+45k</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer ">
        <hr>
        <div class="stats">
          <i class="bee-icons fas fa-chart-line"></i> Last Research
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-6">
    <div class="card card-stats">
      <div class="card-body ">
        <div class="row">
          <div class="col-5">
            <div class="info-icon text-center icon-success">
              <i class="bee-icons fas fa-user"></i>
            </div>
          </div>
          <div class="col-7">
            <div class="numbers">
              <p class="card-category">Users</p>
              <h3 class="card-title">150,000</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer ">
        <hr>
        <div class="stats">
          <i class="bee-icons fas fa-trophy"></i> Customers feedback
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-6">
    <div class="card card-stats">
      <div class="card-body ">
        <div class="row">
          <div class="col-5">
            <div class="info-icon text-center icon-danger">
              <i class="bee-icons fab fa-angular"></i>
            </div>
          </div>
          <div class="col-7">
            <div class="numbers">
              <p class="card-category">Errors</p>
              <h3 class="card-title">12</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer ">
        <hr>
        <div class="stats">
          <i class="bee-icons fas fa-laptop"></i> In the last hours
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card card-chart">
      <div class="card-header ">
        <h5 class="card-category">Total Shipments</h5>
        <h3 class="card-title"><i class="bee-icons fas fa-bell text-primary "></i> 763,215</h3>
      </div>
      <div class="card-body ">
        <div class="chart-area">
          <canvas id="chartLinePurple"></canvas>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card card-chart">
      <div class="card-header ">
        <h5 class="card-category">Daily Sales</h5>
        <h3 class="card-title"><i class="bee-icons fas fa-truck text-info"></i> 3,500€</h3>
      </div>
      <div class="card-body ">
        <div class="chart-area">
          <canvas id="CountryChart"></canvas>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card card-chart">
      <div class="card-header ">
        <h5 class="card-category">Completed Tasks</h5>
        <h3 class="card-title"><i class="bee-icons fas fa-paper-plane text-success "></i> 12,100K</h3>
      </div>
      <div class="card-body ">
        <div class="chart-area">
          <canvas id="chartLineGreen"></canvas>
        </div>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
  $(document).ready(function() {
    demo.initDashboardPageCharts();
  });
</script>