---
layout: docs
title: Dashboard
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
            <div class="fa-4x">
              <i class="bee-icons fab fa-github"></i>
            </div>
          </div>
          <div class="col-7">
            <div class="numbers">
              <p class="card-category">Repositories</p>
              <h1 class="card-title">17</h1>
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
            <div class="fa-4x text-primary">
              <i class="bee-icons fab fa-react"></i>
            </div>
          </div>
          <div class="col-7">
            <div class="numbers">
              <p class="card-category">React JS</p>
              <h1 class="card-title">+45k</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer ">
        <hr>
        <div class="stats">
          <i class="bee-icons fas fa-chart-line"></i> Line of code
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-6">
    <div class="card card-stats">
      <div class="card-body ">
        <div class="row">
          <div class="col-5">
            <div class="fa-4x text-success">
              <i class="bee-icons fab fa-node-js"></i>
            </div>
          </div>
          <div class="col-7">
            <div class="numbers">
              <p class="card-category">Node.js</p>
              <h1 class="card-title text-success">26</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer ">
        <hr>
        <div class="stats">
          <i class="bee-icons fas fa-trophy"></i> Passed test
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-6">
    <div class="card card-stats">
      <div class="card-body ">
        <div class="row">
          <div class="col-5">
            <div class="fa-4x text-danger">
              <i class="bee-icons fab fa-angular"></i>
            </div>
          </div>
          <div class="col-7">
            <div class="numbers">
              <p class="card-category">Errors</p>
              <h1 class="card-title">12</h1>
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
        <h5 class="card-category">Total push</h5>
        <h3 class="card-title"><i class="bee-icons fab fa-github text-primary "></i> 580</h3>
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
        <h5 class="card-category">LinkedIn visits this week</h5>
        <h3 class="card-title"><i class="bee-icons fab fa-linkedin text-info"></i> 308</h3>
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
        <h3 class="card-title"><i class="bee-icons fab fa-bitbucket text-success "></i> 12,100K</h3>
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