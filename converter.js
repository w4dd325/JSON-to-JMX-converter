var openFile = function(event) {
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function() {
    var text = reader.result;
    var json = JSON.parse(text);
    console.log(json);
    
    //document.getElementById("output").innerHTML = json.info.name + ", " + json.item[0].name;
		
		//count items in array
		let cnt = json.item[0].request.url.path.length;
		
		let ColName = json.info.name;
		let CallReqName = json.item[0].name;
		
		//The URL object can be used for parsing, constructing, normalizing, encoding URLs, and so on.
		var url = json.item[0].request.url.raw;
		
		var pm_prot = new URL(url).protocol;
		pm_prot = pm_prot.replace(':','');
		var pm_host = new URL(url).hostname;
		var pm_path = new URL(url).pathname;

		document.getElementById("output").innerHTML = 
		"&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;" + "<br>" +
		"&lt;jmeterTestPlan version=\"1.2\" properties=\"5.0\" jmeter=\"5.4.1\"&gt;" + "<br>" +
		//Add Test Plan XML
		"&lt;hashTree&gt;" + "<br>" +
		"&lt;TestPlan guiclass=\"TestPlanGui\" testclass=\"TestPlan\" testname=\"Test Plan\" enabled=\"true\"&gt;" + "<br>" +
		"&lt;stringProp name=\"TestPlan.comments\"&gt;&lt;/stringProp&gt;" + "<br>" +
		"&lt;boolProp name=\"TestPlan.functional_mode\"&gt;false&lt;/boolProp&gt;" + "<br>" +
		"&lt;boolProp name=\"TestPlan.tearDown_on_shutdown\"&gt;true&lt;/boolProp&gt;" + "<br>" +
		"&lt;boolProp name=\"TestPlan.serialize_threadgroups\"&gt;false&lt;/boolProp&gt;" + "<br>" +
		"&lt;elementProp name=\"TestPlan.user_defined_variables\" elementType=\"Arguments\" guiclass=\"ArgumentsPanel\" testclass=\"Arguments\" testname=\"User Defined Variables\" enabled=\"true\"&gt;" + "<br>" +
		"&lt;collectionProp name=\"Arguments.arguments\"/&gt;" + "<br>" +
		"&lt;/elementProp&gt;" + "<br>" +
		"&lt;stringProp name=\"TestPlan.user_define_classpath\"&gt;" + "<br>" +"&lt;/stringProp&gt;" + "<br>" +
		"&lt;/TestPlan&gt;" + "<br>" +
		//Add Thread Group XML
		"&lt;hashTree&gt;" + "<br>" +
		"&lt;ThreadGroup guiclass=\"ThreadGroupGui\" testclass=\"ThreadGroup\" testname=\"" + ColName + "\" enabled=\"true\"&gt;" + "<br>" +
		"&lt;stringProp name=\"ThreadGroup.on_sample_error\"&gt;continue&lt;/stringProp&gt;" + "<br>" +
		"&lt;elementProp name=\"ThreadGroup.main_controller\" elementType=\"LoopController\" guiclass=\"LoopControlPanel\" testclass=\"LoopController\" testname=\"Loop Controller\" enabled=\"true\"&gt;" + "<br>" +
		"&lt;boolProp name=\"LoopController.continue_forever\"&gt;false&lt;/boolProp&gt;" + "<br>" +
		"&lt;stringProp name=\"LoopController.loops\"&gt;1&lt;/stringProp&gt;" + "<br>" +
		"&lt;/elementProp&gt;" + "<br>" +
		"&lt;stringProp name=\"ThreadGroup.num_threads\"&gt;1&lt;/stringProp&gt;" + "<br>" +
		"&lt;stringProp name=\"ThreadGroup.ramp_time\"&gt;1&lt;/stringProp&gt;" + "<br>" +
		"&lt;boolProp name=\"ThreadGroup.scheduler\"&gt;false&lt;/boolProp&gt;" + "<br>" +
		"&lt;stringProp name=\"ThreadGroup.duration\"&gt;&lt;/stringProp&gt;" + "<br>" +
		"&lt;stringProp name=\"ThreadGroup.delay\"&gt;&lt;/stringProp&gt;" + "<br>" +
		"&lt;boolProp name=\"ThreadGroup.same_user_on_next_iteration\"&gt;true&lt;/boolProp&gt;" + "<br>" +
		"&lt;/ThreadGroup&gt;" + "<br>" +
		//Add Test Fragment Controller XML
		"&lt;hashTree&gt;" + "<br>" +
		"&lt;TestFragmentController guiclass=\"TestFragmentControllerGui\" testclass=\"TestFragmentController\" testname=\"" + CallReqName + "\" enabled=\"true\"/&gt;" + "<br>" +
		//Add HTTP Sampler XML
		"&lt;hashTree&gt;" + "<br>" +
		"&lt;HTTPSamplerProxy guiclass=\"HttpTestSampleGui\" testclass=\"HTTPSamplerProxy\" testname=\"" + CallReqName + "\" enabled=\"true\"&gt;" + "<br>" +
		"&lt;elementProp name=\"HTTPsampler.Arguments\" elementType=\"Arguments\" guiclass=\"HTTPArgumentsPanel\" testclass=\"Arguments\" testname=\"User Defined Variables\" enabled=\"true\"&gt;" + "<br>" +
		"&lt;collectionProp name=\"Arguments.arguments\"/&gt;" + "<br>" +
		"&lt;/elementProp&gt;" + "<br>" +
		"&lt;stringProp name=\"HTTPSampler.domain\"&gt;" + pm_host + "&lt;/stringProp&gt;" + "<br>" +
		"&lt;stringProp name=\"HTTPSampler.port\"&gt;&lt;/stringProp&gt;" + "<br>" +
		"&lt;stringProp name=\"HTTPSampler.protocol\"&gt;" + pm_prot + "&lt;/stringProp&gt;" + "<br>" +
		"&lt;stringProp name=\"HTTPSampler.contentEncoding\"&gt;&lt;/stringProp&gt;" + "<br>" +
		"&lt;stringProp name=\"HTTPSampler.path\"&gt;" + pm_path + "&lt;/stringProp&gt;" + "<br>" +
		"&lt;stringProp name=\"HTTPSampler.method\"&gt;GET&lt;/stringProp&gt;" + "<br>" +
		"&lt;boolProp name=\"HTTPSampler.follow_redirects\"&gt;true&lt;/boolProp&gt;" + "<br>" +
		"&lt;boolProp name=\"HTTPSampler.auto_redirects\"&gt;false&lt;/boolProp&gt;" + "<br>" +
		"&lt;boolProp name=\"HTTPSampler.use_keepalive\"&gt;true&lt;/boolProp&gt;" + "<br>" +
		"&lt;boolProp name=\"HTTPSampler.DO_MULTIPART_POST\"&gt;false&lt;/boolProp&gt;" + "<br>" +
		"&lt;stringProp name=\"HTTPSampler.embedded_url_re\"&gt;&lt;/stringProp&gt;" + "<br>" +
		"&lt;stringProp name=\"HTTPSampler.connect_timeout\"&gt;&lt;/stringProp&gt;" + "<br>" +
		"&lt;stringProp name=\"HTTPSampler.response_timeout\"&gt;&lt;/stringProp&gt;" + "<br>" +
		"&lt;/HTTPSamplerProxy&gt;" + "<br>" +
		"&lt;hashTree&gt;" + "<br>" +
		//Add Header Manager XML
		"&lt;HeaderManager guiclass=\"HeaderPanel\" testclass=\"HeaderManager\" testname=\"HTTP Header Manager\" enabled=\"true\"&gt;" + "<br>" +
		"&lt;collectionProp name=\"HeaderManager.headers\"&gt;" + "<br>" +
		"&lt;elementProp name=\"\" elementType=\"Header\"&gt;" + "<br>" +
		"&lt;stringProp name=\"Header.name\"&gt;***********************************&lt;/stringProp&gt;" + "<br>" +
		"&lt;stringProp name=\"Header.value\"&gt;***********************************&lt;/stringProp&gt;" + "<br>" +
		"&lt;/elementProp&gt;" + "<br>" +
		"&lt;/collectionProp&gt;" + "<br>" +
		"&lt;/HeaderManager&gt;" + "<br>" +
		//End XML
		"&lt;hashTree/&gt;" + "<br>" +
		"&lt;/hashTree&gt;" + "<br>" +
		"&lt;/hashTree&gt;" + "<br>" +
		"&lt;/hashTree&gt;" + "<br>" +
		"&lt;/hashTree&gt;" + "<br>" +
		"&lt;/hashTree&gt;" + "<br>" +
		"&lt;/jmeterTestPlan&gt;" + "<br>" +
		"<br>" +
		"<br>" +
		"<br>" +
		"<br>" +

		json.item[0].request.url.protocol + "<br>" +
		json.item[0].request.url.raw + "<br>" + 
		cnt + "<br>" +
		pm_prot + "//" + "<br>" +
		pm_host + "<br>" +
		pm_path;

  };
  reader.readAsText(input.files[0]);
};

