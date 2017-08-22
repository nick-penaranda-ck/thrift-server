//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var shared_ttypes = require('./shared_types');


var ttypes = module.exports = {};
ttypes.Operation = {
  'ADD' : 1,
  'SUBTRACT' : 2,
  'MULTIPLY' : 3,
  'DIVIDE' : 4,
  'DOT.SEP' : 5
};
ttypes.Operation2 = {
  'ADD' : 0,
  'SUBTRACT' : 1,
  'MULTIPLY' : 2,
  'DIVIDE' : 3
};
var ComparableUnion = module.exports.ComparableUnion = function(args) {
  this.string_field = 'test';
  this.binary_field = null;
  if (args) {
    if (args.string_field !== undefined && args.string_field !== null) {
      this.string_field = args.string_field;
    }
    if (args.binary_field !== undefined && args.binary_field !== null) {
      this.binary_field = args.binary_field;
    }
  }
};
ComparableUnion.prototype = {};
ComparableUnion.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.string_field = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.binary_field = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ComparableUnion.prototype.write = function(output) {
  output.writeStructBegin('ComparableUnion');
  if (this.string_field !== null && this.string_field !== undefined) {
    output.writeFieldBegin('string_field', Thrift.Type.STRING, 1);
    output.writeString(this.string_field);
    output.writeFieldEnd();
  }
  if (this.binary_field !== null && this.binary_field !== undefined) {
    output.writeFieldBegin('binary_field', Thrift.Type.STRING, 2);
    output.writeString(this.binary_field);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Basic = module.exports.Basic = function(args) {
  this.name = null;
  if (args) {
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
  }
};
Basic.prototype = {};
Basic.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Basic.prototype.write = function(output) {
  output.writeStructBegin('Basic');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Embed = module.exports.Embed = function(args) {
  this.op = null;
  if (args) {
    if (args.op !== undefined && args.op !== null) {
      this.op = args.op;
    }
  }
};
Embed.prototype = {};
Embed.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.op = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Embed.prototype.write = function(output) {
  output.writeStructBegin('Embed');
  if (this.op !== null && this.op !== undefined) {
    output.writeFieldBegin('op', Thrift.Type.I32, 1);
    output.writeI32(this.op);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Work = module.exports.Work = function(args) {
  this.num1 = 0;
  this.num2 = null;
  this.op = null;
  this.comment = null;
  this.alright = null;
  this.bin = null;
  this.doub = null;
  this.sixfour = null;
  this.byt = null;
  this.bed = null;
  this.bed2 = null;
  if (args) {
    if (args.num1 !== undefined && args.num1 !== null) {
      this.num1 = args.num1;
    }
    if (args.num2 !== undefined && args.num2 !== null) {
      this.num2 = args.num2;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field num2 is unset!');
    }
    if (args.op !== undefined && args.op !== null) {
      this.op = args.op;
    }
    if (args.comment !== undefined && args.comment !== null) {
      this.comment = args.comment;
    }
    if (args.alright !== undefined && args.alright !== null) {
      this.alright = args.alright;
    }
    if (args.bin !== undefined && args.bin !== null) {
      this.bin = args.bin;
    }
    if (args.doub !== undefined && args.doub !== null) {
      this.doub = args.doub;
    }
    if (args.sixfour !== undefined && args.sixfour !== null) {
      this.sixfour = args.sixfour;
    }
    if (args.byt !== undefined && args.byt !== null) {
      this.byt = args.byt;
    }
    if (args.bed !== undefined && args.bed !== null) {
      this.bed = new ttypes.Embed(args.bed);
    }
    if (args.bed2 !== undefined && args.bed2 !== null) {
      this.bed2 = args.bed2;
    }
  }
};
Work.prototype = {};
Work.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.num1 = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.num2 = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.op = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.comment = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.alright = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.bin = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.DOUBLE) {
        this.doub = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I64) {
        this.sixfour = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.BYTE) {
        this.byt = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRUCT) {
        this.bed = new ttypes.Embed();
        this.bed.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I32) {
        this.bed2 = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Work.prototype.write = function(output) {
  output.writeStructBegin('Work');
  if (this.num1 !== null && this.num1 !== undefined) {
    output.writeFieldBegin('num1', Thrift.Type.I32, 1);
    output.writeI32(this.num1);
    output.writeFieldEnd();
  }
  if (this.num2 !== null && this.num2 !== undefined) {
    output.writeFieldBegin('num2', Thrift.Type.I32, 2);
    output.writeI32(this.num2);
    output.writeFieldEnd();
  }
  if (this.op !== null && this.op !== undefined) {
    output.writeFieldBegin('op', Thrift.Type.I32, 3);
    output.writeI32(this.op);
    output.writeFieldEnd();
  }
  if (this.comment !== null && this.comment !== undefined) {
    output.writeFieldBegin('comment', Thrift.Type.STRING, 4);
    output.writeString(this.comment);
    output.writeFieldEnd();
  }
  if (this.alright !== null && this.alright !== undefined) {
    output.writeFieldBegin('alright', Thrift.Type.I32, 5);
    output.writeI32(this.alright);
    output.writeFieldEnd();
  }
  if (this.bin !== null && this.bin !== undefined) {
    output.writeFieldBegin('bin', Thrift.Type.STRING, 6);
    output.writeBinary(this.bin);
    output.writeFieldEnd();
  }
  if (this.doub !== null && this.doub !== undefined) {
    output.writeFieldBegin('doub', Thrift.Type.DOUBLE, 7);
    output.writeDouble(this.doub);
    output.writeFieldEnd();
  }
  if (this.sixfour !== null && this.sixfour !== undefined) {
    output.writeFieldBegin('sixfour', Thrift.Type.I64, 8);
    output.writeI64(this.sixfour);
    output.writeFieldEnd();
  }
  if (this.byt !== null && this.byt !== undefined) {
    output.writeFieldBegin('byt', Thrift.Type.BYTE, 9);
    output.writeByte(this.byt);
    output.writeFieldEnd();
  }
  if (this.bed !== null && this.bed !== undefined) {
    output.writeFieldBegin('bed', Thrift.Type.STRUCT, 10);
    this.bed.write(output);
    output.writeFieldEnd();
  }
  if (this.bed2 !== null && this.bed2 !== undefined) {
    output.writeFieldBegin('bed2', Thrift.Type.I32, 11);
    output.writeI32(this.bed2);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var InvalidOperation = module.exports.InvalidOperation = function(args) {
  Thrift.TException.call(this, "InvalidOperation");
  this.name = "InvalidOperation";
  this.whatOp = null;
  this.why = null;
  if (args) {
    if (args.whatOp !== undefined && args.whatOp !== null) {
      this.whatOp = args.whatOp;
    }
    if (args.why !== undefined && args.why !== null) {
      this.why = args.why;
    }
  }
};
Thrift.inherits(InvalidOperation, Thrift.TException);
InvalidOperation.prototype.name = 'InvalidOperation';
InvalidOperation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.whatOp = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.why = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

InvalidOperation.prototype.write = function(output) {
  output.writeStructBegin('InvalidOperation');
  if (this.whatOp !== null && this.whatOp !== undefined) {
    output.writeFieldBegin('whatOp', Thrift.Type.I32, 1);
    output.writeI32(this.whatOp);
    output.writeFieldEnd();
  }
  if (this.why !== null && this.why !== undefined) {
    output.writeFieldBegin('why', Thrift.Type.STRING, 2);
    output.writeString(this.why);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ttypes.INT32CONSTANT = 9853;
ttypes.MAPCONSTANT = {
  'hello' : 'world',
  'goodnight' : 'moon'
};
ttypes.SETCONSTANT = ['hello','world'];
ttypes.SETCONSTANT2 = {
  true : {
    'hello' : ['hello','world']
},
  false : {
    'goodnight' : ['moon']
}
};
ttypes.MY_STRUCT = new ttypes.Basic({
'name' : 'blaine'});
