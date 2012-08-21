/*
 * 国家-国家编号联动
 * 陶峰
 * 2008-10-15
 */
  
 function Country(country,code,countryName){
 	this.country = country;
 	this.code = code;
 	this.countryName = countryName;
 }
 function Countries(){
 	this.countryArray = new Array();
 }
 Countries.prototype.addCountry = function(Country){
	this.countryArray = this.countryArray.concat(Country)
 }
 Countries.prototype.getCountryCode = function(name){
 	var tmp;
	for (var i = 0; i < this.countryArray.length; i++) {
		if(this.countryArray[i].country == name){
			tmp = this.countryArray[i].code;
		}
	}
	return tmp;
 }
 
 CountryCode = {
 
	countries : new Countries(),
	
 	initData : function(){
 		var c;
 		c = new Country("AF","93","Afghanistan");CountryCode.countries.addCountry(c);
		c = new Country("AL","355","Albania");CountryCode.countries.addCountry(c);

		c = new Country("DZ","213","Algeria");CountryCode.countries.addCountry(c);
		c = new Country("AS","684","American Samoa");CountryCode.countries.addCountry(c);
		c = new Country("AD","376","Andorra");CountryCode.countries.addCountry(c);
		c = new Country("AO","244","Angola");CountryCode.countries.addCountry(c);
		c = new Country("AI","1264","Anguilla");CountryCode.countries.addCountry(c);
		c = new Country("AQ","672","Antarctica");CountryCode.countries.addCountry(c);
		
		c = new Country("AG","1268","Antigua and Barbuda");CountryCode.countries.addCountry(c);
		c = new Country("AR","54","Argentina");CountryCode.countries.addCountry(c);
		c = new Country("AM","374","Armenia");CountryCode.countries.addCountry(c);
		c = new Country("AW","297","Aruba");CountryCode.countries.addCountry(c);
		c = new Country("AU","61","Australia");CountryCode.countries.addCountry(c);
		c = new Country("AT","43","Austria");CountryCode.countries.addCountry(c);
		
		c = new Country("AZ","994","Azerbaijan");CountryCode.countries.addCountry(c);
		c = new Country("BS","1242","Bahamas");CountryCode.countries.addCountry(c);
		c = new Country("BH","973","Bahrain");CountryCode.countries.addCountry(c);
		c = new Country("BD","880","Bangladesh");CountryCode.countries.addCountry(c);
		c = new Country("BB","1246","Barbados");CountryCode.countries.addCountry(c);
		c = new Country("BY","375","Belarus");CountryCode.countries.addCountry(c);
		
		c = new Country("BE","32","Belgium");CountryCode.countries.addCountry(c);
		c = new Country("BZ","501","Belize");CountryCode.countries.addCountry(c);
		c = new Country("BJ","229","Benin");CountryCode.countries.addCountry(c);
		c = new Country("BM","1441","Bermuda");CountryCode.countries.addCountry(c);
		c = new Country("BT","975","Bhutan");CountryCode.countries.addCountry(c);
		c = new Country("BO","591","Bolivia");CountryCode.countries.addCountry(c);
		
		c = new Country("BA","387","Bosnia and Herzegovina");CountryCode.countries.addCountry(c);
		c = new Country("BW","267","Botswana");CountryCode.countries.addCountry(c);
		c = new Country("BV","","Bouvet Island");CountryCode.countries.addCountry(c);
		c = new Country("BR","55","Brazil");CountryCode.countries.addCountry(c);
		c = new Country("IO","1284","British Indian Ocean Territory");CountryCode.countries.addCountry(c);
		c = new Country("BN","673","Brunei Darussalam");CountryCode.countries.addCountry(c);
		
		c = new Country("BG","359","Bulgaria");CountryCode.countries.addCountry(c);
		c = new Country("BF","226","Burkina Faso");CountryCode.countries.addCountry(c);
		c = new Country("BI","257","Burundi");CountryCode.countries.addCountry(c);
		c = new Country("KH","855","Cambodia");CountryCode.countries.addCountry(c);
		c = new Country("CM","237","Cameroon");CountryCode.countries.addCountry(c);
		c = new Country("CA","1","Canada");CountryCode.countries.addCountry(c);
		
		c = new Country("CV","238","Cape Verde");CountryCode.countries.addCountry(c);
		c = new Country("KY","1345","Cayman Islands");CountryCode.countries.addCountry(c);
		c = new Country("CF","236","Central African Republic");CountryCode.countries.addCountry(c);
		c = new Country("TD","235","Chad");CountryCode.countries.addCountry(c);
		c = new Country("CL","56","Chile");CountryCode.countries.addCountry(c);
		c = new Country("CN","86","selected China");CountryCode.countries.addCountry(c);
		
		c = new Country("CX","61","Christmas Island");CountryCode.countries.addCountry(c);
		c = new Country("CC","61","Cocos (Keeling) Islands");CountryCode.countries.addCountry(c);
		c = new Country("CO","57","Colombia");CountryCode.countries.addCountry(c);
		c = new Country("KM","269","Comoros");CountryCode.countries.addCountry(c);
		c = new Country("CG","242","Congo");CountryCode.countries.addCountry(c);
		c = new Country("ZR","243","Congo, The Democratic Republic Of The");CountryCode.countries.addCountry(c);
		
		c = new Country("CK","682","Cook Islands");CountryCode.countries.addCountry(c);
		c = new Country("CR","506","Costa Rica");CountryCode.countries.addCountry(c);
		c = new Country("CI","225","Cote D'Ivoire");CountryCode.countries.addCountry(c);
		c = new Country("HR","385","Croatia (local name: Hrvatska)");CountryCode.countries.addCountry(c);
		c = new Country("CU","53","Cuba");CountryCode.countries.addCountry(c);
		c = new Country("CY","357","Cyprus");CountryCode.countries.addCountry(c);
		
		c = new Country("CZ","420","Czech Republic");CountryCode.countries.addCountry(c);
		c = new Country("DK","45","Denmark");CountryCode.countries.addCountry(c);
		c = new Country("DJ","253","Djibouti");CountryCode.countries.addCountry(c);
		c = new Country("DM","1767","Dominica");CountryCode.countries.addCountry(c);
		c = new Country("DO","1809","Dominican Republic");CountryCode.countries.addCountry(c);
		c = new Country("TP","670","East Timor");CountryCode.countries.addCountry(c);
		
		c = new Country("EC","593","Ecuador");CountryCode.countries.addCountry(c);
		c = new Country("EG","20","Egypt");CountryCode.countries.addCountry(c);
		c = new Country("SV","503","El Salvador");CountryCode.countries.addCountry(c);
		c = new Country("GQ","240","Equatorial Guinea");CountryCode.countries.addCountry(c);
		c = new Country("ER","291","Eritrea");CountryCode.countries.addCountry(c);
		c = new Country("EE","372","Estonia");CountryCode.countries.addCountry(c);
		
		c = new Country("ET","251","Ethiopia");CountryCode.countries.addCountry(c);
		c = new Country("FK","500","Falkland Islands (Malvinas)");CountryCode.countries.addCountry(c);
		c = new Country("FO","298","Faroe Islands");CountryCode.countries.addCountry(c);
		c = new Country("FJ","679","Fiji");CountryCode.countries.addCountry(c);
		c = new Country("FI","358","Finland");CountryCode.countries.addCountry(c);
		c = new Country("FR","33","France");CountryCode.countries.addCountry(c);
		
		c = new Country("FX","33","France Metropolitan");CountryCode.countries.addCountry(c);
		c = new Country("GF","594","French Guiana");CountryCode.countries.addCountry(c);
		c = new Country("PF","689","French Polynesia");CountryCode.countries.addCountry(c);
		c = new Country("TF","","French Southern Territories");CountryCode.countries.addCountry(c);
		c = new Country("GA","241","Gabon");CountryCode.countries.addCountry(c);
		c = new Country("GM","220","Gambia");CountryCode.countries.addCountry(c);
		
		c = new Country("GE","995","Georgia");CountryCode.countries.addCountry(c);
		c = new Country("DE","49","Germany");CountryCode.countries.addCountry(c);
		c = new Country("GH","233","Ghana");CountryCode.countries.addCountry(c);
		c = new Country("GI","350","Gibraltar");CountryCode.countries.addCountry(c);
		c = new Country("GR","30","Greece");CountryCode.countries.addCountry(c);
		c = new Country("GL","299","Greenland");CountryCode.countries.addCountry(c);
		
		c = new Country("GD","1473","Grenada");CountryCode.countries.addCountry(c);
		c = new Country("GP","590","Guadeloupe");CountryCode.countries.addCountry(c);
		c = new Country("GU","1671","Guam");CountryCode.countries.addCountry(c);
		c = new Country("GT","502","Guatemala");CountryCode.countries.addCountry(c);
		c = new Country("GN","224","Guinea");CountryCode.countries.addCountry(c);
		c = new Country("GW","245","Guinea-Bissau");CountryCode.countries.addCountry(c);
		
		c = new Country("GY","592","Guyana");CountryCode.countries.addCountry(c);
		c = new Country("HT","509","Haiti");CountryCode.countries.addCountry(c);
		c = new Country("HM","","Heard and Mc Donald Islands");CountryCode.countries.addCountry(c);
		c = new Country("HN","504","Honduras");CountryCode.countries.addCountry(c);
		c = new Country("HK","852","Hong Kong");CountryCode.countries.addCountry(c);
		c = new Country("HU","36","Hungary");CountryCode.countries.addCountry(c);
		
		c = new Country("IS","354","Iceland");CountryCode.countries.addCountry(c);
		c = new Country("IN","91","India");CountryCode.countries.addCountry(c);
		c = new Country("ID","62","Indonesia");CountryCode.countries.addCountry(c);
		c = new Country("IR","98","Iran (Islamic Republic of)");CountryCode.countries.addCountry(c);
		c = new Country("IQ","964","Iraq");CountryCode.countries.addCountry(c);
		c = new Country("IE","353","Ireland");CountryCode.countries.addCountry(c);
		
		c = new Country("IL","972","Israel");CountryCode.countries.addCountry(c);
		c = new Country("IT","39","Italy");CountryCode.countries.addCountry(c);
		c = new Country("JM","1876","Jamaica");CountryCode.countries.addCountry(c);
		c = new Country("JP","81","Japan");CountryCode.countries.addCountry(c);
		c = new Country("JO","962","Jordan");CountryCode.countries.addCountry(c);
		c = new Country("KZ","7","Kazakhstan");CountryCode.countries.addCountry(c);
		
		c = new Country("KE","254","Kenya");CountryCode.countries.addCountry(c);
		c = new Country("KI","686","Kiribati");CountryCode.countries.addCountry(c);
		c = new Country("KW","965","Kuwait");CountryCode.countries.addCountry(c);
		c = new Country("KG","996","Kyrgyzstan");CountryCode.countries.addCountry(c);
		c = new Country("LA","","Lao People's Democratic Republic");CountryCode.countries.addCountry(c);
		c = new Country("LV","371","Latvia");CountryCode.countries.addCountry(c);
		
		c = new Country("LB","961","Lebanon");CountryCode.countries.addCountry(c);
		c = new Country("LS","266","Lesotho");CountryCode.countries.addCountry(c);
		c = new Country("LR","231","Liberia");CountryCode.countries.addCountry(c);
		c = new Country("LY","218","Libyan Arab Jamahiriya");CountryCode.countries.addCountry(c);
		c = new Country("LI","423","Liechtenstein");CountryCode.countries.addCountry(c);
		c = new Country("LT","370","Lithuania");CountryCode.countries.addCountry(c);
		
		c = new Country("LU","352","Luxembourg");CountryCode.countries.addCountry(c);
		c = new Country("MO","853","Macau");CountryCode.countries.addCountry(c);
		c = new Country("MK","389","The former Yugoslav Republic of Macedonia");CountryCode.countries.addCountry(c);
		c = new Country("MG","261","Madagascar");CountryCode.countries.addCountry(c);
		c = new Country("MW","265","Malawi");CountryCode.countries.addCountry(c);
		c = new Country("MY","60","Malaysia");CountryCode.countries.addCountry(c);
		
		c = new Country("MV","960","Maldives");CountryCode.countries.addCountry(c);
		c = new Country("ML","223","Mali");CountryCode.countries.addCountry(c);
		c = new Country("MT","356","Malta");CountryCode.countries.addCountry(c);
		c = new Country("MH","692","Marshall Islands");CountryCode.countries.addCountry(c);
		c = new Country("MQ","596","Martinique");CountryCode.countries.addCountry(c);
		c = new Country("MR","222","Mauritania");CountryCode.countries.addCountry(c);
		
		c = new Country("MU","230","Mauritius");CountryCode.countries.addCountry(c);
		c = new Country("YT","269","Mayotte");CountryCode.countries.addCountry(c);
		c = new Country("MX","52","Mexico");CountryCode.countries.addCountry(c);
		c = new Country("FM","691","Micronesia");CountryCode.countries.addCountry(c);
		c = new Country("MD","373","Moldova");CountryCode.countries.addCountry(c);
		c = new Country("MC","377","Monaco");CountryCode.countries.addCountry(c);
		
		c = new Country("MN","976","Mongolia");CountryCode.countries.addCountry(c);
		c = new Country("MS","1664","Montserrat");CountryCode.countries.addCountry(c);
		c = new Country("MNE","382","Montenegro");CountryCode.countries.addCountry(c);
		c = new Country("MA","212","Morocco");CountryCode.countries.addCountry(c);
		c = new Country("MZ","258","Mozambique");CountryCode.countries.addCountry(c);
		c = new Country("MM","95","Myanmar");CountryCode.countries.addCountry(c);
		
		c = new Country("NA","264","Namibia");CountryCode.countries.addCountry(c);
		c = new Country("NR","674","Nauru");CountryCode.countries.addCountry(c);
		c = new Country("NP","977","Nepal");CountryCode.countries.addCountry(c);
		c = new Country("NL","31","Netherlands");CountryCode.countries.addCountry(c);
		c = new Country("AN","599","Netherlands Antilles");CountryCode.countries.addCountry(c);
		c = new Country("NC","687","New Caledonia");CountryCode.countries.addCountry(c);
		
		c = new Country("NZ","64","New Zealand");CountryCode.countries.addCountry(c);
		c = new Country("NI","505","Nicaragua");CountryCode.countries.addCountry(c);
		c = new Country("NE","227","Niger");CountryCode.countries.addCountry(c);
		c = new Country("NG","234","Nigeria");CountryCode.countries.addCountry(c);
		c = new Country("NU","683","Niue");CountryCode.countries.addCountry(c);
		c = new Country("NF","672","Norfolk Island");CountryCode.countries.addCountry(c);
		
		c = new Country("KP","850","North Korea");CountryCode.countries.addCountry(c);
		c = new Country("MP","1670","Northern Mariana Islands");CountryCode.countries.addCountry(c);
		c = new Country("NO","47","Norway");CountryCode.countries.addCountry(c);
		c = new Country("OM","968","Oman");CountryCode.countries.addCountry(c);
		c = new Country("PK","92","Pakistan");CountryCode.countries.addCountry(c);
		c = new Country("PW","680","Palau");CountryCode.countries.addCountry(c);
		
		c = new Country("PS","970","Palestine");CountryCode.countries.addCountry(c);
		c = new Country("PA","507","Panama");CountryCode.countries.addCountry(c);
		c = new Country("PG","675","Papua New Guinea");CountryCode.countries.addCountry(c);
		c = new Country("PY","595","Paraguay");CountryCode.countries.addCountry(c);
		c = new Country("PE","51","Peru");CountryCode.countries.addCountry(c);
		c = new Country("PH","63","Philippines");CountryCode.countries.addCountry(c);
		
		c = new Country("PN","872","Pitcairn");CountryCode.countries.addCountry(c);
		c = new Country("PL","48","Poland");CountryCode.countries.addCountry(c);
		c = new Country("PT","351","Portugal");CountryCode.countries.addCountry(c);
		c = new Country("PR","1787","Puerto Rico");CountryCode.countries.addCountry(c);
		c = new Country("QA","974","Qatar");CountryCode.countries.addCountry(c);
		c = new Country("RE","262","Reunion");CountryCode.countries.addCountry(c);
		
		c = new Country("RO","40","Romania");CountryCode.countries.addCountry(c);
		c = new Country("RU","7","Russian Federation");CountryCode.countries.addCountry(c);
		c = new Country("RW","250","Rwanda");CountryCode.countries.addCountry(c);
		c = new Country("KN","","Saint Kitts and Nevis");CountryCode.countries.addCountry(c);
		c = new Country("LC","","Saint Lucia");CountryCode.countries.addCountry(c);
		c = new Country("VC","","Saint Vincent and the Grenadines");CountryCode.countries.addCountry(c);
		
		c = new Country("WS","685","Samoa");CountryCode.countries.addCountry(c);
		c = new Country("SM","378","San Marino");CountryCode.countries.addCountry(c);
		c = new Country("ST","","Sao Tome and Principe");CountryCode.countries.addCountry(c);
		c = new Country("SA","966","Saudi Arabia");CountryCode.countries.addCountry(c);
		c = new Country("SN","221","Senegal");CountryCode.countries.addCountry(c);
		c = new Country("SRB","381","Serbia");CountryCode.countries.addCountry(c);
		
		c = new Country("SC","248","Seychelles");CountryCode.countries.addCountry(c);
		c = new Country("SL","232","Sierra Leone");CountryCode.countries.addCountry(c);
		c = new Country("SG","65","Singapore");CountryCode.countries.addCountry(c);
		c = new Country("SK","421","Slovakia (Slovak Republic)");CountryCode.countries.addCountry(c);
		c = new Country("SI","386","Slovenia");CountryCode.countries.addCountry(c);
		c = new Country("SB","677","Solomon Islands");CountryCode.countries.addCountry(c);
		
		c = new Country("SO","252","Somalia");CountryCode.countries.addCountry(c);
		c = new Country("ZA","27","South Africa");CountryCode.countries.addCountry(c);
		c = new Country("KR","82","South Korea");CountryCode.countries.addCountry(c);
		c = new Country("ES","34","Spain");CountryCode.countries.addCountry(c);
		c = new Country("LK","94","Sri Lanka");CountryCode.countries.addCountry(c);
		c = new Country("SH","290","St. Helena");CountryCode.countries.addCountry(c);
		
		c = new Country("PM","508","St. Pierre and Miquelon");CountryCode.countries.addCountry(c);
		c = new Country("SD","249","Sudan");CountryCode.countries.addCountry(c);
		c = new Country("SR","597","Suriname");CountryCode.countries.addCountry(c);
		c = new Country("SJ","","Svalbard and Jan Mayen Islands");CountryCode.countries.addCountry(c);
		c = new Country("SZ","268","Swaziland");CountryCode.countries.addCountry(c);
		c = new Country("SE","46","Sweden");CountryCode.countries.addCountry(c);
		
		c = new Country("CH","41","Switzerland");CountryCode.countries.addCountry(c);
		c = new Country("SY","963","Syrian Arab Republic");CountryCode.countries.addCountry(c);
		c = new Country("TW","886","Taiwan");CountryCode.countries.addCountry(c);
		c = new Country("TJ","992","Tajikistan");CountryCode.countries.addCountry(c);
		c = new Country("TZ","255","Tanzania");CountryCode.countries.addCountry(c);
		c = new Country("TH","66","Thailand");CountryCode.countries.addCountry(c);
		
		c = new Country("TG","228","Togo");CountryCode.countries.addCountry(c);
		c = new Country("TK","690","Tokelau");CountryCode.countries.addCountry(c);
		c = new Country("TO","676","Tonga");CountryCode.countries.addCountry(c);
		c = new Country("TT","1868","Trinidad and Tobago");CountryCode.countries.addCountry(c);
		c = new Country("TN","216","Tunisia");CountryCode.countries.addCountry(c);
		c = new Country("TR","90","Turkey");CountryCode.countries.addCountry(c);
		
		c = new Country("TM","993","Turkmenistan");CountryCode.countries.addCountry(c);
		c = new Country("TC","1649","Turks and Caicos Islands");CountryCode.countries.addCountry(c);
		c = new Country("TV","688","Tuvalu");CountryCode.countries.addCountry(c);
		c = new Country("UG","256","Uganda");CountryCode.countries.addCountry(c);
		c = new Country("UA","380","Ukraine");CountryCode.countries.addCountry(c);
		c = new Country("AE","971","United Arab Emirates");CountryCode.countries.addCountry(c);
		
		c = new Country("UK","44","United Kingdom");CountryCode.countries.addCountry(c);
		c = new Country("US","1","United States");CountryCode.countries.addCountry(c);
		c = new Country("UM","","United States Minor Outlying Islands");CountryCode.countries.addCountry(c);
		c = new Country("UY","598","Uruguay");CountryCode.countries.addCountry(c);
		c = new Country("UZ","998","Uzbekistan");CountryCode.countries.addCountry(c);
		c = new Country("VU","678","Vanuatu");CountryCode.countries.addCountry(c);
		
		c = new Country("VA","39","Vatican City State (Holy See)");CountryCode.countries.addCountry(c);
		c = new Country("VE","58","Venezuela");CountryCode.countries.addCountry(c);
		c = new Country("VN","84","Vietnam");CountryCode.countries.addCountry(c);
		c = new Country("VG","1284","Virgin Islands (British)");CountryCode.countries.addCountry(c);
		c = new Country("VI","1340","Virgin Islands (U.S.)");CountryCode.countries.addCountry(c);
		c = new Country("WF","681","Wallis And Futuna Islands");CountryCode.countries.addCountry(c);
		
		c = new Country("EH","685","Western Sahara");CountryCode.countries.addCountry(c);
		c = new Country("YE","967","Yemen");CountryCode.countries.addCountry(c);
		c = new Country("YU","381","Yugoslavia");CountryCode.countries.addCountry(c);
		c = new Country("ZM","260","Zambia");CountryCode.countries.addCountry(c);
		c = new Country("ZW","263","Zimbabwe");CountryCode.countries.addCountry(c);
 		
 	},
 	
 	onShow:function(countryOp){
		 var name = countryOp.getAttribute('value');
		if(arguments.length >= 4){
		 	for(var i=0;i<arguments[1].length;i++){
		 		$("#"+arguments[1][i]).show();
		 	};
	 	}
		 var code = CountryCode.countries.getCountryCode(name);
		 if(code != "" && code != null){
		 	if(arguments.length >=4){
		 		for(var i=0;i<arguments[3].length;i++){
		 			$("#"+arguments[3][i]).attr("value",code);
		 		}
		 	}
		 }else{
		 	if(arguments.length >=4){
		 		for(var i=0;i<arguments[3].length;i++){
		 			$("#"+arguments[3][i]).attr("value","");
		 		}
		 	}
		 }
 	},
 	
 	onChange:function(countryValue){
	 	if(arguments.length >= 4){
 		 	for(var i=0;i<arguments[1].length;i++){
 		 		$("#"+arguments[1][i]).show();
 		 	};
 		 	for(var i=0;i<arguments[2].length;i++){
 		 		$("#"+arguments[2][i]).attr("value","");
 		 	}
 		}
	 	code = CountryCode.countries.getCountryCode(countryValue);
	 	 if(code != " " && code != null){
	 		if(arguments.length >=4){
		 		for(var i=0;i<arguments[3].length;i++){
		 			$("#"+arguments[3][i]).attr("value",code);
		 		}
	 		}
	 	}else{
	 		if(arguments.length >=4){
		 		for(var i=0;i<arguments[3].length;i++){
		 			$("#"+arguments[3][i]).attr("value","");
		 		}
	 		}
	 	}
 	},
 	
 	regJoin3:function(name){
 		if(name != "CN"){
 			var code = CountryCode.countries.getCountryCode(name);
 			if(code != "" && code != null){
 		 		$("#tel1").attr("value",code);
 		 		$("#fax1").attr("value",code);
 		 	}else{
 		 		$("#tel1").attr("value"," ");
 		 		$("#fax1").attr("value"," ");
 		 	}
 		}
 	},
 	initB2B:function(){
 		 var countryOp = $("#fromCountry").get(0).options[$("#fromCountry").get(0).selectedIndex];
		 CountryCode.onShow(countryOp,["areacodetd","areacodetd1","areacodetd2"],["tel2","fax2"],["tel1","fax1"]);
		 $("#fromCountry").change(function(){
		 	var countryValue = this.value;
		 	CountryCode.onChange(countryValue,["areacodetd","areacodetd1","areacodetd2"],["tel2","fax2"],["tel1","fax1"]);
		 }); 
 	},
 	initIndie:function(){
 		 var countryOp = $("#country").get(0).options[$("#country").get(0).selectedIndex];
		 CountryCode.onShow(countryOp,["areacodetd","areacodetd1","areacodetd2"],["tel2","fax2"],["tel1","fax1"]);
		 $("#country").change(function(){
		 	var countryValue = this.value;
		 	CountryCode.onChange(countryValue,["areacodetd","areacodetd1","areacodetd2"],["tel2","fax2"],["tel1","fax1"]);
		 }); 
 	},
 	initSimpleJoin:function(){
 		 var countryOp = $("#country").get(0).options[$("#country").get(0).selectedIndex];
		 CountryCode.onShow(countryOp,["areacodetd","areacodetd1"],["tel2"],["tel1"]);
		 $("#country").change(function(){
		 	var countryValue = this.value;
		 	CountryCode.onChange(countryValue,["areacodetd","areacodetd1"],["tel2"],["tel1"]);
		 }); 
 	}
 }
 $(document).ready(function () {
	CountryCode.initData();
});
