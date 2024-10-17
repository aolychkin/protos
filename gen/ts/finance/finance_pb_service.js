// package: finance
// file: finance.proto

var finance_pb = require("./finance_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var FundConfig = (function () {
  function FundConfig() {}
  FundConfig.serviceName = "finance.FundConfig";
  return FundConfig;
}());

FundConfig.CreateFund = {
  methodName: "CreateFund",
  service: FundConfig,
  requestStream: false,
  responseStream: false,
  requestType: finance_pb.CreateFundRequest,
  responseType: finance_pb.CreateFundResponse
};

FundConfig.AddChild = {
  methodName: "AddChild",
  service: FundConfig,
  requestStream: false,
  responseStream: false,
  requestType: finance_pb.AddChildRequest,
  responseType: finance_pb.AddChildResponse
};

FundConfig.AddGoal = {
  methodName: "AddGoal",
  service: FundConfig,
  requestStream: false,
  responseStream: false,
  requestType: finance_pb.AddGoalRequest,
  responseType: finance_pb.AddGoalResponse
};

FundConfig.GetFund = {
  methodName: "GetFund",
  service: FundConfig,
  requestStream: false,
  responseStream: false,
  requestType: finance_pb.GetFundRequest,
  responseType: finance_pb.GetFundResponse
};

FundConfig.GetFundTree = {
  methodName: "GetFundTree",
  service: FundConfig,
  requestStream: false,
  responseStream: false,
  requestType: finance_pb.GetFundTreeRequest,
  responseType: finance_pb.GetFundTreeResponse
};

exports.FundConfig = FundConfig;

function FundConfigClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FundConfigClient.prototype.createFund = function createFund(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FundConfig.CreateFund, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

FundConfigClient.prototype.addChild = function addChild(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FundConfig.AddChild, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

FundConfigClient.prototype.addGoal = function addGoal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FundConfig.AddGoal, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

FundConfigClient.prototype.getFund = function getFund(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FundConfig.GetFund, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

FundConfigClient.prototype.getFundTree = function getFundTree(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FundConfig.GetFundTree, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.FundConfigClient = FundConfigClient;

