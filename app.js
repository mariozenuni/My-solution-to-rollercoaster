let div = document.getElementById('rollercoaster');

let text="World"



  // Creating span element  
  
const nodeElement= function(text){


   for(let i=0; i<text.length; i++){

          if(div!=null){

                              var el =document.createElement('span') 

                         let appending = div.appendChild(el)  // Appending el as a div's children 
      
                    newText=document.createTextNode(text) // creating dynamic  text node 
         
               appending.appendChild(newText) // Appending dynamic text node to the span tag 

        let SpanCollection=document.getElementsByTagName('span')

    SpanCollection[i].innerText=appending.childNodes[0].data[i]; // adding to each dynamic text node letter   the span tag 


            }//end of if statement
  
  
       } //end of for loop
      

     
       
      
       return  text 

  }    // end of function 


nodeElement('Hello World')


//styling the first and the last letter 


  const Styling= function (StylingElement){


  let  spanElement = document.getElementsByTagName('span') 
     

  for(let i=0; i<spanElement.length ; i++){
  
  
  let lastIndexNumber=spanElement.length - 1

  let firstLetter=spanElement[0];

    firstLetter.style.fontSize="10px"
        
  let lastLetter =spanElement[lastIndexNumber];

      lastLetter.style.fontSize="10px"


      

    }

         return StylingElement
 }


 Styling() 

  
  


 //styling middle latters 

 
    let middle =function (middleLetter){



      let spanElement=document.getElementsByTagName('span') 

      let fixedPixel=spanElement[0].style.fontSize=5;

      let addingPixel=5
     
      let result = fixedPixel+addingPixel

      let fontS=result.toString()+'px'

      let arr=[];


      for(let i=1;i<spanElement.length -7; i++){

        if(spanElement!=null){

        fixedPixel=spanElement[i].style.fontSize;
    
        result+=addingPixel

        fontS=result.toString()+'px';
  
       arr.push(spanElement[i].style.fontSize=fontS)
           console.log(arr)


       if(spanElement[4]){spanElement[4].style.fontSize="40px"}

       if(spanElement[6]){spanElement[6].style.fontSize="40px"}

       if(spanElement[7]){spanElement[7].style.fontSize="35px"}
       if(spanElement[8]){spanElement[8].style.fontSize="25px"}
       if(spanElement[9]){spanElement[9].style.fontSize="10px"}

  

       //


        
      }


         

      





                          

            }
  

              

             
     
               return middleLetter
     

            }
 
    middle();



     
      
//given a indiex we need to add a fixed index 
//then the letter on the left need to decreas -10               



  



