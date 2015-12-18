
/** @constructor EvScrutinize
 * Client EvScrutinize module for capturing HTML DOM events
 *
 * @param {Object} options
 * @param {boolean} options.consoleLog Log captured events to the console
 * @param {Object} options.events Object containing the logs to capture. Each
 *        key should be a valid HTML DOM event.
 * @param {true|Array} options.events.* True if all events of the type specified
 *        by the key name should be captured, or an array of Objects containing
 *        event parameter/value pairs to test before capturing the
 *        event. The Objects in the array will be run through until the event
 *        matches all of the tests in one Object. If one matches, the event will
 *        be captured. If not, the event will not be captured.
 */
function EvScrutinize(options) {
	/** Used to store captured events */
	this.events = [];
	/** Used to store the additional parameters to be stored with the event */
	this.additionalParameters = {};

	if (options.events) {
		let e;
		for (e in options.events) {
			// Check to see if the DOM event is valid
			if (document['on%s']) {
				// Add the event listner
				document.addEventListener()
			}
		}
	}
}

EvScrutinize.prototype = {
	/**
	 * Set parameters to store in addition to the event itself
	 *
	 * @param {Object} parameters Object containing key/value pairs of parameters
	 *        to store
	 * @param {undefined} parameters.event Will be ignored as the event is stored
	 *        to this parameter
	 * @param {boolean} replace If true, replace the existing additional
	 *        parameters
	 */
	setLogParameters: function(parameters, replace) {
		if (replace) {
			this.additionalParameters = parameters;
		} else {
			let p;
			for (p in parameters) {
				this.additionalParameters[p] = parameters[p];
			}
		}
	},

	/**
	 * Returs an array of captured events
	 *
	 * @param {Array.Object} search An array of Objects containing event
	 *        parameter/value pairs to test on event before the event is included
	 *        in the returned Array. The Objects will be run through until the
	 *        event matches all of the tests in one Object. If one matches, the
	 *        event will be included in the returned Array. If not, the event will
	 *        not be included.
	 */
	getEvents: function(search) {

	},

	/**
	 * Sends the collected events to the server
	 */
	sendEvents: function() {

	}
};

module.export = EvScrutinize;
