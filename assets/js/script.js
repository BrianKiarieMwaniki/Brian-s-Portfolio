(function(){
    var newLink = document.getElementById("newLink");

    var divIntro = document.getElementById("intro");
    var divFooter = document.getElementById("footer");

    var allDivs = [divFooter,divIntro];

    function displayDiv(e){
        for(var i = 0; i<allDivs.length; i++){
            var singleDiv = allDivs[i];

            if(singleDiv.style.display === "none"){
                singleDiv.style.display = "block";
            }else {
                singleDiv.style.display = "none";
            }
        }

        if(e !== undefined && e.preventDefault !== undefined){
            e.preventDefault();
        }
        
    }

    newLink.addEventListener("click",displayDiv);

}());