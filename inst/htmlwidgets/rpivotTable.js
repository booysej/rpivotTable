HTMLWidgets.widget({

    name: 'rpivotTable',

    type: 'output',

    initialize: function(el, width, height) {

	    return {};

    },

    renderValue: function(el, x, instance) {
      
      try {
  	    x.data = HTMLWidgets.dataframeToD3(x.data);
	      var derivers = $.pivotUtilities.derivers;
        var tpl = $.pivotUtilities.aggregatorTemplates;

        x.params.renderers = $.extend(
          $.pivotUtilities.renderers,
          $.pivotUtilities.d3_renderers,
          $.pivotUtilities.c3_renderers
        );

        $('#'+el.id).pivotUI(
      	  	x.data, x.params
        );
      } catch(err) {
         $('#'+el.id).replaceWith('<div id="pivottable"></div>');  
      }

    },

    resize: function(el, width, height, instance) {

    }

});
