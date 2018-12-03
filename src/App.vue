<template>
  <div id="app" class="bg-light">
    <step-progress-bar
      ref="stepProgressBarCompRef"
      v-bind:totalSteps="stepProgressBarParams.totalSteps"
      v-bind:initCurrentStep="stepProgressBarParams.currentStep"
      v-bind:stepTitles="stepProgressBarParams.stepTitles"
    />
    
    <a id="back" class="btn btn-default mt-5" href="#">Back</a>
    <a id="next" class="btn btn-default mt-5" href="#">Next</a>
    <app-footer/>
  </div>
</template>

<script>
import StepProgressBar from './StepProgressBarComponent.vue'

export default {
  name: 'app',
  data () {
    return {
      stepProgressBarParams : {
        totalSteps: 5,
        currentStep: 1,
        stepTitles: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
      }
    }
  },
  components: {
    'step-progress-bar': StepProgressBar
  },
  watch: {
    'stepProgressBarParams.currentStep': function(val) {
      this.$refs.stepProgressBarCompRef.changeCurrentStep(val);
    }
  },
  mounted() {
       this.$nextTick(function() {
            var vueThis = this;
            $('#next').click(function() {
                if (vueThis.stepProgressBarParams.currentStep > vueThis.stepProgressBarParams.totalSteps) {
                  return;
                }
                vueThis.stepProgressBarParams.currentStep += 1;
            });
            $('#back').click(function() {
              if (vueThis.stepProgressBarParams.currentStep == 1) {
                return;
              }
              vueThis.stepProgressBarParams.currentStep -= 1;
            });
       });
  }
}
</script>

<style lang="scss">

</style>
