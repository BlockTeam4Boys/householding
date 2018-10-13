var address = '0xD20085d75f15A8C618E2aa6d214Cb0D71DcB6a82'
var ABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "get_saling_house_info",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_count_of_my_house_to_pledge",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_area",
				"type": "uint256"
			},
			{
				"name": "_isResidential",
				"type": "bool"
			},
			{
				"name": "_data",
				"type": "uint256"
			}
		],
		"name": "addHouse",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_count_of_offer_to_buy_from_me",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "get_my_saling_house_info",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "price",
				"type": "uint256"
			},
			{
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "create_offer_for_pledge",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "get_my_house_to_pledge_info",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "make_offer_to_buy",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_count_of_saling_houses",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_count_of_houses_to_pledge",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "get_my_house_info",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "my_house_id",
				"type": "uint256"
			},
			{
				"name": "price",
				"type": "uint256"
			},
			{
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "create_offer_for_sale",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_count_of_my_houses",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_count_of_my_saling_houses",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "get_house_info",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "get_offer_to_buy_from_me_info",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "get_house_to_pledge_info",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
var con = web3.eth.contract(ABI)
var sale = con.at(address)

function createSale(){
	sale.create_offer_for_sale(document.getElementById("ObjForSale").value,
    document.getElementById("Price").value,
			new Date(document.getElementById("Srok").value).getTime() / 1000,
			 function(error, result) {
  }

	)
}

function viewDiv(){
	display = document.getElementById("div1").style.display;
	if(display == "none"){
		document.getElementById("div1").style.display = "block";
	}
	else{
		document.getElementById("div1").style.display = "none";
	}
}


var size;
function mySale_size(){
	sale.get_count_of_my_saling_houses(function(error, result){
			console.log(result.c[0])
			size = result.c[0]
		})
}

var res = [];
function mySale_info() {
for (var i = 0; i < size; i++) {
	sale.get_my_saling_house_info(i,
	function(error, result) {
		res = result;
		console.log(res);
		res[1] = "Площадь " + res[1]
		res[2] = res[2] ? "заложена" : "незаложена"

		res[3] = res[3] ? "жилая" : "нежилая"
		var t = new Date(res[4] * 1000)
		res[4] = "Срок эксплуатации на момент последней продажи : " + t


		Sale(res);
		}
	)
}

}

function Sale(r){

		var dv = document.getElementById('mySaleTable');
		//var bdy = document.createElement('body');
		var tbl = document.createElement('table');
		tbl.setAttribute('border','1');
		var tbdy = document.createElement('tbody');

		for (var i = 0; i < size; i++) {

			var tr = document.createElement('tr');
			for(var i = 0; i < 5; i++) {
				var td = document.createElement('td');
				var t = document.createTextNode(r[i]);
				td.appendChild(t);
				tr.appendChild(td);
				}
				tbdy.appendChild(tr);
		}

			tbl.appendChild(tbdy);
			dv.appendChild(tbl);

}

var osize;
function oSale_size(){
	sale.get_count_of_my_saling_houses(function(error, result){
			console.log(result.c[0])
			osize = result.c[0]
		})
}


var re = [];
function oSale_info() {
for (var i = 0; i < size; i++) {
	sale.get_my_saling_house_info(i,
	function(error, result) {
		re = result;
		console.log(re);
		re[1] = "Площадь " + re[1]
		re[2] = re[2] ? "заложена" : "незаложена"

		re[3] = re[3] ? "жилая" : "нежилая"
		var t = new Date(re[4] * 1000)
		re[4] = "Срок эксплуатации на момент последней продажи : " + t
		re[5] = "Цена " + re[5]
		var tt = new Date(re[6] * 1000)
		re[6] = "Дата конца продажи: " + t

		oSale(re);
		}
	)
}

}


function oSale(r){

		var dv = document.getElementById('oSaleTable');
		//var bdy = document.createElement('body');
		var tbl = document.createElement('table');
		tbl.setAttribute('border','1');
		var tbdy = document.createElement('tbody');

		for (var i = 0; i < osize; i++) {

			var tr = document.createElement('tr');
			for(var i = 0; i < 7; i++) {
				var td = document.createElement('td');
				var t = document.createTextNode(r[i]);
				td.appendChild(t);
				tr.appendChild(td);
				}
				tbdy.appendChild(tr);
		}

			tbl.appendChild(tbdy);
			dv.appendChild(tbl);

}







var psize;
function pSale_size(){
	sale.get_count_of_my_house_to_pledge(function(error, result){
			console.log(result.c[0])
			psize = result.c[0]
		})
}


var rep = [];
function pSale_info() {
for (var i = 0; i < psize; i++) {
	sale.get_my_house_to_pledge_info(i,
	function(error, result) {
		rep = result;
		console.log(rep);
		rep[1] = "Площадь " + rep[1]

		rep[2] = rep[2] ? "жилая" : "нежилая"
		var t = new Date(rep[3] * 1000)
		rep[3] = "Срок эксплуатации на момент последней продажи : " + t


		pSale(rep);
		}
	)
}

}


function pSale(p){

		var dv = document.getElementById('pSaleTable');
		//var bdy = document.createElement('body');
		var tbl = document.createElement('table');
		tbl.setAttribute('border','1');
		var tbdy = document.createElement('tbody');

		for (var i = 0; i < psize; i++) {

			var tr = document.createElement('tr');
			for(var i = 0; i < 4; i++) {
				var td = document.createElement('td');
				var t = document.createTextNode(p[i]);
				td.appendChild(t);
				tr.appendChild(td);
				}
				tbdy.appendChild(tr);
		}

			tbl.appendChild(tbdy);
			dv.appendChild(tbl);

}






function createZalog(){
	sale.create_offer_for_pledge(document.getElementById("ObjForZalog").value,
		document.getElementById("PriceZalog").value,
		new Date(document.getElementById("dataZalog").value).getTime() / 1000,
		function(error,result){

		})
}

function viewDivZ(){
	display = document.getElementById("div2").style.display;
	if(display == "none"){
		document.getElementById("div2").style.display = "block";
	}
	else{
		document.getElementById("div2").style.display = "none";
	}
}
