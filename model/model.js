let name;
let model ={};
model.setName = function (name) {
    this.name = name;
};
model.sayName = function () {
    console.log("我的名字叫"+this.name);
};

module.exports = model;
