
       function fnResize() {
        var deviceWidth = document.documentElement.clientWidth || window.innerWidth
        
        document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
        }
        fnResize()
        window.onresize = function () {
           fnResize()
        }