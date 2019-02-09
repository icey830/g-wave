window.onload = function elv_tjt_elv() {
    var elv_pp_canvas = document.getElementById('elv_yp_canvas');
    var elv_pp_video = document.getElementById('elv_yp_wave');
    var aaaa = document.getElementById('aaaa');
    var elv_pp_context = elv_pp_canvas.getContext("2d");
    var img = new Image();
    img.src = "index.jpg";
    var grad = "";
    var elv_pp_width = document.body.offsetWidth;
    var elv_pp_l = 10;
    var elv_pp_height = document.body.offsetHeight;
    var elv_pp_x = elv_pp_height - 10;
    elv_pp_canvas.width = elv_pp_width;
    elv_pp_canvas.height = elv_pp_height;
    var elv_pp_cen = elv_pp_height / 2;
    elv_pp_video.play();
    var play = 0;
    var zanting = false;
    var bbl = 0;
    var kuan = elv_pp_width - 170 * 6;
    var ping = 250 / 133;
    var juzhong = 0;
	var r=0,g=0,b=0;
	var rgb = "#FFFFFF";
    var elv_pp_AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
    var elv_pp_AudioContext_video = new elv_pp_AudioContext();
    var elv_pp_fen = elv_pp_AudioContext_video.createAnalyser();
    var elv_pp_src = elv_pp_AudioContext_video.createMediaElementSource(elv_pp_video);
    elv_pp_src.connect(elv_pp_fen);
    elv_pp_fen.connect(elv_pp_AudioContext_video.destination);
    var elv_pp_c_jiet = new Array();
    elv_pp_c_jiet = elv_pp_video.src.split("/");
    elv_pp_c_jiet = elv_pp_c_jiet[elv_pp_c_jiet.length - 1].split(".");
    elv_pp_c_jiet = elv_pp_c_jiet[0];
    elv_pp_c_jiet = decodeURI(elv_pp_c_jiet);
    img.onload = function poimg() {
		elv_pp_context.drawImage(img, elv_pp_width - 1920, elv_pp_height - 1080, 1920, 1080);
		var data = elv_pp_context.getImageData(0, 0, img.width, img.height).data;  
		for (var i = 0; i < img.height; i++) {  
        for (var l = 0; l < img.width; l++) {  
            r += data[((img.width * i) + l) * 4];  
            g += data[((img.width * i) + l) * 4 + 1];  
            b += data[((img.width * i) + l) * 4 + 2];  
        }  
    } 
    r /= (img.width * img.height); 
    g /= (img.width * img.height);  
    b /= (img.width * img.height);
    r = Math.round(r);  
    g = Math.round(g);  
    b = Math.round(b); 
	rgb = "rgb("+r+","+g+","+b+")";
        canvassx();
        amoe();
    }

    function amoe() {
        var elv_pp_Data = new Uint8Array(elv_pp_fen.frequencyBinCount);
        elv_pp_fen.getByteFrequencyData(elv_pp_Data);
        elv_pp_context.clearRect(0, 0, elv_pp_canvas.offsetWidth, elv_pp_canvas.offsetHeight);
        elv_pp_context.drawImage(img, elv_pp_width - 1920, elv_pp_height - 1080, 1920, 1080);
        //elv_pp_context.moveTo(0,elv_pp_x);
        for (var i = 0; i < 170; i = Math.round(i + ping)) {
            if (elv_pp_Data[i + 10] - 160 > 0) {
                bbl = elv_pp_Data[i + 10] - 160;
            } else {
                bbl = 0;
            }
            elv_pp_context.beginPath();
            elv_pp_context.fillStyle = grad;
            elv_pp_context.fillRect(i / 2 * elv_pp_l + kuan - elv_pp_l / 2 / 2, elv_pp_cen - 50 - bbl, elv_pp_l, bbl);
            elv_pp_context.beginPath();
            elv_pp_context.fillStyle = rgb;
            elv_pp_context.fillRect(i / 2 * elv_pp_l + kuan, elv_pp_cen - 50 - bbl, elv_pp_l / 2, bbl);
            elv_pp_context.fillStyle = grad;
            elv_pp_context.fillRect(i / 2 * elv_pp_l + kuan - elv_pp_l / 2 / 2, elv_pp_cen + 50, elv_pp_l, bbl);
            elv_pp_context.beginPath();
            elv_pp_context.fillStyle = rgb;
            elv_pp_context.fillRect(i / 2 * elv_pp_l + kuan, elv_pp_cen + 50, elv_pp_l / 2, bbl);

            elv_pp_context.arc(i / 2 * elv_pp_l + kuan + 2.5, elv_pp_cen - 50 - bbl, elv_pp_l / 2 / 2, 0, Math.PI * 2, true);
            elv_pp_context.fill();
            elv_pp_context.beginPath();
            elv_pp_context.arc(i / 2 * elv_pp_l + kuan + 2.5, elv_pp_cen + 50 + bbl, elv_pp_l / 2 / 2, 0, Math.PI * 2, true);
            elv_pp_context.fill();
            elv_pp_context.beginPath();
            juzhong = i / 2 / 2;
            //elv_pp_context.lineTo(i*elv_pp_l,elv_pp_x-(elv_pp_Data[i+4]-150)*2);
        }
		elv_pp_context.beginPath();
		elv_pp_context.fillStyle = "#FFF";
        elv_pp_context.fillText(elv_pp_c_jiet, juzhong * elv_pp_l + kuan, elv_pp_cen + bbl + 15);
        elv_pp_context.stroke();
        requestAnimationFrame(amoe);
    }
    window.onresize = function () { //如果屏幕分辨率发生改变触发
        elv_pp_width = document.body.offsetWidth
        elv_pp_height = document.body.offsetHeight;
        elv_pp_canvas.width = elv_pp_width;
        elv_pp_canvas.height = elv_pp_height;
        canvassx();
        kuan = elv_pp_width - 170 * 6;
        elv_pp_cen = elv_pp_height / 2;
    }

    function canvassx() {
        elv_pp_context.beginPath();
        elv_pp_context.fillStyle = rgb;
        elv_pp_context.strokeStyle =rgb;
        elv_pp_context.shadowOffsetX = 0;
        elv_pp_context.shadowOffsetY = 0;
        elv_pp_context.shadowBlur = 20;
        elv_pp_context.shadowColor = rgb;
        elv_pp_context.shadowWidth = 3;
        elv_pp_context.lineWidth = 10;
        elv_pp_context.font = "50px Arial";
        elv_pp_context.textAlign = "center";
        grad = elv_pp_context.createLinearGradient(0, 0, 140, 0);
        grad.addColorStop(0, 'rgba(255, 255, 255,0)'); // 红
        grad.addColorStop(0.5, rgb); // 绿
        grad.addColorStop(1, 'rgba(255, 255, 255,0)');
    }


    function elv_pp_mousePosition(e) { //获取鼠标所在位置的坐标，相对于整个页面  
        var x, y;
        var e = e || window.event;
        return {
            x: e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
            y: e.clientY + document.body.scrollTop + document.documentElement.scrollTop
        };
    }

    document.getElementById("elv_yp_canvas").onmousemove = function (e) {
        var elv_pp_zhizhen = 0;
        var elv_pp_left = new Array();
        elv_pp_left = elv_yp_canvas.getBoundingClientRect().left.toString().split(".");
        elv_pp_left = elv_pp_mousePosition(event).x - elv_yp_canvas.getBoundingClientRect().left + parseFloat("0." + elv_pp_left[1]) - document.body.scrollLeft;
        var elv_pp_top = new Array();
        elv_pp_top = elv_yp_canvas.getBoundingClientRect().top.toString().split(".");
        elv_pp_top = elv_pp_mousePosition(event).y - elv_yp_canvas.getBoundingClientRect().top + parseFloat("0." + elv_pp_top[1]) - document.body.scrollTop;
        if (elv_pp_left > kuan && elv_pp_left < kuan + 170 * 5 && elv_pp_top > elv_pp_cen - 25 && elv_pp_top < elv_pp_cen + 25) {
            elv_pp_zhizhen++;
        }
        if (elv_pp_zhizhen != 0) {
            elv_pp_canvas.style.cursor = "pointer";
            zanting = true;
        } else {
            elv_pp_canvas.style.cursor = "auto";
            zanting = false;
        }
    }
    elv_pp_canvas.onclick = function () {
        if (zanting) {
            if (play == 0) {
                elv_pp_video.pause();
                play++;
            } else {
                elv_pp_video.play();
                play = 0;
            }
        }
    }

}