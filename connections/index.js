function Person(name) {
  this.name = name;
}

Person.prototype._connections = [];

Person.prototype.addConnection = function addConnection(person) {
  this._connections.push([this, person]);
};

Person.prototype.showConnections = function showConnections() {
  const connections = this._connections;
  if (!connections[0]) return [];
  const result = [];
  connections.forEach(connection => {
    connection[0] === this && result.push(connection[1]);
    connection[1] === this && result.push(connection[0]);
  });
  return result;
};



var a = new Person('Vitaliy');
var b = new Person('Roman');
console.log(
b.showConnections(),// []
a.addConnection(b),
a.showConnections(), // [Person a]
b.showConnections()); // [Person b]
