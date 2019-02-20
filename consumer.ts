import * as kafka from 'kafka-node'
const
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient({ kafkaHost: "35.240.214.13:29092" }),
    consumer = new Consumer(
        client,
        [
            { topic: 'foo', partition: 0 },
        ],
        {
            autoCommit: false
        }
    );


consumer.on('message', function (message) {
    console.log("message", message);
});

consumer.on('error', err => {
    console.log("error", err);
})