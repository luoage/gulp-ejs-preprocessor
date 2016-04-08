var ejs = require('ejs'),
	Transform = require('stream').Transform;

var buildEjs = function(fn){
	var transform = new Transform({objectMode:true});

	fn = (fn instanceof Function) ? fn : function(){};

	transform._transform = function(data, encoding, cb){
		var content = (data.contents || '').toString(encoding),
			obj = fn(data, encoding);

		try{
			data.contents = new Buffer(ejs.render(content, obj || {}));
		}catch(e){
			return cb(e);
		}
		cb(null, data);
	};

	return transform;
};

module.exports = buildEjs;
