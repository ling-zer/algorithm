// 图
function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');

a.neighbor.push(b);
a.neighbor.push(c);
a.neighbor.push(f);

b.neighbor.push(a);
b.neighbor.push(d);

c.neighbor.push(a);

d.neighbor.push(b);
e.neighbor.push(b);
