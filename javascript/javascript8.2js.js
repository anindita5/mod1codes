
	var prodArr=[["Television","Laptop","Phone"],["Soap","Powder"]];
function populateProduct()
{
	var category = frm1.category.value;
	var categoryIdx = frm1.category.selectedIndex;
	var Product = frm1.product;
	//alert(prodArr[categoryIdx-1].length);
	Product.innerText="";
	var productOption1 = new Option();
	productOption1.text="---------";
	Product.options[0]=productOption1;
	for(i=0;i<prodArr[categoryIdx-1].length;i++)
	{
		var productOption = new Option();
		productOption.text = prodArr[categoryIdx-1][i];    //getting inner text 
		Product.options[i+1]=productOption;
	}
}
function calculateTotalprice()
{
	var quantity = frm1.qty.value;
	var Product = frm1.product.value;
	
	
	if(prodArr[0][0]==Product)
	{
		 var totalprice = quantity * 20000; 
		 //alert(+totalprice);
	}
	else if(prodArr[0][1] == Product)
	{
		 var totalprice = quantity * 30000;		
		 //alert(+totalprice);
	}
	else if(prodArr[0][2] == Product)
	{
		 var totalprice = quantity * 10000;		
	}
	else if(prodArr[1][0] == Product)
	{
		 var totalprice = quantity * 40;		
	}
	else if(prodArr[1][1] == Product)
	{
		 var totalprice = quantity * 90;		
	}
	frm1.price.value = totalprice;
	//alert("The total price is "+totalprice);
	
}
