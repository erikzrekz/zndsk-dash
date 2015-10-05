## How to run

1. `npm install`

2. `bower install`

3. `npm start`

4. Visit `localhost:3333/dash`

## API Requirements

- [Zendesk Voice API](https://developer.zendesk.com/rest_api/docs/voice-api/voice#voice-historical-queue-activity-json-format)

## Configuration Options

- In config.js, if you have `mktg: true`, dummy data will be displayed instead of attempting to make requests to Zendesk.

- In config.js, you can populate the agentsExcludeList array with agents you would not like to display on dashboard.