var fullscreen = $("#schemaBuilder").data("fullscreen");

if (!fullscreen) {	
	$('#AppBodyHeader').add('.bPageTitle')
											.add('#schemaBuilderToolbar')
											.hide();

	$('#schemaBuilder').add('html')
											.add('body')
											.add('#contentWrapper')
											.add('#schemaBuilderWrapper')
											.add('.main')
											.add('#schemaBuilderSidebar')
											.add('#object-listpane')
											.height('100%');


	$("#schemaBuilder").attr( "data-fullscreen", "true" );

} else {
	
	$('#AppBodyHeader').add('.bPageTitle')
											.add('#schemaBuilderToolbar')
											.show();

	$("#schemaBuilder").attr( "data-fullscreen", "false" );
}