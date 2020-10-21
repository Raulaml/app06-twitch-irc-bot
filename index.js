import tmi from 'tmi.js';

const options = {
    identity: {
        username: 'Raulamll',
        password: 'oauth:3pfq54zknp7aznq2w72mojju6rws34'
    },
    channels: [
        'Raulamll'
    ]
};

const client = new tmi.client(options);



client.on('connected', (adress, port)=>{
    client.say(options.channels[0], 'Que rollo');
    console.log(`Bot listening at: ${adress}:${port}`);
});

client.on('message', (target, ctx, msg, self) =>{
    if(msg === 'ping'){
        client.say(target, 'pong');
    }
});

client.connect();