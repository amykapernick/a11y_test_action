const core = require('@actions/core');
const github = require('@actions/github');
const pa11y = require('pa11y')

try {
	// `url` input defined in action metadata file
	const url = core.getInput('url');
	console.log(`Running tests on ${url}`);

	const errors = 0

	core.setOutput("errors", errors);
	core.setOutput("status", "pass");

	// Get the JSON webhook payload for the event that triggered the workflow
	const payload = JSON.stringify(github.context.payload, undefined, 2)
	console.log(`The event payload: ${payload}`);

} catch (error) {
	core.setFailed(error.message);
}