$('#slider-first.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false, 
    smartSpeed: 1300,
    navText:["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('#slider-second.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true, 
    smartSpeed: 1300,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$("#bar").click(function(){
    $("ul").slideToggle(500);
});


jQuery(document).ready(function() {
    function count($this){
    var current = parseInt($this.html(), 10);
    current = current + 1; /* Where 1 is increment */
    $this.html(++current);
    if(current > $this.data('count')){
    $this.html($this.data('count'));
    } else {
    setTimeout(function(){count($this)}, 1);
    }
    }
    
    jQuery(".stat-count").each(function() {
    jQuery(this).data('count', parseInt(jQuery(this).html(), 10));
    jQuery(this).html('0');
    count(jQuery(this));
    });
    });

