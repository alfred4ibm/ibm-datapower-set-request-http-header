/* Written by Elad Ben-Matityahu */
if (session.parameters.HeaderName) {
	var hm = require('header-metadata');
	hm.current.set(session.parameters.HeaderName,session.parameters.HeaderValue);
}
