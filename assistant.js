/*
	made by inteNsE- aka. RaiZeN
		https://twitter.com/inteNs3_
		http://steamcommunity.com/id/inteNsE--/
		https://github.com/inteNs3

	as it's free, please respect the creator by keeping the first few lines
*/

/* variables */
var startingBalance = document.getElementById('balance').innerHTML;
var currentBalance;
var highestBalance = startingBalance;
var log = true;

/* start */

/* modal css */
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = '.modal2{display:none;color:#333;position:fixed;z-index:123;padding-top:100px;left:0;top:0;width:100%;height:100vh;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}.modal2-content{position:relative;background-color:#1C1C22;color:#eee;margin:auto;padding:0;width:40%;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);-webkit-animation-name:animatetop;-webkit-animation-duration:0.4s;animation-name:animatetop;animation-duration:0.4s}@-webkit-keyframes "animatetop"{from{top:-300px;opacity:0;}to{top:0;opacity:1;}}@keyframes "animatetop"{from{top:-300px;opacity:0;}to{top:0;opacity:1;}}.close{color:white;float:right;font-size:28px;font-weight:bold}.close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer}.modal2-header{padding:2px 16px;background-color:#C8354E;color:white}.modal2-body{padding:2px 16px;height:400px}.modal2-footer{padding:2px 16px;background-color:#C8354E;color:white}.nav-element2{text-align:center;padding-top:24px;padding-bottom:24px;color:#444;cursor:pointer;-webkit-transition:300ms ease;-moz-transition:300ms ease;-ms-transition:300ms ease;-o-transition:300ms ease;transition:300ms ease;position:relative}';
document.body.appendChild(css);

/* modal button */
var cButton = document.createElement("li");
cButton.className = "nav-element2 noselect";
cButton.id = "statsModalBtn";
cButton.innerHTML = '<i class="nav-icon material-icons">insert_chart</i>';
document.getElementById("nav-custom").appendChild(cButton);

/* modal and content */
var cModal = document.createElement("div");
cModal.className = "modal2";
cModal.id = "statsModal";
cModal.innerHTML = '<div class="modal2-content"><div class="modal2-header"><span class="close">×</span><h5>CSGO500 Assistant v1.2 <small>by <a style="color:#999999" href="http://steamcommunity.com/id/inteNsE--/" target="_blank">inteNsE-</a></small></h5></div><div class="modal2-body"><div style="width:50%;display:inline-block"><p style="font-size:15px"><i class="material-icons left">view_week</i> Balance log (<a id="stopButton" role="button" onclick="updateLog();">stop</a> | <a role="button" onclick="clearLogs();">clear</a>):</p><p id="balanceLog" style="height:400px;max-height:320px;overflow-y:scroll"></p></div><div style="width:50%;display:inline-block;float:right;text-align:right"><p style="font-size:15px"><i class="material-icons right">insert_chart</i> Statistics:</p><p><b>Current balance: </b><span id="currentBalance"></span></p><p><b>Starting balance:</b> ' + startingBalance + '</p><p><b>Highest balance: </b><span id="highestBalance"></span></p><p><b>Profit on this session: </b><span id="thisSessionProfit"></span></p></div></div></div></div>';
document.body.appendChild(cModal);

/* modal opening etc */
var modal = document.getElementById('statsModal');
var btn = document.getElementById("statsModalBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){modal.style.display = "block";}
span.onclick = function(){modal.style.display = "none";}
window.onclick = function(event){if(event.target==modal){modal.style.display="none";}}

/* starting script */
updateStats();

setInterval(function(){updateStats();}, 60 * 1000);
setInterval(function(){updateBalance();}, 2 * 1000);

/* logging bets */
$("#bet-btn-2x").click(function(){setTimeout(function(){if(document.getElementById('my-bets-2x').innerHTML>=10){document.getElementById('balanceLog').innerHTML = '<pre style="color:#337ab7">placed ' + document.getElementById('my-bets-2x').innerHTML + ' coins on 2x (' + getDate() + ')</pre>' + document.getElementById('balanceLog').innerHTML;}}, 2500);});
$("#bet-btn-3x").click(function(){setTimeout(function(){if(document.getElementById('my-bets-3x').innerHTML>=10){document.getElementById('balanceLog').innerHTML = '<pre style="color:#337ab7">placed ' + document.getElementById('my-bets-3x').innerHTML + ' coins on 3x (' + getDate() + ')</pre>' + document.getElementById('balanceLog').innerHTML;}}, 2500);});
$("#bet-btn-5x").click(function(){setTimeout(function(){if(document.getElementById('my-bets-5x').innerHTML>=10){document.getElementById('balanceLog').innerHTML = '<pre style="color:#337ab7">placed ' + document.getElementById('my-bets-5x').innerHTML + ' coins on 5x (' + getDate() + ')</pre>' + document.getElementById('balanceLog').innerHTML;}}, 2500);});
$("#bet-btn-50x").click(function(){setTimeout(function(){if(document.getElementById('my-bets-50x').innerHTML>=10){document.getElementById('balanceLog').innerHTML = '<pre style="color:#337ab7">placed ' + document.getElementById('my-bets-50x').innerHTML + ' coins on 50x (' + getDate() + ')</pre>' + document.getElementById('balanceLog').innerHTML;}}, 2500);});

/* functions */
function updateStats()
{
	if(log){document.getElementById('balanceLog').innerHTML = '<pre>' + document.getElementById('balance').innerHTML + ' coins (' + getDate() + ')</pre>' + document.getElementById('balanceLog').innerHTML;}
}

function updateBalance()
{
	document.getElementById('highestBalance').innerHTML = highestBalance;
	var profit = document.getElementById('balance').innerHTML - startingBalance;
	currentBalance = document.getElementById('balance').innerHTML;

	if(currentBalance>highestBalance){document.getElementById('highestBalance').innerHTML=currentBalance;}

	if(profit==0){document.getElementById('thisSessionProfit').innerHTML = '<span>0</span>';}
	if(profit>0){document.getElementById('thisSessionProfit').innerHTML = '<span style="color:#5cb85c">+' + profit + '</span>';}
	if(profit<0){document.getElementById('thisSessionProfit').innerHTML = '<span style="color:#d9534f">-' + profit + '</span>';}

	if(currentBalance==startingBalance){document.getElementById('currentBalance').innerHTML = '<span>' + currentBalance + '</span>';}
	if(currentBalance>startingBalance){document.getElementById('currentBalance').innerHTML = '<span style="color:#5cb85c">' + currentBalance + '</span>';}
	if(currentBalance<startingBalance){document.getElementById('currentBalance').innerHTML = '<span style="color:#d9534f">' + currentBalance + '</span>';}
}

function updateLog()
{
	if(!log)
	{
		log = true;
		document.getElementById('stopButton').innerHTML = 'stop';
		document.getElementById('balanceLog').innerHTML = '<pre style="color:#5cb85c">balance log enabled (' + getDate() + ')</pre>' + document.getElementById('balanceLog').innerHTML; 
		return;
	}

	if(log)
	{
		log = false;
		document.getElementById('stopButton').innerHTML = 'start';	
		document.getElementById('balanceLog').innerHTML = '<pre style="color:#d9534f">balance log disabled (' + getDate() + ')</pre>' + document.getElementById('balanceLog').innerHTML; 
		return;
	}
}

function clearLogs()
{
	document.getElementById('balanceLog').innerHTML = '<pre style="color:#5bc0de">logs cleared (' + getDate() + ')</pre>';
}

function getDate()
{
	var now = new Date();
	var hours = now.getHours() % 24 || 24; 
	var minutes = ('0'+now.getMinutes()).slice(-2);
	return(hours + ':' + minutes);
}
