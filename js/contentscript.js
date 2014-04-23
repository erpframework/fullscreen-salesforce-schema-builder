fullscreen = $("#schemaBuilder").data("fullscreen");

if (!fullscreen) {	
	$('#AppBodyHeader').hide();
	$('.bPageTitle').hide();
	$('#schemaBuilderToolbar').hide();

	$('#schemaBuilder').height('100%');
	$('html').height('100%');
	$('body').height('100%');
	$('#contentWrapper').height('100%');
	$('#schemaBuilderWrapper').height('100%');
	$('.main').height('100%');
	$('#schemaBuilderSidebar').height('100%');
	$('#object-listpane').height('100%');


	$("#schemaBuilder").attr( "data-fullscreen", "true" );
} else {
	console.log('Showing header again');
	$('#AppBodyHeader').show();
	$('.bPageTitle').show();
	$('#schemaBuilderToolbar').show();

	$("#schemaBuilder").attr( "data-fullscreen", "false" );
}