"use strict";
exports.__esModule = true;
var kafka = require("kafka-node");
var Consumer = kafka.Consumer, client = new kafka.KafkaClient({ kafkaHost: "35.240.214.13:29092" }), consumer = new Consumer(client, [
    { topic: 'foo', partition: 0 },
], {
    autoCommit: false
});
consumer.on('message', function (message) {
    console.log("message", message);
});
consumer.on('error', function (err) {
    console.log("error", err);
});
