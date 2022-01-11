let swichMode = document.getElementById("switchMode")

swichMode.onclick = function(){
    let theme   = document.getElementById("theme")
    if(theme.getAttribute('href') == "theme-light.css"){
        theme.href = "theme-dark.css"
    }else {
        theme.href = "theme-light.css"
    }
}