$(document).ready(function(){
	$("#View-Result").click(function(){
		var semenster = $("#Result-Semester").val();
		var enrollmentNumber = $("#Result-Enrollment-number").val();
		
		if(semenster== ''){
			$("#semester-error").html("Please select the Year / Semester.").show();
			$('#semester-error').fadeOut(5000);
			$('#Result-Semester').focus();
			return false;
		}
		if(enrollmentNumber== ''){
			$("#semester-enrollment-number").html("Please enter your Register Number.").show();
			$('#semester-enrollment-number').fadeOut(5000);
			$('#Result-Enrollment-number').focus();
			return false;
		}
		if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2011BCOM001'){
			$("#box").load("results/sahana-dolly-j-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2011BCOM001'){
			$("#box").load("results/sahana-dolly-j-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2011BCOM001'){
			$("#box").load("results/sahana-dolly-j-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2013BCOM001'){
			$("#box").load("results/srinivas-c-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2013BCOM001'){
			$("#box").load("results/srinivas-c-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2013BCOM001'){
			$("#box").load("results/srinivas-c-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2014DX0058'){
			$("#box").load("results/prakasha-m-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2014DX0058'){
			$("#box").load("results/prakasha-m-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2014DX0058'){
			$("#box").load("results/prakasha-m-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016BCOM013'){
			$("#box").load("results/rajashekaramurthy-s-p-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016BCOM013'){
			$("#box").load("results/rajashekaramurthy-s-p-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2016BCOM013'){
			$("#box").load("results/rajashekaramurthy-s-p-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2005BCOM038'){
			$("#box").load("results/vasapari-shankaraiah-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2005BCOM038'){
			$("#box").load("results/vasapari-shankaraiah-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2005BCOM038'){
			$("#box").load("results/vasapari-shankaraiah-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2007BCOM012'){
			$("#box").load("results/anoop-anthony-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2007BCOM012'){
			$("#box").load("results/anoop-anthony-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2007BCOM012'){
			$("#box").load("results/anoop-anthony-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2008BCOM014'){
			$("#box").load("results/darshana-k-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2008BCOM014'){
			$("#box").load("results/darshana-k-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2008BCOM014'){
			$("#box").load("results/darshana-k-3.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2010BSC0010'){
			$("#box").load("results/ajay-v-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2010BSC0010'){
			$("#box").load("results/ajay-v-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2010BSC0010'){
			$("#box").load("results/ajay-v-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2007DET028'){
			$("#box").load("results/inish-john-barboza-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2007DET028'){
			$("#box").load("results/inish-john-barboza-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2007DET028'){
			$("#box").load("results/inish-john-barboza-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2007DET028'){
			$("#box").load("results/inish-john-barboza-4.html");			 
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2007DET028'){
			$("#box").load("results/inish-john-barboza-5.html");			 
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2007DET028'){
			$("#box").load("results/inish-john-barboza-6.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016BCA018'){
			$("#box").load("results/mackvin-menezes-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016BCA018'){
			$("#box").load("results/mackvin-menezes-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2016BCA018'){
			$("#box").load("results/mackvin-menezes-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2016BCA018'){
			$("#box").load("results/mackvin-menezes-4.html");			 
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2016BCA018'){
			$("#box").load("results/mackvin-menezes-5.html");			 
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2016BCA018'){
			$("#box").load("results/mackvin-menezes-6.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016DME039'){
			$("#box").load("results/rajiv-r-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016DME039'){
			$("#box").load("results/rajiv-r-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2016DME039'){
			$("#box").load("results/rajiv-r-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2016DME039'){
			$("#box").load("results/rajiv-r-4.html");			 
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2016DME039'){
			$("#box").load("results/rajiv-r-5.html");			 
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2016DME039'){
			$("#box").load("results/rajiv-r-6.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016DME049'){
			$("#box").load("results/vivekananda-m-r-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016DME049'){
			$("#box").load("results/vivekananda-m-r-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2016DME049'){
			$("#box").load("results/vivekananda-m-r-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2016DME049'){
			$("#box").load("results/vivekananda-m-r-4.html");			 
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2016DME049'){
			$("#box").load("results/vivekananda-m-r-5.html");			 
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2016DME049'){
			$("#box").load("results/vivekananda-m-r-6.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2008BBA042'){
			$("#box").load("results/abhilash-kotresh-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2008BBA042'){
			$("#box").load("results/abhilash-kotresh-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2008BBA042'){
			$("#box").load("results/abhilash-kotresh-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2008BBA042'){
			$("#box").load("results/abhilash-kotresh-4.html");			 
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2008BBA042'){
			$("#box").load("results/abhilash-kotresh-5.html");			 
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2008BBA042'){
			$("#box").load("results/abhilash-kotresh-6.html");			 
		}
		
		
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2013DME016'){
			$("#box").load("results/dileep-b-3.html");			 
			//alert("Result not found.");
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2013DME016'){
			$("#box").load("results/dileep-b-4.html");			 
			//alert("Result not found.");
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2013DME016'){
			$("#box").load("results/dileep-b-5.html");			 
			//alert("Result not found.");
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2013DME016'){
			$("#box").load("results/dileep-b-6.html");			 
			//alert("Result not found.");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2010BAG0048'){
			$("#box").load("results/gururaju-m-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2010BAG0048'){
			$("#box").load("results/gururaju-m-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2010BAG0048'){
			$("#box").load("results/gururaju-m-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016BTCS042'){
			$("#box").load("results/nisha-m-k-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016BTCS042'){
			$("#box").load("results/nisha-m-k-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2016BTCS042'){
			$("#box").load("results/nisha-m-k-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2016BTCS042'){
			$("#box").load("results/nisha-m-k-4.html");			 
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2016BTCS042'){
			$("#box").load("results/nisha-m-k-5.html");			 
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2016BTCS042'){
			$("#box").load("results/nisha-m-k-6.html");			 
		}
		else if(semenster== 'VII Sem' && enrollmentNumber== 'DU2016BTCS042'){
			$("#box").load("results/nisha-m-k-7.html");
		}
		else if(semenster== 'VIII Sem' && enrollmentNumber== 'DU2016BTCS042'){
			$("#box").load("results/nisha-m-k-8.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2015BTCS016'){
			$("#box").load("results/anoop-kumar-b-v-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2015BTCS016'){
			$("#box").load("results/anoop-kumar-b-v-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2015BTCS016'){
			$("#box").load("results/anoop-kumar-b-v-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2015BTCS016'){
			$("#box").load("results/anoop-kumar-b-v-4.html");			 
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2015BTCS016'){
			$("#box").load("results/anoop-kumar-b-v-5.html");			 
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2015BTCS016'){
			$("#box").load("results/anoop-kumar-b-v-6.html");			 
		}
		else if(semenster== 'VII Sem' && enrollmentNumber== 'DU2015BTCS016'){
			$("#box").load("results/anoop-kumar-b-v-7.html");			 
		}
		else if(semenster== 'VIII Sem' && enrollmentNumber== 'DU2015BTCS016'){
			$("#box").load("results/anoop-kumar-b-v-8.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2018MAEN014'){
			$("#box").load("results/pushpa-cinnabathini-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2018MAEN014'){
			$("#box").load("results/pushpa-cinnabathini-2.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016BCOM064'){
			$("#box").load("results/shireesha-n-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016BCOM064'){
			$("#box").load("results/shireesha-n-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2016BCOM064'){
			$("#box").load("results/shireesha-n-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2015BCOM034'){
			$("#box").load("results/mary-saritha-l-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2015BCOM034'){
			$("#box").load("results/mary-saritha-l-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2015BCOM034'){
			$("#box").load("results/mary-saritha-l-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2012DME028'){
			$("#box").load("results/chandan-d-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2012DME028'){
			$("#box").load("results/chandan-d-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2012DME028'){
			$("#box").load("results/chandan-d-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2012DME028'){
			$("#box").load("results/chandan-d-4.html");			 
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2012DME028'){
			$("#box").load("results/chandan-d-5.html");			 
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2012DME028'){
			$("#box").load("results/chandan-d-6.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2004BAG015'){
			$("#box").load("results/avinash-kumar-vashnav-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2004BAG015'){
			$("#box").load("results/avinash-kumar-vashnav-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2004BAG015'){
			$("#box").load("results/avinash-kumar-vashnav-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2010BCOM046'){
			$("#box").load("results/hemanth-kumar-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2010BCOM046'){
			$("#box").load("results/hemanth-kumar-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2010BCOM046'){
			$("#box").load("results/hemanth-kumar-3.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016BTME039'){
			$("#box").load("results/btme-dileep-b-1.html");			 
			//alert("Result not found.");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016BTME039'){
			$("#box").load("results/btme-dileep-b-2.html");			 
			//alert("Result not found.");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2016BTME039'){
			$("#box").load("results/btme-dileep-b-3.html");			 
			//alert("Result not found.");
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2016BTME039'){
			$("#box").load("results/btme-dileep-b-4.html");			 
			//alert("Result not found.");
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2016BTME039'){
			$("#box").load("results/btme-dileep-b-5.html");			 
			//alert("Result not found.");
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2016BTME039'){
			$("#box").load("results/btme-dileep-b-6.html");			 
			//alert("Result not found.");
		}
		else if(semenster== 'VII Sem' && enrollmentNumber== 'DU2016BTME039'){
			//$("#box").load("results/btme-dileep-b-7.html");
			alert("Result not found.");
		}
		else if(semenster== 'VIII Sem' && enrollmentNumber== 'DU2016BTME039'){
			//$("#box").load("results/btme-dileep-b-8.html");
			alert("Result not found.");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2011BCOM063'){
			$("#box").load("results/ranganatha-d-bcom-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2011BCOM063'){
			$("#box").load("results/ranganatha-d-bcom-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2011BCOM063'){
			$("#box").load("results/ranganatha-d-bcom-3.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016BCA009'){
			$("#box").load("results/ajay-kumar-bca-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016BCA009'){
			$("#box").load("results/ajay-kumar-bca-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2016BCA009'){
			$("#box").load("results/ajay-kumar-bca-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2016BCA009'){
			$("#box").load("results/ajay-kumar-bca-4.html");			 
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2016BCA009'){
			$("#box").load("results/ajay-kumar-bca-5.html");			 
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2016BCA009'){
			$("#box").load("results/ajay-kumar-bca-6.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2014MTSE053'){
			$("#box").load("results/ramesha-m-v-mtech-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2014MTSE053'){
			$("#box").load("results/ramesha-m-v-mtech-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2014MTSE053'){
			$("#box").load("results/ramesha-m-v-mtech-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2014MTSE053'){
			$("#box").load("results/ramesha-m-v-mtech-4.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2007BCOM103'){
			$("#box").load("results/ibrahim-sharieff-bcom-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2007BCOM103'){
			$("#box").load("results/ibrahim-sharieff-bcom-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2007BCOM103'){
			$("#box").load("results/ibrahim-sharieff-bcom-3.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2003ANM0060'){
			$("#box").load("results/savitha-anm-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2003ANM0060'){
			$("#box").load("results/savitha-anm-2.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2014BSCN054'){
			$("#box").load("results/raghu-t-bscn-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2014BSCN054'){
			$("#box").load("results/raghu-t-bscn-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2014BSCN054'){
			$("#box").load("results/raghu-t-bscn-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2014BSCN054'){
			$("#box").load("results/raghu-t-bscn-4.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2017MCOM038'){
			$("#box").load("results/prasanna-d-r-mcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2017MCOM038'){
			$("#box").load("results/prasanna-d-r-mcom-2.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2010BCA059'){
			$("#box").load("results/shaik-parvez-ahmed-bca-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2010BCA059'){
			$("#box").load("results/shaik-parvez-ahmed-bca-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2010BCA059'){
			$("#box").load("results/shaik-parvez-ahmed-bca-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2010BCA059'){
			$("#box").load("results/shaik-parvez-ahmed-bca-4.html");			 
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2010BCA059'){
			$("#box").load("results/shaik-parvez-ahmed-bca-5.html");			 
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2010BCA059'){
			$("#box").load("results/shaik-parvez-ahmed-bca-6.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2012BCOM029'){
			$("#box").load("results/praveen-kumar-n-r-bcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2012BCOM029'){
			$("#box").load("results/praveen-kumar-n-r-bcom-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2012BCOM029'){
			$("#box").load("results/praveen-kumar-n-r-bcom-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2012BAG035'){
			$("#box").load("results/mohammed-sageer-a-s-bag-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2012BAG035'){
			$("#box").load("results/mohammed-sageer-a-s-bag-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2012BAG035'){
			$("#box").load("results/mohammed-sageer-a-s-bag-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2010BCOM052'){
			$("#box").load("results/ratnakumari-devalla-bcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2010BCOM052'){
			$("#box").load("results/ratnakumari-devalla-bcom-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2010BCOM052'){
			$("#box").load("results/ratnakumari-devalla-bcom-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2018BLB028'){
			$("#box").load("results/ratnakumari-devalla-blib-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2018BLB028'){
			$("#box").load("results/ratnakumari-devalla-blib-2.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2015BCOM041'){
			$("#box").load("results/harry-nehal-bcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2015BCOM041'){
			$("#box").load("results/harry-nehal-bcom-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2015BCOM041'){
			$("#box").load("results/harry-nehal-bcom-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2014DEE052'){
			$("#box").load("results/rithin-kumar-rai-n-dee-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2014DEE052'){
			$("#box").load("results/rithin-kumar-rai-n-dee-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2014DEE052'){
			$("#box").load("results/rithin-kumar-rai-n-dee-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2014DEE052'){
			$("#box").load("results/rithin-kumar-rai-n-dee-4.html");			 
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2014DEE052'){
			$("#box").load("results/rithin-kumar-rai-n-dee-5.html");			 
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2014DEE052'){
			$("#box").load("results/rithin-kumar-rai-n-dee-6.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2014DME064'){
			$("#box").load("results/saish-shindolkar-dme-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2014DME064'){
			$("#box").load("results/saish-shindolkar-dme-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2014DME064'){
			$("#box").load("results/saish-shindolkar-dme-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2014DME064'){
			$("#box").load("results/saish-shindolkar-dme-4.html");			 
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2014DME064'){
			$("#box").load("results/saish-shindolkar-dme-5.html");			 
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2014DME064'){
			$("#box").load("results/saish-shindolkar-dme-6.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2017BED051'){
			$("#box").load("results/sudheendra-s-bed-eng-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2017BED051'){
			$("#box").load("results/sudheendra-s-bed-eng-2.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2015BCOM073'){
			$("#box").load("results/vageeshkumar-t-n-bcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2015BCOM073'){
			$("#box").load("results/vageeshkumar-t-n-bcom-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2015BCOM073'){
			$("#box").load("results/vageeshkumar-t-n-bcom-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2013BCOM040'){
			$("#box").load("results/nagaraj-kandagal-bcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2013BCOM040'){
			$("#box").load("results/nagaraj-kandagal-bcom-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2013BCOM040'){
			$("#box").load("results/nagaraj-kandagal-bcom-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016BCOM072'){
			$("#box").load("results/venkatesh-ballary-bcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016BCOM072'){
			$("#box").load("results/venkatesh-ballary-bcom-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2016BCOM072'){
			$("#box").load("results/venkatesh-ballary-bcom-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2010BCOM037'){
			$("#box").load("results/santhosha-g-bcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2010BCOM037'){
			$("#box").load("results/santhosha-g-bcom-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2010BCOM037'){
			$("#box").load("results/santhosha-g-bcom-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016BSC063'){
			$("#box").load("results/seenappa-palani-bsc-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016BSC063'){
			$("#box").load("results/seenappa-palani-bsc-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2016BSC063'){
			$("#box").load("results/seenappa-palani-bsc-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2008BSA038'){
			$("#box").load("results/pavan-m-l-bsa-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2008BSA038'){
			$("#box").load("results/pavan-m-l-bsa-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2008BSA038'){
			$("#box").load("results/pavan-m-l-bsa-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2008BSA038'){
			$("#box").load("results/pavan-m-l-bsa-4.html");			 
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2008BSA038'){
			$("#box").load("results/pavan-m-l-bsa-5.html");			 
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2008BSA038'){
			$("#box").load("results/pavan-m-l-bsa-6.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2014BCOM033'){
			$("#box").load("results/pruthvi-m-n-bcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2014BCOM033'){
			$("#box").load("results/pruthvi-m-n-bcom-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2014BCOM033'){
			$("#box").load("results/pruthvi-m-n-bcom-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2009ITIE59'){
			$("#box").load("results/vishwa-b-r-itie-1.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2011BCOM049'){
			$("#box").load("results/pradeep-c-bcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2011BCOM049'){
			$("#box").load("results/pradeep-c-bcom-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2011BCOM049'){
			$("#box").load("results/pradeep-c-bcom-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2017BCOM028'){
			$("#box").load("results/e-nikhil-reddy-bcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2017BCOM028'){
			$("#box").load("results/e-nikhil-reddy-bcom-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2017BCOM028'){
	        $("#box").load("results/e-nikhil-reddy-bcom-3.html");	
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016DMLT18'){
			$("#box").load("results/anupama-p-r-dmlt-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016DMLT18'){
			$("#box").load("results/anupama-p-r-dmlt-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2016DMLT18'){
			$("#box").load("results/anupama-p-r-dmlt-3.html");	
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2008BCOM043'){
			$("#box").load("results/lokesha-b-c-bcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2008BCOM043'){
			$("#box").load("results/lokesha-b-c-bcom-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2008BCOM043'){
			$("#box").load("results/lokesha-b-c-bcom-3.html");	
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2015BTEC081'){
			//$("#box").load("results/santhosha-d-r-btech-ec-(le)-1.html");			 
			alert("Result not found.");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2015BTEC081'){
			//$("#box").load("results/santhosha-d-r-btech-ec-(le)-2.html");			 
			alert("Result not found.");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2015BTEC081'){
			$("#box").load("results/santhosha-d-r-btech-ec-(le)-3.html");
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2015BTEC081'){
			$("#box").load("results/santhosha-d-r-btech-ec-(le)-4.html");
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2015BTEC081'){
			$("#box").load("results/santhosha-d-r-btech-ec-(le)-5.html");
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2015BTEC081'){
			$("#box").load("results/santhosha-d-r-btech-ec-(le)-6.html");
		}
		else if(semenster== 'VII Sem' && enrollmentNumber== 'DU2015BTEC081'){
			$("#box").load("results/santhosha-d-r-btech-ec-(le)-7.html");
		}
		else if(semenster== 'VIII Sem' && enrollmentNumber== 'DU2015BTEC081'){
			$("#box").load("results/santhosha-d-r-btech-ec-(le)-8.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016BTEC073'){
			//$("#box").load("results/sanjaya-d-p-btech-ec-(le)-1.html");			 
			alert("Result not found.");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016BTEC073'){
			//$("#box").load("results/sanjaya-d-p-btech-ec-(le)-2.html");			 
			alert("Result not found.");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2016BTEC073'){
			$("#box").load("results/sanjaya-d-p-btech-ec-(le)-3.html");
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2016BTEC073'){
			$("#box").load("results/sanjaya-d-p-btech-ec-(le)-4.html");
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2016BTEC073'){
			$("#box").load("results/sanjaya-d-p-btech-ec-(le)-5.html");
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2016BTEC073'){
			$("#box").load("results/sanjaya-d-p-btech-ec-(le)-6.html");
		}
		else if(semenster== 'VII Sem' && enrollmentNumber== 'DU2016BTEC073'){
			$("#box").load("results/sanjaya-d-p-btech-ec-(le)-7.html");
		}
		else if(semenster== 'VIII Sem' && enrollmentNumber== 'DU2016BTEC073'){
			$("#box").load("results/sanjaya-d-p-btech-ec-(le)-8.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2013BBA036'){
			$("#box").load("results/mohan-y-g-bba-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2013BBA036'){
			$("#box").load("results/mohan-y-g-bba-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2013BBA036'){
			$("#box").load("results/mohan-y-g-bba-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2013BBA036'){
			$("#box").load("results/mohan-y-g-bba-4.html");			 
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2013BBA036'){
			$("#box").load("results/mohan-y-g-bba-5.html");			 
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2013BBA036'){
			$("#box").load("results/mohan-y-g-bba-6.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2011BCOM042'){
			$("#box").load("results/naveenkumar-k-bcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2011BCOM042'){
			$("#box").load("results/naveenkumar-k-bcom-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2011BCOM042'){
			$("#box").load("results/naveenkumar-k-bcom-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2003MAEN041'){
			$("#box").load("results/pasala-matyas-maen-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2003MAEN041'){
			$("#box").load("results/pasala-matyas-maen-2.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2015DME048'){
			$("#box").load("results/madanu-pavan-teja-dme-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2015DME048'){
			$("#box").load("results/madanu-pavan-teja-dme-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2015DME048'){
			$("#box").load("results/madanu-pavan-teja-dme-3.html");			 
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2015DME048'){
			$("#box").load("results/madanu-pavan-teja-dme-4.html");			 
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2015DME048'){
			$("#box").load("results/madanu-pavan-teja-dme-5.html");			 
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2015DME048'){
			$("#box").load("results/madanu-pavan-teja-dme-6.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2015BAG083'){
			$("#box").load("results/tribhuvan-kumar-j-s-bag-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2015BAG083'){
			$("#box").load("results/tribhuvan-kumar-j-s-bag-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2015BAG083'){
			$("#box").load("results/tribhuvan-kumar-j-s-bag-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2004BSCS041'){
			$("#box").load("results/shekarayya-hiremath-bsc-cs-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2004BSCS041'){
			$("#box").load("results/shekarayya-hiremath-bsc-cs-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2004BSCS041'){
			$("#box").load("results/shekarayya-hiremath-bsc-cs-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2013BCOM063'){
			$("#box").load("results/suresha-a-s-bcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2013BCOM063'){
			$("#box").load("results/suresha-a-s-bcom-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2013BCOM063'){
			$("#box").load("results/suresha-a-s-bcom-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2009BCOM036'){
			$("#box").load("results/devaraju-g-bcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2009BCOM036'){
			$("#box").load("results/devaraju-g-bcom-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2009BCOM036'){
			$("#box").load("results/devaraju-g-bcom-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2008BCOM069'){
			$("#box").load("results/shivakumar-b-j-bcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2008BCOM069'){
			$("#box").load("results/shivakumar-b-j-bcom-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2008BCOM069'){
			$("#box").load("results/shivakumar-b-j-bcom-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2008BCOM058'){
			$("#box").load("results/manjunath-h-r-bcom-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2008BCOM058'){
			$("#box").load("results/manjunath-h-r-bcom-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2008BCOM058'){
			$("#box").load("results/manjunath-h-r-bcom-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2009BAG057'){
			$("#box").load("results/raju-b-k-bag-1.html");			 
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2009BAG057'){
			$("#box").load("results/raju-b-k-bag-2.html");			 
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2009BAG057'){
			$("#box").load("results/raju-b-k-bag-3.html");			 
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016BTEC043'){
			alert("Result not found.");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016BTEC043'){
			alert("Result not found.");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2016BTEC043'){
			$("#box").load("results/nishanth-m-j-btech-ec-(le)-3.html");
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2016BTEC043'){
			$("#box").load("results/nishanth-m-j-btech-ec-(le)-4.html");
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2016BTEC043'){
			$("#box").load("results/nishanth-m-j-btech-ec-(le)-5.html");
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2016BTEC043'){
			$("#box").load("results/nishanth-m-j-btech-ec-(le)-6.html");
		}
		else if(semenster== 'VII Sem' && enrollmentNumber== 'DU2016BTEC043'){
			$("#box").load("results/nishanth-m-j-btech-ec-(le)-7.html");
		}
		else if(semenster== 'VIII Sem' && enrollmentNumber== 'DU2016BTEC043'){
			$("#box").load("results/nishanth-m-j-btech-ec-(le)-8.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2010DME092'){
			alert("Result not found.");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2010DME092'){
			alert("Result not found.");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2010DME092'){
			$("#box").load("results/vinaykumar-n-dme-(le)-3.html");
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2010DME092'){
			$("#box").load("results/vinaykumar-n-dme-(le)-4.html");
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2010DME092'){
			$("#box").load("results/vinaykumar-n-dme-(le)-5.html");
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2010DME092'){
			$("#box").load("results/vinaykumar-n-dme-(le)-6.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2015BTME069'){
			$("#box").load("results/niranjan-v-btme-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2015BTME069'){
			$("#box").load("results/niranjan-v-btme-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2015BTME069'){
			$("#box").load("results/niranjan-v-btme-3.html");
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2015BTME069'){
			$("#box").load("results/niranjan-v-btme-4.html");
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2015BTME069'){
			$("#box").load("results/niranjan-v-btme-5.html");
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2015BTME069'){
			$("#box").load("results/niranjan-v-btme-6.html");
		}
		else if(semenster== 'VII Sem' && enrollmentNumber== 'DU2015BTME069'){
			$("#box").load("results/niranjan-v-btme-7.html");
		}
		else if(semenster== 'VIII Sem' && enrollmentNumber== 'DU2015BTME069'){
			$("#box").load("results/niranjan-v-btme-8.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2014BCOM063'){
			$("#box").load("results/nikhil-h-g-bcom-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2014BCOM063'){
			$("#box").load("results/nikhil-h-g-bcom-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2014BCOM063'){
			$("#box").load("results/nikhil-h-g-bcom-3.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2014BCOM092'){
			$("#box").load("results/uday-b-s-bcom-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2014BCOM092'){
			$("#box").load("results/uday-b-s-bcom-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2014BCOM092'){
			$("#box").load("results/uday-b-s-bcom-3.html");
		}		
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2017BBA083'){
			$("#box").load("results/shijantha-j-bba-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2017BBA083'){
			$("#box").load("results/shijantha-j-bba-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2017BBA083'){
			$("#box").load("results/shijantha-j-bba-3.html");
		}
		else if(semenster== 'IV Sem' && enrollmentNumber== 'DU2017BBA083'){
			$("#box").load("results/shijantha-j-bba-4.html");
		}
		else if(semenster== 'V Sem' && enrollmentNumber== 'DU2017BBA083'){
			$("#box").load("results/shijantha-j-bba-5.html");
		}
		else if(semenster== 'VI Sem' && enrollmentNumber== 'DU2017BBA083'){
			$("#box").load("results/shijantha-j-bba-6.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2007BCOM063'){
			$("#box").load("results/nagendra-n-bcom-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2007BCOM063'){
			$("#box").load("results/nagendra-n-bcom-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2007BCOM063'){
			$("#box").load("results/nagendra-n-bcom-3.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2013BCOM072'){
			$("#box").load("results/raghavendra-p-bcom-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2013BCOM072'){
			$("#box").load("results/raghavendra-p-bcom-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2013BCOM072'){
			$("#box").load("results/raghavendra-p-bcom-3.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2004BCOM016'){
			$("#box").load("results/ansar-pasha-m-bcom-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2004BCOM016'){
			$("#box").load("results/ansar-pasha-m-bcom-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2004BCOM016'){
			$("#box").load("results/ansar-pasha-m-bcom-3.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016BCOM073'){
			$("#box").load("results/raj-chougale-bcom-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016BCOM073'){
			$("#box").load("results/raj-chougale-bcom-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2016BCOM073'){
			$("#box").load("results/raj-chougale-bcom-3.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2014BCOM085'){
			$("#box").load("results/sunikumara-bcom-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2014BCOM085'){
			$("#box").load("results/sunikumara-bcom-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2014BCOM085'){
			$("#box").load("results/sunikumara-bcom-3.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016BCOM053'){
			$("#box").load("results/ganesha-k-bcom-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016BCOM053'){
			$("#box").load("results/ganesha-k-bcom-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2016BCOM053'){
			$("#box").load("results/ganesha-k-bcom-3.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016BCOM082'){
			$("#box").load("results/santhosh-s-lamani-bcom-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016BCOM082'){
			$("#box").load("results/santhosh-s-lamani-bcom-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2016BCOM082'){
			$("#box").load("results/santhosh-s-lamani-bcom-3.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2015BCOM038'){
			$("#box").load("results/deepukumar-b-s-bcom-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2015BCOM038'){
			$("#box").load("results/deepukumar-b-s-bcom-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2015BCOM038'){
			$("#box").load("results/deepukumar-b-s-bcom-3.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2015BCOM093'){
			$("#box").load("results/sudeep-h-m-bcom-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2015BCOM093'){
			$("#box").load("results/sudeep-h-m-bcom-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2015BCOM093'){
			$("#box").load("results/sudeep-h-m-bcom-3.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2009BCOM073'){
			$("#box").load("results/shivashankara-s-p-bcom-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2009BCOM073'){
			$("#box").load("results/shivashankara-s-p-bcom-2.html");
		}
		else if(semenster== 'III Sem / III Year' && enrollmentNumber== 'DU2009BCOM073'){
			$("#box").load("results/shivashankara-s-p-bcom-3.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2017MAPH049'){
			$("#box").load("results/pamishetty-dilip-kumar-baph-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2017MAPH049'){
			$("#box").load("results/pamishetty-dilip-kumar-baph-2.html");
		}
		
		
		else if(semenster== 'I Sem / I Year' && enrollmentNumber== 'DU2016DLB096'){
			$("#box").load("results/mohammed-yahiya-sheeraz-dlib-1.html");
		}
		else if(semenster== 'II Sem / II Year' && enrollmentNumber== 'DU2016DLB096'){
			$("#box").load("results/mohammed-yahiya-sheeraz-dlib-2.html");
		}
		
		
		
		else{
			alert("Result not found.");
		}
	});
	
	$("#back").click(function(){
		location.reload();
	});
	
	
	
	
	$("#instant-Verify").click(function(){
		alert();
	});
});