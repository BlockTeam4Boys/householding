
function viewDiv(){
	display = document.getElementById("div1").style.display;
	if(display == "none"){
		document.getElementById("div1").style.display = "block";
	}
	else{
		document.getElementById("div1").style.display = "none";
	}
}

var res;

function house_info(){
	home.get_house_info(document.getElementById("HouseId").value,
   function(error, result) {
		 res = result;
		 res[1] = res[1] ? "заложена" : "незаложена"
		 res[2] = "Площадь " + res[2]
		 res[3] = res[3] ? "жилая" : "нежилая"
		 var t = new Date(res[4] * 1000)
		 res[4] = "Срок эксплуатации на момент последней продажи: " + t
  	}
	)
}


function buy_house(){
	home. make_offer_to_buy(document.getElementById("buyHouseId").value,
   function(error, result) {
  	}
	)
}












var qsize;
function Zalog_Size(){
	home.get_count_of_houses_to_pledge(function(error, result){
			console.log(result.c[0])
			qsize = result.c[0]
		})
}


var ress = [];
function Zalog_info() {
for (var i = 0; i < qsize; i++) {
	home.get_house_to_pledge_info(i,
	function(error, result) {
		ress = result;
		console.log(ress);
		ress[1] = "Площадь " + ress[1]

		ress[2] = ress[2] ? "жилая" : "нежилая"
		var t = new Date(ress[3] * 1000)
		ress[3] = "Срок эксплуатации на момент последней продажи : " + t
		/*var tt = new Date(res[6] * 1000)
		res[6] = "Дата конца продажи: " + t*/

		Zalog(ress);
		}
	)
}

}


function Zalog(r){

		var dv = document.getElementById('ZalogTable');
		//var bdy = document.createElement('body');
		var tbl = document.createElement('table');
		tbl.setAttribute('border','1');

		var tbdy = document.createElement('tbody');

		for (var i = 0; i < qsize; i++) {

			var tr = document.createElement('tr');
			for(var i = 0; i < 4; i++) {
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









function tableCreate(){
	var dv = document.getElementById('houseTable');
	//var bdy = document.createElement('body');
	var tbl = document.createElement('table');
	tbl.setAttribute('border','1');
	var tbdy = document.createElement('tbody');

	for(var i = 0; i < 5; i++) {
			var tr = document.createElement('tr');
			var td = document.createElement('td');
			var t = document.createTextNode(res[i]);
			td.appendChild(t);
			tr.appendChild(td);
			tbdy.appendChild(tr);
	}
	tbl.appendChild(tbdy);
	dv.appendChild(tbl);
}



var size;
function Sale_size(){
	home.get_count_of_saling_houses(function(error, result){
			console.log(result.c[0])
			size = result.c[0]
		})
}


var res = [];
function Sale_info() {
for (var i = 0; i < size; i++) {
	home.get_saling_house_info(i,
	function(error, result) {
		res = result;
		console.log(res);
		res[1] = "Площадь " + res[1]
		res[2] = res[2] ? "заложена" : "незаложена"

		res[3] = res[3] ? "жилая" : "нежилая"
		var t = new Date(res[4] * 1000)
		res[4] = "Срок эксплуатации на момент последней продажи : " + t
		res[5] = "Цена " + res[5]
		var tt = new Date(res[6] * 1000)
		res[6] = "Дата конца продажи: " + t

		Sale(res);
		}
	)
}

}


function Sale(r){

		var dv = document.getElementById('SaleTable');
		//var bdy = document.createElement('body');
		var tbl = document.createElement('table');
		tbl.setAttribute('border','1');
		var tbdy = document.createElement('tbody');

		for (var i = 0; i < size; i++) {

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
var home = con.at(address)
