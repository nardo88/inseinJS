if (typeof window !== 'undefined' &&  window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


(function() {
    'use strict';
  
    if (self.fetch) {
      return
    }
  
    function normalizeName(name) {
      if (typeof name !== 'string') {
        name = name.toString();
      }
      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name')
      }
      return name.toLowerCase()
    }
  
    function normalizeValue(value) {
      if (typeof value !== 'string') {
        value = value.toString();
      }
      return value
    }
  
    function Headers(headers) {
      this.map = {}
  
      var self = this
      if (headers instanceof Headers) {
        headers.forEach(function(name, values) {
          values.forEach(function(value) {
            self.append(name, value)
          })
        })
  
      } else if (headers) {
        Object.getOwnPropertyNames(headers).forEach(function(name) {
          self.append(name, headers[name])
        })
      }
    }
  
    Headers.prototype.append = function(name, value) {
      name = normalizeName(name)
      value = normalizeValue(value)
      var list = this.map[name]
      if (!list) {
        list = []
        this.map[name] = list
      }
      list.push(value)
    }
  
    Headers.prototype['delete'] = function(name) {
      delete this.map[normalizeName(name)]
    }
  
    Headers.prototype.get = function(name) {
      var values = this.map[normalizeName(name)]
      return values ? values[0] : null
    }
  
    Headers.prototype.getAll = function(name) {
      return this.map[normalizeName(name)] || []
    }
  
    Headers.prototype.has = function(name) {
      return this.map.hasOwnProperty(normalizeName(name))
    }
  
    Headers.prototype.set = function(name, value) {
      this.map[normalizeName(name)] = [normalizeValue(value)]
    }
  
    // Instead of iterable for now.
    Headers.prototype.forEach = function(callback) {
      var self = this
      Object.getOwnPropertyNames(this.map).forEach(function(name) {
        callback(name, self.map[name])
      })
    }
  
    function consumed(body) {
      if (body.bodyUsed) {
        return fetch.Promise.reject(new TypeError('Already read'))
      }
      body.bodyUsed = true
    }
  
    function fileReaderReady(reader) {
      return new fetch.Promise(function(resolve, reject) {
        reader.onload = function() {
          resolve(reader.result)
        }
        reader.onerror = function() {
          reject(reader.error)
        }
      })
    }
  
    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader()
      reader.readAsArrayBuffer(blob)
      return fileReaderReady(reader)
    }
  
    function readBlobAsText(blob) {
      var reader = new FileReader()
      reader.readAsText(blob)
      return fileReaderReady(reader)
    }
  
    var support = {
      blob: 'FileReader' in self && 'Blob' in self && (function() {
        try {
          new Blob();
          return true
        } catch(e) {
          return false
        }
      })(),
      formData: 'FormData' in self
    }
  
    function Body() {
      this.bodyUsed = false
  
  
      this._initBody = function(body) {
        this._bodyInit = body
        if (typeof body === 'string') {
          this._bodyText = body
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
          this._bodyBlob = body
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
          this._bodyFormData = body
        } else if (!body) {
          this._bodyText = ''
        } else {
          throw new Error('unsupported BodyInit type')
        }
      }
  
      if (support.blob) {
        this.blob = function() {
          var rejected = consumed(this)
          if (rejected) {
            return rejected
          }
  
          if (this._bodyBlob) {
            return fetch.Promise.resolve(this._bodyBlob)
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as blob')
          } else {
            return fetch.Promise.resolve(new Blob([this._bodyText]))
          }
        }
  
        this.arrayBuffer = function() {
          return this.blob().then(readBlobAsArrayBuffer)
        }
  
        this.text = function() {
          var rejected = consumed(this)
          if (rejected) {
            return rejected
          }
  
          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob)
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as text')
          } else {
            return fetch.Promise.resolve(this._bodyText)
          }
        }
      } else {
        this.text = function() {
          var rejected = consumed(this)
          return rejected ? rejected : fetch.Promise.resolve(this._bodyText)
        }
      }
  
      if (support.formData) {
        this.formData = function() {
          return this.text().then(decode)
        }
      }
  
      this.json = function() {
        return this.text().then(function (text) {
            return JSON.parse(text);
        });
      }
  
      return this
    }
  
    // HTTP methods whose capitalization should be normalized
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
  
    function normalizeMethod(method) {
      var upcased = method.toUpperCase()
      return (methods.indexOf(upcased) > -1) ? upcased : method
    }
  
    function Request(url, options) {
      options = options || {}
      this.url = url
  
      this.credentials = options.credentials || 'omit'
      this.headers = new Headers(options.headers)
      this.method = normalizeMethod(options.method || 'GET')
      this.mode = options.mode || null
      this.referrer = null
  
      if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
        throw new TypeError('Body not allowed for GET or HEAD requests')
      }
      this._initBody(options.body)
    }
  
    function decode(body) {
      var form = new FormData()
      body.trim().split('&').forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=')
          var name = split.shift().replace(/\+/g, ' ')
          var value = split.join('=').replace(/\+/g, ' ')
          form.append(decodeURIComponent(name), decodeURIComponent(value))
        }
      })
      return form
    }
  
    function headers(xhr) {
      var head = new Headers()
      var pairs = xhr.getAllResponseHeaders().trim().split('\n')
      pairs.forEach(function(header) {
        var split = header.trim().split(':')
        var key = split.shift().trim()
        var value = split.join(':').trim()
        head.append(key, value)
      })
      return head
    }
  
    var noXhrPatch =
      typeof window !== 'undefined' && !!window.ActiveXObject &&
        !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);
  
    function getXhr() {
      // from backbone.js 1.1.2
      // https://github.com/jashkenas/backbone/blob/1.1.2/backbone.js#L1181
      if (noXhrPatch && !(/^(get|post|head|put|delete|options)$/i.test(this.method))) {
        this.usingActiveXhr = true;
        return new ActiveXObject("Microsoft.XMLHTTP");
      }
      return new XMLHttpRequest();
    }
  
    Body.call(Request.prototype)
  
    function Response(bodyInit, options) {
      if (!options) {
        options = {}
      }
  
      this._initBody(bodyInit)
      this.type = 'default'
      this.url = null
      this.status = options.status
      this.ok = this.status >= 200 && this.status < 300
      this.statusText = options.statusText
      this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
      this.url = options.url || ''
    }
  
    Body.call(Response.prototype)
  
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  
    self.fetch = function(input, init) {
      // TODO: Request constructor should accept input, init
      var request
      if (Request.prototype.isPrototypeOf(input) && !init) {
        request = input
      } else {
        request = new Request(input, init)
      }
  
      return new fetch.Promise(function(resolve, reject) {
        var xhr = getXhr();
        if (request.credentials === 'cors') {
          xhr.withCredentials = true;
        }
  
        function responseURL() {
          if ('responseURL' in xhr) {
            return xhr.responseURL
          }
  
          // Avoid security warnings on getResponseHeader when not allowed by CORS
          if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
            return xhr.getResponseHeader('X-Request-URL')
          }
  
          return;
        }
  
        function onload() {
          if (xhr.readyState !== 4) {
            return
          }
          var status = (xhr.status === 1223) ? 204 : xhr.status
          if (status < 100 || status > 599) {
            reject(new TypeError('Network request failed'))
            return
          }
          var options = {
            status: status,
            statusText: xhr.statusText,
            headers: headers(xhr),
            url: responseURL()
          }
          var body = 'response' in xhr ? xhr.response : xhr.responseText;
          resolve(new Response(body, options))
        }
        xhr.onreadystatechange = onload;
        if (!self.usingActiveXhr) {
          xhr.onload = onload;
          xhr.onerror = function() {
            reject(new TypeError('Network request failed'))
          }
        }
  
        xhr.open(request.method, request.url, true)
  
        if ('responseType' in xhr && support.blob) {
          xhr.responseType = 'blob'
        }
  
        request.headers.forEach(function(name, values) {
          values.forEach(function(value) {
            xhr.setRequestHeader(name, value)
          })
        })
  
        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
      })
    }
    fetch.Promise = self.Promise; // you could change it to your favorite alternative
    self.fetch.polyfill = true
  })();


  (function(e){
    e.closest = e.closest || function(css){
      var node = this;
    
      while (node) {
         if (node.matches(css)) return node;
         else node = node.parentElement;
      }
      return null;
    }
   })(Element.prototype);


   (function(e) {
    var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
    !matches ? (e.matches = e.matchesSelector = function matches(selector) {
        var matches = document.querySelectorAll(selector);
        var th = this;
        return Array.prototype.some.call(matches, function(e) {
            return e === th;
        });
    }) : (e.matches = e.matchesSelector = matches);
})(Element.prototype);




// 1. String.prototype.trim polyfill
if (!"".trim) String.prototype.trim = function(){ return this.replace(/^[\s﻿]+|[\s﻿]+$/g, ''); };
(function(window){"use strict"; // prevent global namespace pollution
if(!window.DOMException) (DOMException = function(reason){this.message = reason}).prototype = new Error;
var wsRE = /[\11\12\14\15\40]/, wsIndex = 0, checkIfValidClassListEntry = function(O, V) {
  if (V === "") throw new DOMException(
    "Failed to execute '" + O + "' on 'DOMTokenList': The token provided must not be empty." );
  if((wsIndex=V.search(wsRE))!==-1) throw new DOMException("Failed to execute '"+O+"' on 'DOMTokenList': " +
    "The token provided ('"+V[wsIndex]+"') contains HTML space characters, which are not valid in tokens.");
}
// 2. Implement the barebones DOMTokenList livelyness polyfill
if (typeof DOMTokenList !== "function") (function(window){
    var document = window.document, Object = window.Object, hasOwnProp = Object.prototype.hasOwnProperty;
    var defineProperty = Object.defineProperty, allowTokenListConstruction = 0, skipPropChange = 0;
    function DOMTokenList(){
        if (!allowTokenListConstruction) throw TypeError("Illegal constructor"); // internally let it through
    }
    DOMTokenList.prototype.toString = DOMTokenList.prototype.toLocaleString = function(){return this.value};
    DOMTokenList.prototype.add = function(){
        a: for(var v=0, argLen=arguments.length,val="",ele=this[" uCL"],proto=ele[" uCLp"]; v!==argLen; ++v) {
            val = arguments[v] + "", checkIfValidClassListEntry("add", val);
            for (var i=0, Len=proto.length, resStr=val; i !== Len; ++i)
                if (this[i] === val) continue a; else resStr += " " + this[i];
            this[Len] = val, proto.length += 1, proto.value = resStr;
        }
        skipPropChange = 1, ele.className = proto.value, skipPropChange = 0;
    };
    DOMTokenList.prototype.remove = function(){
        for (var v=0, argLen=arguments.length,val="",ele=this[" uCL"],proto=ele[" uCLp"]; v !== argLen; ++v) {
            val = arguments[v] + "", checkIfValidClassListEntry("remove", val);
            for (var i=0, Len=proto.length, resStr="", is=0; i !== Len; ++i)
                if(is){ this[i-1]=this[i] }else{ if(this[i] !== val){ resStr+=this[i]+" "; }else{ is=1; } }
            if (!is) continue;
            delete this[Len], proto.length -= 1, proto.value = resStr;
        }
        skipPropChange = 1, ele.className = proto.value, skipPropChange = 0;
    };
    window.DOMTokenList = DOMTokenList;
    function whenPropChanges(){
        var evt = window.event, prop = evt.propertyName;
        if ( !skipPropChange && (prop==="className" || (prop==="classList" && !defineProperty)) ) {
            var target = evt.srcElement, protoObjProto = target[" uCLp"], strval = "" + target[prop];
            var tokens=strval.trim().split(wsRE), resTokenList=target[prop==="classList"?" uCL":"classList"];
            var oldLen = protoObjProto.length;
            a: for(var cI = 0, cLen = protoObjProto.length = tokens.length, sub = 0; cI !== cLen; ++cI){
                for(var innerI=0; innerI!==cI; ++innerI) if(tokens[innerI]===tokens[cI]) {sub++; continue a;}
                resTokenList[cI-sub] = tokens[cI];
            }
            for (var i=cLen-sub; i < oldLen; ++i) delete resTokenList[i]; //remove trailing indexs
            if(prop !== "classList") return;
            skipPropChange = 1, target.classList = resTokenList, target.className = strval;
            skipPropChange = 0, resTokenList.length = tokens.length - sub;
        }
    }
    function polyfillClassList(ele){
        if (!ele || !("innerHTML" in ele)) throw TypeError("Illegal invocation");
        ele.detachEvent( "onpropertychange", whenPropChanges ); // prevent duplicate handler infinite loop
        allowTokenListConstruction = 1;
        try{ function protoObj(){} protoObj.prototype = new DOMTokenList(); }
        finally { allowTokenListConstruction = 0 }
        var protoObjProto = protoObj.prototype, resTokenList = new protoObj();
        a: for(var toks=ele.className.trim().split(wsRE), cI=0, cLen=toks.length, sub=0; cI !== cLen; ++cI){
            for (var innerI=0; innerI !== cI; ++innerI) if (toks[innerI] === toks[cI]) { sub++; continue a; }
            this[cI-sub] = toks[cI];
        }
        protoObjProto.length = cLen-sub, protoObjProto.value = ele.className, protoObjProto[" uCL"] = ele;
        if (defineProperty) { defineProperty(ele, "classList", { // IE8 & IE9 allow defineProperty on the DOM
            enumerable:   1, get: function(){return resTokenList},
            configurable: 0, set: function(newVal){
                skipPropChange = 1, ele.className = protoObjProto.value = (newVal += ""), skipPropChange = 0;
                var toks = newVal.trim().split(wsRE), oldLen = protoObjProto.length;
                a: for(var cI = 0, cLen = protoObjProto.length = toks.length, sub = 0; cI !== cLen; ++cI){
                    for(var innerI=0; innerI!==cI; ++innerI) if(toks[innerI]===toks[cI]) {sub++; continue a;}
                    resTokenList[cI-sub] = toks[cI];
                }
                for (var i=cLen-sub; i < oldLen; ++i) delete resTokenList[i]; //remove trailing indexs
            }
        }); defineProperty(ele, " uCLp", { // for accessing the hidden prototype
            enumerable: 0, configurable: 0, writeable: 0, value: protoObj.prototype
        }); defineProperty(protoObjProto, " uCL", {
            enumerable: 0, configurable: 0, writeable: 0, value: ele
        }); } else { ele.classList=resTokenList, ele[" uCL"]=resTokenList, ele[" uCLp"]=protoObj.prototype; }
        ele.attachEvent( "onpropertychange", whenPropChanges );
    }
    try { // Much faster & cleaner version for IE8 & IE9:
        // Should work in IE8 because Element.prototype instanceof Node is true according to the specs
        window.Object.defineProperty(window.Element.prototype, "classList", {
            enumerable: 1,   get: function(val){
                                 if (!hasOwnProp.call(this, "classList")) polyfillClassList(this);
                                 return this.classList;
                             },
            configurable: 0, set: function(val){this.className = val}
        });
    } catch(e) { // Less performant fallback for older browsers (IE 6-8):
        window[" uCL"] = polyfillClassList;
        // the below code ensures polyfillClassList is applied to all current and future elements in the doc.
        document.documentElement.firstChild.appendChild(document.createElement('style')).styleSheet.cssText=(
            '_*{x-uCLp:expression(!this.hasOwnProperty("classList")&&window[" uCL"](this))}' + //  IE6
            '[class]{x-uCLp/**/:expression(!this.hasOwnProperty("classList")&&window[" uCL"](this))}' //IE7-8
        );
    }
})(window);
// 3. Patch in unsupported methods in DOMTokenList
(function(DOMTokenListProto, testClass){
    if (!DOMTokenListProto.item) DOMTokenListProto.item = function(i){
        function NullCheck(n) {return n===void 0 ? null : n} return NullCheck(this[i]);
    };
    if (!DOMTokenListProto.toggle || testClass.toggle("a",0)!==false) DOMTokenListProto.toggle=function(val){
        if (arguments.length > 1) return (this[arguments[1] ? "add" : "remove"](val), !!arguments[1]);
        var oldValue = this.value;
        return (this.remove(oldValue), oldValue === this.value && (this.add(val), true) /*|| false*/);
    };
    if (!DOMTokenListProto.replace || typeof testClass.replace("a", "b") !== "boolean")
        DOMTokenListProto.replace = function(oldToken, newToken){
            checkIfValidClassListEntry("replace", oldToken), checkIfValidClassListEntry("replace", newToken);
            var oldValue = this.value;
            return (this.remove(oldToken), this.value !== oldValue && (this.add(newToken), true));
        };
    if (!DOMTokenListProto.contains) DOMTokenListProto.contains = function(value){
        for (var i=0,Len=this.length; i !== Len; ++i) if (this[i] === value) return true;
        return false;
    };
    if (!DOMTokenListProto.forEach) DOMTokenListProto.forEach = function(f){
        if (arguments.length === 1) for (var i = 0, Len = this.length; i !== Len; ++i) f( this[i], i, this);
        else for (var i=0,Len=this.length,tArg=arguments[1]; i !== Len; ++i) f.call(tArg, this[i], i, this);
    };
    if (!DOMTokenListProto.entries) DOMTokenListProto.entries = function(){
        var nextIndex = 0, that = this;
        return {next: function() {
            return nextIndex<that.length ? {value: [nextIndex, that[nextIndex]], done: false} : {done: true};
        }};
    };
    if (!DOMTokenListProto.values) DOMTokenListProto.values = function(){
        var nextIndex = 0, that = this;
        return {next: function() {
            return nextIndex<that.length ? {value: that[nextIndex], done: false} : {done: true};
        }};
    };
    if (!DOMTokenListProto.keys) DOMTokenListProto.keys = function(){
        var nextIndex = 0, that = this;
        return {next: function() {
            return nextIndex<that.length ? {value: nextIndex, done: false} : {done: true};
        }};
    };
})(window.DOMTokenList.prototype, window.document.createElement("div").classList);
})(window);