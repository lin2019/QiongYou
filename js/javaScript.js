var oitems = document.getElementsByClassName('items');
var ocontrol = document.getElementsByClassName('travel_control')[0];
var olinks = ocontrol.getElementsByTagName('a');

for(var i = 0;i < olinks.length;i++){
    olinks[i].index = i;
    olinks[i].onmouseenter = function () {
        for(var j = 0;j < olinks.length;j++){
            olinks[j].className = '';
            oitems[j].className = 'items';
        }
        this.className = 'current';
        oitems[this.index].className = 'items items_active'
    }
}