pragma solidity ^0.4.20;

contract HouseHolding {
    
    address owner = msg.sender;     // админ
    uint top = 0;                   // счетчик ид для добавления домов
    
    struct HouseInfo {
        address owner;      // владелец
        bool inPledge;      // в залоге или нет
        uint area;          // площадь
        bool isResidetial;  // жилой или нет
        uint date;          // начало последнего использования
    }
    
    mapping(uint => HouseInfo) all_houses;       // global id => основная информация о доме
    mapping(address => uint[]) my_houses;        // владелец => список global id его домов
    
    // создание объекта недвижимости(админ)
    function addHouse(address _owner, uint _area, bool _isResidential, uint _data) public {
        require(
            msg.sender == owner,
            "only admin can add"
        );
        HouseInfo memory t = HouseInfo(_owner, false, _area, _isResidential, _data);
        all_houses[top] = t;
        my_houses[_owner].push(top);
        ++top;
    }
    
    //Просмотр данных об объекте недвижимости по его global id(все)
    function get_house_info(uint id) public constant returns 
    (address, bool, uint, bool, uint) {
        HouseInfo memory t = all_houses[id];
        return (t.owner, t.inPledge, t.area, t.isResidetial, t.date);
    }
    
    //доп. информация о продающимся доме
    struct SaleInfo {   
        uint id;        // global id
        uint price;     // цена
        uint time;      // срок действия предложения
    }
    
    mapping(address => uint[]) my_houses_in_sale;   // address => список global id моих продающихся домов
    SaleInfo[] all_houses_in_sale;                  // список всех продающихся домов
    
    // информация о предложении между 2мя пользователями
    struct OfferInfo {
        address b;          // вторая сторона
        uint id;            // global id
    }
    
    mapping(address => OfferInfo[]) offer_for_sale_for_me;      // address => список предложений, чтобы купить у address
    mapping(address => OfferInfo[]) offer_for_sale_from_me;     // address => список предложений address, чтобы купить у другого
    
    // создать предложение о продаже(собственник)
    function create_offer_for_sale
    (uint my_house_id, uint price, uint time) public {
        require(
            msg.sender == all_houses[my_houses[msg.sender][my_house_id] ].owner,
            "You don't own that house"
        );
        for(uint i = 0; i < my_houses_in_sale[msg.sender].length; ++i) {                    // проверка что такой дом уже не продается
            if(my_houses[msg.sender][my_house_id] == my_houses_in_sale[msg.sender][i]) {
                return;
            }
        }
        SaleInfo memory t = SaleInfo(my_houses[msg.sender][my_house_id], price, time); 
        all_houses_in_sale.push(t);
        my_houses_in_sale[msg.sender].push(my_houses[msg.sender][my_house_id]);     // push global id
        /* to do list
         * не должен быть в предложении на подарок(убрать предложение)
         * (мб)такой ид моего дома должен существовать */
    }
    
    
    // // удалить предложение о продаже
    // function delete_offer_for_sale(uint my_house_in_sale_id) public {
    //     require(
    //         all_houses[my_houses_in_sale[msg.sender][my_house_in_sale_id] ].owner == msg.sender,
    //         "You don't own that house"
    //     );
    //     uint gID = my_houses_in_sale[msg.sender][my_house_in_sale_id];         // получение глобального ид дома
        
    //     for(uint q = 0; q < offer_for_sale_for_me[msg.sender].length; ++q) { /* удалить предложения о покупке */
    //         if(gID == offer_for_sale_for_me[msg.sender][q].id) {
    //             address r = offer_for_sale_for_me[msg.sender][q].b;
    //             for(uint w = 0; w < offer_for_sale_from_me[r].length; ++w) {
    //                 if(gID == offer_for_sale_from_me[r][w].id) {
    //                     delete offer_for_sale_from_me[r];
    //                     uint[] memory arr = new uint[](offer_for_sale_from_me[r].length - 1);
    //                     offer_for_sale_from_me[r] = arr;
    //                 }
    //             }
    //             delete offer_for_sale_for_me[msg.sender][q];
    //             if(offer_for_sale_for_me[msg.sender].length != 0 && q != offer_for_sale_for_me[r].length - 1) {
    //                 offer_for_sale_for_me[msg.sender][q] = offer_for_sale_for_me[msg.sender][offer_for_sale_for_me[msg.sender].length - 1];
    //                 delete offer_for_sale_for_me[msg.sender][offer_for_sale_for_me[msg.sender].length - 1];
    //                 --q;
    //             }
    //         }
    //     }
    //     /* to do list
    //      * возврат денег с контракта, желающим купить
    //      * (мб)такой ид моего продающегося дома должен существовать */
    //     delete my_houses_in_sale[msg.sender][my_house_in_sale_id];
    //     if(my_houses_in_sale[msg.sender].length != 0 && my_house_in_sale_id != my_houses_in_sale[msg.sender].length - 1) {
    //         my_houses_in_sale[msg.sender][my_house_in_sale_id] = my_houses_in_sale[msg.sender][my_houses_in_sale[msg.sender].length - 1];
    //         delete my_houses_in_sale[msg.sender][my_houses_in_sale[msg.sender].length - 1];
    //     }
    //     for(uint i = 0; i < all_houses_in_sale.length; ++i) {
    //         if(gID == all_houses_in_sale[i].id) {
    //             delete all_houses_in_sale[i];
    //             if(all_houses_in_sale.length != 0 && i != all_houses_in_sale.length - 1) {
    //                 all_houses_in_sale[i] = all_houses_in_sale[all_houses_in_sale.length - 1];
    //                 delete all_houses_in_sale[all_houses_in_sale.length - 1];
    //             }
    //             break;
    //         }
    //     }
    // }
    
    // сделать запрос на покупку
    function make_offer_to_buy(uint id) public payable{    // ид из всех продающихся домов
        require(
            msg.value == all_houses_in_sale[id].price, 
            "Not enought money"
        );
        uint gID = all_houses_in_sale[id].id;
        offer_for_sale_from_me[msg.sender].push(OfferInfo(all_houses[gID].owner, gID)); // add в список предложений от меня (стоимость можно будет взять из списка домов, которые продает овнер и найти тот самый)
        offer_for_sale_for_me[all_houses[gID].owner].push(OfferInfo(msg.sender, gID));             // add в список предложений для владельца
        /* to do list
         * (мб)срок действия обьявления не истек */
    }

    // --->> Список моих "покупок", ожидающих подтверждения
    // количество "покупок", ожидающих подтверждения
    function get_count_of_offer_to_buy_from_me() public constant returns (uint) {
        return offer_for_sale_from_me[msg.sender].length;
    }

    // информация об "покупке" ожидающей подтверждения по ее ид в списке моих покупок, ожидающих подтверждения
    function get_offer_to_buy_from_me_info(uint id) public constant returns (address, bool, uint, bool, uint) {
        HouseInfo memory t = all_houses[offer_for_sale_from_me[msg.sender][id].id];
        return (t.owner, t.inPledge, t.area, t.isResidetial, t.date);
    }
    // <<--- Список моих "покупок", ожидающих подтверждения
    
    // принять запрос на покупку
    // function accept_offer_to_sell(uint id) public {  // ид из offer_for_sale_for_me
    //     /* только овнер может принимать предложения о продаже своих домов */
    //     /* овнеру переводятся требуемые деньги со смарт контракта */

    //     address buyer = offer_for_sale_for_me[msg.sender][id].b;
    //     uint gID = offer_for_sale_for_me[msg.sender][id].id;
    //     delete offer_for_sale_for_me[msg.sender][id];
    //     for(uint s = 0; s < offer_for_sale_for_me[msg.sender][id]) {

    //     }


    //     for(uint i = 0; i < my_houses_in_sale[msg.sender].length; ++i) {
    //         if(gID == my_houses_in_sale[msg.sender][i]) {
    //             delete_offer_for_sale(i);
    //             break;
    //         }
    //     }
    //     for(uint j = 0; j < my_houses[msg.sender].length; ++j) {
    //         if(gID == my_houses[msg.sender][j]) {
    //             delete my_houses[msg.sender][j];
    //             if(my_houses[msg.sender].length != 0) {
    //                 my_houses[msg.sender][j] = my_houses[msg.sender][my_houses[msg.sender].length - 1];
    //                 delete my_houses[msg.sender][my_houses[msg.sender].length - 1];
    //             }
    //             break;
    //         }
    //     }
    //     all_houses[gID].owner = offer_for_sale_for_me[msg.sender][id].b;
    //     all_houses[gID].date = now;
    //     my_houses[offer_for_sale_for_me[msg.sender][id].b].push(gID);
    // }
    
    // --->> Просмотр всех предложений о продаже
    // количество всех предложени о продаже
    function get_count_of_saling_houses() public constant returns(uint) {
        return all_houses_in_sale.length;
    }
    
    // информация о продающемся доме по его ид в списке всех продающихся домов
    function get_saling_house_info(uint id) public constant returns(address, uint, bool, bool, uint, uint, uint) {     // ид в списке всех продающихся домов
        HouseInfo memory t = all_houses[all_houses_in_sale[id].id];
        return (t.owner, t.area, t.inPledge, t.isResidetial, t.date, all_houses_in_sale[id].price, all_houses_in_sale[id].time);
    }
    // <<--- Просмотр всех предложений о продаже

    // --->> Все мои объекты недвижимости
    // количество моих домов
    function get_count_of_my_houses() public constant returns (uint) {
        return my_houses[msg.sender].length;
    }
    
    // информация о моем доме по его ид в списке моих домов
    function get_my_house_info(uint id) public constant returns (address, bool, uint, bool, uint) {
        HouseInfo memory t = all_houses[my_houses[msg.sender][id]];
        return (t.owner, t.inPledge, t.area, t.isResidetial, t.date);
    }
    // <<--- Все мои объекты недвижимости

    // --->> Всех мои предложения о продаже
    // количество моих продающихся домов
    function get_count_of_my_saling_houses() public constant returns(uint) {
        return my_houses_in_sale[msg.sender].length;
    }

    // информация о моем продающемся доме по его ид из списка моих продающихся домов
    function get_my_saling_house_info(uint id) public constant returns (address, bool, uint, bool, uint) {
        HouseInfo memory t = all_houses[my_houses_in_sale[msg.sender][id]];
        return (t.owner, t.inPledge, t.area, t.isResidetial, t.date);
    }
    // << --- Всех мои предложения о продаже


    mapping(address => uint[]) my_houses_in_offer_to_pledge;        // address => предложения о залоге от address
    SaleInfo[] all_houses_in_offer_to_pledge;                       // Все предложения о залоге

    // Создание предложения о залоге(собственник)
    function create_offer_for_pledge(uint id, uint price, uint time) public {
        uint gID = my_houses[msg.sender][id];
        SaleInfo memory o = SaleInfo(gID, price, time);
        all_houses_in_offer_to_pledge.push(o);
        my_houses_in_offer_to_pledge[msg.sender].push(gID);
    } 

    // --->> Всех мои предложения о залоге
    // Количество моих предложений о залоге
    function get_count_of_my_house_to_pledge() public constant returns (uint) {
        return my_houses_in_offer_to_pledge[msg.sender].length;
    }

    // Информация о доме, который я предлагаю взять в залог по его ид из списка моих предложений о залоге
    function get_my_house_to_pledge_info(uint id) public constant returns (address, uint, bool, uint) {
        HouseInfo memory h = all_houses[my_houses_in_offer_to_pledge[msg.sender][id]];
        return (h.owner, h.area, h.isResidetial, h.date);
    }
    // <<--- Всех мои предложения о залоге

    // --->> Просмотр предложений о залоге(все)
    // количество всех предложений о залоге
    function get_count_of_houses_to_pledge() public constant returns (uint) {
        return all_houses_in_offer_to_pledge.length;
    }

    // информация о предложении о залоге по его ид в списке всех предложений о залоге
    function get_house_to_pledge_info(uint id) public constant returns (address, uint, bool, uint) {
        HouseInfo memory h = all_houses[all_houses_in_offer_to_pledge[id].id];
        return (h.owner, h.area, h.isResidetial, h.date);
    }
    // <<--- Просмотр предложений о залоге(все)

}
