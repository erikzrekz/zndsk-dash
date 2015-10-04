var agents_available = [{
    name: 'April',
    status: 'Available',
    status_code: 'available',
    via: 'client',
    forwarding_number: null,
    available_time: 3780,
    calls_accepted: 14,
    calls_denied: 0,
    calls_missed: 0,
    average_talk_time: 0
}, {
    name: 'Jay',
    status: 'Wrap Up',
    status_code: 'wrap_up',
    via: 'client',
    forwarding_number: null,
    available_time: 500,
    calls_accepted: 0,
    calls_denied: 4,
    calls_missed: 1,
    average_talk_time: 0
}, {
    name: 'Jone',
    status: 'On Call',
    status_code: 'on_call',
    via: 'client',
    forwarding_number: null,
    available_time: 454,
    calls_accepted: 2,
    calls_denied: 0,
    calls_missed: 1,
    average_talk_time: 0
}, {
    name: 'Gerard',
    status: 'On Call',
    status_code: 'on_call',
    via: 'client',
    forwarding_number: null,
    available_time: 1290,
    calls_accepted: 5,
    calls_denied: 0,
    calls_missed: 0,
    average_talk_time: 0
}, {
    name: 'Ezra',
    status: 'Available',
    status_code: 'available',
    via: 'client',
    forwarding_number: null,
    available_time: 879,
    calls_accepted: 10,
    calls_denied: 0,
    calls_missed: 1,
    average_talk_time: 0
}, {
    name: 'Bill',
    status: 'Not Available',
    status_code: 'not_available',
    via: 'client',
    forwarding_number: null,
    available_time: 869,
    calls_accepted: 0,
    calls_denied: 3,
    calls_missed: 1,
    average_talk_time: 0
}, {
    name: 'Stacy',
    status: 'On Call',
    status_code: 'on_call',
    via: 'client',
    forwarding_number: null,
    available_time: 1302,
    calls_accepted: 2,
    calls_denied: 0,
    calls_missed: 0,
    average_talk_time: 0
}, {
    name: 'Margot',
    status: 'On Call',
    status_code: 'on_call',
    via: 'client',
    forwarding_number: null,
    available_time: 1309,
    calls_accepted: 12,
    calls_denied: 0,
    calls_missed: 0,
    average_talk_time: 0
}, {
    name: 'Douglas',
    status: 'Available',
    status_code: 'available',
    via: 'client',
    forwarding_number: null,
    available_time: 483,
    calls_accepted: 9,
    calls_denied: 0,
    calls_missed: 1,
    average_talk_time: 0
}, {
    name: 'Manuella',
    status: 'Wrap Up',
    status_code: 'wrap_up',
    via: 'client',
    forwarding_number: null,
    available_time: 912,
    calls_accepted: 0,
    calls_denied: 3,
    calls_missed: 1,
    average_talk_time: 0
}, {
    name: 'Brock',
    status: 'On Call',
    status_code: 'on_call',
    via: 'client',
    forwarding_number: null,
    available_time: 2710,
    calls_accepted: 2,
    calls_denied: 0,
    calls_missed: 0,
    average_talk_time: 0
}, {
    name: 'Erik',
    status: 'On Call',
    status_code: 'on_call',
    via: 'client',
    forwarding_number: null,
    available_time: 999,
    calls_accepted: 5,
    calls_denied: 0,
    calls_missed: 0,
    average_talk_time: 0
}];

var current_queue_activity = {
    calls_waiting: 2,
    average_wait_time: 21,
    longest_wait_time: 84
};

var historical_queue_activity = {
    total_calls: 50,
    most_calls_waiting: 2,
    average_wait_time: 5,
    longest_wait_time: 10,
    average_talk_time: 120,
    last_updated_at: '2014-07-20T22:55:29Z'
}

module.exports = {
    agents_available: agents_available,
    current_queue_activity: current_queue_activity,
    historical_queue_activity: historical_queue_activity
}