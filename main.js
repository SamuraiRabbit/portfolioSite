let setUpTooltip = function() {
    let tooltip = "";
    let tooltipDiv = document.querySelector(".div-tooltip");
    let tooltipElements = Array.from(document.querySelectorAll(".hover-reveal"));
    let fadeTime;

    let displayTooltip = function (eventObj, obj) {
        tooltip = obj.dataset.tooltip;
        tooltipDiv.innerHTML = tooltip;
        tooltipDiv.style.top = eventObj.pageY + "px";
        tooltipDiv.style.left = eventObj.pageX + "px";
        fadeIn(tooltipDiv);
    }

    let fadeOut = function(element) {
        let elementOpacity = 1;
        if (!fadeTime) {
            fadeTime = setInterval(function() {
                if (elementOpacity <= 0.1) {
                    clearInterval(fadeTime);
                    fadeTime = null;
                    element.style.opacity = 0;
                    element.style.display = "none";
                }           
                element.style.opacity = elementOpacity;
                elementOpacity -= elementOpacity * 0.1;
            }, 10);
        }
    }

    let fadeIn = function(element) {
        let elementOpacity = 0.1;
        element.style.display = "block";
        let fadeTime =setInterval(function() {
            if (elementOpacity >= 1) {
                clearInterval(fadeTime);
            }           
            element.style.opacity = elementOpacity;
            elementOpacity += elementOpacity * 0.1;
        }, 10);
    }

    tooltipElements.forEach(function(element) {
        let timeout;
        element.addEventListener("mouseenter", function(eventObj) {
            let that = this;
            timeout = setTimeout(function() {
                displayTooltip(eventObj, that);
            }, 400);
        });         
        element.addEventListener("mouseleave", function (element) {
            clearTimeout(timeout);
            fadeOut(tooltipDiv);
        });
    });
}

setUpTooltip();
