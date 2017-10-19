"use strict";


function calculateTax(){
        /***********************************************************************************************  
        *   Purpose of the calculateTax method:  
        *   This method is executed when the 'Calculate Tax' button is clicked.  This method 
        *   gets the values the user enters into the textfield and dropdown menu using the 
        *   document.getElementById().value method, calculates the tax amount and tax rate (bracket)
        *   and displays the calculations in the HTML document using the getElementById() method.
        ***********************************************************************************************/
       
         var tax; //the tax calculated based on the filing status and income
         var taxRate; //the tax rate (bracket) based on the filing status and income
         
         //Retrieve the values the user enters and selects on the form
         var income = document.getElementById("incomeInput").value;
         var status = document.getElementById("filingStatus").value;

         var t10 = 0;
         var t15 = 0;
         var t25 = 0;
         var t28 = 0;
         var t33 = 0;
         var t35 = 0;

         //Calculate the tax amount and tax rate based on the filing status and income
         //0-Single, 1-Married Jointly, 2-Married Separately, and 3-Head of Household

        if (status == 0) { 
        // Compute tax for single filers
               t10 = 9275;
               t15 = 37650;
               t25 = 91150;
               t28 = 190150;
               t33 = 413350;
               t35 = 415050;
               tax = doTax(income, t10, t15, t25, t28, t33, t35);
               taxRate = doTaxRate(income, t10, t15, t25, t28, t33, t35);
        }//end of single filer calculation
          

          /*******************************************************************************
             * Task 1:  Compute the tax for users' who file as "Married Jointly".  Also,
             *          set (or initialize) the tax rate for each bracket.  Refer 
             *          to the above example (single filer) and the assignment description
             *          to write the correct equation for this filing status.
             * 
             * HINT:    If the "status" is equivalent to the value '1', the user is filing 
             *          as "Married filing jointly or qualifying widow(er)".  
             * 
             *                       INSERT YOUR CODE BELOW!
          *******************************************************************************/

         
         
        else if (status == 1) { 
             // Compute tax for married filing jointly
               t10 = 18550;
               t15 = 75300;
               t25 = 151900;
               t28 = 231450;
               t33 = 413350;
               t35 = 466950;
               tax = doTax(income, t10, t15, t25, t28, t33, t35);
               taxRate = doTaxRate(income, t10, t15, t25, t28, t33, t35);
        }//end of married filing separately

          /*******************************************************************************
            * Task 2:  Compute the tax for users' who file as "Married Separately".  Also,
            *          set (or initialize) the tax rate for each bracket. Refer 
            *          to the above example (single filer) and the assignment description
            *          to write the correct equation for this filing status.
            * 
            * HINT:    If the "status" is equivalent to the value '2', the user is filing 
            *          as "Married filing separately."
            * 
            *                       INSERT YOUR CODE BELOW!
          *******************************************************************************/


          else if(status == 2) {
             // Compute tax for married filing separately
            t10 = 9275;
            t15 = 37650;
            t25 = 75950;
            t28 = 115725;
            t33 = 206675;
            t35 = 233475;
            tax = doTax(income, t10, t15, t25, t28, t33, t35);
            taxRate = doTaxRate(income, t10, t15, t25, t28, t33, t35);
          }//end of married file separately calculation
        
        
          /*******************************************************************************
            * Task 3:  Compute the tax for users' who file as "Head of Household".  Also,
            *          set (or initialize) the tax rate for each bracket. Refer 
            *          to the above example (single filer) and the assignment description
            *          to write the correct equation for this filing status.
            * 
            * HINT:    If the "status" is equivalent to the value '3', the user is filing 
            *          as "Head of Household."
            * 
            *                       INSERT YOUR CODE BELOW!
          *******************************************************************************/


          else if(status == 3) {
             // Compute tax for head of household
               t10 = 13250;
               t15 = 50400;
               t25 = 130150;
               t28 = 210800;
               t33 = 413350;
               t35 = 441000;
               tax = doTax(income, t10, t15, t25, t28, t33, t35);
               taxRate = doTaxRate(income, t10, t15, t25, t28, t33, t35);
          }//end of head of household calculation       

          /***************************************************************************************
           * Explanation of Code:
           *                This section of the code displays the result for the taxes calculated
           *                and the tax bracket the user falls in based on their income.
           * 
           *                The document.getElementById() method is used to identify the place in
           *                the HTML document the calculation result and the tax bracket will be 
           *                placed.  It uses the specific ids (taxEstimate, taxBracket), which 
           *                were defined above.  The toFixed() method is used to ensure a specified 
           *                number of digits appear after the decimal place for the value.
           *
           *                The innerHTML property used with the document.getElementById() sets or
           *                returns the HTML content (inner HTML) of an element.
           * ************************************************************************************/
           
           
          document.getElementById("taxEstimate").innerHTML = "Tax:  <b>$" + tax.toFixed(2) + "<b></br><br>";
          
          document.getElementById("taxBracket").innerHTML = "Tax Bracket: <b>" + taxRate + "</b>%";
          
      
}//end of calculateTax function  
      

          
/***********************************************************************************************  
*   Purpose of the clearButton method:  
*   This method is executed when the 'Clear Calculator' button is clicked.  It removes the tax 
*   calculations and the values the user typed in the form.  It also resets the filing status 
*   back to 'Single' filing status.
***********************************************************************************************/             

         
          /*************************************************************************************************************
            * Task 4:  Add the additional code needed to remove the calculation results displayed in the HTML page.
            *          Use the code below and the code from Lesson 4 Assignment for guidance on how to 
            *          complete this section.  
            * 
            * Explanation of Code:  
            *          This section of the code removes the results from the HTML page when the 'Clear Calculator' button
            *          is clicked.  The getElementById() method is used to find the element on the HTML page with 
            *          the specified id and overwrite the existing values with the empty string or a set value.  
            *          This clears out the results.
          *************************************************************************************************************/  
             
function clearButton () {
              //This code removes the taxable income the user entered in the textfield.
              document.getElementById("incomeInput").value = "";
              
              //This code resets the dropdown box to the "Single" filer status.
              document.getElementById("filingStatus").selectedIndex = 0;
              
             //INSERT YOUR CODE BELOW
            document.getElementById("taxEstimate").innerHTML = "";
          
            document.getElementById("taxBracket").innerHTML = "";

}//end of clearButton function
    

function doTax(income, t10, t15, t25, t28, t33, t35) {
               var tax = 0.0;
               if (income <= t10){
                 tax = income * 0.10;
               }
               else if (income <= t15) {
                 tax = t10 * 0.10 + (income - t10) * 0.15;
               }
               else if (income <= t25) {
                 tax = t10 * 0.10 + (t15 - t10) * 0.15 + (income - t15) * 0.25;
               } 
               else if (income <= t28) {
                 tax = t10 * 0.10 + (t15 - t10) * 0.15 +
                       (t25 - t15) * 0.25 + (income - t25) * 0.28;
               }
               else if (income <= t33) {
                 tax = t10 * 0.10 + (t15 - t10) * 0.15 +
                       (t25 - t15) * 0.25 + (t28 - t25) * 0.28 +
                       (income - t28) * 0.33;
               }
               else if (income <= t35) {
                  tax = t10 * 0.10 + (t15 - t10) * 0.15 +
                        (t25 - t15) * 0.25 + (t28 - t25) * 0.28 +
                        (t33 - t28) * 0.33 + (income - t33) * 0.35;
               }
               else {
                  tax = t10 * 0.10 + (t15 - t10) * 0.15 +
                        (t25 - t15) * 0.25 + (t28 - t25) * 0.28 +
                        (t33 - t28) * 0.33 + (t35 - t33) * 0.35 + (income - t35) * .396;
               }
               return tax;
} //end of doTax function

function doTaxRate(income, t10, t15, t25, t28, t33, t35) {
               var taxRate = 0.0;
               if (income <= t10){
                 taxRate = 10;
               }
               else if (income <= t15) {
                 taxRate = 15;
               }
               else if (income <= t25) {
                 taxRate = 25;
               }
               else if (income <= t28) {
                 taxRate = 28;
               }
               else if (income <= t33) {
                 taxRate = 33;
               }
               else if (income <= t35) {
                  taxRate = 35;
               }
               else {
                  taxRate = 39.6;
               }
               return taxRate;
} //end of doTaxRate function 
