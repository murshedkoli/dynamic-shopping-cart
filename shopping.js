
      document.getElementById("plusBtn").addEventListener("click", function(){
        pluses("firstValue","iphonePrice", 1219 );
        sumPrice ()

     });

     document.getElementById("minusBtn").addEventListener("click", function(){
        minuses("firstValue", "iphonePrice", 1219);
        sumPrice ()
     });


     document.getElementById("plusBtn2").addEventListener("click", function(){
        pluses("secondValue" ,"casePrice", 59);
        sumPrice ()
     });

     document.getElementById("minusBtn2").addEventListener("click", function(){
        minuses("secondValue", "casePrice", 59);
        sumPrice ()
     });

     


     function pluses(id, name, price){
        const previousValue = parseFloat(document.getElementById(id).value);
        const totalValue = previousValue + 1;
        document.getElementById(id).value = totalValue;

        const iPhonePrice = price;
        const totalPrice = totalValue * iPhonePrice;
        document.getElementById(name).innerText = totalPrice;

     }

     function minuses(id,name, price){
        const previousValue = parseFloat(document.getElementById(id).value);
        const totalValue = previousValue - 1;
        document.getElementById(id).value = totalValue;

        const iPhonePrice = price;
        const totalPrice = totalValue * iPhonePrice;
        document.getElementById(name).innerText = totalPrice;

        if (totalValue < 1){
           document.getElementById(id).value = "1";
           document.getElementById(name).innerText = price;

       }


     }


     function sumPrice (){
        const casePrice = parseFloat(document.getElementById("casePrice").innerText);
        const iPhonePrice = parseFloat(document.getElementById("iphonePrice").innerText);

        const totalSum = casePrice + iPhonePrice;
        document.getElementById("iPhoneAndCasePrice").innerText = totalSum;

        const taxRate = parseFloat(document.getElementById("taxPersent").innerText);
        const tax = totalSum / 100 * taxRate;
        const totalWithTax = totalSum + tax;

        document.getElementById("totalSum").innerText = totalWithTax;


     }
