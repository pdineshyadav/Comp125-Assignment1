/* Main Javascript file */

// IIFE = Immediately Invoked Function Expression
(function(){
    
    // Code goes here
        "use strict";

    var aboutMeParaTag = document.getElementById("aboutMeParagraph");
    
    var aboutMeParagraph = "I am a student of <strong>Software Engineering</strong> Program at Centennial College. Previously I studied at <strong>York University</strong>, <b>Winston Churchill CI</b> and <strong> Johnson Grammar School</strong>. I like to play sports. My favourite sport is <strong>Cricket</strong>. I even enjoy running, high jump and shot put. I have received a couple of momentos in the <b> Scarborough Cricket League</b> and few medals in athletics. My mission is to get a job in IT department. I have learnt programming languages like Java, C#, BASICS, etc. I am very much interested in becoming a web developer. I will try my level best to achieve my mission.";
    
        // declare named function
    function functionOfFirstParagraph() {
        
        // create a reference to a p element with an id of "firstParagraph"
        aboutMeParaTag.innerHTML = aboutMeParagraph;
      
    }
    
        // execute function
        functionOfFirstParagraph();
    
    
})();