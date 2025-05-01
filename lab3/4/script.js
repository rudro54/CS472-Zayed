"use strict";

import{
    get_items,
    add_item,
    update_item_title_by_id,
    delete_item_by_id,
    get_item_title_by_id
}from "./data.js";

add_item({id:1, title:"first_item"});
add_item({id:2, title:"second_item"});

console.log(get_items());

update_item_title_by_id(1,"updated_first_item");
console.log(get_items());

delete_item_by_id(2);
console.log(get_items());

add_item({id:2, title:"second_item"});

let result =get_item_title_by_id(2);
console.log(result);