//META{"name":"RadioArmsite","source":"https://armsite.ir/","website":"https://armsite.ir","discord":"https://discord.gg/Z9Nr9pJNtY"}*//

class RadioArmsite {
	getName () {
		return "RadioArmsite";
	}

	getVersion () {
		return "2.0.1";
	}

	getAuthor () {
		return "AmirMamad";
	}

	getDescription () {
		return "Radio Player In Disocrd App Developed By AmirMamad v2.0.1 | Connected in RadioJavan Server (Playing RadioJavan). Support Discord : https://discord.gg/Z9Nr9pJNtY";
	}
	
	load () {
			
	}

	start () {
		
		var overlaycss = document.createElement("style");
		overlaycss.id  = 'overlay-armsite-css';
		overlaycss.innerHTML = "@keyframes pulse {0% {color:rgba(0,0,0,0);font-size:30px;}50%{color:rgba(255, 255, 255, 0.521);font-size:55px;}100% {color:#fff;font-size: 80px;}}#overlay-armsite-div{top:0;bottom: 0;left:0;right:0;text-align: center;position: fixed;width:100%;padding-top:25%;height:100%;font-size: 30px; background: rgba(0,0,0,0.3);z-index:20;color:#fff;animation: pulse 1.5s linear 0s infinite alternate;}.app-1q1i1E{z-index:0;}";
		document.getElementById('app-mount').appendChild(overlaycss);
		var overlayarmsitecss=document.getElementById('overlay-armsite-css');

		var overlaydiv = document.createElement("div");
		overlaydiv.id  = "overlay-armsite-div";
		overlaydiv.innerHTML = "<b><i>Power By AmirMamad</i></b>";
		document.getElementById('app-mount').appendChild(overlaydiv);
		var overlayarmsitediv=document.getElementById('overlay-armsite-div');

		setTimeout(function() {
			$("#overlay-armsite-div").hide();
		  } , 6000);

		var style  = document.createElement("style");
		style.id   = 'audio-player-style';
		style.innerHTML = "#audio-player-about {background: linear-gradient(to right, #202225 20%, #bada55 30%, #bada44 70%, #202225 80%);-webkit-background-clip: text;background-clip: text;-webkit-text-fill-color: transparent;text-fill-color: transparent;background-size: 200% auto;animation: textShine 7s ease-in-out infinite alternate;}@keyframes textShine {to {background-position: 200%;}}";
		document.getElementById('app-mount').appendChild(style);
		
		var about 	   = document.createElement("b");
		about.id       = 'audio-player-about';  
		about.style    = 'font-size:20;Color:#fff;width:100%;margin-top:4px;text-align:center';
		about.innerHTML= '';
		document.getElementById('app-mount').appendChild(about);
		
		var sound      = document.createElement('audio');
		sound.id       = 'audio-player';
		sound.controls = 'controls';
		sound.src      = 'http://rj1.rjstream.com';
		sound.type     = 'audio/mpeg';
		sound.style    = 'margin-top:4px;width:100%;height:42px;text-align:center;outline:none';
		sound.autoplay = 'true';
		document.getElementById('app-mount').appendChild(sound);
		

	}

	stop () {
		var ap  = document.getElementById("audio-player");
		var apb = document.getElementById("audio-player-about");
		var aps = document.getElementById("audio-player-style");
		var overlayarmsitediv=document.getElementById('overlay-armsite-div');
		var overlayarmsitecss=document.getElementById('overlay-armsite-css');
		ap.remove();
		apb.remove();
		aps.remove();
		overlayarmsitediv.remove();
		overlayarmsitecss.remove();
		
	}
	getSettingsPanel () {
		let settings = document.createElement("div");
		settings.style = "padding:15px;";
	
		let flexer = document.createElement("div");
		flexer.style = "display: flex; flex-direction: row";

		let label = document.createElement("h5");
		label.className = "h5-18_1nd";
		label.innerHTML = "URL Radio Play :";
		
		let input = document.createElement("input");
		input.style = "margin-top:5px;";
		input.className = "inputDefault-_djjkz input-cIJ7To";
		input.value = "http://rj1.rjstream.com";
		input.placeholder = "Enter Url Radio For play http://";

		let filled_savebutton = true;
		
		let savebutton = document.createElement("button");
		savebutton.className = "button-38aScr colorBrand-3pXr91 sizeSmall-2cSMqn grow-q77ONN lookFilled-1Gx00P colorGreen-29iAKY";
		savebutton.style.marginTop = "10px";
		if (filled_savebutton) savebutton.classList.add("lookFilled-1Gx00P");
		else savebutton.classList.add("lookOutlined-3sRXeN");
		savebutton.innerHTML = "Save";
		savebutton.onclick = () => {
			BdApi.showToast(`Save Complate`, {type: "success"});
			var ap  = document.getElementById("audio-player");
			ap.remove();
			var sound      = document.createElement('audio');
			sound.id       = 'audio-player';
			sound.controls = 'controls';
			sound.type     = 'audio/mpeg';
			sound.src      = input.value;
			sound.style    = 'margin-top:4px;width:100%;height:42px;text-align:center;outline:none';
			sound.autoplay = 'true';
			document.getElementById('app-mount').appendChild(sound);
		}

		let filled_radiojavanbutton = false;
		let radiojavabutton = document.createElement("button");
		radiojavabutton.className = "button-38aScr colorBrand-3pXr91 sizeSmall-2cSMqn grow-q77ONN lookOutlined-3sRXeN";
		radiojavabutton.style.marginTop = "10px";
		if (filled_radiojavanbutton) radiojavabutton.classList.add("lookFilled-1Gx00P");
		else radiojavabutton.classList.add("lookOutlined-3sRXeN");
		radiojavabutton.innerHTML = "Radio Java Link";
		radiojavabutton.style = "margin-left:10px;margin-top: 10px;";
		radiojavabutton.onclick = () => {
			// BdApi.showToast(`Save Complate`, {type: "success"});
			input.value = "http://rj1.rjstream.com";
		}
		
			let clearbutton = document.createElement("button");
			clearbutton.className = "button-38aScr colorBrand-3pXr91 sizeSmall-2cSMqn grow-q77ONN lookOutlined-3sRXeN colorRed-1TFJan";
		
			if (filled_radiojavanbutton) clearbutton.classList.add("lookFilled-1Gx00P");
			else clearbutton.classList.add("lookOutlined-3sRXeN");
			clearbutton.innerHTML = "Clear";
			clearbutton.style = "margin-left:10px;margin-top: 10px;float:Right;text-align:rigth;direction:rtl;";
			clearbutton.onclick = () => {
				// BdApi.showToast(`Save Complate`, {type: "success"});
				input.value = "";
			}
		
		
		settings.appendChild(label);
		settings.appendChild(input);
		flexer.appendChild(savebutton);
		flexer.appendChild(radiojavabutton);
		flexer.appendChild(clearbutton);
		settings.appendChild(flexer);

		return settings;
	}

}
