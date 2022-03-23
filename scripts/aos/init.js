if(window.window.innerWidth >= 1024){
    AOS.init({ 
        easing: 'ease-in-out-sine',
        mirror: false,
        offset: 300
    });
} else {
    AOS.init({ 
        easing: 'ease-in-out-sine',
        mirror: false,
        disable: true,
        offset: 300
    });
}