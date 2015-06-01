(function($) {
        $.fn.extend({
            sameHeight: function(options)
            {
                var defaults =
                {
                    resize: 'tallest',
                    log: false
                };

                options = $.extend(defaults,options);

                var targetHeight = (options.resize == 'tallest') ? 0 : 2000;

                this.each(function() {

                    var height = $(this).height();
                    if(options.log == true)
                    {
                        console.log($(this).attr('id') + 'height = ' + height);
                    }
                    if (options.resize == 'tallest') {
                        if (height > targetHeight) {
                            targetHeight = height;
                        }
                    }
                    else {
                        if (height < targetHeight) {
                            targetHeight = height;
                        }
                    }
                });
                if(options.log == true)
                {
                    console.log('Target height = ' + targetHeight);
                }
                this.each(function() {
                    $(this).css({height: targetHeight});
                });
            }
        });
    })(jQuery);
