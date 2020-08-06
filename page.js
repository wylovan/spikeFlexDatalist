(function($) {
    function attachBehaviors (behaviors) {
        for (var selector in behaviors)
            $(selector).each(behaviors[selector]);
    };
    const datalist = $('input.my-flexdatalist')
        results = $('div#imx-results')[0];
    
    $(function() {
        attachBehaviors({
            'input.my-flexdatalist': function (inst, elm) {
                datalist.flexdatalist({
                    "multiple": true,
                    "url": "dataService.mjs",
                    "searchIn": "name",
                    "searchContain": true,
                    "visibleProperties": ["name", "desc"],
                    "focusFirstResult": true,
                    "valuesSeparator": " "
                });
            },
            'button': function (inst, elm) {
                $(elm).click(function(evt) {
                    evt.preventDefault();
                    results.innerHTML = datalist.val();
                    return false;
                });
            }
        });
    });
})(jQuery);
