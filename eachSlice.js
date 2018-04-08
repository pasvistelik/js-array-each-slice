Array.prototype.eachSlice = function(size) {
  var result = [];
  for (var i = 0, n = this.length; i < n; i += size) result.push(this.slice(i, i + size));
  return result;
}

Array.prototype.forEachSlice = function(size, callback, thisArg) {
  return this.eachSlice(size).forEach(callback, thisArg);
}
