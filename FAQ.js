(function() {
   'use strict';
   window.onload = function() {
      
      document.getElementById("Q1").onclick = a1;
      document.getElementById("Q1").onmouseover = hover;
      document.getElementById("Q1").onmouseout = leave;
      document.getElementById("Q2").onclick = a2;
      document.getElementById("Q2").onmouseover = hover;
      document.getElementById("Q2").onmouseout = leave;
      document.getElementById("Q3").onclick = a3;
      document.getElementById("Q3").onmouseover = hover;
      document.getElementById("Q3").onmouseout = leave;
      document.getElementById("Q4").onclick = a4;
      document.getElementById("Q4").onmouseover = hover;
      document.getElementById("Q4").onmouseout = leave;
      document.getElementById("Q5").onclick = a5;
      document.getElementById("Q5").onmouseover = hover;
      document.getElementById("Q5").onmouseout = leave;
      document.getElementById("Q6").onclick = a6;
      document.getElementById("Q6").onmouseover = hover;
      document.getElementById("Q6").onmouseout = leave;
   };
   
   function hover(onmouseover) {
       this.style.cursor = "pointer";
       this.style.textDecoration = "underline";
   }
   
   function leave(onmouseout) {
       this.style.textDecoration = "none";
   }
   
   function a1() {
       if (document.getElementById("A1").innerHTML == "") {
           document.getElementById("A1").innerHTML = 'A. Grand pianos are usually between $175 and $225. Uprights, usually $160 to $200. This includes adjusting pitch and other service as needed (see below)';
       } else {
           document.getElementById("A1").innerHTML = '';
       }
   }
   
   function a2() {
       if (document.getElementById("A2").innerHTML == "") {
           document.getElementById("A2").innerHTML = 'A.  Cleaning, minor repairs,  adjustments to the action and tuning are normally included in a   service call.  On a fairly new piano in good condition, I usually spend some time in addition to tuning, to do something to improve the piano performance.  This may be regulating the action (improving the touch), or voicing (improving the tone.)  I look for what will make the most improvement in the time I have.  Sometimes the pedals need attention. On an older piano, I typically do whatever repairs and adjustments are needed to make the piano function, and spend the balance of the time tuning.  My goal is to make as much improvement on your piano as possible in the time allowed. \"Tuning\" a piano refers to simply adjusting the tension, and therefore the pitch, of all of the strings, to make the piano sound like it should.  While doing this very well requires a great deal of skill, it is analogous to putting gasoline in your car.  When you take your car in for a "tune up", your mechanic adjusts the moving parts of the engine, maybe the brakes, etc.  This compares to regulating and voicing your piano.  These parts of the piano are often neglected by piano \"tuners\". As a Registered Piano Technician (RPT, see  ptg, below) I provide service to all of the inner parts, as needed.  I may suggest other work, to be done later, but I try to get your piano in as good condition as I can in a normal service call.';
       } else {
           document.getElementById("A2").innerHTML = '';
       }
   }
   
   function a3() {
      if (document.getElementById("A3").innerHTML == "") {
           document.getElementById("A3").innerHTML = 'A.  A few minor repairs are normally included. Sometimes one or two keys not playing is a symptom of a bigger problem, especially on very old pianos.  If so, I would discuss this with you before beginning the work.';
       } else {
           document.getElementById("A3").innerHTML = '';
       }
   }
   
   function a4() {
       if (document.getElementById("A4").innerHTML == "") {
           document.getElementById("A4").innerHTML = 'A. I use both.  I learned to tune by ear, and did that exclusively for the first 20 years of my career.  Then a great computer program was developed to assist in the tuning procedure.  The farther out of tune a piano is, the more useful the computer is.  The closer a piano is to being in tune when I start, the more I rely on my ear, which is always the final judge.  It\'s like using GPS in your car.';
       } else {
           document.getElementById("A4").innerHTML = '';
       }
   }
   
   function a5() {
       if (document.getElementById("A5").innerHTML == "") {
           document.getElementById("A5").innerHTML = 'A. It is a common misconception that pianos are tuned by guessing at the pitch.   The system we use is far more accurate.  Either a tuning fork, or electronic reference is used to establish the starting pitch.  From there, we listen to the intereference between the sound waves.  These are called beats.  The speed of the beats is called the beat frequency.  This is used to tune and test intervals for accuracy.  ';
       } else {
           document.getElementById("A5").innerHTML = '';
       }
   }
   
   function a6() {
      if (document.getElementById("A6").innerHTML == "") {
           document.getElementById("A6").innerHTML = 'A. I became interested in piano technology from my interest in playing.  I enjoy playing the piano, but I am not a professional pianist.';
       } else {
           document.getElementById("A6").innerHTML = '';
       }
   }
})();