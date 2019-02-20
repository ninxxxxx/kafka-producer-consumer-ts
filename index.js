"use strict";
exports.__esModule = true;
var kafka = require("kafka-node");
var client = new kafka.KafkaClient({ kafkaHost: "kafka0.nize.ai:29092" });
var Producer = kafka.Producer, KeyedMessage = kafka.KeyedMessage, 
// client = new kafka.KafkaClient(),
producer = new Producer(client), km = new KeyedMessage('key', 'message'), payloads = [
    // { topic: 'AAA', messages: 'hi', partition: 0 },
    { topic: 'foo', messages: ['DIGIMON', 'world', { a: 35, g: 2 }], partition: 0 }
];
producer.on('ready', function () {
    console.log("producer is ready!");
    producer.send(payloads, function (err, data) {
        console.log("err", err);
        console.log("data", data);
    });
});
producer.on('error', function (err) {
    console.log("error", err);
});
