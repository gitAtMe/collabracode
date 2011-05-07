                $(function () {
                    // Hide all sub lists
                    $('li ul').hide();
                    $('li').hover(function () {
                        $(this).children('ul').show();
                        $(this).children('ul').children('ul').hide();
                    }, function () {
                        $(this).children('ul').hide();
                    });
                });