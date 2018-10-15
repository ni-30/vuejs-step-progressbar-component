export default {
    /**
     * 'params' format in the below functions
     * 
     * {
     *   vueComponentId: "step-progress-bar-1",
     *   totalSteps: 5,
     *   currentStep: 1,
     *   stepTitles: ["Step-1", "Step-2", "Step-3", "Step-4", "Step-5"]
     * }
     */
    initProgressBar: function(params) {
        var progressBar = document.getElementById(params.vueComponentId).getElementsByClassName('progress')[0];
        for (var i = 1; i <= params.totalSteps; i++) {
            var div = document.createElement('div');
            div.id = params.vueComponentId + "-step-progress-bar-step-circle-" + i;
            div.innerHTML = i;
            div.className = 'step-circle not-started-step-circle';
            div.style.left = ((i-1) * 100/(params.totalSteps-1)) + '%';
            progressBar.appendChild(div);
        }
        this.updateProgressBar(null, params);
    },
    updateProgressBar: function(isIncrease, params) {
        if (isIncrease === true || isIncrease === false) {
            if ((isIncrease && params.currentStep <= params.totalSteps) || (!isIncrease && params.currentStep > 1)) {
                params.currentStep = isIncrease ? (params.currentStep + 1) : (params.currentStep - 1);
            }
        }
        
        var totalCompletedSteps = params.currentStep > params.totalSteps ? params.totalSteps : (params.currentStep - 1);
        
        for(var i = 1; i <= params.totalSteps; i++) {
            var stepCircleElement = document.getElementById(params.vueComponentId + "-step-progress-bar-step-circle-" + i);

            if (i == params.currentStep) {
                stepCircleElement.classList.add("current-step-circle");
                stepCircleElement.classList.remove("completed-step-circle");
                stepCircleElement.classList.remove("not-started-step-circle");
            } else if ( i <= totalCompletedSteps) {
                console.log("completed - " + i);
                stepCircleElement.classList.add("completed-step-circle");
                stepCircleElement.classList.remove("current-step-circle");
                stepCircleElement.classList.remove("not-started-step-circle");
            } else {
                stepCircleElement.classList.add("not-started-step-circle");
                stepCircleElement.classList.remove("completed-step-circle");
                stepCircleElement.classList.remove("current-step-circle");
            }
        }
        var propgressBarInPercent = totalCompletedSteps == params.totalSteps ? 100 : (totalCompletedSteps*100/(params.totalSteps - 1));
        $('.progress-bar').css('width', propgressBarInPercent + '%');
        document.getElementById(params.vueComponentId).getElementsByTagName('h5')[0].innerHTML = params.stepTitles[(params.currentStep > params.totalSteps ? params.totalSteps : params.currentStep) - 1];
    }
}