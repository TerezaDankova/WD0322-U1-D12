      
      /* EXERCISE 1
       Write a function for changing the title of the document in something else.
      */


       const changeTitle = function (newTitle) {    
        let myTitle = document.querySelectorAll('h1')
        myTitle[0].innerHTML = 'Something new'
        };
        
        changeTitle()

      /* EXERCISE 2
       Write a function for changing the class of the title of the page in "myHeading".
      */

      const addClassToTitle = function () {  
        let newClass = document.getElementsByTagName('h1')
        newClass[0].setAttribute('class', 'myHeading')
        };
     
        addClassToTitle()
      
      /* EXERCISE 3
       Write a function for changing the text of only the p which are children of a div.
      */

      const changePcontent = function () {
        let myP = document.querySelectorAll('div p')
        myP[0].innerText = 'content changed'
        console.log('shoooow myp', myP);
        };

        changePcontent()

      /* EXERCISE 4
       Write a function for changing the href property of every link to https://www.google.com
      */

      const changeUrls = function () {
        let myUrl = document.getElementsByTagName('a')
        for(let i = 0; i < myUrl.length; i++){
        myUrl[i].href = 'https://www.google.com'
        };
      
        changeUrls()
  
    
      /* EXERCISE 5
       Write a function for adding a new list item in the second unordered list.
      */

      const addToTheSecond = function () {
        let newLi = document.createElement('li')
        newLi.innerText = 'Im new here'
        let parent = document.getElementById('secondList')
        parent.appendChild(newLi)
        
        };

        addToTheSecond()
  
      /* EXERCISE 6
       Write a function for adding a second paragraph to the first div.
      */

      const addParagraph = function (content) {
        let newP = document.createElement('p')
        newP.innerHTML = content
        let parent = document.querySelectorAll('div')
        parent[0].appendChild(newP)
        };
     
        addParagraph('')

      /* EXERCISE 7
       Write a function for making the first unordered list disappear.
      */

      const firstUlDisappear = function () {
        let x = document.getElementById("firstList");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        }; 
        
        firstUlDisappear()

      /* EXERCISE 8
       Write a function for making the background of every unordered list green.
      */

      const paintItGreen = function () {
        let greenAll = document.querySelectorAll('ul')
        greenAll.style.backgroundColor = 'green'
        };
      
        paintItGreen()
  
      /* EXERCISE 9
       Make the heading of the page change color every time the user clicks on it.
      */

      const makeItClickable = function () {
        const myColors = ['red', 'purple', '#E84751', 'blue', 'orange', '#323643'];
        let cnt = 0;
        document.querySelector('h1').addEventListener('click') 
        if (cnt >= myColors.length, cnt++) {
            cnt = 0; 
            this.style.color = myColors[cnt];
          }
        };
      
        makeItClickable()
      };
      