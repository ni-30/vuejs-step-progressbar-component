<template>
  <div v-bind:id="id" class="step-progress-bar container mt-4">
    <div class="container row">
        <div class="col">
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </div>
    </div>
    <h5 class="mt-4 text-center text-dark font-weight-bold mx-auto"></h5>
</div>
</template>

<script>
export default {
  name: 'step-progress-bar',
  paras: ['id']
}
</script>

<style lang="scss">
.step-progress-bar .progress {
  height: 10px;
  position: relative;
  overflow: visible;
  background-color: #aaa;
}
.step-progress-bar .progress-bar {
    background-color: #003366;
}
.step-progress-bar .step-circle {
    border-style: solid;
    border-width: 3px;
    background: #ffffff;
    position: absolute;
    display: table-cell;
    height: 36px;
    width: 36px;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    font: 18px "josefin sans", arial;
    text-align: center;
    margin-top: -13px;
    padding-top: 5px; 
    margin-left: -5px; 
}
.step-progress-bar .current-step-circle {
    color: #003366;
    background-color: #fff;
    border-color: #003366;
}
.step-progress-bar .completed-step-circle {
    color: #fff;
    background-color: #003366;
    border-color: #003366;
}
.step-progress-bar .not-started-step-circle {
    color: #aaa;
    background-color: #fff;
    border-color: #aaa;
}
</style>
