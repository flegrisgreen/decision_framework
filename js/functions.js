document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function loadDoc () {
      console.log(event)
      
    }
    // Unobtrusive event binding
    document.querySelector("#multi")
      .addEventListener("click", loadDoc);

    // document.querySelector("body")
    //   .addEventListener("mousemove",
    //     function (event) {
    //       if (event.shiftKey === true) {
    //         console.log("x: " + event.clientX);
    //         console.log("y: " + event.clientY);
    //       }
    //     }
    //   );

  }
);
//check: https://www.forevolve.com/en/articles/2016/08/12/how-to-add-jquery-intellisense-to-a-visual-studio-code-javascript-file/